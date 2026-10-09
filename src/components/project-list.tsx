import type { Project } from "@/content/portfolio";

type ProjectListProps = {
  projects: Project[];
};

function rowsOf(projects: Project[]) {
  const rows: Project[][] = [];
  let pending: Project[] = [];

  for (const project of projects) {
    if (project.layout === "featured") {
      if (pending.length > 0) {
        rows.push(pending);
        pending = [];
      }
      rows.push([project]);
      continue;
    }

    pending.push(project);
    if (pending.length === 2) {
      rows.push(pending);
      pending = [];
    }
  }

  if (pending.length > 0) {
    rows.push(pending);
  }

  return rows;
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="project-grid" id="work">
      {rowsOf(projects).map((row) => (
        <div
          key={row.map((project) => project.id).join("-")}
          className={
            row.length === 1 && row[0].layout === "featured"
              ? "project-row is-featured"
              : "project-row"
          }
        >
          {row.map((project) => (
            <article key={project.id} id={project.slug} className="project">
              <div
                className={
                  project.layout === "featured"
                    ? "media-frame media-frame-featured"
                    : "media-frame media-frame-half"
                }
              >
                <img
                  className="media"
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.layout === "featured" ? 1312 : 644}
                  height={project.layout === "featured" ? 656 : 604}
                />
              </div>
              <div className="project-meta">
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="project-copy">
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}
