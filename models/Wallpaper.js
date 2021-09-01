const mongoose = require('mongoose');
const { Schema } = mongoose;

const wallpaperSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    tags: [String]
});

const Wallpaper = mongoose.model('Wallpaper', wallpaperSchema);

module.exports = Wallpaper;
