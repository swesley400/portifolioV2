import React, { useState } from 'react';
import { Playlist } from '../types/playlist';
import { Music2Icon, HomeIcon, SearchIcon } from 'lucide-react';

interface SidebarProps {
  playlists: Playlist[];
  currentPlaylist: Playlist;
  onPlaylistSelect: (playlist: Playlist) => void;
  onHomeClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  playlists,
  currentPlaylist,
  onPlaylistSelect,
  onHomeClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    playlist.items.some(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="w-64 bg-black p-6 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <Music2Icon size={32} className="text-green-500" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          Portfolio Wesley
        </h1>
      </div>

      <div className="mb-8">
        <div className="space-y-4">
          <button
            onClick={onHomeClick}
            className="flex items-center gap-4 text-gray-400 hover:text-white transition w-full"
          >
            <HomeIcon size={24} />
            <span className="font-medium">Home</span>
          </button>
          <div className="relative">
            <SearchIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex-1">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">PLAYLISTS</h2>
        <nav className="space-y-2">
          {filteredPlaylists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => onPlaylistSelect(playlist)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                currentPlaylist.id === playlist.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{playlist.icon}</span>
                <span className="font-medium">{playlist.name}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};