const express = require('express');
const router = express.Router();

const main = require('../controllers/main');

router.route('/home').get(main.home);
router.route('/all').get(main.index);
router.route('/new').post(main.createWallpaper);
router
    .route('/:id')
    .get(main.showWallpaper)
    .put(main.updateWallpaper)
    .delete(main.destroyWallpaper);

module.exports = router;
