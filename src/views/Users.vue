<template>
  <Table :data="users" />
  <Link to="/create" text="Create new user" />
</template>

<script setup lang="ts">
import { useUserStore } from "../store";
import Table from "../components/Table.vue";
import Link from "../components/Link.vue";

const { users } = useUserStore();
</script>
