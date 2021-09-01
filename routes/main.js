const express = require('express');
const router = express.Router();

const main = require('../controllers/main');

router.route('/').get(main.index);
router.route('/new').post(main.createWallpaper);
router.route('/:id').get(main.showWallpaper).put(main.updateWallpaper);

module.exports = router;
