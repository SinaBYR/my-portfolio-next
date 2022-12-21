export interface User {
  id: string;
  username: string;
  created_at: string;
  last_sign_in: string;
  isLoggedIn: boolean;
}

export interface FullProjectType {
  id: string;
  title: string;
  description: string;
  demo_url: string;
  created_at: string;
  last_edited_at: string;
  repo: string|null;
}

export interface ReducedProjectType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techList: string[];
}

export interface Technology {
  id: string;
  name: string;
  p_id: string;
}