import { ButtonLink } from './ui/ButtonLink'

const navigationItems = [
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between gap-6 border-b border-[#222d3217] bg-[#faf9f6]/85 px-5 py-[18px] backdrop-blur-2xl md:px-[5vw] xl:px-[72px] max-[980px]:static">
      <a
        className="flex items-center gap-2.5 text-[1.12rem] font-extrabold text-[#24312d] no-underline"
        href="#top"
        aria-label="iWed home"
      >
        <span className="grid size-[38px] place-items-center rounded-full bg-[#24312d] text-[0.86rem] text-[#fffaf4]">
          iW
        </span>
        <span>iWed</span>
      </a>

      <nav
        className="flex items-center gap-7 text-[0.94rem] font-[650] text-[#58645f] max-[980px]:hidden"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <a className="text-inherit no-underline" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <ButtonLink className="max-sm:hidden" href="#catalogue">
        Browse designs
      </ButtonLink>
    </header>
  )
}
