<template>
  <form @submit.prevent="submitForm">
    <div class="my-3">
      <label for="firstname">First name</label>
      <input type="text" id="firstname" name="firstname" v-model="firstName" />
    </div>

    <div class="my-3">
      <label for="lastname">Last name</label>
      <input type="text" id="lastname" name="lastname" v-model="lastName" />
    </div>

    <button type="submit" class="bg-slate-500 p-3 text-white border-sm">
      Save
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
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

const firstName = ref(props?.data?.firstName || "");
const lastName = ref(props?.data?.lastName || "");

const submitForm = () => {
  const formData = { firstName: firstName.value, lastName: lastName.value };
  emit("addRow", formData);
};
</script>
