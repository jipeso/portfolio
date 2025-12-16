export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface ProjectWithImage extends Project {
  image: string;
}
