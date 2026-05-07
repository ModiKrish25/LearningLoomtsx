import type { IconType } from "./types";

const glyphs: Record<IconType, string> = {
  bag: "\u25a3",
  target: "\u25ce",
  doc: "\u25a7",
  send: "\u27a4",
  check: "\u2713"
};

export default function Icon({ type }: { type: IconType }) {
  return <span className="icon">{glyphs[type] || glyphs.check}</span>;
}
