export const state = () => ({
  writings: []
})

export const mutations = {
  setWritings: (s, d) => (s.writings.push(d)),
  DELETE_WRITING (s, id) {
    const index = s.writings.findIndex(writing => writing.id === id)
    s.writings.splice(index, 1)
  },
  CHANGE_WRITING (s, data) {
    const index = s.writings.findIndex(writing => writing.id === data.id)
    s.writings[index].text = data.text
  }
}

export const actions = {
  updateWritings ({ commit, state }, writing) {
    writing.id = new Date().getTime()
    commit('setWritings', writing)
  },
  removeWriting ({ commit }, id) {
    commit('DELETE_WRITING', id)
  },
  changeWriting ({ commit }, data) {
    commit('CHANGE_WRITING', data)
  }
}

export const getters = {
  writings: s => s.writings
}
