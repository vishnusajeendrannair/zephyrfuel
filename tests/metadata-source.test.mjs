import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("social descriptions use the mobility positioning", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(layout, /openGraph:[\s\S]*mobility operations/i);
  assert.match(layout, /twitter:[\s\S]*mobility operations/i);
  assert.doesNotMatch(layout, /for fleets, industrial facilities/i);
});
