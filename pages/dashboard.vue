<template>
<div class="dashboard">
    <Heading/>
    <div class="user">Welcome, {{currentUser}}</div>

     <button @click="onLogout" class="logout" type="submit">Log out</button>
</div>
    
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
      computed: {
        currentUser() {
            return this.$store.state.currentUser
        },
      },
     methods: {
          onLogout () {
      
      this.$router.push("/")
     
    }
     },
      components: {
          Heading
      }
}
</script>
<style>
.user {
    position: absolute;
    top: 400px;
   left: 500px;
   color: #484848;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 3px;
}
.logout {
    position: absolute;
    top: 600px;
   left: 700px;
     height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #484848;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
   

</style>