'use client'

import React, { useState } from 'react'

const RATING_TONE: Record<number, string> = {
  0: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  1: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  2: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  3: 'bg-amber-900/40 text-amber-300 border-amber-700/50',
  4: 'bg-amber-900/40 text-amber-300 border-amber-700/50',
  5: 'bg-orange-900/40 text-orange-300 border-orange-700/50',
  6: 'bg-orange-900/40 text-orange-300 border-orange-700/50',
  7: 'bg-rose-900/40 text-rose-300 border-rose-700/50',
  8: 'bg-rose-900/40 text-rose-300 border-rose-700/50',
  9: 'bg-red-900/50 text-red-300 border-red-700/60',
  10: 'bg-red-900/50 text-red-300 border-red-700/60',
}

const ACCENTS: Record<string, string> = {
  red: '#e57373',
  blue: '#7ab0e0',
  green: '#7ac9a3',
}

function RatingBadge({ rating }: { rating: number | string }) {
  const r = typeof rating === 'string' ? parseInt(rating, 10) : rating
  const tone = RATING_TONE[r] ?? RATING_TONE[5]
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-semibold border ${tone}`}
    >
      {r}/10
    </span>
  )
}

type CompareColProps = {
  model: string
  rating: number | string
  accent?: 'red' | 'blue' | 'green'
  children: React.ReactNode
}

export function CompareCol(_props: CompareColProps) {
  return null
}

export function Comparison({
  turn,
  children,
}: {
  turn?: number | string
  children: React.ReactNode
}) {
  const cols = React.Children.toArray(children)
    .filter(
      (c): c is React.ReactElement<CompareColProps> =>
        React.isValidElement(c) &&
        typeof (c.props as { model?: unknown })?.model === 'string'
    )
    .map((c) => c.props)

  const [active, setActive] = useState(0)
  if (cols.length === 0) return null
  const cur = cols[active]

  return (
    <div className="not-prose my-6">
      {turn !== undefined && (
        <div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">
          Turn {turn}
        </div>
      )}
      <div className="rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
        <div role="tablist" className="flex border-b border-neutral-800">
          {cols.map((col, i) => {
            const selected = i === active
            const accentColor = ACCENTS[col.accent ?? 'red']
            return (
              <button
                key={i}
                role="tab"
                aria-selected={selected}
                type="button"
                onClick={() => setActive(i)}
                className={`flex-1 px-4 py-3 text-sm flex items-center gap-2 justify-center border-b-2 transition-colors ${
                  selected
                    ? 'bg-neutral-900/60'
                    : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/30'
                }`}
                style={{
                  borderBottomColor: selected ? accentColor : 'transparent',
                  color: selected ? accentColor : undefined,
                }}
              >
                <span className="font-medium">{col.model}</span>
                <RatingBadge rating={col.rating} />
              </button>
            )
          })}
        </div>
        <div className="p-4 text-sm text-neutral-300 leading-relaxed [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
          {cur.children}
        </div>
      </div>
    </div>
  )
}
