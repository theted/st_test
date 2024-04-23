<template>
  <RouterLink :to="to" class="border p-3 bg-slate-500 text-white rounded-sm"
    >{{ text }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
