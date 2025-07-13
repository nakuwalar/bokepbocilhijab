// src/utils/data.ts
import rawAllVideos from '../data/allVideos';

export interface VideoData {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  datePublished?: string;
  dateModified?: string;
  embedUrl: string;
  tags: string;
  previewUrl?: string;
  duration?: string;
}

export async function getAllVideos(): Promise<VideoData[]> {
  console.log(`[getAllVideos] Data video dimuat. Total video: ${videosData.length}`);
  return rawAllVideos as VideoData[];
}
