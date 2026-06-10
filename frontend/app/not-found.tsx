import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[70vh] items-center justify-center">
      <div className="glass-card max-w-xl p-8 text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-2 text-4xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-gray-300">
          The route does not exist in the new Next.js shell yet. We&apos;ll migrate it in the next phase.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="primary-btn">
            Back Home
          </Link>
          <Link href="/contact" className="secondary-btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
