
import Fastify from "fastify";
import prisma from "./plugins/prisma.js";

const app = Fastify({ logger: true });

app.get("/api/health", async () => {
  await prisma.$connect();

  const userCount = await prisma.user.count();

  return {
    success: true,
    database: "connected",
    users: userCount
  };
});

const start = async () => {
  try {
    await app.listen({ port: 4000, host: "127.0.0.1" });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
