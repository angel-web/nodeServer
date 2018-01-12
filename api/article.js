var express = require('express');
var router = express.Router();
let mysqlGetData = require('../utils/Mysql');

router.get('/', function (req, res) {
  mysqlGetData('select * from article', function (err, rows, fields) {
    res.json(rows);
  })
});

router.get('/recommend', function (req, res) {
  mysqlGetData('select * from article WHERE type="recommend"', function (err, rows, fields) {
    res.json(rows);
  })
});

module.exports = router;