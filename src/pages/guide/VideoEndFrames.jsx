import React from 'react';
import { VIDEO_END_FRAMES } from '../../data/videoEndFrames';
import useScrollSpy from '../../components/guide/useScrollSpy';

const VideoEndFrames = () => {
  useScrollSpy(VIDEO_END_FRAMES.map((video) => video.id), VIDEO_END_FRAMES[0]?.id);

  return (
    <main className="w-full bg-white guide-page">
      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12">
          <h1 className="text-aia-red font-bold uppercase text-3xl">Video End Frames</h1>
          <p className="mt-3 text-sm text-aia-charcoal/70">
            Approved end-frame assets for corporate and HLBL video formats.
          </p>
        </div>
      </section>

      <section className="border-t border-aia-red/10">
        <div className="mx-auto max-w-[1680px] px-12 md:px-20 py-12 space-y-10">
          {VIDEO_END_FRAMES.map((video) => (
            <article key={video.id} id={video.id} className="rounded-2xl border border-gray-200 p-6 scroll-mt-28">
              <h2 className="text-aia-charcoal font-semibold text-lg">{video.title}</h2>
              <div
                className="mt-4 rounded-xl overflow-hidden border border-gray-200 bg-black w-full"
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
