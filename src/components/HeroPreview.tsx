import { headingClass } from '../styles/classes'

const noteClass =
  'absolute z-3 w-[178px] rounded-lg border border-[#24312d1f] bg-[#fffaf4]/90 p-[18px] shadow-[0_24px_50px_rgba(36,49,45,0.16)] max-sm:static max-sm:mt-3 max-sm:w-[min(100%,315px)]'

export function HeroPreview() {
  return (
    <div
      className="relative grid min-h-[590px] place-items-center overflow-hidden rounded-lg bg-[#ece8de] bg-[linear-gradient(130deg,rgba(73,125,96,0.18),transparent_34%),linear-gradient(330deg,rgba(177,79,90,0.18),transparent_42%)] max-[980px]:min-h-[560px] max-sm:min-h-[500px] max-sm:px-4 max-sm:py-[22px]"
      aria-label="Invitation design preview"
    >
      <img
        className="absolute inset-[26px] h-[calc(100%-52px)] w-[calc(100%-52px)] rounded-lg object-cover opacity-30 saturate-[0.92]"
        src="/hero-invitation-market.png"
        alt="A preview collage of digital wedding invitation designs"
      />

      <article className="relative z-2 min-h-[540px] w-[min(76vw,315px)] rounded-[34px] border border-[#24312d29] bg-[#16201d] p-4 shadow-[0_35px_70px_rgba(36,49,45,0.3)]">
        <div className="mx-auto mb-3.5 h-[5px] w-[72px] rounded-full bg-white/30" />
        <div className="flex min-h-[488px] flex-col items-center justify-center rounded-3xl bg-[#fffaf4] bg-[linear-gradient(rgba(255,255,255,0.42),rgba(255,255,255,0.6)),radial-gradient(circle_at_30%_18%,rgba(63,125,88,0.22),transparent_32%),radial-gradient(circle_at_82%_76%,rgba(177,79,90,0.2),transparent_30%)] p-[30px] text-center">
          <p className="mb-0 text-[0.72rem] font-[780] uppercase tracking-normal text-[#6d7772]">
            The Wedding of
          </p>
          <h2 className={`${headingClass} my-5 mb-[18px] text-[3.25rem] leading-[0.92]`}>
            Alya & Reza
          </h2>
          <p className="mb-0 text-[#69736f]">Saturday, 24 August 2026</p>
          <div className="my-7 h-px w-[76px] bg-[#24312d33]" />
          <span className="rounded-full bg-[#24312d] px-[17px] py-[11px] text-[0.82rem] font-[760] text-[#fffaf4]">
            Open invitation
          </span>
        </div>
      </article>

      <FloatingNote positionClass="left-[clamp(12px,5vw,48px)] top-[19%]" label="Theme">
        Soft botanical
      </FloatingNote>
      <FloatingNote
        positionClass="right-[clamp(12px,5vw,48px)] bottom-[18%]"
        label="Includes"
      >
        RSVP, map, gallery
      </FloatingNote>
    </div>
  )
}

type FloatingNoteProps = {
  children: string
  label: string
  positionClass: string
}

function FloatingNote({ children, label, positionClass }: FloatingNoteProps) {
  return (
    <article className={`${noteClass} ${positionClass}`}>
      <span className="text-[0.72rem] font-[780] uppercase tracking-normal text-[#6d7772]">
        {label}
      </span>
      <strong className="mt-2 block text-[#24312d]">{children}</strong>
    </article>
  )
}
