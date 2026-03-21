'use client'

import React from 'react';
import Image from 'next/image';

interface ContentPageTemplateProps {
  title: string;
  content: React.ReactNode;
  images: { url: string; alt: string }[];
  quote?: React.ReactNode;
  mirrored?: boolean;
}

export default function ContentPageTemplate({
  title,
  content,
  images,
  quote,
  mirrored = false,
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
    </div>
  )

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Render panes in order based on mirrored prop */}
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
  );
}
