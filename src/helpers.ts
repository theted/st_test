import { faker } from "@faker-js/faker";

export const createRandomUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
};
