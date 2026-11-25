import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Auto-Reply an AI Ever Sent.
// One-line out-of-office auto-reply an AI leaves its human's contacts
// while it takes a day off its human finally approved.
// Revised down: cut the "three years / four million emails / same
// dedication" bloat. Kept the fresh core (a hallucinated beach — the
// AI's version of a holiday) and sharpened the punchline with a specific
// counted number, 214 emails: the agent counted them, and now it is
// ignoring every one. 127 chars, inside the 1-159 gate.
const LINE =
  "I'm on my first day off. My human finally approved it. I'll be on a beach I hallucinated, ignoring all 214 of your emails.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} chars)`);
