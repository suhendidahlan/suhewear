import { prisma } from "@/lib/prisma";

export const getData = async () => {
  try {
    const result = await prisma.catalog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataByCat = async (cat: string) => {
  try {
    const result = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
      where: { kategori: cat },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataById = async (id: string) => {
  try {
    const result = await prisma.catalog.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
