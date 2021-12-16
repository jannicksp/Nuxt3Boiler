<template>
  <img :src="imageUrl" :alt="text" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NcIcon',
  inheritAttrs: true,
  props: {
    text: {
      type: String,
      default: 'Logo',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
});
</script>
