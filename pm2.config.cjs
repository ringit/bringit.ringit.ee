module.exports = {
  apps: [
    {
      name: 'bringit',
      script: 'server.js',
      cwd: '/data01/virt60516/domeenid/www.ringit.ee/bringit',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
