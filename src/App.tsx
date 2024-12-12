import React, { useEffect, useState } from 'react';
import { playlists } from './data/playlists';
import { Player } from './components/Player';
import { Sidebar } from './components/Sidebar';
import { PlaylistView } from './components/PlaylistView';
import { Home } from './components/Home';
import { Playlist, PlaylistItem } from './types/playlist';
import { Menu } from 'lucide-react';

function App() {
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>(playlists[0]);
  const [currentItem, setCurrentItem] = useState<PlaylistItem>(playlists[0].items[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleNext = () => {
    const currentIndex = currentPlaylist.items.findIndex(item => item.id === currentItem.id);
    const nextIndex = (currentIndex + 1) % currentPlaylist.items.length;
    setCurrentItem(currentPlaylist.items[nextIndex]);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const currentIndex = currentPlaylist.items.findIndex(item => item.id === currentItem.id);
    const previousIndex = currentIndex === 0 ? currentPlaylist.items.length - 1 : currentIndex - 1;
    setCurrentItem(currentPlaylist.items[previousIndex]);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleItemSelect = (item: PlaylistItem) => {
    setCurrentItem(item);
    setIsPlaying(true);
    setIsSidebarOpen(false);
  };

  const handlePlaylistSelect = (playlist: Playlist) => {
    setCurrentPlaylist(playlist);
    setCurrentItem(playlist.items[0]);
    setIsPlaying(true);
    setIsSidebarOpen(false);
    setShowHome(false);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    document.title = "Portfólio do Wesley";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="flex h-screen">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/50 rounded-full backdrop-blur-lg"
        >
          <Menu size={24} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 lg:relative transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out`}
        >
          <Sidebar
            playlists={playlists}
            currentPlaylist={currentPlaylist}
            onPlaylistSelect={handlePlaylistSelect}
            onHomeClick={handleHomeClick}
          />
        </div>
        
        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <main className="flex-1 flex flex-col pb-24 lg:pb-32 w-full">
          {showHome ? (
            <Home />
          ) : (
            <PlaylistView
              playlistName={currentPlaylist.name}
              items={currentPlaylist.items}
              currentItem={currentItem}
              isPlaying={isPlaying}
              onItemSelect={handleItemSelect}
            />
          )}
          
          <Player
            currentSkill={currentItem}
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </main>
      </div>
    </div>
  );
}

export default App;