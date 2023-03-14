
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()

const jwtSecret = process.env.JWT_SECRET
const connectionString = process.env.CONNECTION_STRING
const mailjetPublic = process.env.MAILJET_PUBLIC
const mailjetPrivate = process.env.MAILJET_PRIVATE

export {
    jwtSecret,
    connectionString,
    mailjetPublic,
    mailjetPrivate
}