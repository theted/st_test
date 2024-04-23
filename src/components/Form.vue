<template>
  <form @submit.prevent="submitForm">
    <div v-for="field in Object.keys(fieldNames)" :key="field">
      <Field
        :name="field"
        :label="fieldNames[field]"
        :default-value="props.data[field] ? props.data[field] : ''"
        v-model="formData[field]"
      />
    </div>

    <div class="flex justify-stretch mt-6 gap-3 items-grow">
      <button type="submit" :class="styles.button + ' flex-grow'">Save</button>

      <Link to="/" text="Back to list" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import Field from "./Field.vue";
import { fieldNames, styles } from "../constants";
import Link from "../components/Link.vue";
import { User } from "../types";

const emit = defineEmits();

const props = defineProps({
  addRow: {
    type: Function,
    required: true,
  },
  data: {
    type: Object,
    required: false,
  },
});

const formData = ref<User>({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const submitForm = () => {
  emit("addRow", formData.value);
};
</script>
