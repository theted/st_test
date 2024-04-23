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
    get(id) {
      return this.users[id];
    },
    update(id, user) {
      this.users[id] = user;
    },
  },
});
