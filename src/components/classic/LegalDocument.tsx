import type { LegalDocumentContent } from "@/lib/legal";

function LegalParagraph({ text }: { text: string }) {
  if (text.startsWith("https://")) {
    return (
      <p className="legal-document-p">
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </p>
    );
  }

  return <p className="legal-document-p">{text}</p>;
}

export function LegalDocument({ content }: { content: LegalDocumentContent }) {
  return (
    <article className="legal-document">
      <header>
        <h1 className="text-2xl font-semibold text-text md:text-3xl">
          {content.title}
        </h1>
        <p className="legal-document-intro mt-4">{content.intro}</p>
        <p className="mt-2 text-xs text-text-subtle">{content.updated}</p>
      </header>

      <div className="mt-10 space-y-8">
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-text">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph, index) => (
                <LegalParagraph key={`${section.title}-${index}`} text={paragraph} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
