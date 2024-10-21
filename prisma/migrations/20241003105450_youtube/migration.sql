-- CreateTable
CREATE TABLE "youtube" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "youtube_pkey" PRIMARY KEY ("id")
);
