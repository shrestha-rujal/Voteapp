<template>
<div>
  <div
    class="font-semibold text-lg"
    v-bind:class="{ 'mb-2': !error }"
  >Enter Name:</div>
  <label
    v-if="error"
    class="text-red-500 text-xs italics font-semibold pl-1"
    for="name"
  >Enter a name first.</label>
  <div class="flex items-center h-10 ">
    <input
      id="name"
      autofocus
      v-on:keyup.enter="onSubmit"
      v-model="newName"
      v-bind:class="{ 'border border-red-500': error }"
      class="border border-gray-400 rounded-l h-full px-2 w-2/3"
      placeholder="Type Here"
      type="text"
    >
    <button
      v-on:click="onSubmit"
      class="bg-teal-500 hover:bg-teal-600 text-white text-sm h-full w-1/3 rounded-r"
    >Add Name</button>
  </div>
</div>
</template>

<script>
import store from './Store';

export default {
  name: 'NumberStore',
  data() {
    return {
      nameId: null,
      newName: '',
      error: false,
    };
  },
  created() {
    this.nameId = store.state.names.length;
  },
  methods: {
    onSubmit() {
      this.validate();
      if (!this.error) {
        this.addName();
      }
    },
    validate() {
      this.error = false;
      if (!this.newName.length) {
        this.error = true;
      }
    },
    addName() {
      store.pushNewName({
        id: this.nameId + 1,
        value: this.newName,
      });
      this.nameId += 1;
      this.newName = '';
    },
  },
};
</script>
