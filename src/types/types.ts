export interface FullProject {
  id: string;
  title: string;
  description: string;
  code_link: string;
  demo_link: string;
  preview: string[];
  created_at: string;
  edited_at: string;
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