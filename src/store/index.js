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
    async addUser ({ commit }, user) {
      try {
        console.log('saving...')
        await db.collection('users').add({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          group: user.group
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
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
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
      const doc = await db.collection('users').doc(userID).get()
      if (doc.exists) {
        console.log(doc.data())
        return doc.data()
      }
    },
    async updateUser ({ commit }, user) {
      try {
        console.log(user.id)
        await db.collection('users').doc(user.id).set({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          group: user.group
        })
        console.log('updated')
        return 'updated'
      } catch {
        console.log('update failed')
        return 'error'
      }
    }
  },
  modules: {
  }
})
