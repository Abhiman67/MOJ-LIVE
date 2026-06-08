import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'moj-news-widget': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

export {}
