export default function WrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => {
            res.status(500).json({ message: err.message })
        })
    }
}