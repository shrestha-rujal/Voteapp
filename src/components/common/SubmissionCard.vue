<template>
  <div
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
      <slot
        name="image"
      >
        <box-icon
          size="40px"
          color="gray"
          name='photo-album'>
        </box-icon>
      </slot>
    </div>
    <div class="flex-1 mx-5 flex flex-col">
      <div>
        <span class="text-blue-700 font-semibold mr-2">
          <slot name="title">Card Heading</slot>
        </span>
        <span
          class="bg-gray-300 py-1 px-2 text-xs text-gray-800 rounded-sm"
        >#
          <slot name="rank">0</slot>
        </span>
      </div>
      <div class="py-2 text-sm flex-1 text-gray-800">
        <slot name="body">Card Body</slot>
      </div>
      <div class="text-xs tracking-wide text-gray-600 flex items-center mt-2"
      >
        <span class="mr-1">Submitted By: </span>
        <div class="w-6 h-6 bg-red-300 rounded-full overflow-hidden">
          <slot name="voter">
            <box-icon
              color="gray"
              name='user-circle'>
            </box-icon>
          </slot>
        </div>
      </div>
    </div>
    <div class="h-full">
      <div
        v-on:click="$emit('vote-clicked')"
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
          <slot name="vote-count">0</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmissionCard',
};
</script>
