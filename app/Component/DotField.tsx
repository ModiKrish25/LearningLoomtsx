import { dots } from "./data";

export default function DotField() {
  return (
    <>
      {dots.map(([color, left, top], index) => (
        <span key={index} className={`dot ${color}`} style={{ left, top }} />
      ))}
    </>
  );
}
