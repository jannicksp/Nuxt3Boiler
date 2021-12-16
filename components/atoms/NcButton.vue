<template>
  <button :class="`button button--${modifier}`" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NcButton',
  props: {
    modifier: {
      type: String,
      default: '',
    },
  },
  emits: ['click'],
});
</script>
