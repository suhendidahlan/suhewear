-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "image" TEXT NOT NULL DEFAULT '/user.jpg',
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "diskon" INTEGER NOT NULL DEFAULT 0,
    "kredit" INTEGER NOT NULL DEFAULT 0,
    "poin" INTEGER NOT NULL DEFAULT 0,
    "telp" TEXT,
    "alamat" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "followus" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "followus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "youtube" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "youtube_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aboutus" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "aboutus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carousel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "carousel_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "gallery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "sub" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bahan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ket" TEXT NOT NULL,
    "cabor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bahan_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "pola" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ket" TEXT NOT NULL,
    "cabor" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "custom_banner" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "ket" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "custom_banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produk" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "sub1" TEXT NOT NULL DEFAULT 'no data',
    "sub2" TEXT NOT NULL DEFAULT 'no data',
    "sub3" TEXT NOT NULL DEFAULT 'no data',
    "berat" INTEGER NOT NULL,
    "size_xs" INTEGER NOT NULL,
    "size_s" INTEGER NOT NULL,
    "size_m" INTEGER NOT NULL,
    "size_l" INTEGER NOT NULL,
    "size_xl" INTEGER NOT NULL,
    "size_xxl" INTEGER NOT NULL,
    "size_xxxl" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL,
    "harga_disc" INTEGER NOT NULL DEFAULT 0,
    "disc_label" TEXT NOT NULL DEFAULT 'no',
    "status" TEXT NOT NULL DEFAULT 'on sale',
    "deskripsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produk_pkey" PRIMARY KEY ("id")
);

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
    "resi" TEXT,
    "update_kirim" TEXT NOT NULL DEFAULT 'belum',
    "status_kirim" TEXT NOT NULL DEFAULT 'Menunggu Pembayaran',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trsingle_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "tokenDiskon" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "percent" INTEGER,
    "nominal" INTEGER,
    "poin" INTEGER,
    "product" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokenDiskon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokenGosok" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "uraian" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokenGosok_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewardProduct" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "user_id" TEXT,
    "title" TEXT NOT NULL,
    "jumlah" TEXT NOT NULL,
    "isClaimed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rewardProduct_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "tokenDiskon_token_key" ON "tokenDiskon"("token");

-- CreateIndex
CREATE UNIQUE INDEX "tokenGosok_token_key" ON "tokenGosok"("token");

-- CreateIndex
CREATE UNIQUE INDEX "rewardProduct_token_key" ON "rewardProduct"("token");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
