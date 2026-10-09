"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  function copyWithSelection() {
    const area = document.createElement("textarea");
    area.value = email;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.focus();
    area.select();
    const didCopy = document.execCommand("copy");
    area.remove();
    return didCopy;
  }

  async function copyEmail() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      copyWithSelection();
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
      <span className="copy-label">{copied ? "Copied" : email}</span>
    </button>
  );
}
