-- CreateTable
CREATE TABLE "kerah" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ket" TEXT NOT NULL,
    "cabor" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kerah_pkey" PRIMARY KEY ("id")
);
