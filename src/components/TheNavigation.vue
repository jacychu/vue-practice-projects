<template>
    <div>
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <!--<router-link to="/about">About</router-link>-->
        <router-link to="/bmi">Bmi</router-link>
        <router-link to="/dialog">Dialog</router-link>
        <router-link to="/todo">Todo</router-link>
        <router-link to="/todo-advanced">Todo-Advanced</router-link>
      </nav>
    </div>
</template>

<script>
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 8px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>