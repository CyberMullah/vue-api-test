<template>
  <div class="mx-auto">
    <div class="flex justify-between mt-2 items-center">
      <p class="text-lg font-semibold">Dashboard</p>
      <button @click="logout()" class="text-red-500">Logout</button>
    </div>

    <div class="">
      <table>
        <thead class="border">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Register Date</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import request from "../environment/auth.request";

export default {
  name: "Dashboard",
  data: () => ({
    users: []
  }),
  mounted() {
    request().get('/users').then((response) => {
      this.users = response.data.data;
    });
  },
  methods: {
    logout() {
      request().post('/logout').then(() => {
        localStorage.removeItem('access-token');
        this.$router.push('/')
      });
    }
  }
}
</script>
