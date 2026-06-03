import type { AnchorHTMLAttributes, ReactNode } from 'react'

const variants = {
  dark: 'bg-[#24312d] text-[#fffaf4] shadow-[0_18px_42px_rgba(36,49,45,0.18)]',
  light: 'bg-[#fffaf4] text-[#24312d]',
  outline: 'border border-[#24312d2e] bg-white text-[#24312d]',
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: keyof typeof variants
}

export function ButtonLink({
  children,
  className = '',
  variant = 'dark',
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 font-[760] no-underline ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
