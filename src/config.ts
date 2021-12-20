const config = {
  testing: process.env.JEST_WORKER_ID !== undefined,

  server: {
    port: Number(process.env.SERVER_PORT),
    host: process.env.SERVER_HOST as string
  },

  db: {
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER as string,
    name: process.env.DB_NAME as string,
    password: process.env.DB_PASSWORD as string
  },

  redis: {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT as string),
    keyPrefix: process.env.REDIS_PREFIX as string
  }
}

export default config;