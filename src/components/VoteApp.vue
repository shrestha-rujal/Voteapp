<template>
  <div class="h-full container flex flex-col items-center">
    <span class="text-gray-800 text-3xl py-10 font-semibold">UpVote!</span>
    <div class="w-full flex flex-col items-center px-64">
      <card>
        <template v-slot:image>
          <div class="bg-yellow-500 w-full h-full flex items-center justify-center">
            <box-icon
              size="40px"
              color="white"
              name='photo-album'>
            </box-icon>
          </div>
        </template>
        <template v-slot:title>
          Yellow Pale
        </template>
        <template v-slot:rank>
          1
        </template>
        <template v-slot:body>
          On-demand sand castle construction expertise.
        </template>
        <template v-slot:vote-count>
          10
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './common/Card.vue';

export default {
  name: 'VoteApp',
  components: {
    Card,
  },
  data() {
    return {
      message: 'hello',
    };
  },
};
</script>
