import { AboutSection } from "@/components/about-section";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPortfolio } from "@/content/portfolio";

export default async function HomePage() {
  const content = await getPortfolio();

  return (
    <div className="frame" id="top">
      <SiteHeader content={content} />
      <main className="shell">
        <div className="stack">
          <div className="lede">
            <header className="hero">
              <h1>{content.name}</h1>
              <p className="hero-role">
                {content.roleLead}
                <br />
                {content.roleStudio}
              </p>
            </header>
            <ProjectList projects={content.projects} />
          </div>
          <AboutSection
            title={content.aboutTitle}
            body={content.aboutBody}
            experience={content.experience}
            education={content.education}
          />
        </div>
      </main>
      <SiteFooter content={content} />
    </div>
  );
}
