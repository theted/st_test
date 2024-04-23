<template>
  <Card>
    <Form :data="user" @addRow="submit" />
  </Card>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import Form from "../components/Form.vue";
import Card from "../components/Card.vue";
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
