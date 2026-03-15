import React from 'react';
import ShelfCard from '../components/ShelfCard';
import { creationTools } from '../data/musicData';

const Create = () => {
  return (
    <div className="min-h-screen px-4 pb-44 pt-6 md:px-6 md:pb-32 lg:px-8">
      <div className="w-full">
      <div className="md:flex md:items-end md:justify-between md:gap-6">
        <div>
          <h1 className="text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.6rem]">Create</h1>
          <p className="mt-1 max-w-xl text-sm text-white/54 md:text-base">
            Start playlists faster, build covers, and spin something shareable in minutes.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Tools</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {creationTools.map((item, index) => (
            <ShelfCard
              key={item.id}
              item={{ ...item, caption: 'Create' }}
              index={index}
              className="min-w-0"
            />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.8rem] border border-white/8 bg-[#181818] p-5">
        <h2 className="text-[1.45rem] font-semibold tracking-[-0.05em] text-white">Quick actions</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            'Start from your liked songs',
            'Import songs from notes or WhatsApp text',
            'Invite a friend into a shared playlist',
            'Generate bold poster art for the cover',
          ].map((action) => (
            <div key={action} className="rounded-[1.2rem] bg-black/22 px-4 py-3 text-sm leading-6 text-white/72">
              {action}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Create;
