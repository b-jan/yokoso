<template>
  <section class="container">
    <div>
      <img src="~/assets/M33-logo.png">
      <h1 class="title">
        YOKOSO
      </h1>
      <h2 class="subtitle">
        Welcome to Theodo
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'auth-check'
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

.subtitle {
  border: solid 3px white;
  padding: 10px;
  font-size: 30px;
  color: white;
  word-spacing: 5px;
  margin-bottom: 15px;
}

</style>
