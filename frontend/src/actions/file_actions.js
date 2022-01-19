import * as FileAPIUtil from '../util/file_util'

export const RECEIVE_FILE = "RECEIVE_FILE"
export const REMOVE_FILE = "REMOVE_FILE"

const receiveFile = ( file ) => ({
    type: RECEIVE_FILE,
    file
})
const removeFile = ( file ) => ({
    type: REMOVE_FILE,
    file
})

export const fetchFile = file => dispatch => {
    FileAPIUtil.fetchFile(file)
    .then(file => dispatch(receiveFile(file)))
}

export const createFile = file => dispatch => {
    FileAPIUtil.createFile(file)
    .then(file => dispatch(receiveFile(file)))
}

export const updateFile = (file,code,name) => dispatch => {
    FileAPIUtil.updateFile(file,code,name)
    .then(file => dispatch(receiveFile(file)))
}

export const deleteFile = (file) => dispatch => {
    FileAPIUtil.deleteFile(file)
    .then((file) => dispatch(removeFile(file.id)))
}
