/**
 * Portfolio content for the home page.
 *
 * The page reads only this shape. To move projects, experience, and
 * education into Sanity later, replace `getPortfolio()` with a Sanity
 * client fetch and map documents onto `PortfolioContent`. Suggested types:
 * siteSettings, project, experience, education.
 *
 * `resumeUrl` and `linkedinUrl` are optional until the real links exist.
 * An empty string renders the control without sending people to a dead URL.
 */

export type ProjectLayout = "featured" | "half";

export type Project = {
  id: string;
  slug: string;
  title: string;
  footerLabel: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  layout: ProjectLayout;
};

export type TimelineEntry = {
  id: string;
  label: string;
  start: string;
  end: string;
};

export type PortfolioContent = {
  name: string;
  footerName: string;
  roleLead: string;
  roleStudio: string;
  email: string;
  resumeUrl: string;
  linkedinUrl: string;
  aboutTitle: string;
  aboutBody: string;
  projects: Project[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
};

const portfolio: PortfolioContent = {
  name: "Esteban Abinal-Bally",
  footerName: "Esteban Abinal Bally",
  roleLead:
    "Currently working as a World Designer for Assassin's Creed Codename HEXE at",
  roleStudio: "Ubisoft Montreal",
  email: "esteban.abinal.bally1@gmail.com",
  resumeUrl: "",
  linkedinUrl: "",
  aboutTitle: "About me",
  aboutBody:
    "With a diploma in Game Design from LISAA Paris (2021), I continued my studies by specializing in Level Design at ISART Digital, Montreal. I'm now working full time as a World Level Designer at Ubisoft Montreal.",
  projects: [
    {
      id: "project-hexe",
      slug: "assassins-creed-hexe",
      title: "Assassin’s Creed Hexe",
      footerLabel: "Assassin’s creed Hexe",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque",
      tags: ["Professional project", "World design"],
      image: "/images/assassins-creed-hexe.png",
      imageAlt: "Assassin's Creed Codename Hexe key art",
      layout: "featured",
    },
    {
      id: "project-stealth",
      slug: "stealth",
      title: "Stealth",
      footerLabel: "Stealth",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque",
      tags: ["Personal project", "Level design"],
      image: "/images/stealth.png",
      imageAlt: "Sunlit desert town level from the Stealth project",
      layout: "half",
    },
    {
      id: "project-shooter",
      slug: "third-person-shooter",
      title: "Third person shooter",
      footerLabel: "Third person shooter",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque",
      tags: ["Personal project", "Level design"],
      image: "/images/third-person-shooter.png",
      imageAlt: "Blockout of a dense city for the third person shooter",
      layout: "half",
    },
    {
      id: "project-muertos",
      slug: "los-muertos",
      title: "Los Muertos",
      footerLabel: "Los Muertos",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque",
      tags: ["Student group project", "Level design", "UE4"],
      image: "/images/los-muertos.png",
      imageAlt: "Colorful night street from Los Muertos",
      layout: "half",
    },
    {
      id: "project-klowns",
      slug: "killerklowns",
      title: "Killerklowns",
      footerLabel: "Killer Klowns",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque",
      tags: ["Professional project", "Game trailer", "Level art", "UE5"],
      image: "/images/killerklowns.png",
      imageAlt: "Killer Klowns from Outer Space key art",
      layout: "half",
    },
  ],
  experience: [
    {
      id: "exp-ubisoft",
      label: "World Designer at Ubisoft",
      start: "September 2024",
      end: "Present",
    },
    {
      id: "exp-mathematic",
      label: "Intern at Mathematic Studio Paris",
      start: "September 2021",
      end: "June 2022",
    },
    {
      id: "exp-lisaa-project",
      label: "Game and Level design project at LISAA",
      start: "November 2020",
      end: "June 2021",
    },
  ],
  education: [
    {
      id: "edu-isart",
      label: "ISART Digital",
      start: "September 2022",
      end: "May 2024",
    },
    {
      id: "edu-lisaa",
      label: "LISAA",
      start: "September 2018",
      end: "June 2021",
    },
  ],
};

export async function getPortfolio(): Promise<PortfolioContent> {
  return portfolio;
}
