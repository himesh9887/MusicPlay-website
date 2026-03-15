import React from 'react';
import { motion } from 'framer-motion';
import CoverArt from './CoverArt';

const twoLineClamp = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const ShelfCard = ({
  item,
  index = 0,
  onSelect,
  className = '',
  artworkClassName = '',
  titleClassName = '',
}) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      className={`min-w-[10.4rem] ${className}`}
    >
      <button type="button" onClick={handleSelect} className="block w-full text-left">
        <CoverArt art={item.art} title={item.title} className={`aspect-square w-full ${artworkClassName}`} />

        <div className="px-1 pb-1 pt-3">
          <p className="text-sm text-white/54">{item.caption}</p>
          <h3
            className={`mt-1 text-[1.03rem] font-semibold leading-tight tracking-[-0.03em] text-white ${titleClassName}`}
            style={twoLineClamp}
          >
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-5 text-white/62" style={twoLineClamp}>
            {item.subtitle}
          </p>
        </div>
      </button>
    </motion.article>
  );
};

export default ShelfCard;
