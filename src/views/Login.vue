<template>
  <v-container>

    <div class="bg-gray-100 p-4 max-w-md mx-auto rounded mt-32">
      <p class="text-lg font-semibold">Login Form</p>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >

        <v-text-field
            v-model="credential.email"
            :rules="emailRules"
            label="E-mail"
            required
        ></v-text-field>

        <v-text-field
            v-model="credential.password"
            :rules="passwordRules"
            label="Password"
            required
            type="password"
        ></v-text-field>

        <div class="flex justify-end mt-2">
          <v-btn
              color="success"
              @click="login"
          >
            Login
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import request from "./../environment/request";

export default {
  name: 'Login',
  data: () => ({
    valid: true,
    credential: {
      email: null,
      password: null
    },
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        request().post('/login', this.credential).then(response => {
          localStorage.setItem('access-token', response.data.access_token);
          this.$router.push('/dashboard');
        })
      }
    },
  }
}
</script>
