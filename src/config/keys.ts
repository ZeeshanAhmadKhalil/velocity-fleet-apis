
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()

console.log("process.env.CONNECTION_STRING===>", process.env.CONNECTION_STRING)

const jwtSecret = process.env.JWT_SECRET
const connectionString = process.env.CONNECTION_STRING

export {
    jwtSecret,
    connectionString,
}