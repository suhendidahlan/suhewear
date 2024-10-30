import { prisma } from "@/lib/prisma";
import { wait } from "@/lib/loading";

export const getData = async () => {
  try {
    const result = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
    });
    await wait(500);
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
    const result = await prisma.gallery.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
