import axios from "axios";

export const createFile = (file) => {
    // debugger
    return axios.post('/api/files/', file)
}

export const updateFile = (id, code, name) => {
    return axios.patch(`/api/files/${id}`, {code: code, name: name})
}

export const deleteFile = (fileId) => {
    return axios.delete(`/api/files/${fileId}`)
}

export const fetchFile = (file) => {
    return axios.get(`/api/files/${file.id}`)
}
export const fetchUserFiles = (userId) => {
    return axios.get(`/api/files/user/${userId}`)
}
