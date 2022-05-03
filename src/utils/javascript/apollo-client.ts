const { PrismaClient } = require('@prisma/client');
let prisma;
if (process.env.NODE_ENV === 'production') {
  let prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}
module.exports = prisma;
export { prisma };
