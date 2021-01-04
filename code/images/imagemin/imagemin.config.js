module.exports = {
    gifsicle: {
        optimizationLevel: 3,
        interlaced: true,
        colors: 10,
    },
    mozjpeg: {
        progressive: true,
        quality: 90,
    },
    pngquant: {
        speed: 1,
        quality: 90,
    },
    svgo: {plugins: [{removeViewBox: false}, {cleanupIDs: true}]},
    webp: {quality: 90},
};
