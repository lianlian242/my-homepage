import "./App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Lian Lian</h1>
        <p>
          Master’s Student in Computer Science @ Washington University in St. Louis
        </p>
        <p className="keywords">
          LLM Agents · Tool-Augmented Reasoning · Graph-Enhanced Learning · Human–AI Collaboration
        </p>
      </header>

      <section>
        <h2>About</h2>
        <p>
          I am a Master’s student in Computer Science at Washington University in St. Louis.
          My research focuses on building LLM-based agent systems that integrate tool use,
          structured knowledge (e.g., graphs), and domain-specific reasoning to support
          reliable workflows for scientific and biomedical discovery.
        </p>
        <p>
          I am particularly interested in multi-step reasoning, retrieval/tool-augmented
          pipelines, and evaluation frameworks for agent reliability.
        </p>
      </section>

      <section>
        <h2>Selected Projects</h2>

        <h3>LLM-based Power Grid Dispatch (LoRA Fine-tuning)</h3>
        <ul>
          <li>Fine-tuned a 7B LLM using LoRA with a 5k+ instruction dataset.</li>
          <li>Designed a structured evaluation framework for dispatch reasoning.</li>
          <li>Improved dispatch accuracy (+27.5%) and coverage (+78%).</li>
        </ul>

        <h3>Power Grid Knowledge Graph</h3>
        <ul>
          <li>Developed entity–relation extraction with BERT-BiLSTM-CRF.</li>
          <li>Integrated 100k+ records into Neo4j for structured querying.</li>
          <li>Enabled compliance checks and fault diagnosis workflows.</li>
        </ul>

        <h3>Graph-Enhanced Multimodal Misinformation Detection</h3>
        <ul>
          <li>Built a multimodal fusion model (ResNet + BERT + graph features).</li>
          <li>Achieved 96.8% accuracy with hierarchical attention.</li>
          <li>Improved interpretability using SHAP/LIME.</li>
        </ul>
      </section>

      <section>
        <h2>Current Research Focus</h2>
        <p>
          I am currently exploring tool-augmented biomedical AI agents and
          structured human–AI collaboration systems for scientific discovery.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:lianl@wustl.edu">lianl@wustl.edu</a></p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/lianlian242" target="_blank">
            github.com/lianlian242
          </a>
        </p>
      </section>

      <footer>
        © 2026 Lian Lian
      </footer>
    </div>
  );
}