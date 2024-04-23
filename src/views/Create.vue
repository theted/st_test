<template>
  <Card>
    <Form @addRow="addRow" :data="{}"></Form>
  </Card>
</template>

<script setup="ts">
import { useUserStore } from "../store";
import { useRouter } from "vue-router";
import Card from "../components/Card.vue";
import Form from "../components/Form.vue";

const router = useRouter();
const users = useUserStore();

const addRow = (formData) => {
  users.add(formData);
  router.push("/");
};
</script>
