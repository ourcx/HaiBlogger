const fs = require('node:fs')

const deployRoot = '/home/admin/haiblogger'

module.exports = {
  apps: [
    {
      name: 'haiblogger',
      script: 'server/index.mjs',
      cwd: `${deployRoot}/current`,
      interpreter: `${deployRoot}/runtime/node-v24.18.0-linux-x64/bin/node`,
      env: {
        NODE_ENV: 'production',
        PORT: '3001',
        DATABASE_PATH: `${deployRoot}/shared/blog.sqlite`,
        VISITOR_SALT: fs.readFileSync(`${deployRoot}/shared/visitor_salt`, 'utf8').trim(),
      },
      max_memory_restart: '300M',
      time: true,
    },
  ],
}
