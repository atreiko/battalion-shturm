import dotenv from 'dotenv'

const environment = dotenv.config()

if (!environment) {
  throw new Error('.env can not be found.')
}

export default {
  VERSION: process.config.VERSION || 1,

  PORT: process.env.PORT || 3001,

  MONGODB_URI: process.env.MONGO_DB_URI
}