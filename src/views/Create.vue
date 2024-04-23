<template>
  <Form @addRow="addRow"></Form>
  <Link to="/" text="Back to list" />
</template>

<script setup="ts">
import { useUserStore } from "../store";
import { useRouter } from "vue-router";
import Form from "../components/Form.vue";
import Link from "../components/Link.vue";

const router = useRouter();
const counter = useUserStore();

const addRow = (formData) => {
  counter.add(formData);
  router.push("/");
};
</script>
