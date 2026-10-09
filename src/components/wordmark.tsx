type WordmarkProps = {
  size: "sm" | "lg";
};

export function Wordmark({ size }: WordmarkProps) {
  if (size === "sm") {
    return (
      <span className="wordmark wordmark-sm">
        <img src="/icons/ellipse-sm.svg" alt="" width={32} height={32} />
        <span>st .</span>
      </span>
    );
  }

  return (
    <span className="wordmark wordmark-lg" aria-hidden="true">
      <img src="/icons/ellipse-lg.svg" alt="" width={632} height={632} />
      <span>st .</span>
    </span>
  );
}
