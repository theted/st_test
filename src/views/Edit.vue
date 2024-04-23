<template>
  <Card>
    <Form @addRow="addRow" :data="user" />
  </Card>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import Form from "../components/Form.vue";
import Card from "../components/Card.vue";
import { useUserStore } from "../store";
import { User } from "../types";

const userStore = useUserStore();
const router = useRouter();
const { params } = useRoute();
const user = userStore.get(Number(params.id));

const addRow = (data: User) => {
  userStore.update(Number(params.id), data);
  router.push("/");
};
</script>
