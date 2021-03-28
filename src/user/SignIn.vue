<template>
  <div>
    <h2 class="header">Sign In</h2>
    <form @submit="signIn" autocomplete="off" novalidate v-on:submit.prevent>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model.trim="email" placeholder="Email..." />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input
          v-model.trim="password"
          type="password"
          placeholder="Password..."
        />
      </div>
      <div v-if="signInError" class="failed">Login Failed</div>
      <div class="form-group buttons">
        <button type="button" @click="cancel()">Cancel</button>
        <button class="primary" type="submit">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      signInError: false,
    };
  },
  methods: {
    signIn() {
      const userLogin = {
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch('users/signIn', userLogin)
        .then(() => this.$router.push('/products'))
        .catch(() => {
          this.signInError = true;
        });
    },
    cancel() {
      this.router.navigate(['/']);
    },
  },
};
</script>

<style scoped>
form {
  color: #336699;
  font-size: 18px;
  padding: 30px;
  width: 298px;
  margin: 0 auto;
}
input {
  display: block;
  font-size: 18px;
  padding-left: 10px;
  width: 275px;
}
.header {
  color: #336699;
  text-align: center;
  padding-top: 20px;
  margin-top: 0;
}
.form-group {
  margin: 10px;
}
.buttons {
  text-align: right;
  margin-right: 0px;
}
.buttons button {
  margin-left: 10px;
}
.failed {
  color: red;
  text-align: right;
}

em {
  float: right;
  color: #e05c65;
  padding-left: 10px;
}
.error input,
.error select,
.error textarea {
  background-color: #e3c3c5;
}
.error ::-webkit-input-placeholder {
  color: #999;
}
.error :-moz-placeholder {
  color: #999;
}
.error ::-moz-placeholder {
  color: #999;
}
.error :ms-input-placeholder {
  color: #999;
}
</style>
