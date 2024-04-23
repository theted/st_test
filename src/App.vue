<template>
  <div
    class="w-max-content mx-auto flex flex-col items-center justify-center h-screen bg-blue-300"
  >
    <RouterView />
  </div>
</template>

<script setup>
import { useUserStore } from "./store";
import { createRandomUser } from "./helpers";
const users = useUserStore();

// create initial random users
for (let i = 0; i < 10; i++) {
  users.add(createRandomUser());
}
</script>
