'use client'

// TODO: add toast notification on copy, with image title

const CopyUrlButton = ({ url }: { url: string }) => {
  return (
    <div className="absolute right-2 top-2">
      <button onClick={() => {
        navigator.clipboard.writeText(url)
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6" />
            <path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9" />
          </g>
        </svg>
      </button>
    </div>
  )
}

export default CopyUrlButton
