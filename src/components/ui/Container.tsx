import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function Container({ children, className = '', id }: ContainerProps) {
  return (
    <section className={`mx-5 md:mx-[5vw] xl:mx-[72px] ${className}`} id={id}>
      {children}
    </section>
  )
}
