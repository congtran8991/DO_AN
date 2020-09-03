const express = require('express');
const router = express.Router();
var checkToken = require('./checkToken');
var auth = checkToken.checkToken;
const contactFeedback = require('../Model/infoContact');
router.post('/', auth, (req, res) => {
    let { nameContact, mailContact, phoneContact, titleFeedback, contentFeedback } = req.body;
    let saveContact = new contactFeedback({
        nameContact,
        mailContact,
        phoneContact,
        titleFeedback,
        contentFeedback
    });
    saveContact.save().then((result) => {
        console.log(result);
        res.send({ messageSendContact: true, result })
    }).catch(
        (err) => res.send(err)
    );
})
module.exports = router;
