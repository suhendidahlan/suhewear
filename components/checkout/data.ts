import { prisma } from "@/lib/prisma";
import { trsingle } from "@prisma/client";
import { updateDataTrans } from "../midtrans/data";

export const getData = async () => {
  try {
    const result = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
    });
    result.map(async (list: trsingle) => {
      const dataUser = await updateDataTrans(list.id);
      return dataUser;
    });
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
  try {
    const resultFinal = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
    });
    return resultFinal;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

export const getDataUser = async (user_id: string) => {
  try {
    const result = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
      where: { user_id: user_id },
    });
    result.map(async (list: trsingle) => {
      const dataUser = await updateDataTrans(list.id);
      return dataUser;
    });
    const resultFinal = await prisma.trsingle.findMany({
      orderBy: { createdAt: "desc" },
      where: { user_id: user_id },
    });
    return resultFinal;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};

export const getDataById = async (id: string) => {
  try {
    const result = await prisma.trsingle.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch Data");
  }
};
