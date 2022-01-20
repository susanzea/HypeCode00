import * as UserAPIUtil from '../util/user_util'

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const updateUser = (id,first_name,bio) => dispatch => {
    UserAPIUtil.updateUser(id,first_name,bio)
    .then(user => dispatch(receiveUser(user)))
}

export const fetchUser = (id) => dispatch => {
    UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)) )
}