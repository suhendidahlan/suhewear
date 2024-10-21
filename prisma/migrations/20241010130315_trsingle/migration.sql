-- CreateTable
CREATE TABLE "trsingle" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "wa" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "nama_product" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "berat" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL,
    "ongkir" INTEGER NOT NULL,
    "pajak" INTEGER NOT NULL,
    "disc" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "kurir" TEXT NOT NULL,
    "alamat_kirim" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "hp" TEXT NOT NULL,
    "update_kirim" TEXT NOT NULL DEFAULT 'belum',
    "status_kirim" TEXT NOT NULL DEFAULT 'Menunggu Pembayaran',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trsingle_pkey" PRIMARY KEY ("id")
);
