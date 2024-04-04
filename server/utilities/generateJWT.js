import jwt from 'jsonwebtoken'

const generateJWT = async (userId, res) => {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" })
    return token
}

export default generateJWT