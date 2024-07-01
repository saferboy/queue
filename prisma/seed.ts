import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createuser = async () => {
  await prisma.auth.create({
    data: {
      username: "root",
      password: "1234",
      device_id: 1,
      device_name: "device",
      description: "Lorem ipsum dolor sit amet",
    },
  });
};

const main = async () => {
  await createuser();
};

main()
  .then(() => {
    console.log("create default user");
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
