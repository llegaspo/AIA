import React from 'react';
import { VIDEO_END_FRAMES } from '../../data/videoEndFrames';

const VideoEndFrames = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-10 md:px-16 py-8">
          <h1 className="text-aia-red font-bold uppercase text-3xl">Video End Frames</h1>
          <p className="mt-3 text-sm text-aia-charcoal/70">
            Approved end-frame assets for corporate and HLBL video formats.
          </p>
        </div>
      </section>

      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-8 md:px-12 py-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {VIDEO_END_FRAMES.map((video) => (
            <article key={video.id} className="rounded-xl border border-gray-200 p-3 w-full max-w-[300px] mx-auto">
              <h2 className="text-aia-charcoal font-semibold text-xs leading-tight">{video.title}</h2>
              <div
                className="mt-3 rounded-lg overflow-hidden border border-gray-200 bg-black w-full"
                style={{ aspectRatio: video.aspectRatio }}
              >
                <video controls preload="metadata" className="w-full h-full object-contain bg-black">
                  <source src={video.mp4Src} type="video/mp4" />
                  <source src={video.movSrc} type="video/quicktime" />
                  Your browser does not support this video format.
                </video>
              </div>
              <a
                href={video.movSrc}
                download
                className="mt-3 inline-flex rounded-full border border-aia-red px-3 py-1.5 text-[10px] uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
              >
                Download .mov
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default VideoEndFrames;
