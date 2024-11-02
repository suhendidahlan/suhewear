"use server";
import nextBase64 from "next-base64";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateDataTrans = async (id: string) => {
  const Auth = nextBase64.encode(
    `${process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY}` + ":"
  );

  const response = await fetch(
    `https://api.sandbox.midtrans.com/v2/${id}/status`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Auth}`,
      },
    }
  );
  const requestData = await response.json();

  if (requestData.status_code === "200") {
    if (requestData.transaction_status === "settlement" || "capture") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Lunas",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (requestData.transaction_status === "pending") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Pending",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (requestData.transaction_status === "deny" || "cancel") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Dibatalkan",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (
      requestData.transaction_status === "refund" ||
      "partial_refund"
    ) {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Refund / Dikembalikan",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Menunggu Pembayaran",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    }
  } else {
    try {
      await prisma.trsingle.update({
        data: {
          status_kirim: "Menunggu Pembayaran",
        },
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update data" };
    }
    revalidatePath("/");
  }

  // try {
  //   const result = await prisma.trsingle.findUnique({
  //     where: { id },
  //   });
  //   return result;
  // } catch (error) {
  //   throw new Error("Failed to fetch data");
  // }
};

// const statusMidtrans = async (id: string) => {
//   const Auth = nextBase64.encode(
//     `${process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY}` + ":"
//   );

//   const response = await fetch(
//     `https://api.sandbox.midtrans.com/v2/${id}/status`,
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Basic ${Auth}`,
//       },
//     }
//   );
//   const requestData = await response.json();
//   return requestData;
// };

export const updateDataTransById = async (id: string) => {
  const Auth = nextBase64.encode(
    `${process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY}` + ":"
  );

  const response = await fetch(
    `https://api.sandbox.midtrans.com/v2/${id}/status`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${Auth}`,
      },
    }
  );
  const requestData = await response.json();

  if (requestData.status_code === "200") {
    if (requestData.transaction_status === "settlement" || "capture") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Lunas",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (requestData.transaction_status === "pending") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Pending",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (requestData.transaction_status === "deny" || "cancel") {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Dibatalkan",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else if (
      requestData.transaction_status === "refund" ||
      "partial_refund"
    ) {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Refund / Dikembalikan",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    } else {
      try {
        await prisma.trsingle.update({
          data: {
            status_kirim: "Menunggu Pembayaran",
          },
          where: { id },
        });
      } catch (error) {
        return { message: "Failed to update data" };
      }
      revalidatePath("/");
    }
  } else {
    try {
      await prisma.trsingle.update({
        data: {
          status_kirim: "Menunggu Pembayaran",
        },
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update data" };
    }
    revalidatePath("/");
  }

  try {
    const result = await prisma.trsingle.findUnique({
      where: { id },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
