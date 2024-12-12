export interface PlaylistItem {
  id: string;
  name: string;
  description: string;
  level?: number;
  icon: any;
}

export interface Playlist {
  id: string;
  name: string;
  icon: any;
  items: PlaylistItem[];
}