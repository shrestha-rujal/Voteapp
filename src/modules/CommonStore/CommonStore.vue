<template>
<div class="w-full h-full flex items-center justify-center bg-gray-500">
  <div class="bg-gray-100 w-1/4 rounded border border-gray-400
    p-5 shadow-lg">
    <number-display />
    <number-store />
  </div>
</div>
</template>

<script>
import NumberDisplay from './NumberDisplay.vue';
import NumberStore from './NumberStore.vue';

export default {
  name: 'CommonStore',
  components: {
    NumberDisplay,
    NumberStore,
  },
};
</script>
