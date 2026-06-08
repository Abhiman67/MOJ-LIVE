import Link from 'next/link'

type Card = {
  title: string
  description: string
  href?: string
  label?: string
}

type Section = {
  title: string
  description?: string
  cards?: Card[]
  bullets?: string[]
  variant?: 'light' | 'dark'
}

type Cta = {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export type ContentPageData = {
  eyebrow?: string
  title: string
  lead: string
  sections: Section[]
  cta?: Cta
}

export function ContentPage({ data }: { data: ContentPageData }) {
  const heroHighlights = data.sections
    .flatMap((section) => {
      if (section.cards?.length) {
        return section.cards.map((card) => ({
          eyebrow: section.title,
          title: card.title,
          description: card.description
        }))
      }

      if (section.bullets?.length) {
        return section.bullets.map((bullet) => ({
          eyebrow: section.title,
          title: bullet,
          description: section.description ?? 'Key point'
        }))
      }

      return []
    })
    .slice(0, 3)

  return (
    <div className="dark-page-shell">
      <div className="aurora-bg" />
      <div className="noise-overlay" />

      <section className="mx-auto max-w-7xl pt-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 text-center lg:text-left">
            {data.eyebrow ? <div className="luxury-badge">{data.eyebrow}</div> : null}
            <h1 className="content-hero-title text-balance">{data.title}</h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-text-secondary lg:mx-0 md:text-lg">{data.lead}</p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              {data.cta ? (
                <>
                  <Link href={data.cta.primary.href} className="btn-primary">
                    {data.cta.primary.label}
                  </Link>
                  {data.cta.secondary ? (
                    <Link href={data.cta.secondary.href} className="btn-secondary">
                      {data.cta.secondary.label}
                    </Link>
                  ) : null}
                </>
              ) : null}
            </div>

            {heroHighlights.length ? (
              <div className="grid gap-4 pt-2 md:grid-cols-3">
                {heroHighlights.map((item, index) => (
                  <div key={`${item.eyebrow}-${item.title}`} className="glass-card p-4 text-left">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#FF4444]">{item.eyebrow}</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C50000]/10 text-sm font-semibold text-white">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="lg:pl-4">
            <div className="glass-card p-4 md:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-border-subtle bg-[radial-gradient(circle_at_top,rgba(255,45,45,0.14),rgba(26,26,26,0.55)_50%,rgba(10,10,10,0.96)_100%)] p-6">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-text-muted">At a glance</p>
                    <h2 className="mt-2 font-display text-2xl text-white">Network Snapshot</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C50000]/10 text-[#FF4444]">
                    <i className="fas fa-layer-group text-xl" />
                  </div>
                </div>

                <div className="space-y-4">
                  {(heroHighlights.length
                    ? heroHighlights
                    : data.sections.slice(0, 3).map((section) => ({
                        eyebrow: section.title,
                        title: section.description ?? 'Core focus',
                        description: 'Part of the wider MyOnlineJet network'
                      }))
                  ).map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border-subtle bg-surface-card p-4">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C50000]/10 text-[#FF4444]">
                          <i className="fas fa-arrow-right text-xs" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-text-muted">{item.eyebrow}</p>
                          <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
                          <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-section space-y-8">
        {data.sections.map((section) => (
          <section
            key={section.title}
            className={`glass-card p-8 md:p-10 ${section.variant === 'light' ? 'content-panel-light' : ''}`}
          >
            <div className="max-w-4xl">
              <p className="section-kicker">{section.title}</p>
              {section.description ? (
                <p className="mt-3 text-base leading-7 text-text-secondary">
                  {section.description}
                </p>
              ) : null}
            </div>

            {section.cards ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card) => (
                  <article key={card.title} className="glass-card rounded-[1.25rem] p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C50000]/10 text-[#FF4444]">
                      <i className="fas fa-circle-notch text-xs" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {card.description}
                    </p>
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="link-arrow mt-4 inline-flex"
                      >
                        {card.label ?? 'Learn more'}
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {section.bullets ? (
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 rounded-2xl border border-border-subtle bg-surface-card p-4 text-sm text-text-secondary"
                  >
                    <span className="mt-1 text-[#FF4444]">-</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {data.cta ? (
        <section className="content-section">
          <div className="rounded-[1.5rem] border border-border-subtle bg-gradient-to-r from-[#C50000]/12 via-[#C50000]/5 to-transparent p-8 text-center shadow-[0_30px_60px_rgba(0,0,0,0.24)] md:p-10">
            <h2 className="font-display text-3xl text-white">{data.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-text-secondary">{data.cta.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href={data.cta.primary.href} className="btn-primary">
                {data.cta.primary.label}
              </Link>
              {data.cta.secondary ? (
                <Link href={data.cta.secondary.href} className="btn-secondary">
                  {data.cta.secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  )
}
