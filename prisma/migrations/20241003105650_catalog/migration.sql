-- CreateTable
CREATE TABLE "catalog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "pola" TEXT NOT NULL,
    "kerah" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "catalog_pkey" PRIMARY KEY ("id")
);
