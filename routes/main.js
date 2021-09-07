const express = require('express');
const router = express.Router();

const main = require('../controllers/main');

router.route('/').get((req, res, next) => {
    res.redirect('/home');
});
router.route('/home').get(main.home);
router.route('/search').get(main.index);
router.route('/new').post(main.createWallpaper);
router
    .route('/:id')
    .get(main.showWallpaper)
    .put(main.updateWallpaper)
    .delete(main.destroyWallpaper);

module.exports = router;
