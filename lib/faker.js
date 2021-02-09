const faker = require('faker');

const generateFaker = () => {
  const randomName = faker.name.findName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

  return randomName, randomEmail
}

console.log(generateFaker());
