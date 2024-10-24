import { prisma } from "@/lib/prisma";

export const getData = async () => {
  try {
    const result = await prisma.followus.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataById = async (id: string) => {
  try {
    const result = await prisma.followus.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
