var express=require("express");
var router=express.Router();
var Templete=require('../database/dataFile')
var Worksheet=require('../database/worksheetdb')
var work=require('../controller/worksheet.js')
var templete=require('../controller/template.js')

router.get('/templete',templete.display);

router.get('/worksheet/create',work.create);
router.post('/worksheet',work.creatp);
router.get('/worksheet/display',work.display);

module.exports=router;