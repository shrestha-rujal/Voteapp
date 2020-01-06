<template>
  <div class="h-full container flex flex-col items-center">
    <span class="text-gray-800 text-3xl py-10 font-semibold">UpVote!</span>
    <div class="w-full flex flex-col items-center px-64">
      <submission-card
        v-for="submission in sortedSubmissions"
        v-bind:key="submission.id"
        v-on:vote-clicked="upvote(submission.id)"
        v-bind:class="{'border-blue-500': submission.votes>=20}"
      >
        <template v-slot:image>
          <img
            class="w-full h-full"
            v-bind:src="submission.submissionImage"
          />
        </template>
        <template v-slot:title>
          {{submission.title}}
        </template>
        <template v-slot:rank>
          {{submission.id}}
        </template>
        <template v-slot:body>
          {{submission.description}}
        </template>
        <template v-slot:voter>
          <img
            v-bind:src="submission.avatar"
          >
        </template>
        <template v-slot:vote-count>
          {{submission.votes}}
        </template>
      </submission-card>
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
      message: 'hello',
      submissions,
    };
  },
  methods: {
    upvote(submissionId) {
      const submissionToVote = this.submissions.find(
        (submission) => submission.id === submissionId,
      );
      submissionToVote.votes += 1;
    },
  },
};
</script>
