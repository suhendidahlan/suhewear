import { prisma } from "@/lib/prisma";

export const getData = async () => {
  try {
    const result = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataUser = async (user_id: string) => {
  try {
    const result = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
      where: { user_id: user_id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataById = async (id: string) => {
  try {
    const result = await prisma.trsingle.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
