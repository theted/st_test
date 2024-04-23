<template>
  <table class="border border-slate-500 mb-6">
    <thead>
      <tr>
        <th v-for="key in Object.keys(data[0])" :key="key">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index" class="bg-slate-500">
        <td v-for="(value, key) in item" :key="key">
          <RouterLink :to="`/edit/${index}`">
            {{ value }}
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouterLink } from "vue-router";

interface DataType {
  [key: string]: any;
}

export default defineComponent({
  name: "Table",
  props: {
    data: {
      type: Array as PropType<DataType[]>,
      required: true,
    },
  },
});
</script>
