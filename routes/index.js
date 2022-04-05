var express = require('express');
var router = express.Router();
var multer = require('multer');
const {render} = require("ejs");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploadfile')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-'+ file.originalname)
    }
})
var maxsize= 1024 * 1024 * 5;
var uploads = multer({storage:storage,
    fileFilter: (req, file, cb) => {
        if ( file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" ||file.mimetype == "video/mp4" || file.mimetype == "file/zip" || file.mimetype == "filer/ar") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only upload ".jpg" ' ));
        }
    limits:{
        fileSize: maxsize
    }

},})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', );
});
router.get('/index', function(req, res, next) {
  res.render('index', );
});
router.post("/index",uploads.array("Myfile",3),(req, res,error) => {
console.log(req.file);
    res.end( 'finished!!!!')
})
module.exports = router;
