import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2 } from 'lucide-react';
import { PlaylistItem } from '../types/playlist';

interface PlayerProps {
  currentSkill: PlaylistItem;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const Player: React.FC<PlayerProps> = ({
  currentSkill,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-black/60 to-black border-t border-white/10 backdrop-blur-lg text-white p-4">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0 flex-1 lg:flex-initial">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center group relative flex-shrink-0">
            <span className="text-xl lg:text-2xl transition-transform group-hover:scale-110">
              {currentSkill.icon}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold truncate hover:underline cursor-pointer">
              {currentSkill.name}
            </h3>
            <p className="text-sm text-gray-400 truncate hover:underline cursor-pointer">
              {currentSkill.description}
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 flex-1 max-w-md hidden lg:flex">
          <div className="flex items-center gap-6">
            <button
              onClick={onPrevious}
              className="p-2 hover:bg-white/5 rounded-full transition-all hover:scale-105"
            >
              <SkipBack size={20} />
            </button>
            
            <button
              onClick={onPlayPause}
              className="p-3 bg-white text-black rounded-full hover:scale-105 transition-all"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            
            <button
              onClick={onNext}
              className="p-2 hover:bg-white/5 rounded-full transition-all hover:scale-105"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-gray-400">1:23</span>
            <div className="flex-1 group">
              <div className="w-full bg-white/10 rounded-full h-1 relative">
                <div
                  className="bg-white group-hover:bg-green-500 h-1 rounded-full relative transition-all"
                  style={{ width: `${currentSkill.level}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </div>
        </div>
        
        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onPlayPause}
            className="p-2 bg-white text-black rounded-full hover:scale-105 transition-all"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={onNext}
            className="p-2 hover:bg-white/5 rounded-full transition-all hover:scale-105"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-all">
            <Volume2 size={20} />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full transition-all">
            <Maximize2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};