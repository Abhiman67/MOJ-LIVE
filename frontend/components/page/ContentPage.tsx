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

      <section className="mx-auto max-w-7xl pt-3 sm:pt-6">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {data.eyebrow ? <div className="luxury-badge">{data.eyebrow}</div> : null}
            <h1 className="content-hero-title text-balance">{data.title}</h1>
            <p className="mx-auto max-w-3xl text-sm leading-6 text-text-secondary lg:mx-0 sm:text-base sm:leading-7 md:text-lg">{data.lead}</p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start">
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
              <div className="grid gap-3 pt-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
                {heroHighlights.map((item, index) => (
                  <div key={`${item.eyebrow}-${item.title}`} className="glass-card p-3 sm:p-4 text-left">
                    <div className="mb-2 flex items-center justify-between sm:mb-3">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[#C50000] sm:text-xs">{item.eyebrow}</span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C50000]/10 text-[10px] font-semibold text-white sm:h-8 sm:w-8 sm:text-sm">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">{item.title}</h3>
                    <p className="mt-1 text-[11px] leading-5 text-gray-400 sm:mt-2 sm:text-sm sm:leading-6">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="lg:pl-4">
            <div className="glass-card p-3 sm:p-4 md:p-6">
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-[radial-gradient(circle_at_top,rgba(197,0,0,0.14),rgba(26,26,26,0.55)_50%,rgba(10,10,10,0.96)_100%)] p-3 sm:rounded-[1.5rem] sm:p-5 md:p-6">
                <div className="mb-4 flex items-center justify-between sm:mb-6 md:mb-8">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs">At a glance</p>
                    <h2 className="mt-1 font-display text-base text-white sm:mt-2 sm:text-xl md:text-2xl truncate">Network Snapshot</h2>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C50000]/10 text-[#C50000] sm:h-12 sm:w-12 sm:rounded-2xl">
                    <i className="fas fa-layer-group text-xs sm:text-xl" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-4">
                  {(heroHighlights.length
                    ? heroHighlights
                    : data.sections.slice(0, 3).map((section) => ({
                        eyebrow: section.title,
                        title: section.description ?? 'Core focus',
                        description: 'Part of the wider MyOnlineJet network'
                      }))
                  ).map((item) => (
                    <div key={item.title} className="rounded-lg border border-border-subtle bg-surface-card p-2 sm:rounded-2xl sm:p-4">
                      <div className="flex items-start gap-2 sm:gap-4">
                        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C50000]/10 text-[#C50000] sm:mt-1 sm:h-10 sm:w-10">
                          <i className="fas fa-arrow-right text-[8px] sm:text-xs" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] uppercase tracking-[0.18em] text-text-muted sm:text-xs truncate">{item.eyebrow}</p>
                          <h3 className="mt-0.5 text-xs font-semibold text-white sm:mt-1 sm:text-base truncate">{item.title}</h3>
                          <p className="mt-0.5 text-[10px] text-text-secondary sm:mt-1 sm:text-sm line-clamp-2">{item.description}</p>
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

      <div className="content-section space-y-5 sm:space-y-6 md:space-y-8">
        {data.sections.map((section) => (
          <section
            key={section.title}
            className={`glass-card p-4 sm:p-6 md:p-8 lg:p-10 ${section.variant === 'light' ? 'content-panel-light' : ''}`}
          >
            <div className="max-w-4xl">
              <p className="section-kicker">{section.title}</p>
              {section.description ? (
                <p className="mt-2 text-xs leading-5 text-text-secondary sm:mt-3 sm:text-base sm:leading-7">
                  {section.description}
                </p>
              ) : null}
            </div>

            {section.cards ? (
              <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-5 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {section.cards.map((card) => (
                  <article key={card.title} className="glass-card rounded-xl p-3 sm:rounded-[1.25rem] sm:p-5 md:p-6">
                    <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#C50000]/10 text-[#C50000] sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                      <i className="fas fa-circle-notch text-[9px] sm:text-xs" />
                    </div>
                    <h3 className="text-sm font-semibold text-white sm:text-lg md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-text-secondary sm:mt-3 sm:text-sm sm:leading-6">
                      {card.description}
                    </p>
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="link-arrow mt-2 inline-flex text-xs sm:mt-4 sm:text-sm"
                      >
                        {card.label ?? 'Learn more'}
                      </Link>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}

            {section.bullets ? (
              <ul className="mt-3 grid gap-2 sm:mt-5 sm:gap-3 md:mt-6 md:grid-cols-2">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 rounded-lg border border-border-subtle bg-surface-card p-2 text-xs text-text-secondary sm:gap-3 sm:rounded-2xl sm:p-4 sm:text-sm"
                  >
                    <span className="mt-0.5 text-[#C50000] sm:mt-1 shrink-0">-</span>
                    <span className="break-words">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {data.cta ? (
        <section className="content-section">
          <div className="rounded-xl border border-border-subtle bg-gradient-to-r from-[#C50000]/12 via-[#C50000]/5 to-transparent p-4 text-center shadow-[0_30px_60px_rgba(0,0,0,0.24)] sm:rounded-[1.5rem] sm:p-6 md:p-8 lg:p-10">
            <h2 className="font-display text-lg text-white sm:text-2xl md:text-3xl">{data.cta.title}</h2>
            <p className="mx-auto mt-2 max-w-3xl text-xs text-text-secondary sm:mt-4 sm:text-sm md:text-base">{data.cta.description}</p>
            <div className="mt-3 flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:mt-5 md:mt-6">
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
