module.exports = {
    async redirects() {
        return [
            {
                source: '/user/:slug',
                destination: '/:slug',
                permanent: true,
            },
            {
                source: '/@:slug',
                destination: '/:slug',
                permanent: true,
            },
        ]
    },
}