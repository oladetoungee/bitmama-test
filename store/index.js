export const state = () => {
    currentUser: null
}

export const mutations = {
    updateUser(state, loggedInUser) {
        state.currentUser = loggedInUser
    },
}

export const actions = {}

export const getters = {}