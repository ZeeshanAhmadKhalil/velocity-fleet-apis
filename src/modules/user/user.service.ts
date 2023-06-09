import {
    encryptPassword,
    generatePassword,
    sendEmail
} from '@config/helper';
import {
    User,
    UserDocument
} from '@models/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/database/models/dtos/register.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {
    }
    async register(registerDto: RegisterDto): Promise<any> {

        let generatedPassword = generatePassword()

        let hashPassword
            = await encryptPassword(generatedPassword)

        sendEmail({
            registerDto,
            generatedPassword,
        })

        const register = new this.userModel({
            ...registerDto,
            password: hashPassword,
        });
        const {
            _doc: {
                password,
                ...user
            }
        }: any = await register.save()

        return user
    }
    async findByEmail(email: string): Promise<User | undefined> {

        return this.userModel
            .findOne({ email })
            .select('+password')
            .exec()
    }
}
