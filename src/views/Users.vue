<template>
  <Card>
    <Table :data="users" />
    <Link to="/create" text="Create new user" />
  </Card>
</template>

<script setup lang="ts">
import { useUserStore } from "../store";
import Card from "../components/Card.vue";
import Table from "../components/Table.vue";
import Link from "../components/Link.vue";

const { users } = useUserStore();
</script>
