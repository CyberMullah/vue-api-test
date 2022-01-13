<template>
  <v-container>
    <p>Login Form</p>
    <input type="text">
    <br>
    <input type="text">
    <br>
    <button @click="login">Login</button>
  </v-container>
</template>

<script>
import request from "./../environment/request";
  export default {
    name: 'Login',
    methods:{
      login(){
        request().post('/login', {
          'email': "admin@email.com",
          'password': "password"
        });
      }
    }
  }
</script>
