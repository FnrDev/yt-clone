const express = require('express');
const router = express.Router();
const { default: axios } = require('axios');
const { millify } = require('millify');
const humanizeDuration = require('humanize-duration');

router.get('/', async(req, res) => {
    const data = (await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=SA&key=${process.env.YOUTUBE_KEY}&maxResults=8`)).data;
    res.render('pages/index', {
        data: data,
        converter: millify,
        humanizeDuration: humanizeDuration
    });
})

module.exports = router;