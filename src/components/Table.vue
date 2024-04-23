<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in Object.keys(data[0])" :key="key">{{ key }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

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
