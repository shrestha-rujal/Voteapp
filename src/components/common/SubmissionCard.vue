<template>
  <div
    v-bind:class="{'border-blue-500': submission.votes>=20}"
    class="
      border
      border-gray-300
      rounded
      py-4
      px-5
      m-3
      w-full
      h-32
      flex
      items-center
  ">
    <div
      class="rounded-sm w-20 h-20 overflow-hidden"
    >
      <img
        class="w-full h-full"
        v-bind:src="submission.submissionImage"
      />
    </div>
    <div class="flex-1 mx-5 flex flex-col">
      <div>
        <span class="text-blue-700 font-semibold mr-2">
          {{submission.title}}
        </span>
        <span
          class="bg-gray-300 py-1 px-2 text-xs text-gray-800 rounded-sm"
        >#
          {{submission.id}}
        </span>
      </div>
      <div class="py-2 text-sm flex-1 text-gray-800">
        {{submission.description}}
      </div>
      <div class="text-xs tracking-wide text-gray-600 flex items-center mt-2"
      >
        <span class="mr-1">Submitted By: </span>
        <div class="w-6 h-6 bg-red-300 rounded-full overflow-hidden">
          <img
            v-bind:src="submission.avatar"
          >
        </div>
      </div>
    </div>
    <div class="h-full">
      <div
        v-on:click="upvote(submission.id)"
        class="
            flex
            py-1
            px-2
            rounded-sm
            border-red-600
            cursor-pointer
            hover:bg-gray-200
            hover:shadow-md
            select-none
      ">
        <box-icon name='chevron-up' ></box-icon>
        <div
          class="font-semibold text-blue-600 tracking-widest"
        >
          {{submission.votes}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionCard',
  props: ['submission', 'submissions'],
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
