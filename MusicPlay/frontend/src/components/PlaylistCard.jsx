import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const PlaylistCard = ({ playlist, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      {/* Background Image */}
      <div className="aspect-square relative">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
        >
          <button className="w-12 h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all">
            <Play className="w-6 h-6 text-black fill-current ml-1" />
          </button>
        </motion.div>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-bold text-white text-lg truncate mb-1">
          {playlist.name}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2">
          {playlist.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PlaylistCard;