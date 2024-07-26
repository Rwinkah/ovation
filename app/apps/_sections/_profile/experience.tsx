import Editicon from '@/components/icons/edit-icon'
import PlusIcon from '@/components/icons/plus-icon'

interface Experience {
  position: string
  companyLogo: string
  company: string
  startDate: string
  endDate: string
  details: string
  extendedDetails: string
}

const experience: Experience[] = [
  {
    position: 'CEO',
    companyLogo: '/assets/images/profile/facebook.png',
    company: 'Facebook',
    startDate: 'May 2012',
    endDate: '',
    details: `Define the long-term goals and direction of the company. This
            includes identifying market opportun, assessing competitive
            landscapes, and determining the path for growth and innovation.`,
    extendedDetails: `Provide strong leadership to all departments within the company,
            fostering a culture of collaboratio, innovation, and accountability.
            Motivate employees to achieve their best and align their efforts
            with the company's objectives.`,
  },
  {
    position: 'CEO',
    companyLogo: '/assets/images/profile/x.png',
    company: 'X',
    startDate: 'May 2012',
    endDate: '',
    details: `Define the long-term goals and direction of the company. This
            includes identifying market opportun, assessing competitive
            landscapes, and determining the path for growth and innovation.`,
    extendedDetails: `Provide strong leadership to all departments within the company,
            fostering a culture of collaboratio, innovation, and accountability.
            Motivate employees to achieve their best and align their efforts
            with the company's objectives.`,
  },
]

export default function Experience() {
  return (
    <div className="w-[95%] ml-[2.5%] p-10 flex items-center justify-center rounded-[14px] border border-[#353538] flex-col gap-[42px] mt-12">
      <div className="flex items-center justify-between w-full">
        <p className="text-white font-medium">Experience</p>

        <div className="flex items-center gap-3">
          <PlusIcon className="w-[14px] h-[14px] stroke-[#CFF073]" />
          <Editicon className="w-3 h-[13px] fill-[#CFF073]" />
        </div>
      </div>

      {experience.map((item, index) => (
        <div className="flex gap-5 w-full" key={index}>
          <img
            src={item.companyLogo}
            alt={item.company + ' ' + 'logo'}
            className="w-[52px] h-[52px]"
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-2xl font-semibold">
                {item.position}
              </p>
              <p className="text-[#CCCCCC] text-xl">{item.company}</p>
              <p className="text-[#808080] text-xl">
                {item.startDate + ' - ' + item.endDate}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-lg text-[#B3B3B3]">{item.details}</p>
              <p className="text-lg text-[#B3B3B3]">{item.extendedDetails}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
