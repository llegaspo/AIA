import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { VIDEO_END_FRAMES } from '../../data/videoEndFrames';

const VideoEndFrameDetail = () => {
  const { videoId } = useParams();
  const video = VIDEO_END_FRAMES.find((item) => item.id === videoId);

  if (!video) {
    return <Navigate to={`/video/end-frames/${VIDEO_END_FRAMES[0].id}`} replace />;
  }

  return (
    <main className="w-full bg-white guide-page">
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1200px] px-12 md:px-20 py-12">
          <h1 className="text-aia-red font-bold uppercase text-3xl">{video.title}</h1>
          <p className="mt-3 text-sm text-aia-charcoal/70">Video End Frame</p>

          <div
            className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-black max-w-[960px]"
            style={{ aspectRatio: video.aspectRatio }}
          >
            <video
              key={video.id}
              controls
              preload="metadata"
              className="w-full h-full object-contain bg-black"
            >
              <source src={video.mp4Src} type="video/mp4" />
              <source src={video.movSrc} type="video/quicktime" />
              Your browser does not support this video format.
            </video>
          </div>

          <a
            href={video.movSrc}
            download
            className="mt-6 inline-flex rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
          >
            Download .mov
          </a>
        </div>
      </section>
    </main>
  );
};

export default VideoEndFrameDetail;
