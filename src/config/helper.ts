
const bcrypt = require('bcrypt')
const saltRounds = 1

const encryptPassword = async (password: string) => {

    let encrypt = new Promise((resolve, reject) => {
        bcrypt.hash(password,
            saltRounds,
            (error: any, hash: string) => {
                if (hash)
                    resolve(hash)
                if (error)
                    reject(error)
            }
        )
    })

    return await encrypt

}
const checkPassword = async (
    password: string,
    hash: string
) => {

    return bcrypt.compareSync(password, hash)
}
const generatePassword = () => {
    return Math.random().toString(36).slice(2, 10)
}

export {
    checkPassword,
    encryptPassword,
    generatePassword,
}