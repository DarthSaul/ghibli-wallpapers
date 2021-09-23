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
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1630613137/Ghibli-Wallpapers/spirited-away-01_xxrzkb.jpg',
        movie: 'Spirited Away',
        desc: 'Some descriptive text goes here...',
        tags: ['train', 'no-face', 'water', 'blue', 'haku', 'dragon', 'chihiro']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1631077130/Ghibli-Wallpapers/spirited-away-06_pawv9p.png',
        movie: 'Spirited Away',
        desc: 'Some descriptive text goes here...',
        tags: ['chihiro', 'train', 'bath house', 'dark']
    },
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
        tags: ['rain', 'totoro', 'friends', 'Satsuki']
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
        tags: ['landscape', `howl's castle`, 'the waste']
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
        tags: ['scarecrow', 'green', 'landscape', 'the waste', 'illustration']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632361921/Ghibli-Wallpapers/howls-moving-castle-07_rryl3b.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['howl', 'sophie', 'the waste', 'love', 'light']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632362051/Ghibli-Wallpapers/howls-moving-castle-08_sg4uvi.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['sophie', 'the waste', 'illustration', 'light']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632362243/Ghibli-Wallpapers/castle-in-the-sky-01_ibhra6.jpg',
        movie: `Castle in the Sky`,
        desc: 'Some descriptive text goes here...',
        tags: ['clouds', 'laputa', 'robot']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632362485/Ghibli-Wallpapers/my-neighbor-totoro-03_buojpd.jpg',
        movie: `My Neighbor Totoro`,
        desc: 'Some descriptive text goes here...',
        tags: ['illustration', 'totoro', 'satsuki', 'rain', 'friends']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632362502/Ghibli-Wallpapers/my-neighbor-totoro-04_g86zb2.jpg',
        movie: `My Neighbor Totoro`,
        desc: 'Some descriptive text goes here...',
        tags: ['totoro', 'minimalist', 'dark']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632363947/Ghibli-Wallpapers/spirited-away-09_lfhvrv.png',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['haku', 'minimalist', 'magic']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364088/Ghibli-Wallpapers/howls-moving-castle-09_kfcmbs.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['poster', `howl's castle`, 'red']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364106/Ghibli-Wallpapers/princess-mononoke-09_owyie9.jpg',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['san', `wolves`, 'blood']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364274/Ghibli-Wallpapers/spirited-away-10_mrkizt.jpg',
        movie: `Spirited Away`,
        desc: 'Some descriptive text goes here...',
        tags: ['chihiro', `haku`, 'friends']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364371/Ghibli-Wallpapers/castle-in-the-sky-02_shx00r.jpg',
        movie: `Castle in the Sky`,
        desc: 'Some descriptive text goes here...',
        tags: ['laputa', `ocean`, 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364547/Ghibli-Wallpapers/kikis-delivery-service-03_ndny31.jpg',
        movie: `Kiki's Delivery Service`,
        desc: 'Some descriptive text goes here...',
        tags: ['kiki', `witch`]
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364582/Ghibli-Wallpapers/howls-moving-castle-10_qzqxef.jpg',
        movie: `Howl's Moving Castle`,
        desc: 'Some descriptive text goes here...',
        tags: ['pixel', `scarecrow`, 'markl']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364725/Ghibli-Wallpapers/princess-mononoke-10_o7yd4c.jpg',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['san', `wolves`, 'illustration', 'battle']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364796/Ghibli-Wallpapers/my-neighbor-totoro-05_wuneva.jpg',
        movie: `My Neighbor Totoro`,
        desc: 'Some descriptive text goes here...',
        tags: ['pixel', 'totoro', 'satsuki', 'friends']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364815/Ghibli-Wallpapers/castle-in-the-sky-03_da1db9.jpg',
        movie: `Castle in the Sky`,
        desc: 'Some descriptive text goes here...',
        tags: ['robot', 'forest', 'calm']
    },
    {
        url: 'https://res.cloudinary.com/darthsaul/image/upload/v1632364827/Ghibli-Wallpapers/princess-mononoke-11_bvxres.jpg',
        movie: `Princess Mononoke`,
        desc: 'Some descriptive text goes here...',
        tags: ['kodama', 'forest', 'spirits']
    }
])
    .then(res => console.log(res))
    .catch(err => console.log(err));
