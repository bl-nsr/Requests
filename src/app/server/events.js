const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const owner = '';

    // the routes are defined here
    router.post('/auth/register', (req, res, next) => {
        db.query(
            'INSERT INTO `user` (`FirstName`,`SurName`,`UserName`, `Password`, `Email`) VALUES (?,?,?,MD5(?),?)', [req.body.Fname, req.body.Lname, req.body.uname, req.body.password, req.body.email],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });
    router.get('/auth/login', (req, res, next) => {
        // 'SELECT * from `user` WHERE `UserName`=? AND `Password`=MD5(?);', [req.body.uname, req.body.password]
        db.query(
            'SELECT * from `user` WHERE `UserName`=? AND `Password`=MD5(?);', [req.body.uname, req.body.password],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    if (results == []) {
                        console.log("Empty Array");
                    } else {
                        res.status(200).json(results);
                    }
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;