import Vue from 'vue'
import Vuex from 'vuex'
import '@firebase/firestore'
import db from '../firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async addUser ({ commit }, payload) {
      try {
        console.log('saving...')
        await db.collection('users').add({
          first: payload.firstName,
          last: payload.lastName,
          userName: payload.userName,
          group: payload.group
        })
        console.log('saved')
        return 'saved'
      } catch {
        return 'error'
      }
    },
    async loadUsers ({ commit }) {
      try {
        const userList = []
        const querySnapshot = await db.collection('users').get()
        querySnapshot.forEach(function (doc) {
          const user = {
            id: doc.id,
            first: doc.data().first,
            last: doc.data().last,
            userName: doc.data().userName,
            group: doc.data().group
          }
          userList.push(user)
        })
        console.log('user loaded')
        return userList
      } catch {
        return 'error'
      }
    },
    async removeUser ({ commit }, userID) {
      try {
        await db.collection('users')
          .doc(userID)
          .delete()
        console.log('deleted')
        return 'deleted'
      } catch {
        return 'error'
      }
    },
    async getUserDetail ({ commit }, userID) {

    }
  },
  modules: {
  }
})
