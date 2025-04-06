import React, { useState } from 'react';
import { ArrowLeft, Plus, Bot, Wand2, Video } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [story, setStory] = useState("Sarah was having an average day at work until her boss called her into his office. 'I\'ve been thinking about your performance lately,' he began...");
  const [continuation, setContinuation] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="min-h-screen bg-[#4A148C] text-white p-6">
      <header className="flex items-center mb-8">
        <button className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold mx-auto pr-8">STORY CHAIN</h1>
      </header>

      <h2 className="text-4xl font-bold mb-8">Continue the Story!</h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#673AB7] rounded-3xl p-6 mb-8"
      >
        <p className="text-lg mb-4">{story}</p>
        <textarea
          value={continuation}
          onChange={(e) => setContinuation(e.target.value)}
          placeholder="Add to the story..."
          className="w-full bg-transparent text-white placeholder-[#B39DDB] focus:outline-none text-lg"
          rows={3}
        />
      </motion.div>

      <h3 className="text-3xl font-bold mb-6">A New Story Awaits</h3>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#673AB7] rounded-2xl p-4 flex items-center justify-center gap-2 mb-6"
      >
        <Plus className="w-6 h-6" />
        <span className="text-xl">Start a Story</span>
      </motion.button>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {showFeedback ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#673AB7] rounded-2xl p-6 col-span-2 text-center"
          >
            <Bot className="w-12 h-12 mx-auto mb-4" />
            <p className="text-xl mb-4">Great addition! Would you like to add more?</p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#4A148C] px-6 py-2 rounded-full">No</button>
              <button className="bg-[#7E57C2] px-6 py-2 rounded-full">Yes</button>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#673AB7] rounded-2xl p-6 text-center"
            >
              <Bot className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg">Great addition! Would you like to add more?</p>
              <div className="flex justify-center gap-2 mt-4">
                <button className="bg-[#4A148C] px-4 py-1 rounded-full text-sm">No</button>
                <button className="bg-[#7E57C2] px-4 py-1 rounded-full text-sm">Yes</button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#673AB7] rounded-2xl p-6 text-center"
            >
              <Wand2 className="w-12 h-12 mx-auto mb-2" />
              <p className="text-lg">See how the story continues?</p>
              <button className="bg-[#7E57C2] px-6 py-2 rounded-full mt-4">
                Generate
              </button>
            </motion.div>
          </>
        )}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#673AB7] rounded-2xl p-6 flex items-center gap-4"
      >
        <div className="bg-[#7E57C2] rounded-full p-3">
          <Video className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-1">Want an AI-generated video?</h4>
          <p className="text-[#B39DDB] text-sm">Create an animated storytelling video based on your story!</p>
        </div>
        <button className="bg-[#7E57C2] px-6 py-2 rounded-full">
          Generate
        </button>
      </motion.div>
    </div>
  );
}

export default App;