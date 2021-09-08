const mongoose = require('mongoose');
const Wallpaper = require('../models/Wallpaper');
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected...'))
    .catch(() => console.log('db connection err'));

Wallpaper.insertMany([
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617744/Ghibli-Wallpapers/spirited-away-04_cfeuo1.jpg',
        movie: 'Spirited Away',
        desc: 'Some descriptive text goes here...',
        tags: ['dawn', 'landscape', 'clouds', 'blue']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617717/Ghibli-Wallpapers/kikis-delivery-service-02_lrou2n.jpg',
        movie: `Kiki's Delivery Service`,
        desc: 'Some descriptive text goes here...',
        tags: ['birds', 'ocean', 'water', 'light']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617680/Ghibli-Wallpapers/princess-mononoke-06_ofokee.jpg',
        movie: 'Princess Mononoke',
        desc: 'Some descriptive text goes here...',
        tags: ['dark', 'san', 'wolves', 'battle']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617623/Ghibli-Wallpapers/spirited-away-03_ryggic.jpg',
        movie: 'Spirited Away',
        desc: 'Some descriptive text goes here...',
        tags: ['light', 'green', 'forest', 'doorway']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617591/Ghibli-Wallpapers/spirited-away-02_yltfwn.jpg',
        movie: 'Spirited Away',
        desc: 'Some descriptive text goes here...',
        tags: ['landscape', 'city', 'night', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617568/Ghibli-Wallpapers/howls-moving-castle-02_zry4cp.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['landscape', 'prairie', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617546/Ghibli-Wallpapers/howls-moving-castle-01_o301mp.png',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['pixel', 'light']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617412/Ghibli-Wallpapers/totoro-02_j1btkn.png',
        movie: `My Neighbor Totoro`,
        desc: 'Some descriptive text goes here...',
        tags: ['dark', 'cats', 'creatures']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617360/Ghibli-Wallpapers/totoro-01_fyqzbj.png',
        movie: `My Neighbor Totoro`,
        desc: 'Some descriptive text goes here...',
        tags: ['rain', 'totoro', 'friends']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617205/Ghibli-Wallpapers/princess-mononoke-04_uxepym.jpg',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['ashitaka', 'forest', 'calm']
    }
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
