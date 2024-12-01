import { prisma } from "@/lib/prisma";

export const getImages = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getImagesByCat = async (cat: string) => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
      where: { kategori: cat },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await prisma.produk.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataProductTerbaru = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
      take: 8,
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

export const getDataProductTerbaruKategori = async (cat: string) => {
  try {
    const result = await prisma.produk.findMany({
      where: { kategori: cat },
      orderBy: { createdAt: "desc" },
      take: 8,
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

//dashboard
export const getDataProducts = async () => {
  try {
    const result = await prisma.produk.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};
