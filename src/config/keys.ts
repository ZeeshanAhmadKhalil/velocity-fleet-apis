
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot()

const jwtSecret = process.env.JWT_SECRET
const connectionString = process.env.CONNECTION_STRING

export {
    jwtSecret,
    connectionString,
}