import React from 'react';
import { VIDEO_END_FRAMES } from '../../data/videoEndFrames';

const VideoEndFrames = () => {
  return (
    <main className="w-full bg-white guide-page">
      <section id="video-end-frames" className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h1 className="text-aia-red font-bold uppercase text-3xl">Video End Frames</h1>
          <p className="mt-3 text-sm text-aia-charcoal/70">
            Approved end-frame assets for corporate and HLBL video formats.
          </p>
        </div>
      </section>

      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {VIDEO_END_FRAMES.map((video) => (
            <article key={video.id} id={video.id} className="rounded-2xl border border-gray-200 p-5">
              <h2 className="text-aia-charcoal font-semibold text-lg">{video.title}</h2>
              <div className="mt-4 rounded-xl overflow-hidden bg-black">
                <video controls preload="metadata" className="w-full h-auto">
                  <source src={video.src} type="video/quicktime" />
                  Your browser does not support this video format.
                </video>
              </div>
              <a
                href={video.src}
                download
                className="mt-4 inline-flex rounded-full border border-aia-red px-4 py-2 text-xs uppercase tracking-wide text-aia-red hover:bg-aia-red hover:text-white transition-colors"
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
