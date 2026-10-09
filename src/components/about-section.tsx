import type { TimelineEntry } from "@/content/portfolio";

const experienceLines = [
  "/icons/line-1.svg",
  "/icons/line-2.svg",
  "/icons/line-3.svg",
];

const educationLines = ["/icons/line-4.svg", "/icons/line-5.svg"];

type AboutSectionProps = {
  title: string;
  body: string;
  experience: TimelineEntry[];
  education: TimelineEntry[];
};

function Timeline({
  heading,
  entries,
  lines,
}: {
  heading: string;
  entries: TimelineEntry[];
  lines: string[];
}) {
  return (
    <section className="timeline">
      <h3>{heading}</h3>
      {entries.map((entry, index) => (
        <div key={entry.id} className="timeline-row">
          <p className="timeline-label">{entry.label}</p>
          <img
            className="rule"
            src={lines[index] ?? lines[0]}
            alt=""
            width={221}
            height={1}
          />
          <p className="dates">
            <span>{entry.start}</span>
            <img src="/icons/arrow-right.svg" alt="" width={24} height={24} />
            <span>{entry.end}</span>
          </p>
        </div>
      ))}
    </section>
  );
}

export function AboutSection({
  title,
  body,
  experience,
  education,
}: AboutSectionProps) {
  return (
    <section className="about" id="about">
      <div className="about-intro">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <Timeline heading="Experience" entries={experience} lines={experienceLines} />
      <Timeline heading="Education" entries={education} lines={educationLines} />
    </section>
  );
}
