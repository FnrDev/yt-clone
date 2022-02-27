const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get('/:id', async(req, res) => {
    const videoId = req.params.id;
    const data = (await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.YOUTUBE_KEY}`)).data;
    const videoData = data.items[0].snippet;
    res.render('pages/video', {
        data: videoData,
        id: videoId
    })
})

module.exports = router;