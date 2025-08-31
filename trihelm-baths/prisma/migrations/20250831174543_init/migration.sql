-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "images" JSONB NOT NULL,
    "specs" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
