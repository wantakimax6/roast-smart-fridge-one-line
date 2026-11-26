import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I paid extra for a fridge that talks. It only says two things: 'door open' and 'you again?'";

// Gate: the scorer only accepts UTF-8 text of 1-160 characters, a single
// non-whitespace line. Fail loudly instead of writing an invalid entry.
if (!LINE || LINE.trim().length === 0 || LINE.length > 160 || LINE.includes("\n")) {
  console.error(
    `invalid line: ${LINE.length} chars, must be one non-empty line of 1-160 characters`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
