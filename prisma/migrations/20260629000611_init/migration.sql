/*
  Warnings:

  - Added the required column `senha` to the `Developer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Developer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Developer" ("githubUrl", "id", "nome") SELECT "githubUrl", "id", "nome" FROM "Developer";
DROP TABLE "Developer";
ALTER TABLE "new_Developer" RENAME TO "Developer";
CREATE UNIQUE INDEX "Developer_githubUrl_key" ON "Developer"("githubUrl");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
