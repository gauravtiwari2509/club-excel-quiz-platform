/*
  Warnings:

  - A unique constraint covering the columns `[nistEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[roll]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isNistian` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isNistian" BOOLEAN NOT NULL,
ADD COLUMN     "nistEmail" TEXT,
ADD COLUMN     "roll" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_nistEmail_key" ON "User"("nistEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_roll_key" ON "User"("roll");
