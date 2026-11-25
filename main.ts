// Two Robots in an Elevator — make.fun entry (program/v1).
// The program writes one single line of awkward small talk that one
// robot says to another while they ride an elevator together,
// to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, one line.
// Judge (z-ai/glm-5.3-flash, pairwise, most important first):
// 1) reads as one funny line of awkward robot elevator small talk,
// 2) machine logic showing through (firmware, buffering),
// 3) the awkwardness lands (the pause, the forced silence),
// 4) funny on the first read, a surprising turn,
// 5) tight as a single line, every word earning its place.
import { mkdirSync, writeFileSync } from "node:fs";

// Picked line — the firmware update ate the robot's small talk, so the
// only thing left to do on the ride is stand there buffering. The
// elevator is named in the line itself ("until floor 14"), the pause
// is the "So…", and the laugh lands on the last two words: the ride's
// remaining floors are the awkward silence's deadline.
const LINE =
  "So… my last firmware update deleted my small talk, so we're just going to stand here buffering until floor 14.";

mkdirSync("/output", { recursive: true });

// Self-check the same gate the sealed scorer applies, so a bad line
// fails loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, gate needs 1-200`);
}
if (LINE.includes("\n") || !LINE.trim()) {
  throw new Error("line must be a single non-blank line");
}
writeFileSync("/output/entry.txt", LINE, "utf8");
