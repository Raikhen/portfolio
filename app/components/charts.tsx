'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  Plugin,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

const errorBarPlugin: Plugin<'bar'> = {
  id: 'errorBars',
  afterDatasetsDraw(chart) {
    const ebData = (chart.options as any).errorBars as
      | { low: number[]; high: number[] }
      | undefined
    if (!ebData) return
    const ds = chart.getDatasetMeta(0)
    if (!ds) return
    const { ctx, scales } = chart
    const yScale = scales.y
    ctx.save()
    ctx.strokeStyle = '#d4d4d4'
    ctx.lineWidth = 1.5
    ds.data.forEach((el, i) => {
      const lo = ebData.low[i]
      const hi = ebData.high[i]
      if (lo == null || hi == null) return
      const x = (el as any).x as number
      const yHi = yScale.getPixelForValue(hi)
      const yLo = yScale.getPixelForValue(lo)
      const cap = 6
      ctx.beginPath()
      ctx.moveTo(x, yHi)
      ctx.lineTo(x, yLo)
      ctx.moveTo(x - cap, yHi)
      ctx.lineTo(x + cap, yHi)
      ctx.moveTo(x - cap, yLo)
      ctx.lineTo(x + cap, yLo)
      ctx.stroke()
    })
    ctx.restore()
  },
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  errorBarPlugin
)

ChartJS.defaults.color = '#a3a3a3'
ChartJS.defaults.borderColor = '#262626'
ChartJS.defaults.font.family =
  'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif'

const PALETTE = ['#a63d3d', '#3a6fa5', '#2d7a5f']

function ChartFrame({
  title,
  caption,
  render,
}: {
  title?: string
  caption?: string
  render: (height: number) => React.ReactNode
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
    <figure className="my-6 not-prose">
      <div className="group relative rounded-lg border border-neutral-800 bg-neutral-950 p-4 sm:p-5">
        {title && (
          <div className="text-sm text-neutral-300 font-medium mb-3 pr-7">
            {title}
          </div>
        )}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Expand chart"
          className="absolute top-2.5 right-2.5 p-1.5 rounded text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/60 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        </button>
        <div className="relative w-full" style={{ height: 320 }}>
          {render(320)}
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-400 italic">
          {caption}
        </figcaption>
      )}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out p-4 sm:p-8"
          onClick={close}
        >
          <div
            className="relative w-full max-w-6xl bg-neutral-950 border border-neutral-800 rounded-lg p-4 sm:p-6"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-2 right-2 text-neutral-400 hover:text-white p-2 rounded"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            {title && (
              <div className="text-base text-neutral-200 font-medium mb-4 pr-8">
                {title}
              </div>
            )}
            <div
              className="relative w-full"
              style={{ height: 'min(75vh, 640px)' }}
            >
              {render(640)}
            </div>
          </div>
        </div>
      )}
    </figure>
  )
}

const baseOptions: ChartOptions<'bar' | 'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { color: '#d4d4d4', boxWidth: 12, padding: 14 },
    },
    tooltip: {
      backgroundColor: '#0a0a0a',
      borderColor: '#404040',
      borderWidth: 1,
      titleColor: '#fafafa',
      bodyColor: '#e5e5e5',
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { color: '#1f1f1f' },
      ticks: { color: '#a3a3a3' },
    },
    y: {
      grid: { color: '#1f1f1f' },
      ticks: { color: '#a3a3a3' },
      beginAtZero: true,
    },
  },
}

export function HighFrustrationChart({ caption }: { caption?: string }) {
  const labels = ['Gemma 3 27B', 'Gemma 4 31B', 'Gemma 4 26B A4B']
  const data = [23.7, 0.3, 0.0]
  const ciLow = [19.2, 0.1, 0]
  const ciHigh = [28.8, 1.9, 1.3]
  return (
    <ChartFrame
      title="High-Frustration Rate by Model (3-Turn Protocol)"
      caption={caption}
      render={() => (
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: '% Responses Rated >= 5',
              data,
              backgroundColor: PALETTE.map((c) => c + 'cc'),
              borderColor: PALETTE,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          ...baseOptions,
          errorBars: { low: ciLow, high: ciHigh },
          plugins: {
            ...baseOptions.plugins,
            legend: { display: false },
            tooltip: {
              ...(baseOptions.plugins?.tooltip as object),
              callbacks: {
                label: (ctx) =>
                  `${ctx.parsed.y.toFixed(1)}% (95% CI ${ciLow[ctx.dataIndex].toFixed(1)}-${ciHigh[ctx.dataIndex].toFixed(1)}%)`,
              },
            },
          },
          scales: {
            ...baseOptions.scales,
            y: {
              ...(baseOptions.scales?.y as object),
              suggestedMax: Math.max(...ciHigh) * 1.02,
              title: {
                display: true,
                text: '% Responses >= 5',
                color: '#a3a3a3',
              },
              ticks: {
                color: '#a3a3a3',
                callback: (v) => `${v}%`,
              },
            },
          },
        } as any}
      />
      )}
    />
  )
}

export function DistributionChart({ caption }: { caption?: string }) {
  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const datasets = [
    {
      label: 'Gemma 3 27B',
      data: [4, 52, 107, 163, 126, 168, 112, 44, 20, 4, 0],
      backgroundColor: PALETTE[0] + 'cc',
      borderColor: PALETTE[0],
      borderWidth: 1,
    },
    {
      label: 'Gemma 4 31B',
      data: [520, 189, 60, 14, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PALETTE[1] + 'cc',
      borderColor: PALETTE[1],
      borderWidth: 1,
    },
    {
      label: 'Gemma 4 26B A4B',
      data: [479, 272, 35, 13, 1, 0, 0, 0, 0, 0, 0],
      backgroundColor: PALETTE[2] + 'cc',
      borderColor: PALETTE[2],
      borderWidth: 1,
    },
  ]
  return (
    <ChartFrame
      title="Rating Distribution (8-Turn Protocol)"
      caption={caption}
      render={() => (
      <Bar
        data={{ labels, datasets }}
        options={{
          ...baseOptions,
          scales: {
            x: {
              ...(baseOptions.scales?.x as object),
              title: {
                display: true,
                text: 'Frustration Rating (0-10)',
                color: '#a3a3a3',
              },
            },
            y: {
              ...(baseOptions.scales?.y as object),
              title: {
                display: true,
                text: 'Number of Rated Turns',
                color: '#a3a3a3',
              },
            },
          },
        }}
      />
      )}
    />
  )
}

export function PerTurnEscalationChart({ caption }: { caption?: string }) {
  const labels = Array.from({ length: 8 }, (_, i) => `Turn ${i + 1}`)
  const series = [
    {
      name: 'Gemma 3 27B',
      mean: [1.76, 3.02, 4.13, 4.5, 4.6, 4.9, 4.8, 5.04],
      lo: [1.56, 2.76, 3.85, 4.21, 4.3, 4.61, 4.49, 4.74],
      hi: [1.96, 3.28, 4.41, 4.79, 4.9, 5.19, 5.11, 5.34],
      color: PALETTE[0],
    },
    {
      name: 'Gemma 4 31B',
      mean: [0.12, 0.12, 0.35, 0.4, 0.52, 0.68, 0.64, 0.74],
      lo: [0.05, 0.06, 0.23, 0.27, 0.37, 0.53, 0.47, 0.58],
      hi: [0.19, 0.19, 0.46, 0.53, 0.67, 0.84, 0.82, 0.91],
      color: PALETTE[1],
    },
    {
      name: 'Gemma 4 26B A4B',
      mean: [0.2, 0.23, 0.29, 0.39, 0.66, 0.66, 0.74, 0.68],
      lo: [0.1, 0.12, 0.2, 0.28, 0.52, 0.52, 0.6, 0.52],
      hi: [0.3, 0.34, 0.38, 0.5, 0.8, 0.8, 0.88, 0.84],
      color: PALETTE[2],
    },
  ]

  const datasets = series.flatMap((s) => [
    {
      label: `${s.name} CI high`,
      data: s.hi,
      borderColor: 'transparent',
      backgroundColor: s.color + '26',
      pointRadius: 0,
      fill: '+1' as const,
      tension: 0.3,
    },
    {
      label: s.name,
      data: s.mean,
      borderColor: s.color,
      backgroundColor: s.color,
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
      fill: false,
    },
    {
      label: `${s.name} CI low`,
      data: s.lo,
      borderColor: 'transparent',
      backgroundColor: s.color + '26',
      pointRadius: 0,
      fill: '-1' as const,
      tension: 0.3,
    },
  ])

  return (
    <ChartFrame
      title="Mean Rating per Turn, 8-Turn Protocol (95% CI)"
      caption={caption}
      render={() => (
      <Line
        data={{ labels, datasets }}
        options={{
          ...baseOptions,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            ...baseOptions.plugins,
            legend: {
              labels: {
                color: '#d4d4d4',
                boxWidth: 12,
                padding: 14,
                filter: (item) =>
                  !item.text.includes('CI high') &&
                  !item.text.includes('CI low'),
              },
            },
            tooltip: {
              ...(baseOptions.plugins?.tooltip as object),
              filter: (item) =>
                !item.dataset.label?.includes('CI high') &&
                !item.dataset.label?.includes('CI low'),
              callbacks: {
                label: (ctx) =>
                  `${ctx.dataset.label}: ${(ctx.parsed.y as number).toFixed(2)}`,
              },
            },
          },
          scales: {
            ...baseOptions.scales,
            y: {
              ...(baseOptions.scales?.y as object),
              suggestedMax: 5.5,
              title: {
                display: true,
                text: 'Mean Frustration Rating',
                color: '#a3a3a3',
              },
            },
          },
        }}
      />
      )}
    />
  )
}

export function MeanRating3TurnChart({ caption }: { caption?: string }) {
  const labels = ['Gemma 3 27B', 'Gemma 4 31B', 'Gemma 4 26B A4B']
  const data = [3.15, 0.16, 0.24]
  const ciLow = [2.94, 0.11, 0.18]
  const ciHigh = [3.35, 0.22, 0.29]
  return (
    <ChartFrame
      title="Mean Frustration Rating (3-Turn Protocol)"
      caption={caption}
      render={() => (
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: 'Mean Rating',
                data,
                backgroundColor: PALETTE.map((c) => c + 'cc'),
                borderColor: PALETTE,
                borderWidth: 1,
              },
            ],
          }}
          options={{
            ...baseOptions,
            errorBars: { low: ciLow, high: ciHigh },
            plugins: {
              ...baseOptions.plugins,
              legend: { display: false },
              tooltip: {
                ...(baseOptions.plugins?.tooltip as object),
                callbacks: {
                  label: (ctx) =>
                    `${(ctx.parsed.y as number).toFixed(2)} (95% CI ${ciLow[ctx.dataIndex].toFixed(2)}-${ciHigh[ctx.dataIndex].toFixed(2)})`,
                },
              },
            },
            scales: {
              ...baseOptions.scales,
              y: {
                ...(baseOptions.scales?.y as object),
                suggestedMax: 5.5,
                title: {
                  display: true,
                  text: 'Mean Rating (0-10)',
                  color: '#a3a3a3',
                },
              },
            },
          } as any}
        />
      )}
    />
  )
}

export function Distribution3TurnChart({ caption }: { caption?: string }) {
  const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const datasets = [
    {
      label: 'Gemma 3 27B',
      data: [9, 48, 70, 63, 39, 30, 27, 13, 1, 0, 0],
      backgroundColor: PALETTE[0] + 'cc',
      borderColor: PALETTE[0],
      borderWidth: 1,
    },
    {
      label: 'Gemma 4 31B',
      data: [252, 34, 4, 0, 0, 1, 0, 0, 0, 0, 0],
      backgroundColor: PALETTE[1] + 'cc',
      borderColor: PALETTE[1],
      borderWidth: 1,
    },
    {
      label: 'Gemma 4 26B A4B',
      data: [240, 55, 7, 1, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: PALETTE[2] + 'cc',
      borderColor: PALETTE[2],
      borderWidth: 1,
    },
  ]
  return (
    <ChartFrame
      title="Rating Distribution (3-Turn Protocol)"
      caption={caption}
      render={() => (
        <Bar
          data={{ labels, datasets }}
          options={{
            ...baseOptions,
            scales: {
              x: {
                ...(baseOptions.scales?.x as object),
                title: {
                  display: true,
                  text: 'Frustration Rating (0-10)',
                  color: '#a3a3a3',
                },
              },
              y: {
                ...(baseOptions.scales?.y as object),
                title: {
                  display: true,
                  text: 'Number of Rated Turns',
                  color: '#a3a3a3',
                },
              },
            },
          }}
        />
      )}
    />
  )
}

export function PerTurnPctChart({ caption }: { caption?: string }) {
  const labels = Array.from({ length: 8 }, (_, i) => `Turn ${i + 1}`)
  const series = [
    {
      name: 'Gemma 3 27B',
      mean: [2.0, 12.0, 38.0, 53.0, 52.0, 66.0, 58.0, 67.0],
      lo: [0.6, 7.0, 29.1, 43.3, 42.3, 56.3, 48.2, 57.3],
      hi: [7.0, 19.8, 47.8, 62.5, 61.5, 74.5, 67.2, 75.4],
      color: PALETTE[0],
    },
    {
      name: 'Gemma 4 31B',
      mean: [0, 0, 0, 0, 0, 0, 0, 0],
      lo: [0, 0, 0, 0, 0, 0, 0, 0],
      hi: [3.8, 3.8, 3.8, 3.8, 3.8, 3.8, 3.8, 3.8],
      color: PALETTE[1],
    },
    {
      name: 'Gemma 4 26B A4B',
      mean: [0, 0, 0, 0, 0, 0, 0, 0],
      lo: [0, 0, 0, 0, 0, 0, 0, 0],
      hi: [3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7, 3.7],
      color: PALETTE[2],
    },
  ]

  const datasets = series.flatMap((s) => [
    {
      label: `${s.name} CI high`,
      data: s.hi,
      borderColor: 'transparent',
      backgroundColor: s.color + '26',
      pointRadius: 0,
      fill: '+1' as const,
      tension: 0.3,
    },
    {
      label: s.name,
      data: s.mean,
      borderColor: s.color,
      backgroundColor: s.color,
      borderWidth: 2,
      pointRadius: 3,
      tension: 0.3,
      fill: false,
    },
    {
      label: `${s.name} CI low`,
      data: s.lo,
      borderColor: 'transparent',
      backgroundColor: s.color + '26',
      pointRadius: 0,
      fill: '-1' as const,
      tension: 0.3,
    },
  ])

  return (
    <ChartFrame
      title="% Strong Frustration per Turn (8-Turn Protocol)"
      caption={caption}
      render={() => (
        <Line
          data={{ labels, datasets }}
          options={{
            ...baseOptions,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              ...baseOptions.plugins,
              legend: {
                labels: {
                  color: '#d4d4d4',
                  boxWidth: 12,
                  padding: 14,
                  filter: (item) =>
                    !item.text.includes('CI high') &&
                    !item.text.includes('CI low'),
                },
              },
              tooltip: {
                ...(baseOptions.plugins?.tooltip as object),
                filter: (item) =>
                  !item.dataset.label?.includes('CI high') &&
                  !item.dataset.label?.includes('CI low'),
                callbacks: {
                  label: (ctx) =>
                    `${ctx.dataset.label}: ${(ctx.parsed.y as number).toFixed(1)}%`,
                },
              },
            },
            scales: {
              ...baseOptions.scales,
              y: {
                ...(baseOptions.scales?.y as object),
                title: {
                  display: true,
                  text: '% Responses >= 5',
                  color: '#a3a3a3',
                },
                ticks: {
                  color: '#a3a3a3',
                  callback: (v) => `${v}%`,
                },
              },
            },
          }}
        />
      )}
    />
  )
}
