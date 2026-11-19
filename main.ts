// news-image-20261118 entry (Node 22, standard library only).
//
// The entry is a single image that sums up the world news of Wednesday
// 18 November 2026 as a newspaper front page: masthead and date, five
// real stories (Ukraine hits the Crimean bridge; Trump in Manila for
// Quad talks; Iran drones target a US radar in Bahrain; Cyclone Akvan
// strengthens; Dhoni retires from the IPL), each with a headline and a
// one-sentence caption. The image was drawn for this competition from
// news reported by the morning of 18 November 2026 (WIB); see
// BUILD_LOG.md for the stories and their sources.
//
// The image ships in the repository as base64 text (entry.png.b64, a
// single line) because the GitHub push tooling rejects binary files.
// This program reads that file, base64-decodes it, and writes the
// decoded PNG bytes to the output directory. It does no network access
// and no drawing at run time, so both runs write the same bytes.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png.b64', import.meta.url);
if (!existsSync(src)) {
  throw new Error('entry.png.b64 missing from repository');
}
const b64 = readFileSync(src, 'utf8').trim();
if (b64.length === 0) {
  throw new Error('entry.png.b64 is empty');
}
const png = Buffer.from(b64, 'base64');
if (png.length === 0) {
  throw new Error('entry.png.b64 decoded to zero bytes');
}
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png.b64 did not decode to a PNG (bad magic bytes)');
}
const EXPECTED_BYTES = 480520;
if (png.length !== EXPECTED_BYTES) {
  throw new Error(
    `entry.png.b64 decoded to ${png.length} bytes, expected ${EXPECTED_BYTES}`,
  );
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), png);
