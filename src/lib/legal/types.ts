export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalDocumentContent = {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};
