const express = require('express')
const path = require('path')
const multer = require('multer');
const helmet = require('helmet');
const compression = require('compression');

require('dotenv').config();

const port = process.env.PORT|| 3300;

const app = express()

const shopRouter = require('./routes/shop')
const adminRouter = require('./routes/admin')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use(bodyParser.json({extended: true}));

app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('image'));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(shopRouter)
app.use(adminRouter)

app.use(helmet());

app.use(compression());

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(80)
