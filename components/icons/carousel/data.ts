import { prisma } from "@/lib/prisma";

export const getImages = async () => {
  try {
    const result = await prisma.carousel.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.carousel.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
