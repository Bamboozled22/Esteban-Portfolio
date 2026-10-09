"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={copied ? "copy-button is-copied" : "copy-button"}
      onClick={copyEmail}
      aria-live="polite"
    >
      <img src="/icons/copy.svg" alt="" width={18} height={18} />
      <span className="copy-label">
        <span className="copy-email">{email}</span>
        <span className="copy-done">Copied</span>
      </span>
    </button>
  );
}
