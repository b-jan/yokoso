<template>
  <div>
    <div
      v-if="loading"
      class="loading"
    >
      <h2>Loading...</h2>
    </div>
    <div
      v-else
      class="login"
    >
      <button
        class="login-button"
        @click="googleSignUpPopup"
      >
        <img
          src="~/assets/signin-button.png"
          alt="Sign in with Google"
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.isLoading
    }
  },
  methods: {
    async googleSignUpPopup () {
      await this.$store.dispatch('signInWithGooglePopup')
      this.$router.replace('/admin')
    }
  }
}
</script>

<style>

.login-button {
  border: none;
  background: none;
  cursor: pointer;
}

</style>
