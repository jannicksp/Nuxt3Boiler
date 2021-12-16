<template>
  <svg aria-hidden="true" class="icon">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'NcIcon',
  inheritAttrs: true,
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    alias: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.alias}`);
    return { symbolId };
  },
});
</script>
