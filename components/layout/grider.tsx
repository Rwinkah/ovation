import React from 'react'

export default function Grider({
  left,
  right,
}: {
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <section className="grid grid-cols-3 w-full">
      <div className="timeline-main col-span-2 flex flex-col border-r border-[#1A1A1A] h-[400px] w-full bg-[#111115] overflow-auto">
        {left}
      </div>
      <div className="col-span-1 px-[30px] py-[21px] flex flex-col gap-5 bg-[#111115] other-link overflow-auto">
        {right}
      </div>
    </section>
  )
}
