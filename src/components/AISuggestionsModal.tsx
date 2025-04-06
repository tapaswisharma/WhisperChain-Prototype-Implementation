import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { AISuggestion } from '../types';

interface AISuggestionsModalProps {
  suggestions: AISuggestion[];
  onClose: () => void;
  onSelect: (suggestion: AISuggestion) => void;
}

export function AISuggestionsModal({ suggestions, onClose, onSelect }: AISuggestionsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold">AI Suggestions</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => onSelect(suggestion)}
              className="p-4 border border-gray-200 rounded-lg hover:border-indigo-500 cursor-pointer transition-colors"
            >
              <p className="text-gray-700">{suggestion.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}