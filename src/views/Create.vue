<template>
   <div>
      <div class="card w-75">
        <div class="card-body">
            <div class="card-title" ><h1>Register Form</h1></div>
            <div class="card-title">
                <label>User Name</label>
                <input v-model="user.userName" type="text" class="form-control">
                <label>Fisrt Name</label>
                <input v-model="user.firstName" type="text" class="form-control">
                <label>Last Name</label>
                <input v-model="user.lastName" type="text" class="form-control">
                <label>Group</label>
                <input v-model="user.group" type="text" class="form-control">
                <br><br>
                        <button class="btn btn-primary" >Cancel</button>&nbsp;
      <button class="btn btn-primary" @click="register(user)" >Register</button>
            </div>
            </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Create',
  async mounted () {
    this.userID = this.$route.params.id
    if (this.userID !== undefined) {
      this.user = await this.getUserDetail(this.userID)
      console.log(this.user)
    }
  },
  data () {
    return {
      user: {
        id: '',
        firstName: '',
        lastName: '',
        userName: '',
        group: ''
      },
      userID: undefined
    }
  },
  methods: {
    ...mapActions({
      addUser: 'addUser',
      getUserDetail: 'getUserDetail',
      updateUser: 'updateUser'
    }),
    async register (user) {
      if (this.userID !== undefined) {
        console.log('update')
        user.id = this.userID
        const updateResult = await this.updateUser(user)
        if (updateResult === 'updated') {
          console.log('At vue : User updated')
          this.$router.push({ name: 'Home' })
        }
      } else {
        console.log(user)
        const result = await this.addUser(user)
        console.log('result =' + result)
        if (result === 'saved') {
          console.log('At vue : User Added')
          this.$router.push({ name: 'Home' })
        }
      }
    }
  }

}
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;}

</style>
