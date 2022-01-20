import axios from "axios"

export const updateUser = (id,name,bio) => {
    return axios.patch(`/api/users/${id}`, {first_name: name, bio: bio})
}

export const fetchUser = (id) => {
    return axios.get(`/api/users/${id}`)
}