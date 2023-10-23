<template>
  <div class="my-12 d-flex justify-center">
    <div class="mx-3 d-none">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        src="https://picsum.photos/id/11/500/300"
        class="float-right"
      ></v-img>
    </div>
    <div class="mx-3">
      <v-card :loading="loading" class="" max-width="374" width="374" outlined>
        <v-card-title class="h2 justify-center">Register</v-card-title>
        <v-card-text>
          <v-form
            v-model="valid"
            class="mb-4"
            lazy-validation
            @submit.prevent="reserve"
          >
            <v-text-field
              v-model="username"
              label="Username"
              :rules="[(v) => !!v || 'Username is required']"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              :rules="[(v) => !!v || 'Password is required']"
              label="Password"
              outlined
              required
              @click:append="showPass = !showPass"
            ></v-text-field>
            <v-btn type="submit" outlined :disabled="!valid" block>
              Sign Up
            </v-btn>
          </v-form>
          <p class="">
            Have account ? Login
            <router-link
              class="font-weight-bold black-text text-decoration-none"
              to="/login"
            >
              here
            </router-link>
          </p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      valid: false,
      loading: false,
      username: '',

      password: '',
      showPass: false,
    }
  },
  methods: {
    reserve() {
      this.loading = true
      setTimeout(() => {
        if (this.username !== 'Duong') {
          alert("Username isn't existing")
        } else if (this.password !== '123') {
          alert('Wrong password')
        } else {
          alert('Login successful')
          this.$router.push({ path: '/' })
        }
        this.loading = false
      }, 2000)
    },
  },
}
</script>

<style></style>
