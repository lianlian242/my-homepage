// src/App.tsx
import "./App.css";

const LINKS = {
  email: "lianl@wustl.edu",
  github: "https://github.com/lianlian242",
  linkedin: "https://linkedin.com/in/lian242",
  homepage: "https://lianlian242.github.io/my-homepage/",
};

type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: "LLM-based Power Grid Dispatch (LoRA Fine-tuning)",
    subtitle: "Domain reasoning + structured evaluation",
    bullets: [
      "Fine-tuned a 7B LLM with LoRA for power dispatch reasoning; reduced trainable parameters by >90% while maintaining performance.",
      "Built 5k+ instruction–response pairs covering load peaks, generator faults, and regulation constraints.",
      "Designed an evaluation framework (accuracy/coverage + text metrics) and validated on dispatch cases; improved dispatch accuracy (+27.5%) and coverage (+78%).",
    ],
    tags: ["LLM", "LoRA", "Domain Reasoning", "Evaluation"],
  },
  {
    title: "Power Grid Knowledge Graph (Neo4j + IE Pipeline)",
    subtitle: "Structured knowledge for downstream tooling",
    bullets: [
      "Engineered entity–relation extraction with BERT-BiLSTM-CRF (+ attention) and achieved F1 ~91.6%.",
      "Integrated 100k+ records into Neo4j to support compliance checks, fault diagnosis, and visualization.",
      "Implemented anomaly detection + repair pipeline to improve reliability of large-scale KG data.",
    ],
    tags: ["Knowledge Graph", "Neo4j", "Information Extraction", "Tooling"],
  },
  {
    title: "Graph-Enhanced Multimodal Misinformation Detection",
    subtitle: "Robust multimodal fusion + interpretability",
    bullets: [
      "Developed a multimodal fusion model (ResNet + BERT + graph features) with hierarchical attention; achieved 96.8% accuracy.",
      "Applied SHAP/LIME for interpretability to improve transparency and trustworthiness.",
      "Optimized ensemble strategies for robustness under noisy multimodal inputs.",
    ],
    tags: ["Multimodal", "Graph Features", "Attention", "Interpretability"],
  },
];

const READING = [
  {
    title: "Biomni: A General-Purpose Biomedical AI Agent",
    focus:
      "How agents plan tasks and integrate biomedical tools/knowledge sources for end-to-end workflows.",
  },
  {
    title: "SciSciGPT: Human–AI Collaboration in the Science of Science",
    focus:
      "Human-in-the-loop workflows and reproducible analysis pipelines for scientific discovery.",
  },
  {
    title: "Generative Interfaces for Language Models",
    focus:
      "Structured UI/state representations that make LLM interaction more controllable than pure chat.",
  },
  {
    title: "YAC: NL ↔ Interactive Visual Exploration for Biomedical Discovery",
    focus:
      "Natural language to structured queries + interactive visualization loops for biomedical data exploration.",
  },
];

function Pill({ children }: { children: string }) {
  return <span className="pill">{children}</span>;
}

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="section" id={id}>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="topRow">
          <div>
            <h1 className="name">Lian Lian</h1>
            <p className="headline">
              M.S. Student in Computer Science @ Washington University in St. Louis (WashU)
            </p>
            <p className="subheadline">
              LLM-based Agent Systems · Structured Scientific Workflows · Human–AI Collaboration
            </p>
          </div>

          <div className="cta">
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn primary" href={`mailto:${LINKS.email}`}>
              Email
            </a>
          </div>
        </div>

        <div className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#focus">Current Focus</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <main className="main">
        <Section title="About" id="about">
          <p className="para">
            I build <strong>LLM-based agent systems</strong> that integrate{" "}
            <strong>structured knowledge</strong>, <strong>tool use</strong>, and{" "}
            <strong>domain-specific reasoning</strong> to support scientific and biomedical discovery.
            My work combines LLM fine-tuning, knowledge graphs, retrieval pipelines, and evaluation
            frameworks to enable reliable multi-step reasoning.
          </p>
          <div className="callout">
            <div className="calloutTitle">Positioning</div>
            <div className="calloutBody">
              Bio Agent first (workflows + tools + evaluation), with enough interface capability
              (React + TypeScript) to build interactive systems for human-in-the-loop collaboration.
            </div>
          </div>
        </Section>

        <Section title="Selected Projects" id="projects">
          <div className="grid">
            {PROJECTS.map((p) => (
              <article className="card" key={p.title}>
                <div className="cardHeader">
                  <h3 className="cardTitle">{p.title}</h3>
                  <p className="cardSubtitle">{p.subtitle}</p>
                </div>
                <ul className="bullets">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="pillRow">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="miniNote">
            <strong>Note:</strong> Links to individual repos/demos can be added once I finalize which
            artifacts to share publicly.
          </div>
        </Section>

        <Section title="Current Reading & Research Focus" id="focus">
          <p className="para">
            I’m currently focusing on <strong>tool-augmented biomedical agents</strong> and{" "}
            <strong>structured interfaces</strong> that support iterative, reproducible discovery.
          </p>

          <div className="readingList">
            {READING.map((r) => (
              <div className="readingItem" key={r.title}>
                <div className="readingTitle">{r.title}</div>
                <div className="readingFocus">{r.focus}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Contact" id="contact">
          <div className="contact">
            <div className="contactRow">
              <span className="label">Email</span>
              <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
            </div>
            <div className="contactRow">
              <span className="label">GitHub</span>
              <a href={LINKS.github} target="_blank" rel="noreferrer">
                github.com/lianlian242
              </a>
            </div>
            <div className="contactRow">
              <span className="label">LinkedIn</span>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/lian242
              </a>
            </div>
            <div className="contactRow">
              <span className="label">Homepage</span>
              <a href={LINKS.homepage} target="_blank" rel="noreferrer">
                {LINKS.homepage}
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div>© 2026 Lian Lian</div>
      </footer>
    </div>
  );
}