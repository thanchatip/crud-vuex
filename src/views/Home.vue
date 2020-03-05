<template>
  <div class="home">
    <div class="card mb-2" v-for="user in users" v-bind:key="user.id">
        <div class="card-body">
        <h4 class="card-title">User : {{ user.userName }}</h4>
        <p class="card-text">Name :{{user.firstName}}  {{user.lastName}}</p>
         <p class="card-text">Group :{{user.group}}</p>
        </div>
         <div class="row">
          <div class="col-auto mr-auto">
            <button class="btn btn-primary" @click="edit(user.id)" > Edit </button>
                &nbsp;
              <button  class="btn btn-danger" @click="del(user.id)" >Delete</button>&nbsp;<br>
          </div>
          <br>
         </div>
         <br>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      users: []

    }
  },
  async mounted () {
    this.users = await this.loadUsers()
  },
  methods: {
    ...mapActions({
      loadUsers: 'loadUsers',
      removeUser: 'removeUser'
    }),
    async del (userID) {
      const delResult = await this.removeUser(userID)
      if (delResult === 'deleted') {
        console.log('deleted at vue')
        this.users = await this.loadUsers()
      }
    },
    edit (userID) {
      this.$router.push({ name: 'Edit', params: { id: userID } })
    }
  }
}
</script>
