// entry.txt: the sentence a house cat says five seconds after knocking a glass off the table.
import { mkdirSync, writeFileSync } from "node:fs";

// No apology, no confession: the cat frames it as a settled property dispute,
// which is its own logic rather than a person in a fur suit.
const EXCUSE =
  "The glass and I had a disagreement about who owns this table. " +
  "The floor settled it.";

// 80 characters; the gate allows 1 to 200 of UTF-8 text.
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", EXCUSE + "\n", "utf8");
