import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) return res.status(401).json({ message: "Login First" })
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = payload?.userId
        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

export default auth