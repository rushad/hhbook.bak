import express from 'express';

const sms = express.Router();
sms.use(express.json(), express.urlencoded());

sms.post('/', function(req, res) {
    console.log(req.headers, req.body);
    return res.set({ 'Content-Type': 'application/x-www-form-urlencoded' }).send({
        check: 'ok',
        data: [
            {
                id: 'id001',
                phone: '+79124490306',
                body: 'test',
                time_wait: 10
            }
        ]
    });
});

module.exports = sms;
