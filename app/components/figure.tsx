'use client'

import { useState, useEffect, useCallback } from 'react'

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string
  alt?: string
  caption?: string
}) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <figure className="my-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ''}
        className="rounded-lg cursor-zoom-in"
        onClick={() => setOpen(true)}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-400 italic">
          {caption}
        </figcaption>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out p-4"
          onClick={close}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || ''}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
          />
        </div>
      )}
    </figure>
  )
}
