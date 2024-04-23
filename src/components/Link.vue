<template>
  <RouterLink :to="to" :class="styles.button">{{ text }} </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { defineProps } from "vue";
import { styles } from "../constants";

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
