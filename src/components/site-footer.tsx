import type { ReactNode } from "react";
import { Wordmark } from "@/components/wordmark";
import type { PortfolioContent } from "@/content/portfolio";

type SiteFooterProps = {
  content: PortfolioContent;
};

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  if (!href) {
    return <span className="footer-link is-static">{children}</span>;
  }

  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      className="footer-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <nav className="footer-col" aria-label="Pages">
            <h2>Pages</h2>
            <a className="footer-link" href="#top">
              Home
            </a>
            <a className="footer-link" href="#work">
              Work
            </a>
            <a className="footer-link" href="#about">
              About
            </a>
          </nav>
          <nav className="footer-col" aria-label="Work">
            <h2>Work</h2>
            {content.projects.map((project) => (
              <a key={project.id} className="footer-link" href={`#${project.slug}`}>
                {project.footerLabel}
              </a>
            ))}
          </nav>
          <nav className="footer-col" aria-label="Contact">
            <h2>Contact</h2>
            <FooterLink href={`mailto:${content.email}`}>Email</FooterLink>
            <FooterLink href={content.resumeUrl}>Resume</FooterLink>
            <FooterLink href={content.linkedinUrl}>Linkedin</FooterLink>
          </nav>
        </div>
        <p className="footer-name">{content.footerName}</p>
      </div>
      <Wordmark size="lg" />
    </footer>
  );
}
