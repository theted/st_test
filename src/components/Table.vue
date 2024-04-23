<template>
  <table class="mb-8">
    <thead>
      <tr class="text-center">
        <th
          v-for="key in Object.values(fieldNames)"
          :key="key"
          class="text-sm pb-3 font-light"
        >
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in data"
        :key="index"
        class="odd:bg-gray-100 even:bg-gray-50"
      >
        <td v-for="(value, key) in item" :key="key" class="p-3">
          <RouterLink :to="`/edit/${index}`">
            {{ value }}
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { fieldNames } from "../constants";

type DataType = Record<string, any>;

defineProps({
  data: {
    type: Array as () => DataType[],
    required: true,
  },
});
</script>
