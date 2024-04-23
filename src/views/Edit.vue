<template>
  <Form :data="user" @addRow="submit" />
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import Form from "../components/Form.vue";
import { useUserStore } from "../store";

const userStore = useUserStore();
const router = useRouter();
const { params } = useRoute();
const user = userStore.get(params.id);

const submit = (data) => {
  userStore.update(params.id, data);
  router.push("/");
};
</script>
