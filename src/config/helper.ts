import { mailjetPrivate, mailjetPublic } from "./keys";
import { hash, compare } from 'bcryptjs';

const saltRounds = 1
const Mailjet = require('node-mailjet');

const encryptPassword = async (password: string) => {

    return await hash(password, 10)
}
const checkPassword = async (
    password: string,
    hash: string
) => {

    return await compare(password, hash)
}
const generatePassword = () => {
    return Math.random().toString(36).slice(2, 10)
}
const sendEmail = ({
    registerDto,
    generatedPassword,
}) => {

    const mailjet = Mailjet.apiConnect(
        mailjetPublic,
        mailjetPrivate
    );

    const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [
                {
                    From: {
                        Email: "mateyofficial21@gmail.com",
                        Name: "Velocity Fleet"
                    },
                    To: [
                        {
                            Email: registerDto.email,
                            Name: "Zeeshan Ahmad"
                        }
                    ],
                    Subject: "You have successfully registered to Velocity Fleet!",
                    TextPart: `Dear ${registerDto.fullName}, welcome to Velocity Fleet! Your Password is ${generatedPassword}!`,
                    HTMLPart: `<h3>Dear ${registerDto.fullName}, welcome to <a href=\"https://velocity-fleet.vercel.app/\">Velocity Fleet</a>!</h3><br />Your Password is <b>${generatedPassword}</b>`
                }
            ]
        })

    request
        .then((result) => {
            console.log("result.body===>", result.body)
        })
        .catch((err) => {
            console.log("err.statusCode===>", err.statusCode)
        })
}

export {
    sendEmail,
    checkPassword,
    encryptPassword,
    generatePassword,
}