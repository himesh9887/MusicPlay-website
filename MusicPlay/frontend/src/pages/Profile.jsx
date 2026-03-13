import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Music2, Link as LinkIcon, Twitter, Instagram, Edit2, Check, User } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    username: user?.username || '',
    fullName: user?.fullName || '',
    email: user?.email || '',
    bio: user?.bio || '',
    location: user?.location || '',
    favoriteGenre: user?.favoriteGenre || '',
    favoriteArtist: user?.favoriteArtist || '',
    socialLinks: {
      twitter: user?.socialLinks?.twitter || '',
      instagram: user?.socialLinks?.instagram || '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social.')) {
      const social = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [social]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await updateProfile(formData);
    
    if (result.success) {
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } else {
      setMessage('Failed to update profile');
    }
    
    setIsLoading(false);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAvatarClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, upload to storage and get URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spotify-light/30 to-spotify-dark pb-28 lg:pb-32">
      {/* Profile Header */}
      <div className="relative h-52 bg-gradient-to-b from-spotify-green/40 to-spotify-dark sm:h-64">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200')] bg-cover bg-center opacity-10" />
      </div>

      <div className="relative z-10 mx-auto -mt-20 max-w-4xl px-4 sm:-mt-32 sm:px-6 lg:px-8">
        {/* Avatar and Basic Info */}
        <div className="mb-8 flex flex-col items-center gap-5 sm:flex-row sm:items-end sm:gap-6">
          <motion.div
            whileHover={isEditing ? { scale: 1.05 } : {}}
            className="relative"
          >
            <div 
              onClick={handleAvatarClick}
              className={`h-28 w-28 overflow-hidden rounded-full border-4 border-spotify-dark shadow-2xl sm:h-40 sm:w-40 ${isEditing ? 'cursor-pointer' : ''}`}
            >
              <img
                src={formData.avatar || user?.avatar || 'https://via.placeholder.com/160'}
                alt={user?.username}
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </motion.div>

          <div className="flex-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 sm:text-sm">Profile</span>
            <h1 className="mb-2 text-3xl font-bold text-white sm:text-6xl">{user?.fullName}</h1>
            <p className="text-spotify-gray">@{user?.username}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => isEditing ? handleSubmit({ preventDefault: () => {} }) : setIsEditing(true)}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-spotify-dark transition-transform hover:scale-105 disabled:opacity-50 sm:w-auto sm:py-2"
          >
            {isEditing ? (
              <><Check className="w-4 h-4" /> Save</>
            ) : (
              <><Edit2 className="w-4 h-4" /> Edit Profile</>
            )}
          </motion.button>
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg ${message.includes('success') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
          >
            {message}
          </motion.div>
        )}

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Basic Information */}
          <section className="rounded-2xl bg-white/5 p-5 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5" /> Basic Information
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-spotify-gray" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Add your location"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-sm font-medium text-spotify-gray mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={3}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500 resize-none"
              />
            </div>
          </section>

          {/* Music Preferences */}
          <section className="rounded-2xl bg-white/5 p-5 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Music2 className="w-5 h-5" /> Music Preferences
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Favorite Genres</label>
                <input
                  type="text"
                  name="favoriteGenre"
                  value={formData.favoriteGenre}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="e.g., Pop, Rock, Jazz"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2">Favorite Artist</label>
                <input
                  type="text"
                  name="favoriteArtist"
                  value={formData.favoriteArtist}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Who do you love listening to?"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500"
                />
              </div>
            </div>
          </section>

          {/* Social Links */}
          <section className="rounded-2xl bg-white/5 p-5 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <LinkIcon className="w-5 h-5" /> Social Links
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2 flex items-center gap-2">
                  <Twitter className="w-4 h-4" /> Twitter
                </label>
                <input
                  type="text"
                  name="social.twitter"
                  value={formData.socialLinks.twitter}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="@username"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-spotify-gray mb-2 flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </label>
                <input
                  type="text"
                  name="social.instagram"
                  value={formData.socialLinks.instagram}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="@username"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white disabled:opacity-50 focus:outline-none focus:border-spotify-green placeholder-gray-500"
                />
              </div>
            </div>
          </section>

          {isEditing && (
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-spotify-green text-white py-3 rounded-full font-bold hover:brightness-110 transition-all disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setIsEditing(false)}
                className="rounded-full border border-white/20 px-8 py-3 font-bold text-white transition-all hover:bg-white/10"
              >
                Cancel
              </motion.button>
            </div>
          )}
        </form>

        {/* Stats Section */}
        <section className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {[
            { label: 'Followers', value: '1,247' },
            { label: 'Following', value: '843' },
            { label: 'Playlists', value: '24' },
            { label: 'Liked Songs', value: '3,247' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white/5 p-4 text-center sm:p-6"
            >
              <div className="mb-1 text-xl font-bold text-white sm:text-2xl">{stat.value}</div>
              <div className="text-sm text-spotify-gray">{stat.label}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Profile;
