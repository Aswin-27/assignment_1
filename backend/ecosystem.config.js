module.exports = {
    apps: [
        {
            name: 'edcounselor-api',
            script: 'server.js',
            cwd: __dirname,
            env: {
                PORT: 4000,
                NODE_ENV: 'production'
            }
        }
    ]
};
