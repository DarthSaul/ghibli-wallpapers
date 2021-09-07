const mongoose = require('mongoose');
const { Schema } = mongoose;

const wallpaperSchema = new Schema(
    {
        url: {
            type: String,
            required: true
        },
        movie: {
            type: String,
            required: true
        },
        desc: String,
        tags: [String],
        originalSize: String
    },
    { toJSON: { virtuals: true } }
);

wallpaperSchema.virtual('large_reduced').get(function () {
    return this.url.replace('/upload', '/upload/w_1000');
});

const Wallpaper = mongoose.model('Wallpaper', wallpaperSchema);

module.exports = Wallpaper;
