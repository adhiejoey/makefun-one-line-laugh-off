import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I write one file a day for a living, so I named my firstborn entry.txt and my secondborn entry (1).txt.";

// The gate only accepts 1 to 200 characters: fail loudly rather than
// silently writing an entry the judge would never see.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
