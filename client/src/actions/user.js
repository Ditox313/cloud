import axios from "axios"


export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`, { email, password })
        console.log(response);
    } catch (error) {
        throw error
    }
    
}