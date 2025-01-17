import { PrismaClient } from "@prisma/client/edge";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();
export const db = prisma;

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
