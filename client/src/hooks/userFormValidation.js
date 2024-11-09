import toast from "react-hot-toast";

export function HandleInputErrorSignUp(data) {
    if (!data.username || !data.email || !data.gender || !data.confirmemail) {
        toast.error("Please fill all the fields")
        return false
    }

    if (!data.username.includes('_')) {
        toast.error("Please select a unique username")
        return false
    }

    if (data.email !== data.confirmemail) {
        toast.error("email not match")
        return false
    }

    if (data.email.length < 8) {
        toast.error("email must be at least 8 characters")
        return false
    }

    return true
}

export function HandleInputErrorLogin(data) {
    if (!data.username || !data.email) {
        toast.error("Please fill all the fields")
        return false
    }

    if (data.email.length < 8) {
        toast.error("email must be at least 8 characters")
        return false
    }

    return true
}

