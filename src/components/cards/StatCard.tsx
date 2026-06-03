type StatCardProps = {
  label: string
  value: string
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="min-w-[132px] rounded-lg border border-[#24312d1a] bg-white px-[18px] py-3.5">
      <dt className="font-[850] text-[#24312d]">{value}</dt>
      <dd className="mt-[3px] mb-0 text-[0.9rem] text-[#66716d]">{label}</dd>
    </div>
  )
}
