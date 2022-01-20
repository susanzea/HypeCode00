import * as FileAPIUtil from '../util/file_util'

export const RECEIVE_FILE = "RECEIVE_FILE"
export const REMOVE_FILE = "REMOVE_FILE"
export const RECEIVE_ALL_FILES = "RECEIVE_ALL_FILES"

const receiveFile = ( file ) => ({
    type: RECEIVE_FILE,
    file
})
const removeFile = ( fileId ) => ({
    type: REMOVE_FILE,
    fileId
})

const receiveFiles = (files) => ({
    type: RECEIVE_ALL_FILES,
    files
})

export const fetchFiles = userId => dispatch => {
    FileAPIUtil.fetchUserFiles(userId)
    .then(files => dispatch(receiveFiles(files)))
}

export const fetchFile = file => dispatch => {
    FileAPIUtil.fetchFile(file)
    .then(file => dispatch(receiveFile(file)))
}

export const createFile = file => dispatch => {
    // debugger
    FileAPIUtil.createFile(file)
    .then(file => dispatch(receiveFile(file)))
}

export const updateFile = (file,code,name) => dispatch => {
    FileAPIUtil.updateFile(file,code,name)
    .then(file => dispatch(receiveFile(file)))
}

export const deleteFile = (fileId) => dispatch => {
    FileAPIUtil.deleteFile(fileId)
    .then((fileId) => dispatch(removeFile(fileId)))
}
