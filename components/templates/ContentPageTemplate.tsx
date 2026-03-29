'use client'

import React from 'react';
import Image from 'next/image';
import AudioPlayer from '@/components/ui/AudioPlayer';

interface ContentPageTemplateProps {
  title: string;
  content: React.ReactNode;
  images: { url: string; alt: string }[];
  quote?: React.ReactNode;
  mirrored?: boolean;
  audioSrc?: string;
}

export default function ContentPageTemplate({
  title,
  content,
  images,
  quote,
  mirrored = false,
  audioSrc,
}: ContentPageTemplateProps) {
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

      {/* Content */}
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
  )

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
  )

  const firstImage = images.length > 0 ? images[0] : null;
  const distributeImages = images.slice(1);

  function renderMobileImage(image: { url: string; alt: string }, key: string) {
    return (
      <div key={key} style={{ width: '100%', position: 'relative', margin: '20px 0' }}>
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
    );
  }

  const MIN_GAP = 6;
  const contentChildren = React.Children.toArray(content);
  const interleaved: React.ReactNode[] = [];
  let imageIndex = 0;
  let sinceLastImage = MIN_GAP; // start at MIN_GAP so first eligible point can trigger

  contentChildren.forEach((child, i) => {
    interleaved.push(
      <div key={`text-${i}`} style={{ padding: '0 16px' }}>
        {child}
      </div>
    );
    sinceLastImage++;

    if (sinceLastImage >= MIN_GAP && imageIndex < distributeImages.length) {
      interleaved.push(renderMobileImage(distributeImages[imageIndex], `mid-${imageIndex}`));
      imageIndex++;
      sinceLastImage = 0;
    }
  });

  // Any remaining images go at the end
  while (imageIndex < distributeImages.length) {
    interleaved.push(renderMobileImage(distributeImages[imageIndex], `end-${imageIndex}`));
    imageIndex++;
  }

  return (
    <>
      {/* Desktop layout (>= 1024px) — unchanged */}
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

      {/* Mobile layout (< 1024px) — single column interleaved */}
      <div
        className="lg:hidden"
        style={{
          width: '100%',
          overflowY: 'auto',
          background: '#FFFFFF',
          paddingBottom: '40px',
        }}
      >
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

        {/* First image */}
        {firstImage && (
          <div style={{ width: '100%', position: 'relative' }}>
            <Image
              src={firstImage.url}
              alt={firstImage.alt}
              width={1200}
              height={800}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              unoptimized
            />
          </div>
        )}

        {/* Quote (mobile: styled blockquote between first image and body text) */}
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

        {/* Interleaved body text + images */}
        <div className="body-text" style={{ fontFamily: 'var(--font-body)', letterSpacing: 0 }}>
          {interleaved}
        </div>

        {/* Audio player */}
        {audioSrc && (
          <div style={{ position: 'sticky', bottom: 0 }}>
            <AudioPlayer src={audioSrc} title={title} />
          </div>
        )}
      </div>
    </>
  );
}
