import * as UserAPIUtil from '../util/user_util'

export const RECEIVE_USER = "RECEIVE_USER"

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const updateUser = (id, bio, first_name) => dispatch => {
    UserAPIUtil.updateUser(id,bio,first_name)
    .then(user => dispatch(receiveUser(user)))
}

export const fetchUser = (id) => dispatch => {
    UserAPIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)) )
}