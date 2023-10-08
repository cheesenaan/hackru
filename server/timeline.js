const express = require('express');
const crypto = require('crypto');
const redis = require('redis')

const openai = require('./openai')

const router = express.Router();
const client = redis.createClient()
client.connect()

const validateUserId = async (req, res, next) => {
    const userId = req.get("User-Id");

    if (userId != null) {
        const isReal = await !isValidUserId(userId)

        if(isReal) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }
    }

    req.email = await client.hGet('user_id', userId);

    next();
};

const isValidUserId = async (userId) => {
    try {
        const email = await client.hGet('user_id', userId);

        if(email != null) {
            const userInfo = JSON.parse(await client.hGet('user_info', email))
            console.log("comparing " + userId + " and " + userInfo.currentlyUsedUserId)

            return userInfo.currentlyUsedUserId != null && userInfo.currentlyUsedUserId == userId
        }

      } catch (err) {
        console.error(err);
      }

      return false
};

// 400, general error
router.post('/submitFormData', validateUserId, async (req, res) => {
    try {
        const form = {
            education: req.body.education,
            employment: req.body.employment,
            socialLife: req.body.socialLife,
            loveLife: req.body.loveLife,
            freeLife: req.body.freeLife,
            religionAndBeliefs: req.body.religionAndBeliefs,
            wishYouNeverDid: req.body.wishYouNeverDid,
            wishYouDid: req.body.wishYouDid,
        };

        const result = await openai.createTimeline(JSON.stringify(form))

        await client.hSet('user_timeline', req.body.email, result)
        
        res.status(200).send();
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

// 400, general error
router.post('/getTimeline', validateUserId, async (req, res) => {
    try {
        res.status(200).send(await client.hGet('user_timeline', req.body.email));
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

// 401, unauthorized (not enough info to do this)
// 400, general error
router.post('/changeTimeline', validateUserId, async (req, res) => {
    try {
        const timeline = await client.hGet('user_timeline', req.body.email)
        if(timeline == null) {
            res.status(401).send();
            return
        }

        const changeInfo = {
            title: req.body.title,
            alternateChoice: req.body.alternateChoice,
        };

        const result = await openai.timeline(timeline, JSON.stringify(changeInfo))

        res.status(200).send(result.message.content);
    } catch(err) {
        console.log(err)
        res.status(400).send();
    }
});

module.exports = router;
