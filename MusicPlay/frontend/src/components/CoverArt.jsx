import React from 'react';

const CoverArt = ({ art, title, className = '' }) => {
  const textColor = art?.textColor || '#fff8ef';
  const titleText = art?.displayTitle || title;
  const align =
    art?.align === 'center'
      ? 'items-center justify-center text-center'
      : art?.align === 'top'
        ? 'justify-between'
        : 'justify-end';

  return (
    <div
      className={`relative isolate overflow-hidden rounded-[1.5rem] border border-white/8 shadow-[0_18px_40px_rgba(0,0,0,0.26)] ${className}`}
      style={{ background: art?.background }}
    >
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            art?.overlay ||
            'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.2) 100%)',
        }}
      />
      <div
        className="absolute -left-8 top-4 h-20 w-20 rounded-full blur-3xl"
        style={{ background: art?.glowA || 'rgba(255,255,255,0.24)' }}
      />
      <div
        className="absolute -bottom-8 right-2 h-24 w-24 rounded-full blur-3xl"
        style={{ background: art?.glowB || 'rgba(0,0,0,0.22)' }}
      />
      <div className="absolute inset-[10px] rounded-[1.1rem] border border-white/12" />

      <div className={`relative z-10 flex h-full flex-col p-3.5 ${align}`}>
        {art?.sticker ? (
          <span className="inline-flex w-fit rounded-full bg-black/18 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.28em] text-white/85">
            {art.sticker}
          </span>
        ) : null}

        <div className={`w-full ${art?.align === 'center' ? 'mt-3' : 'mt-auto'}`}>
          {art?.kicker ? (
            <p
              className="mb-2 text-[9px] font-semibold uppercase tracking-[0.26em]"
              style={{ color: textColor }}
            >
              {art.kicker}
            </p>
          ) : null}

          <p
            className="whitespace-pre-line text-[1.35rem] font-black leading-[0.86] tracking-[-0.06em] sm:text-[1.55rem]"
            style={{ color: textColor }}
          >
            {titleText}
          </p>

          {art?.footer ? (
            <p
              className="mt-2 text-[9px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: textColor }}
            >
              {art.footer}
            </p>
          ) : null}

          {art?.note ? (
            <p
              className="mt-2 text-[10px] font-medium"
              style={{ color: textColor }}
            >
              {art.note}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CoverArt;
