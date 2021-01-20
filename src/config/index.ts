// run side effects from these files
import "./logger" // Replaces console.log

// dependencies
import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVars = {
  NODE_ENV: process.env.NODE_ENV as string,
  PORT: process.env.PORT as string,
  
  DATABASE_URL: process.env.DATABASE_URL as string,
  MONGODB_URL: process.env.MONGODB_URL as string,

  JWT_SECRET: null,
  JWT_ACCESS_EXPIRATION_MINUTES: null,
  JWT_REFRESH_EXPIRATION_DAYS: null,

  SMTP_HOST: null,
  SMTP_PORT: null,
  SMTP_USERNAME: null,
  SMTP_PASSWORD: null,
  EMAIL_FROM: null
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  database: {
    url: envVars.DATABASE_URL
  },
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: 10,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};

export default config;