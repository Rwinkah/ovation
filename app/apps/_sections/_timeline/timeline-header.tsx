import Image from 'next/image'

export default function TimelineHeader() {
  const sunIcon = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <path
        d="M19.6687 32.0807C13.1123 32.0807 7.78516 26.6641 7.78516 19.9974C7.78516 13.3307 13.1123 7.91406 19.6687 7.91406C26.2252 7.91406 31.5523 13.3307 31.5523 19.9974C31.5523 26.6641 26.2252 32.0807 19.6687 32.0807ZM19.6687 10.4141C14.4727 10.4141 10.2438 14.7141 10.2438 19.9974C10.2438 25.2807 14.4727 29.5807 19.6687 29.5807C24.8647 29.5807 29.0937 25.2807 29.0937 19.9974C29.0937 14.7141 24.8647 10.4141 19.6687 10.4141Z"
        fill="#FFA800"
      />
      <path
        d="M19.6709 38.268C18.7694 38.268 18.0318 37.5846 18.0318 36.668V36.5346C18.0318 35.618 18.7694 34.868 19.6709 34.868C20.5724 34.868 21.31 35.618 21.31 36.5346C21.31 37.4513 20.5724 38.268 19.6709 38.268ZM31.3742 33.568C30.948 33.568 30.5382 33.4013 30.2104 33.0846L29.9973 32.868C29.3581 32.218 29.3581 31.168 29.9973 30.518C30.6366 29.868 31.6692 29.868 32.3085 30.518L32.5216 30.7346C33.1608 31.3846 33.1608 32.4346 32.5216 33.0846C32.2101 33.4013 31.8003 33.568 31.3742 33.568ZM7.96761 33.568C7.54144 33.568 7.13166 33.4013 6.80384 33.0846C6.16458 32.4346 6.16458 31.3846 6.80384 30.7346L7.01692 30.518C7.65618 29.868 8.68882 29.868 9.32808 30.518C9.96733 31.168 9.96733 32.218 9.32808 32.868L9.11499 33.0846C8.80356 33.4013 8.37739 33.568 7.96761 33.568ZM36.062 21.668H35.9309C35.0294 21.668 34.2918 20.918 34.2918 20.0013C34.2918 19.0846 35.0294 18.3346 35.9309 18.3346C36.8324 18.3346 37.6356 19.0846 37.6356 20.0013C37.6356 20.918 36.9636 21.668 36.062 21.668ZM3.41087 21.668H3.27974C2.37823 21.668 1.64062 20.918 1.64062 20.0013C1.64062 19.0846 2.37823 18.3346 3.27974 18.3346C4.18125 18.3346 4.98442 19.0846 4.98442 20.0013C4.98442 20.918 4.31238 21.668 3.41087 21.668ZM31.1611 9.98463C30.7349 9.98463 30.3251 9.81797 29.9973 9.5013C29.3581 8.8513 29.3581 7.8013 29.9973 7.1513L30.2104 6.93464C30.8497 6.28464 31.8823 6.28464 32.5216 6.93464C33.1608 7.58463 33.1608 8.63464 32.5216 9.28464L32.3085 9.5013C31.997 9.81797 31.5873 9.98463 31.1611 9.98463ZM8.18069 9.98463C7.75452 9.98463 7.34475 9.81797 7.01692 9.5013L6.80384 9.26797C6.16458 8.61797 6.16458 7.56797 6.80384 6.91797C7.44309 6.26797 8.47574 6.26797 9.11499 6.91797L9.32808 7.13464C9.96733 7.78464 9.96733 8.83464 9.32808 9.48464C9.01664 9.81797 8.59047 9.98463 8.18069 9.98463ZM19.6709 5.06797C18.7694 5.06797 18.0318 4.38464 18.0318 3.46797V3.33464C18.0318 2.41797 18.7694 1.66797 19.6709 1.66797C20.5724 1.66797 21.31 2.41797 21.31 3.33464C21.31 4.2513 20.5724 5.06797 19.6709 5.06797Z"
        fill="#FFA800"
      />
    </svg>
  )

  return (
    <header className="flex items-center h-[90px] border-r border-b border-[#1A1A1A] max-w-full bg-[#111115] sticky top-0">
      <nav className="flex items-center gap-3">
        <div className="w-[310px] flex items-center justify-center h-[90px] border-r border-[#1A1A1A]">
          <Image
            src="/assets/images/logo/logo.png"
            alt="Logo"
            width={220}
            height={100}
          />
        </div>
        <div className="flex items-center gap-3">
          {sunIcon}
          <p className="text-[#CCCCCC] text-xl font-medium">
            Good Morning, John
          </p>
        </div>
      </nav>
    </header>
  )
}
