import { Story, AISuggestion } from './types';

export const dailyPrompt = "In a world where dreams become tangible objects while people sleep...";

export const stories: Story[] = [
  {
    id: "1",
    title: "The Midnight Library Echo",
    content: "The books whispered at midnight, their pages rustling with untold stories. Sarah stood in the center of the ancient library, watching as golden threads of narrative wove through the air...",
    author: "Elena Rivers",
    likes: 234,
    branches: 12,
    createdAt: "2024-03-15"
  },
  {
    id: "2",
    title: "Quantum Lullaby",
    content: "The quantum computer hummed a strange melody, a lullaby of ones and zeros that seemed to bend reality itself. Dr. Chen checked the readings again, her hands trembling...",
    author: "Marcus Zhang",
    likes: 189,
    branches: 8,
    createdAt: "2024-03-14"
  },
  {
    id: "3",
    title: "The Last Garden",
    content: "In the midst of the concrete jungle, there was one last garden. Its flowers glowed with an otherworldly light, and the air sparkled with possibility...",
    author: "Maya Patel",
    likes: 156,
    branches: 5,
    createdAt: "2024-03-13"
  }
];

export const aiSuggestions: AISuggestion[] = [
  {
    id: "1",
    content: "The golden threads began to pulse with an ancient rhythm, each beat revealing fragments of forgotten tales. Sarah reached out, her fingers brushing against a strand that felt warm to the touch..."
  },
  {
    id: "2",
    content: "A book flew from its shelf, its pages fanning open like wings. Within its weathered margins, Sarah saw handwritten notes that seemed to shift and change before her eyes..."
  },
  {
    id: "3",
    content: "The whispers grew louder, forming a chorus of voices that spoke of a hidden door beneath the library's foundations. Sarah's heart raced as she recognized one voice among the many..."
  }
];