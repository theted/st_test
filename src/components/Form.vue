<template>
  <form @submit.prevent="submitForm">
    <div class="my-3">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model="firstName" />
    </div>

    <div class="my-3">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model="lastName" />
    </div>

    <button type="submit" class="bg-slate-500 p-3 text-white border-sm">
      Save
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
const emit = defineEmits();

const firstName = ref("");
const lastName = ref("");

defineProps({
  addRow: {
    type: Function,
    required: true,
  },
});

const submitForm = () => {
  const formData = { firstName: firstName.value, lastName: lastName.value };
  emit("addRow", formData);
  firstName.value = "";
  lastName.value = "";
};
</script>
