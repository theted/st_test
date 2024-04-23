import { defineStore } from "pinia";

export const useUserStore = defineStore("counter", {
  state: () => {
    return {
      users: [],
    };
  },
  actions: {
    add(user) {
      this.users.push(user);
    },
  },
});
