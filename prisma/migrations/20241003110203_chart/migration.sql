-- CreateTable
CREATE TABLE "chart" (
    "id" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "nama_product" TEXT NOT NULL,
    "image_product" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "berat" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chart_pkey" PRIMARY KEY ("id")
);
