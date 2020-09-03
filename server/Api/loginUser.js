const express = require('express');
const router = express.Router();
const login = require('../Model/login');
let jwt = require('jsonwebtoken');
var checkToken = require('./checkToken');
var auth = checkToken.checkToken;
router.post('/', (req, res) => {
    const { user, pass } = req.body;
    // try {
    login.find({ $and: [{ userName: user }, { passWord: pass }] }).then((data) => {
        if (data.length == 0) {
            return res.send({ success: false });
        }
        const payload = {
            user: user
        }
        const token = jwt.sign(payload, 'SECRET');
        console.log(token);
        res.status(200).json({ success: true, token, user: user })

    }).catch((err) => res.status(200).send({ success: false, message: err }));
    // const {user} = req.body;
    // const {pass}= req.body;
    // if (user !== "congg" || pass !== "cong") {
    //     return res.send({success:false})
    // }
    // const payload = {
    //     user: user
    // }
    // const token = jwt.sign(payload, 'SECRET');
    // console.log(token);
    // res.status(200).json({ success: true, token, user: user })
    // } catch (err) {
    //     // throw err
    //     res.status(200).send({ success: false, message: err });
    // }
})
router.post('/regis', (req, res) => {
    let { user, pass } = req.body;
    let dataRegis = new login({
        userName: user,
        passWord: pass
    })
    dataRegis.save().then((result) => {
        res.send({ message: true, result });
    }).catch((err) => res.send({ message: false, err }));
})
router.post('/checkAcount', (req, res) => {
    let { user, pass } = req.body;
    login.findOne({ $and: [{ userName: user }, { passWord: pass }] }).then((result) => {
        if (result) {
            res.send({ message: true });
        } else {
            res.send({ message: false });
        }
    }).catch((err) => {
        res.send(err);
    });
})
router.post('/checkAcountUser', (req, res) => {
    let { username } = req.body;
    login.findOne({ userName: username }).then((result) => {
        if (result) {
            res.send({ message: true });
        } else {
            res.send({ message: false });
        }
    }).catch((err) => {
        res.send(err);
    });
})
router.put('/updatePass', auth, (req, res) => {
    console.log(req.body);
    let { user, passmoi } = req.body;
    login.updateOne({ userName: user }, { passWord: passmoi }).then((result) => {
        if (result) {
            res.send({ message: true });
        } else {
            res.send({ message: false })
        }
    }).catch((err) => {
        res.send(err)
    });
})
module.exports = router;