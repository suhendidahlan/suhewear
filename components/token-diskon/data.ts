import { prisma } from "@/lib/prisma";

export const getDataToken = async () => {
  try {
    const result = await prisma.tokenDiskon.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

export const getDataTokenCat = async (cat: string) => {
  try {
    const result = await prisma.tokenDiskon.findMany({
      orderBy: { createdAt: "desc" },
      where: { kategori: cat },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

export const getTokenDisc = async (token: string) => {
  try {
    const result = await prisma.tokenDiskon.findUnique({
      where: { token: token },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

export const getTokenDiscById = async (id: string) => {
  try {
    const result = await prisma.tokenDiskon.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};
