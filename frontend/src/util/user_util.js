import axios from "axios"

export const updateUser = (id,user_name,user_bio) => {
    return axios.patch(`/api/users/${id}`, {first_name: user_name, bio: user_bio})
}

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}