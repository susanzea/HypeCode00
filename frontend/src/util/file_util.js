import axios from "axios";

export const createFile = (file) => {
    return axios.post('/api/files/', file)
}

export const updateFile = (file, code, name) => {
    return axios.patch(`/api/files/${file.id}`, {code: code, name: name})
}

export const deleteFile = (file) => {
    return axios.delete(`/api/files/${file.id}`)
}

export const fetchFile = (file) => {
    return axios.get(`/api/files/${file.id}`)
}