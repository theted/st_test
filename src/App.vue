<template>
  <div
    class="w-max-content mx-auto flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500"
  >
    <RouterView />
  </div>
</template>

<script setup>
import { useUserStore } from "./store";
import { createRandomUser } from "./helpers";
const users = useUserStore();

// create initial random users
for (let i = 0; i < 5; i++) {
  users.add(createRandomUser());
}
</script>
