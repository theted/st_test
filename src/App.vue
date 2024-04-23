<script setup lang="ts"></script>

<template>
  <Table :data="data" />
</template>

<script setup lang="ts">
import Table from "./components/Table.vue";
import { faker } from "@faker-js/faker";

const createRandomUser = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
});

const generateInitialData = () => {
  return Array.from({ length: 10 }).map(() => createRandomUser());
};

const data = generateInitialData();
</script>
