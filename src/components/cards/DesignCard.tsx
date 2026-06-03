import type { InvitationDesign } from '../../data/landing'

type DesignCardProps = {
  design: InvitationDesign
}

export function DesignCard({ design }: DesignCardProps) {
  return (
    <article className="rounded-lg border border-[#24312d1a] bg-white p-3.5 shadow-[0_18px_44px_rgba(36,49,45,0.08)]">
      <div
        className={`flex min-h-[330px] flex-col justify-end gap-[9px] rounded-md p-6 ${design.previewClass}`}
      >
        <span className="text-[0.78rem] font-[780] uppercase">{design.tone}</span>
        <strong className="max-w-[220px] font-serif text-[2.4rem] font-medium leading-none">
          {design.name}
        </strong>
        <small className="text-[0.78rem] font-[780] uppercase">Save the date</small>
      </div>
      <div className="flex items-center justify-between gap-4 px-1 pt-[18px] pb-0.5">
        <div>
          <h3 className="mb-0 text-[1.06rem] font-bold text-[#22302b]">{design.name}</h3>
          <p className="mb-0 text-[0.92rem] text-[#68736f]">{design.tone} invitation suite</p>
        </div>
        <span className="font-[850] text-[#3f7d58]">{design.price}</span>
      </div>
    </article>
  )
}
