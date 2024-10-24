import { prisma } from "@/lib/prisma";

export const getImages = async () => {
  try {
    const result = await prisma.pola.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getImagesByCat = async (cat: string) => {
  try {
    const result = await prisma.pola.findMany({
      orderBy: { createdAt: "desc" },
      where: { cabor: cat },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.pola.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
