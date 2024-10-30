import { prisma } from "@/lib/prisma";

export const getDataUsers = async () => {
  try {
    const result = await prisma.user.findMany({
      where: { isActive: true },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataById = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataByEmail = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
