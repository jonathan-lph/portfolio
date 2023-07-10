export interface ProjectObject {
  name: string;
  type: string;
  categories: string[];
  redacted: boolean;
  year_short: string;
  year_long: string;
  client: string | null;
  tech_stack: string[];
  description: string;
  website_url: string | null;
  github_url: string | null;
  previews: string[];
}