import React from 'react';
import { PlaylistItem } from '../types/playlist';
import { Play, Pause, Music } from 'lucide-react';

interface PlaylistViewProps {
  playlistName: string;
  items: PlaylistItem[];
  currentItem: PlaylistItem;
  isPlaying: boolean;
  onItemSelect: (item: PlaylistItem) => void;
}

export const PlaylistView: React.FC<PlaylistViewProps> = ({
  playlistName,
  items,
  currentItem,
  isPlaying,
  onItemSelect,
}) => {
  const renderVisualizer = () => (
    <div className="visualizer">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="visualizer-bar animate-pulse"
          style={{
            height: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gradient-to-b from-purple-900/50 to-black pt-16 lg:pt-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-8">
          <div className="group relative w-40 h-40 lg:w-52 lg:h-52 mx-auto lg:mx-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
            <span className="text-5xl lg:text-6xl transition-transform group-hover:scale-110">
              {currentItem.icon || <Music size={64} />}
            </span>
            {currentItem.id === items[0].id && (
              <button 
                onClick={() => onItemSelect(currentItem)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause size={48} className="text-white" />
                ) : (
                  <Play size={48} className="text-white" />
                )}
              </button>
            )}
          </div>
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium mb-2">PLAYLIST</p>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">{playlistName}</h1>
            <p className="text-sm text-gray-400">{items.length} items</p>
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemSelect(item)}
              className={`playlist-item group ${currentItem.id === item.id ? 'active bg-white/10' : ''}`}
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3 lg:mr-4 overflow-hidden flex-shrink-0">
                <span className="text-lg lg:text-xl transition-transform group-hover:scale-110">
                  {item.icon || <Music size={24} />}
                </span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {currentItem.id === item.id && isPlaying ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-white" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate text-sm lg:text-base">{item.name}</h3>
                <p className="text-xs lg:text-sm text-gray-400 truncate">{item.description}</p>
              </div>
              {item.level && (
                <div className="text-xs lg:text-sm text-gray-400 mr-4">{item.level}%</div>
              )}
              {currentItem.id === item.id && isPlaying ? (
                <div className="play-button bg-transparent">{renderVisualizer()}</div>
              ) : (
                <div className="play-button">
                  <Play size={20} className="text-black" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};