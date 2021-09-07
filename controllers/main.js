const Wallpaper = require('../models/Wallpaper');
const wrapAsync = require('../utilities/wrapAsync');

module.exports.home = wrapAsync(async (req, res) => {
    const wallpapers = await Wallpaper.find();
    const wallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    res.render('home', { wallpaper });
});

module.exports.index = wrapAsync(async (req, res) => {
    const { name, movie, tag } = req.query;
    let query;
    if (name) {
        query = { name: { $regex: name, $options: 'i' } };
    } else if (movie) {
        query = {
            movie: { $regex: movie, $options: 'i' }
        };
    } else if (tag) {
        query = {
            tags: {
                $regex: tag,
                $options: 'i'
            }
        };
    }
    const wallpapers = query ? await Wallpaper.find(query) : undefined;
    res.render('search', { wallpapers });
});

module.exports.showWallpaper = wrapAsync(async (req, res) => {
    const wallpaper = await Wallpaper.findById(req.params.id);
    if (!wallpaper) {
        return res.send('Unable to find wallpaper');
    }
    res.send(wallpaper);
});

module.exports.createWallpaper = wrapAsync(async (req, res) => {
    const newWallpaper = new Wallpaper(req.body);
    const wallpaper = await newWallpaper.save();
    res.send(wallpaper);
});

module.exports.updateWallpaper = wrapAsync(async (req, res) => {
    const wallpaper = await Wallpaper.findByIdAndUpdate(
        req.params.id,
        {
            ...req.body
        },
        { new: true }
    );
    if (!wallpaper) {
        return res.send('Unable to find wallpaper for update');
    }
    res.send(wallpaper);
});

module.exports.destroyWallpaper = wrapAsync(async (req, res) => {
    const wallpaper = await Wallpaper.findByIdAndDelete(req.params.id);
    if (!wallpaper) {
        return res.send('Unable to find wallpaper for destroy');
    }
    res.send({ deleted: 'success', wallpaper });
});
