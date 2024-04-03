import toast from "react-hot-toast";

export function HandleInputErrorSignUp(data) {
    if (!data.username || !data.password || !data.gender || !data.confirmPassword) {
        toast.error("Please fill all the fields")
        return false
    }

    if (data.password !== data.confirmPassword) {
        toast.error("Password not match")
        return false
    }

    if (data.password.length < 8) {
        toast.error("Password must be at least 8 characters")
        return false
    }

    return true
}

export function HandleInputErrorLogin(data) {
    if (!data.username || !data.password) {
        toast.error("Please fill all the fields")
        return false
    }

    if (data.password.length < 8) {
        toast.error("Password must be at least 8 characters")
        return false
    }

    return true
}

