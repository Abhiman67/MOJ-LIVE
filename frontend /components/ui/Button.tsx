import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react'

type BaseProps = PropsWithChildren<{
  variant?: 'primary' | 'secondary'
  className?: string
}>

const baseClasses = {
  primary: 'primary-btn',
  secondary: 'secondary-btn'
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string
  }) {
  const classes = `${baseClasses[variant]} ${className}`.trim()

  if (typeof props.href === 'string') {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
