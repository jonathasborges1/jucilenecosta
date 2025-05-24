// scripts/generate-version.ts
import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { join } from "path";

function getCommitCount(): number {
  const count = execSync("git rev-list --count HEAD").toString().trim();
  return parseInt(count, 10);
}

function getShortHash(): string {
  return execSync("git rev-parse --short HEAD").toString().trim();
}

function generateVersion() {
  const count = getCommitCount();
  const hash = getShortHash();
  const version = `v0.${count}.${hash}`;

  const filePath = join(__dirname, "../src/version.ts");
  const fileContent = `export const APP_VERSION = "${version}";\n`;

  writeFileSync(filePath, fileContent);
  console.log(`Generated version: ${version}`);
}

generateVersion();
