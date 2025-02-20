/*
  Warnings:

  - You are about to drop the column `topic` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Quiz` table. All the data in the column will be lost.
  - Added the required column `topicName` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_userId_fkey";

-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "isCorrect" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "topic",
ADD COLUMN     "topicName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "category",
DROP COLUMN "status",
ADD COLUMN     "categoryName" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quiz" ADD CONSTRAINT "Quiz_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_topicName_fkey" FOREIGN KEY ("topicName") REFERENCES "Topic"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
