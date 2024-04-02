import jwt from 'jsonwebtoken'

const generateJWT = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" })

    return res.cookie('token', token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 24 * 15,
        secure: process.env.NODE_ENV === 'production' ? true : false
    })
}

export default generateJWT