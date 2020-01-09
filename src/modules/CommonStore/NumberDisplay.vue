<template>
<div class="pb-6">
  <div class="font-semibold text-lg mb-2">Names:</div>
  <div class="bg-gray-300 p-3 py-4">
    <button
      v-on:click="removeName(name)"
      class="bg-gray-400 rounded px-2 py-1 border border-gray-500 m-1
        text-gray-800 text-sm hover:bg-gray-500"
      v-for="name in names"
      v-bind:key="name.id"
    >
      <div class="flex items-center">
        {{name.value}}
        <box-icon
          size="cssSize"
          class="w-4 h-4 ml-1"
          color="gray"
          name='x'
          rotate='90'
        ></box-icon>
      </div>
    </button>
  </div>
</div>
</template>

<script>
import store from './Store';

export default {
  name: 'NumberDisplay',
  data() {
    return {
      names: '',
    };
  },
  watch: {
    store: () => this.assignNames(),
  },
  store,
  created() {
    this.assignNames();
  },
  methods: {
    assignNames() {
      this.names = store.state.names;
    },
    removeName(name) {
      store.removeName(name);
    },
  },
};
</script>
