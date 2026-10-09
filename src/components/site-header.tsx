import type { ReactNode } from "react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Wordmark } from "@/components/wordmark";
import type { PortfolioContent } from "@/content/portfolio";

type SiteHeaderProps = {
  content: PortfolioContent;
};

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (!href) {
    return <span className="outline-link">{children}</span>;
  }

  return (
    <a className="outline-link" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function SiteHeader({ content }: SiteHeaderProps) {
  return (
    <header className="header">
      <div className="brand-pill">
        <a className="brand-mark" href="#top" aria-label="Esteban Abinal-Bally, home">
          <Wordmark size="sm" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="#work">
            Work
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
        </nav>
      </div>
      <div className="actions-pill">
        <ActionLink href={content.resumeUrl}>
          <img src="/icons/file.svg" alt="" width={18} height={18} />
          Resume
        </ActionLink>
        <ActionLink href={content.linkedinUrl}>
          <img src="/icons/linkedin.svg" alt="" width={18} height={18} />
          Linkedin
        </ActionLink>
        <CopyEmailButton email={content.email} />
      </div>
    </header>
  );
}
