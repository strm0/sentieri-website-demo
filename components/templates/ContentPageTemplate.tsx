'use client'

import React from 'react';
import Image from 'next/image';
import AudioPlayer from '@/components/ui/AudioPlayer';
import { ContentBlock } from '@/lib/types';

interface ContentPageTemplateProps {
  title: string;
  blocks?: ContentBlock[];
  /** @deprecated Use blocks instead */
  content?: React.ReactNode;
  /** @deprecated Use blocks instead */
  images?: { url: string; alt: string }[];
  quote?: React.ReactNode;
  mirrored?: boolean;
  audioSrc?: string;
}

export default function ContentPageTemplate({
  title,
  blocks,
  content,
  images,
  quote,
  mirrored = false,
  audioSrc,
}: ContentPageTemplateProps) {

  // --- Backward compatibility: if no blocks, fall back to old content+images with interleaving ---
  if (!blocks) {
    return (
      <LegacyLayout
        title={title}
        content={content}
        images={images || []}
        quote={quote}
        mirrored={mirrored}
        audioSrc={audioSrc}
      />
    );
  }

  // --- New blocks-based rendering ---

  const textBlocks = blocks.filter((b): b is ContentBlock & { type: 'text' } => b.type === 'text');
  const imageBlocks = blocks.filter((b): b is ContentBlock & { type: 'image' } => b.type === 'image');

  const textPane = (
    <div
      className="text-pane no-scrollbar"
      style={{
        width: '38%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: 'var(--cream)',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '40px',
        paddingBottom: '20px',
      }}
    >
      {/* Page Title */}
      <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 5.5vw, 7.5rem)', textAlign: mirrored ? 'left' : 'right', marginBottom: '160px', paddingRight: mirrored ? undefined : '20px', paddingLeft: mirrored ? '12px' : undefined }}>{title}</h1>

      {/* Text content */}
      <div
        className="body-text"
        style={{
          fontFamily: 'var(--font-body)',
          letterSpacing: 0,
          paddingLeft: '12px',
          paddingRight: '20px',
        }}
      >
        {textBlocks.map((block, index) => (
          <React.Fragment key={`text-${index}`}>
            {block.content}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const imagePane = (
    <div
      className="image-pane no-scrollbar"
      style={{
        width: '62%',
        height: '100%',
        overflowY: 'scroll',
        background: 'var(--cream)',
        padding: 0,
        position: 'relative',
      }}
    >
      {/* Quote overlay */}
      {quote && (
        <div
          style={{
            position: 'absolute',
            top: '140px',
            right: '50px',
            left: '35%',
            zIndex: 10,
            color: '#FFFFFF',
            fontFamily: 'var(--font-body)',
            fontSize: '1.7rem',
            lineHeight: '28px',
            textAlign: 'right',
            pointerEvents: 'none',
          }}
        >
          {quote}
        </div>
      )}

      <div className="image-gallery">
        {imageBlocks.map((image, index) => (
          <div
            key={`img-${index}`}
            style={{
              position: 'relative',
              width: '100%',
              marginBottom: index < imageBlocks.length - 1 ? '35px' : '0',
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="62vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              unoptimized
            />
          </div>
        ))}
      </div>

      {audioSrc && (
        <AudioPlayer src={audioSrc} title={title} />
      )}
    </div>
  );

  return (
    <>
      {/* Desktop layout (>= 1024px) — two panes */}
      <div
        className="hidden lg:flex"
        style={{
          height: '100%',
          position: 'relative',
        }}
      >
        {mirrored ? (
          <>
            {imagePane}
            {textPane}
          </>
        ) : (
          <>
            {textPane}
            {imagePane}
          </>
        )}
      </div>

      {/* Mobile layout (< 1024px) — blocks in order */}
      <div
        className="lg:hidden"
        style={{
          width: '100%',
          overflowY: 'auto',
          background: '#FFFFFF',
          paddingBottom: '40px',
        }}
      >
        {/* Audio player - fixed at top on mobile */}
        {audioSrc && (
          <div style={{ position: 'fixed', top: 'calc(var(--header-height) + var(--sidebar-bar-height, 0px))', left: 0, right: 0, zIndex: 20, paddingRight: '16px' }}>
            <AudioPlayer src={audioSrc} title={title} />
          </div>
        )}

        {/* Spacer for fixed audio player */}
        {audioSrc && <div style={{ height: '46px' }} />}

        {/* Title */}
        <div style={{ padding: '24px 16px 0' }}>
          <h1
            className="heading-xl"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              textAlign: 'left',
              marginBottom: '60px',
            }}
          >
            {title}
          </h1>
        </div>

        {/* Quote (mobile: styled blockquote before body) */}
        {quote && (
          <div
            style={{
              padding: '24px 16px',
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              lineHeight: '1.4',
              color: '#000000',
              textAlign: 'right',
              fontStyle: 'italic',
            }}
          >
            {quote}
          </div>
        )}

        {/* All blocks in order */}
        <div className="body-text" style={{ fontFamily: 'var(--font-body)', letterSpacing: 0 }}>
          {blocks.map((block, index) => {
            if (block.type === 'text') {
              return (
                <div key={`block-${index}`} style={{ padding: '0 16px' }}>
                  {block.content}
                </div>
              );
            } else {
              return (
                <div key={`block-${index}`} style={{ width: '100%', position: 'relative', margin: '20px 0' }}>
                  <Image
                    src={block.url}
                    alt={block.alt}
                    width={1200}
                    height={800}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    unoptimized
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}


// ============================================================
// Legacy layout — preserves the old MIN_GAP interleaving logic
// for pages that haven't been migrated to blocks yet
// ============================================================

function LegacyLayout({
  title,
  content,
  images,
  quote,
  mirrored,
  audioSrc,
}: {
  title: string;
  content: React.ReactNode;
  images: { url: string; alt: string }[];
  quote?: React.ReactNode;
  mirrored: boolean;
  audioSrc?: string;
}) {
  const textPane = (
    <div
      className="text-pane no-scrollbar"
      style={{
        width: '38%',
        height: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        background: 'var(--cream)',
        paddingLeft: '18px',
        paddingRight: '18px',
        paddingTop: '40px',
        paddingBottom: '20px',
      }}
    >
      <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 5.5vw, 7.5rem)', textAlign: mirrored ? 'left' : 'right', marginBottom: '160px', paddingRight: mirrored ? undefined : '20px', paddingLeft: mirrored ? '12px' : undefined }}>{title}</h1>

      <div
        className="body-text"
        style={{
          fontFamily: 'var(--font-body)',
          letterSpacing: 0,
          paddingLeft: '12px',
          paddingRight: '20px',
        }}
      >
        {content}
      </div>
    </div>
  );

  const imagePane = (
    <div
      className="image-pane no-scrollbar"
      style={{
        width: '62%',
        height: '100%',
        overflowY: 'scroll',
        background: 'var(--cream)',
        padding: 0,
        position: 'relative',
      }}
    >
      {quote && (
        <div
          style={{
            position: 'absolute',
            top: '140px',
            right: '50px',
            left: '35%',
            zIndex: 10,
            color: '#FFFFFF',
            fontFamily: 'var(--font-body)',
            fontSize: '1.7rem',
            lineHeight: '28px',
            textAlign: 'right',
            pointerEvents: 'none',
          }}
        >
          {quote}
        </div>
      )}

      <div className="image-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              width: '100%',
              marginBottom: index < images.length - 1 ? '35px' : '0',
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="62vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              unoptimized
            />
          </div>
        ))}
      </div>

      {audioSrc && (
        <AudioPlayer src={audioSrc} title={title} />
      )}
    </div>
  );

  return (
    <>
      <div
        className="hidden lg:flex"
        style={{
          height: '100%',
          position: 'relative',
        }}
      >
        {mirrored ? (
          <>
            {imagePane}
            {textPane}
          </>
        ) : (
          <>
            {textPane}
            {imagePane}
          </>
        )}
      </div>

      <div
        className="lg:hidden"
        style={{
          width: '100%',
          overflowY: 'auto',
          background: '#FFFFFF',
          paddingBottom: '40px',
        }}
      >
        {/* Audio player - fixed at top on mobile */}
        {audioSrc && (
          <div style={{ position: 'fixed', top: 'calc(var(--header-height) + var(--sidebar-bar-height, 0px))', left: 0, right: 0, zIndex: 20, paddingRight: '16px' }}>
            <AudioPlayer src={audioSrc} title={title} />
          </div>
        )}

        {/* Spacer for fixed audio player */}
        {audioSrc && <div style={{ height: '46px' }} />}

        <div style={{ padding: '24px 16px 0' }}>
          <h1
            className="heading-xl"
            style={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              textAlign: 'left',
              marginBottom: '60px',
            }}
          >
            {title}
          </h1>
        </div>

        {quote && (
          <div
            style={{
              padding: '24px 16px',
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              lineHeight: '1.4',
              color: '#000000',
              textAlign: 'right',
              fontStyle: 'italic',
            }}
          >
            {quote}
          </div>
        )}

        {/* All text first */}
        <div className="body-text" style={{ fontFamily: 'var(--font-body)', letterSpacing: 0, padding: '0 16px' }}>
          {content}
        </div>

        {/* All images after */}
        {images.map((image, index) => (
          <div key={`img-${index}`} style={{ width: '100%', position: 'relative', marginTop: '20px' }}>
            <Image
              src={image.url}
              alt={image.alt}
              width={1200}
              height={800}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              unoptimized
            />
          </div>
        ))}
      </div>
    </>
  );
}
