import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  },
  url: {
    secure: true, // Use HTTPS
  },
});

interface VideoPlayerProps {
  publicId: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  posterUrl?: string; // Optional poster URL
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  publicId,
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  posterUrl
}) => {
  const videoUrl = cloudinary
    .video(publicId)
    .format('auto')
    .quality('auto')
    .toURL();

  return (
    <video
      className='w-full max-w-xl'
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      poster={posterUrl}
    >
      <source src={videoUrl} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;