'use client'

interface FilterPillsProps {
  activeFilter: 'all' | 'stelle' | 'sogni'
  onChange: (filter: 'all' | 'stelle' | 'sogni') => void
}

export default function FilterPills({ activeFilter, onChange }: FilterPillsProps) {
  const filters: Array<{ value: 'all' | 'stelle' | 'sogni'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'stelle', label: 'Di Stelle' },
    { value: 'sogni', label: 'Di Sogni' },
  ]

  const getBackgroundColor = (filterValue: 'all' | 'stelle' | 'sogni') => {
    if (activeFilter !== filterValue) return 'var(--cream)'

    switch (filterValue) {
      case 'stelle':
        return 'var(--stelle-green)'
      case 'sogni':
        return 'var(--sogni-pink)'
      default:
        return 'var(--cream)'
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '20px',
          marginRight: '8px',
          color: 'var(--black)',
        }}
      >
        Filter by:
      </span>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={`
            transition-all duration-200
            border border-black rounded-[20px]
            cursor-pointer
            clickable
            ${activeFilter === filter.value ? 'font-bold' : ''}
          `}
          style={{
            padding: '10px 20px',
            backgroundColor: getBackgroundColor(filter.value),
            fontFamily: 'var(--font-body)',
            fontSize: '20px',
            color: 'var(--black)',
          }}
          aria-pressed={activeFilter === filter.value}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
