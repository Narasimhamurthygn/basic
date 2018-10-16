var express=require('express');
var router=express.Router();
var Templete=require('../database/dataFile');
var mongoose=require("mongoose")
var Worksheet=require('../database/worksheetdb')
var templete=require('../controller/template.js')
var work=require('../controller/worksheet.js')


//template realetd api's
router.get('/create',templete.Front);

router.post('/k1',templete.Fpost);

router.get('/edit/:id',templete.Edit);

router.get('/delete/:no',templete.Del);

router.post('/display1',templete.Display1);

router.post('/delete',templete.Rem);



module.exports=router;
