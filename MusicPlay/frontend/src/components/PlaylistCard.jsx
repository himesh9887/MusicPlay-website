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
      className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
    >
      {/* Background Image */}
      <div className="aspect-square relative">
        <img
          src={playlist.cover}
          alt={playlist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
        
        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform sm:translate-y-2 sm:group-hover:translate-y-0"
        >
          <button className="w-10 h-10 sm:w-12 sm:h-12 bg-spotify-green rounded-full flex items-center justify-center shadow-lg hover:brightness-110 transition-all">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-current ml-0.5 sm:ml-1" />
          </button>
        </motion.div>
      </div>

      {/* Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
        <h3 className="font-bold text-white text-base sm:text-lg truncate mb-1">
          {playlist.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
          {playlist.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PlaylistCard;
