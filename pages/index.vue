<template>
  <section class="container">
    <div>
      <img src="~/assets/M33-logo.png">
      <h1 class="title">
        YOKOSO
      </h1>
      <login-button />
    </div>
  </section>
</template>

<script>
import LoginButton from '~/components/LoginButton.vue'

export default {
  components: {
    LoginButton,
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: black;
}

.title {
  font-family: 'Source Sans Pro', sans-serif;
  display: block;
  font-weight: bold;
  font-size: 50px;
  color: white;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

</style>
