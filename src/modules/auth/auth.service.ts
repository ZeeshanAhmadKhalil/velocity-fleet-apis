import { checkPassword } from '@config/helper'
import { LoginDto } from '@dtos/login.dto'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/modules/user/user.service'

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser({
        email,
        password,
    }: LoginDto): Promise<any> {

        const result = await this.userService.findByEmail(email)

        if (!result)
            return false

        const {
            password: userPassword,
            ...user
        } = result

        let result1 = await checkPassword(password, userPassword)

        if (result1)
            return user
        return false
    }

    async login(user: any) {

        const {

            password,
            ...userDto
        } = user._doc

        return {
            access_token: this.getAccessToken(userDto),
            userDto,
        }
    }

    getAccessToken(params: any) {
        return this.jwtService.sign(params)
    }

}
