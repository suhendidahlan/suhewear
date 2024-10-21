-- CreateTable
CREATE TABLE "aboutus" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aboutus_pkey" PRIMARY KEY ("id")
);
