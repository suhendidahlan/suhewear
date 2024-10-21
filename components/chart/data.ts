import { prisma } from "@/lib/prisma";

export const getListProducts = async (id: string) => {
  try {
    const result = await prisma.chart.findMany({
      where: { user_id: id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getProductById = async (id: string) => {
  try {
    const result = await prisma.chart.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
