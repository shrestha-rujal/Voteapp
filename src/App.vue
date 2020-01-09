<template>
  <div id="app" class="h-screen">
   <!-- <vote-app /> -->
   <common-store />
  </div>
</template>

<script>
import './assets/css/main.css';
import './assets/css/global.css';
import 'boxicons';
// import VoteApp from './components/VoteApp.vue';
import CommonStore from './modules/CommonStore/CommonStore.vue';

export default {
  name: 'app',
  components: {
    // VoteApp,
    CommonStore,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
}

</style>
