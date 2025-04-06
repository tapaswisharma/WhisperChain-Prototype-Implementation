export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  branches: number;
  createdAt: string;
}

export interface AISuggestion {
  id: string;
  content: string;
}