<template>
  <main>
    <div
      class="
        container
        vh-100
        d-flex
        flex-column
        align-items-center
        justify-content-center
      "
    >
      <h1>Hello from Nuxt3 🚀</h1>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';

export default defineComponent({
  setup() {
    useHead({
      title: 'Nuxt3 🚀',
    });
  },
});
</script>
