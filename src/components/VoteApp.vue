<template>
  <div class="h-full container flex flex-col items-center">
    <span class="text-gray-800 text-3xl py-10 font-semibold">UpVote!</span>
    <div class="w-full flex flex-col items-center px-64">
      <submission-card
        v-for="submission in sortedSubmissions"
        v-bind:key="submission.id"
        v-bind:submission="submission"
        v-bind:submissions="sortedSubmissions"
      ></submission-card>
    </div>
  </div>
</template>

<script>
import SubmissionCard from './common/SubmissionCard.vue';
import submissions from './common/seed';

export default {
  name: 'VoteApp',
  components: {
    SubmissionCard,
  },
  created() {
  },
  computed: {
    sortedSubmissions() {
      return [...this.submissions].sort((a, b) => b.votes - a.votes);
    },
  },
  data() {
    return {
      submissions,
    };
  },
};
</script>
