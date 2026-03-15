import React, { useState } from 'react';
import { ArrowLeft, LogOut, Pencil } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { demoUser, profileMoments, profileStats } from '../data/musicData';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, updateProfile } = useAuth();
  const profile = user || demoUser;
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: profile.fullName || '',
    location: profile.location || '',
    favoriteGenre: profile.favoriteGenre || '',
    favoriteArtist: profile.favoriteArtist || '',
    bio: profile.bio || '',
  });

  const handleSave = async () => {
    await updateProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen px-4 pb-44 pt-6 md:px-6 md:pb-32 lg:px-8">
      <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <Link to="/" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1f1f] text-white">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <button
          type="button"
          onClick={() => setIsEditing((prev) => !prev)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1f1f1f] px-4 py-2 text-sm font-medium text-white"
        >
          <Pencil className="h-4 w-4" />
          {isEditing ? 'Close' : 'Edit'}
        </button>
      </div>

      <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-5 md:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ff612d] text-4xl font-black text-black">
            {(profile.fullName || 'H').slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-sm uppercase tracking-[0.28em] text-white/48">Profile</p>
            <h1 className="truncate text-[2rem] font-semibold tracking-[-0.06em] text-white">
              {profile.fullName}
            </h1>
            <p className="truncate text-sm text-white/56">@{profile.username}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {profileStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.3rem] bg-black/22 p-3 text-center">
              <p className="text-[1.1rem] font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-white/45">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-[1.8rem] border border-white/8 bg-[#181818] p-5">
          <h2 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-white">Listening DNA</h2>
          <div className="mt-4 space-y-3">
            {profileMoments.map((moment) => (
              <div key={moment} className="rounded-[1.2rem] bg-black/20 px-4 py-3 text-sm leading-6 text-white/74">
                {moment}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-white/8 bg-[#181818] p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-white">About</h2>
            {isEditing ? (
              <button
                type="button"
                onClick={handleSave}
                className="rounded-full bg-[#19e35b] px-4 py-2 text-sm font-semibold text-black"
              >
                Save
              </button>
            ) : null}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              { id: 'fullName', label: 'Name' },
              { id: 'location', label: 'Location' },
              { id: 'favoriteGenre', label: 'Favorite genre' },
              { id: 'favoriteArtist', label: 'Favorite artist' },
              { id: 'bio', label: 'Bio', multiline: true, span: 'md:col-span-2' },
            ].map((field) => (
              <label key={field.id} className={`block ${field.span || ''}`}>
                <span className="mb-2 block text-sm text-white/45">{field.label}</span>
                {field.multiline ? (
                  <textarea
                    rows={5}
                    disabled={!isEditing}
                    value={formData[field.id]}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, [field.id]: event.target.value }))
                    }
                    className="w-full rounded-[1.2rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-white focus:outline-none"
                  />
                ) : (
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={formData[field.id]}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, [field.id]: event.target.value }))
                    }
                    className="w-full rounded-[1.2rem] border border-white/8 bg-black/18 px-4 py-3 text-sm text-white focus:outline-none"
                  />
                )}
              </label>
            ))}
          </div>
        </section>
      </div>

      <button
        type="button"
        onClick={() => {
          logout();
          navigate('/login');
        }}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-[#1f1f1f] px-4 py-3 text-sm font-medium text-white"
      >
        <LogOut className="h-4 w-4" />
        Log out
      </button>
      </div>
    </div>
  );
};

export default Profile;
