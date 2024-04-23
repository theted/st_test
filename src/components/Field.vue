<template>
  <div class="flex flex-col space-y-4 mb-6">
    <label :for="name" class="text-md text-gray-600">{{
      label ? label : name
    }}</label>
    <input
      :id="name"
      :value="value"
      @input="updateValue"
      class="p-3 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  defaultValue: {
    type: String,
    default: "",
  },
});

const value = ref(props.defaultValue);

watchEffect(() => {
  value.value = props.defaultValue;
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  value.value = inputElement.value;
  emit("update:modelValue", value.value);
};
</script>
