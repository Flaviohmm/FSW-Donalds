import { PrismaClient } from "@prisma/client";

declare global {
    // eslint-disable-next-line no-var
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!globalThis.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

// Vou usar para chamar meu banco de dados
export const db = prisma;