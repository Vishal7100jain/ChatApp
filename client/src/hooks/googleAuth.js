import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

export default function useGoogleAuth() {
    const [userData, setUserData] = useState(null)
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: token => getGoogleUserInfo(token)
    })

    async function getGoogleUserInfo(data) {
        try {
            const result = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                headers: {
                    Authorization: `Bearer ${data.access_token}`,
                },
            });
            if (result.data.verified_email) {
                setUserData(result.data)
            }
        } catch (error) {
            console.error('Error fetching user information:', error);
        }
    }

    return { handleGoogleLogin, userData }
}