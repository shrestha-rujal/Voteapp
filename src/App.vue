<template>
  <div id="app" class="h-screen">
   <vote-app />
  </div>
</template>

<script>
import './assets/css/main.css';
import './assets/css/global.css';
import 'boxicons';
import VoteApp from './components/VoteApp.vue';

export default {
  name: 'app',
  components: {
    VoteApp,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
}

</style>
