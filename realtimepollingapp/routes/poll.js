const express = require('express');
const router = express.Router();

const mongoose=require('mongoose');

const Vote = require('../models/Vote');
const Pusher = require('pusher');


var pusher = new Pusher({
  appId: '753972',
  key: '90550226539db44442fd',
  secret: 'a6bb616bbd1320053f11',
  cluster: 'ap2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  const newVote = {
    os: req.body.os,
    points: 1
  };
  new Vote(newVote).save().then(vote =>
    {
      pusher.trigger('os-poll', 'os-vote', {
        points: parseInt(vote.points),
        os: vote.os
      });


    return res.json({ success: true, message: 'Thank you for voting' });
  });
});
module.exports = router;
