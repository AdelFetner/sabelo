/*
  Warnings:

  - You are about to alter the column `type` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[cbu]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[alias]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `currency` VARCHAR(191) NOT NULL DEFAULT 'ARS';

-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `type` ENUM('INCOME', 'EXPENSE') NOT NULL,
    MODIFY `category` VARCHAR(191) NULL DEFAULT 'uncategorized';

-- CreateIndex
CREATE UNIQUE INDEX `Account_cbu_key` ON `Account`(`cbu`);

-- CreateIndex
CREATE UNIQUE INDEX `Account_alias_key` ON `Account`(`alias`);
