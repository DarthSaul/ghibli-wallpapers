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

Wallpaper.deleteMany()
    .then(res => console.log(res))
    .catch(err => console.log(err));

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
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630617272/Ghibli-Wallpapers/princess-mononoke-05_if3okg.png',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['ashitaka', 'battle']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630613134/Ghibli-Wallpapers/princess-mononoke-01_efjzvi.png',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['forest', 'landscape', 'dark', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631076101/Ghibli-Wallpapers/howls-moving-castle-03_jdpsdf.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['landscape', 'prairie', 'bright', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631076195/Ghibli-Wallpapers/howls-moving-castle-04_rnqkzy.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['sophie', 'train']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631076793/Ghibli-Wallpapers/spirited-away-05_rzzk1y.jpg',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['chihiro', 'haku']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631076907/Ghibli-Wallpapers/princess-mononoke-07_tacqyq.jpg',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['san', 'wolves', 'battle']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631076907/Ghibli-Wallpapers/princess-mononoke-07_tacqyq.jpg',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['night', 'train', 'water', 'chihiro']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631077209/Ghibli-Wallpapers/spirited-away-07_ip2osi.png',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['train', 'water', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631077417/Ghibli-Wallpapers/howls-moving-castle-05_hetym7.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['landscape', 'castle', 'the waste']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631077544/Ghibli-Wallpapers/spirited-away-08_jsvbxk.jpg',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['haku', 'chihiro', 'moon', 'night']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631077667/Ghibli-Wallpapers/howls-moving-castle-06_vjuoym.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['scarecrow', 'green', 'landscape', 'the waste']
    }
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
