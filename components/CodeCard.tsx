// Tarjeta decorativa con el perfil escrito como código; reemplaza a la foto de stock.
// El contenido es código, no texto de interfaz, por eso no se traduce.
const CodeCard = () => (
  <div className="code-card" aria-hidden="true">
    <div className="code-card-bar">
      <span />
      <span />
      <span />
    </div>
    <pre>
      <code>
        <span className="code-muted">const</span> bianca = {"{"}
        {"\n  "}
        <span className="code-key">role</span>:{" "}
        <span className="code-string">&quot;Software Engineer III&quot;</span>,
        {"\n  "}
        <span className="code-key">company</span>:{" "}
        <span className="code-string">&quot;Dialpad&quot;</span>,{"\n  "}
        <span className="code-key">frontend</span>: [
        <span className="code-string">&quot;React&quot;</span>,{" "}
        <span className="code-string">&quot;Vue.js&quot;</span>,{" "}
        <span className="code-string">&quot;TypeScript&quot;</span>],{"\n  "}
        <span className="code-key">ai</span>: [
        <span className="code-string">&quot;Claude&quot;</span>,{" "}
        <span className="code-string">&quot;ChatGPT&quot;</span>,{" "}
        <span className="code-string">&quot;Gemini&quot;</span>],{"\n  "}
        <span className="code-key">location</span>:{" "}
        <span className="code-string">&quot;Bahía Blanca, AR&quot;</span>,{"\n"}
        {"}"};
      </code>
    </pre>
  </div>
);

export default CodeCard;
