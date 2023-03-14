
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()

const jwtSecret = "0xiammonkeydluffyandiwillbekingofthepirates"
const connectionString = "mongodb+srv://velocityfleet:12345678Za@cluster0.hpjtbto.mongodb.net/?retryWrites=true&w=majority"
const mailjetPublic = "84bcd86b3588f75891444037a37d7f3e"
const mailjetPrivate = "44c0c7afd93c1c0c0d2e6716881ef282"

console.log("jwtSecret===>", jwtSecret)

export {
    jwtSecret,
    connectionString,
    mailjetPublic,
    mailjetPrivate
}