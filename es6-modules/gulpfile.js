const { watch } = require(`gulp`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let serve = () => {
    browserSync({
        server: `./`
    });

    watch([
        `**/*.html`,
        `**/**/*.html`,
        `**/*.js`,
        `**/**/*.js`
    ]).on(`change`, reload);
};

exports.default = serve;
