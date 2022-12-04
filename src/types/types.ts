export interface FullProject {
  id: string;
  title: string;
  description: string;
  demo_url: string;
  preview: string[];
  created_at: string;
  edited_at: string;
  repo: string|null;
  contributors: any[]
}

export interface ReducedProjectType {
  id: string;
  title: string;
  description: string;
  preview: string;
}

export interface Technology {
  id: string;
  name: string;
  p_id: string;
}