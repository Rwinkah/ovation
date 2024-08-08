import Image from 'next/image'

export default function CardTwo() {
  return (
    <div className="flex flex-col items-center w-full h-fit gap-5">
      <div className="w-fit gradient-container p-[1px] rounded-[26px] md:rounded-[30px] z-[100]">
        <div className="flex items-center px-6 py-5 bg-[#383D2B] rounded-[26px] md:rounded-[30px] gap-4 shadow-info">
          <img
            src="/assets/images/info/card2/card2-1.png"
            alt="10K badge"
            className="w-10 h-10 md:w-[65px] md:h-[65px] 2xl:w-[74px] 2xl:h-[74px]"
          />

          <div className="flex flex-col">
            <p className="text-base md:text-[19px] 2xl:text-[21px] text-[#F8F8FF] font-medium">
              Congratulations: New badge
            </p>
            <p className="text-base md:text-lg 2xl:text-[21px] text-[#999999]">
              You just earned a new badge
            </p>
          </div>
        </div>
      </div>

      <div className="w-fit gradient-container p-[1px] rounded-[18px] md:rounded-[22px] z-[90] mt-[-70px]">
        <div className="flex items-center px-5 py-4 bg-[#383D2B] rounded-[18px] md:rounded-[22px] gap-4 shadow-info2">
          <img
            src="/assets/images/info/card2/card2-2.png"
            alt="10K badge"
            className="w-9 h-9 md:w-[56px] md:h-[56px] 2xl:w-[65px] 2xl:h-[65px]"
          />

          <div className="flex flex-col">
            <p className="text-sm 2xl:text-base 2xl:text-[19px] text-[#F8F8FF] font-medium">
              Congratulations: New badge
            </p>
            <p className="text-sm 2xl:text-base 2xl:text-[19px] text-[#999999]">
              You just earned a new badge
            </p>
          </div>
        </div>
      </div>

      <div className="w-fit gradient-container p-[1px] rounded-[16px] md:rounded-[20px] z-[80] mt-[-60px]">
        <div className="flex items-center px-4 py-3 bg-[#383D2B] rounded-[16px] md:rounded-[20px] gap-4 shadow-info3">
          <img
            src="/assets/images/info/card2/card2-3.png"
            alt="10K badge"
            className="w-8 h-8 md:w-[50px] md:h-[50px] 2xl:w-[59px] 2xl:h-[59px]"
          />

          <div className="flex flex-col">
            <p className="text-xs md:text-sm 2xl:text-base text-[#F8F8FF] font-medium">
              Congratulations: New badge
            </p>
            <p className="text-xs md:text-sm 2xl:text-base text-[#999999]">
              You just earned a new badge
            </p>
          </div>
        </div>
      </div>

      <div className="w-fit gradient-container p-[1px] rounded-[17px] md:rounded-[21px] z-[70] mt-[-50px]">
        <div className="flex items-center px-3 py-2 bg-[#383D2B] rounded-[17px] md:rounded-[21px] gap-4 shadow-info4">
          <img
            src="/assets/images/info/card2/card2-5.png"
            alt="10K badge"
            className="w-7 h-7 md:w-[44px] md:h-[44px] 2xl:w-[53px] 2xl:h-[53px]"
          />

          <div className="flex flex-col">
            <p className="text-[10px] md:text-xs 2xl:text-[15px] text-[#F8F8FF] font-medium">
              Congratulations: New badge
            </p>
            <p className="text-[10px] md:text-xs 2xl:text-[15px] text-[#999999]">
              You just earned a new badge
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
