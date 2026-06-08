(function () {
  if (customElements.get('moj-news-widget')) return

  class MojNewsWidget extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div id="newsLoader" class="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-500">
          Loading newsroom updates...
        </div>
        <div id="newsGrid" class="mt-8 grid gap-6 md:grid-cols-3"></div>
      `

      const grid = this.querySelector('#newsGrid')
      const loader = this.querySelector('#newsLoader')
      const endpoint = 'https://news.myonlinejet.com/wp-json/wp/v2/posts?per_page=6&_embed&orderby=date'

      fetch(endpoint, { headers: { Accept: 'application/json' } })
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error('HTTP error'))))
        .then((posts) => {
          if (loader) loader.remove()
          if (!posts || !posts.length) {
            if (grid) {
              grid.innerHTML =
                '<div class="col-span-3 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-gray-500">No news yet. Visit the news portal.</div>'
            }
            return
          }

          if (!grid) return
          grid.innerHTML = posts
            .map((post) => {
              const media =
                post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]
                  ? post._embedded['wp:featuredmedia'][0].source_url
                  : ''
              const title = post?.title?.rendered || 'Untitled post'
              const excerpt = (post?.excerpt?.rendered || '').replace(/<[^>]*>/g, '').slice(0, 110)
              const link = post?.link || '#'
              return `
                <article class="spotlight-card overflow-hidden group">
                  <div class="h-48 overflow-hidden bg-gray-800">
                    ${
                      media
                        ? `<img src="${media}" alt="" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy">`
                        : '<div class="flex h-full w-full items-center justify-center bg-gray-800"><i class="fas fa-newspaper text-4xl text-gray-600"></i></div>'
                    }
                  </div>
                  <div class="p-6">
                    <div class="mb-2 text-xs font-semibold uppercase tracking-wider text-[#FF4444]">AAM News</div>
                    <h3 class="mb-2 font-display text-xl text-white line-clamp-2">${title}</h3>
                    <p class="mb-4 text-sm text-gray-500 line-clamp-2">${excerpt}${excerpt ? '...' : ''}</p>
                    <a href="${link}" target="_blank" rel="noreferrer noopener" class="inline-flex items-center text-sm font-medium text-[#FF4444] transition-colors hover:text-[#FF6666]">
                      Read more <i class="fas fa-arrow-right ml-2 text-xs"></i>
                    </a>
                  </div>
                </article>
              `
            })
            .join('')
        })
        .catch(() => {
          if (loader) {
            loader.innerHTML =
              'Unable to load news. <a href="https://news.myonlinejet.com" class="text-[#FF4444]">Visit our news portal</a>'
          }
        })
    }
  }

  customElements.define('moj-news-widget', MojNewsWidget)
})()
