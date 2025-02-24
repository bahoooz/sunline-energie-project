export type ArticleCategory =
  | "particuliers"
  | "aides-etat"
  | "societe"
  | "passer-au-solaire"
  | "technologie-solaire"
  | "pionniers-energie-solaire";

export interface ArticleMetadata {
  title: string;
  slug: string;
  date: string;
  category: ArticleCategory;
  image: string;
  description?: string;
  draft?: boolean;
}
