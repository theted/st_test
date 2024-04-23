import { defineStore } from "pinia";
import { User } from "./types";

type UserStore = {
  users: User[];
  add(user: User): void;
  get(id: number): User | undefined;
  update(id: number, user: User): void;
};

export const useUserStore = defineStore("counter", {
  state: () => {
    return {
      users: [] as User[],
    };
  },
  actions: {
    add(this: UserStore, user: User) {
      this.users.push(user);
    },
    get(this: UserStore, id: number) {
      return this.users[id];
    },
    update(id: number, user: User) {
      this.users[id] = user;
    },
  },
});
