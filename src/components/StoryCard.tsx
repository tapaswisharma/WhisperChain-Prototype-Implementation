import React from 'react';
import { Book, Heart, GitBranch } from 'lucide-react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

export function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center gap-2 mb-3">
        <Book className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{story.content}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>by {story.author}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            <span>{story.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitBranch className="w-4 h-4" />
            <span>{story.branches}</span>
          </div>
        </div>
      </div>
    </div>
  );
}