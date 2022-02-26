const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');

router.get('/', async(req, res) => {
    const data = (await axios({
        url: `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=${process.env.YOUTUBE_KEY}&maxResults=8`,
        method: 'GET',
    })).data;
    res.render('pages/index', {
        data: data
    });
})

module.exports = router;