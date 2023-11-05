/*
  Warnings:

  - You are about to drop the `PeopleTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PeopleTeam";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "peopleTeam" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "teamName" TEXT NOT NULL
);
