import { prisma } from "@/lib/prisma";

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
