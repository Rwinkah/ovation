'use client'

import Grider from '@/components/layout/grider'
import OtherLinks from '../_sections/_timeline/other-link'
import SearchInput from '../_components/_timeline/search-input'
import { Button } from '@/components/ui/button'
import VerifyIcon from '@/components/icons/verifyIcon'
import Image from 'next/image'
import {
  BadgedHolders,
  FeaturedUser,
  DiscoverFilter,
  DiscoverHoldersProps,
} from '@/app/types'
import { useEffect, useState } from 'react'

const TestData: BadgedHolders[] = [
  {
    id: '1',
    displayName: 'ETHplorer',
    userName: 'ethAlice',
    displayImg: 'pfp1.jpeg',
    collectorAmount: 5,
    creatorAmount: 2,
    topHoldersAmount: 10,
    founderNftAMount: 1,
    netWorth: 10000,
    contributorAmount: 990,
    blueAmount: 2390,
  },
  {
    id: '2',
    displayName: 'BtcBOB',
    userName: 'btcBob',
    displayImg: 'pfp2.jpeg',
    collectorAmount: 8,
    creatorAmount: 1,
    topHoldersAmount: 15,
    founderNftAMount: 2,
    netWorth: 15000,
    contributorAmount: 1090,
    blueAmount: 2005,
  },
  {
    id: '3',
    displayName: 'SolanaStriker',
    userName: 'solCharlie',
    displayImg: 'pfp3.jpeg',
    collectorAmount: 3,
    creatorAmount: 5,
    topHoldersAmount: 5,
    founderNftAMount: 0,
    netWorth: 8000,
    contributorAmount: 8014,
    blueAmount: 2400,
  },
  {
    id: '4',
    displayName: 'RippleRanger',
    userName: 'rippleRanger',
    displayImg: 'pfp4.jpeg',
    collectorAmount: 7,
    creatorAmount: 2,
    topHoldersAmount: 12,
    founderNftAMount: 3,
    netWorth: 12000,
    contributorAmount: 3334,
    blueAmount: 2550,
  },
  {
    id: '5',
    displayName: 'CardanoCrusader',
    userName: 'cardanoCrusader',
    displayImg: 'pfp5.jpeg',
    collectorAmount: 4,
    creatorAmount: 4,
    topHoldersAmount: 8,
    founderNftAMount: 1,
    netWorth: 9500,
    contributorAmount: 2348,
    blueAmount: 1090,
  },
  {
    id: '6',
    displayName: 'LitecoinLurker',
    userName: 'litecoinLurker',
    displayImg: 'pfp11.jpeg',
    collectorAmount: 6,
    creatorAmount: 3,
    topHoldersAmount: 11,
    founderNftAMount: 2,
    netWorth: 11000,
    contributorAmount: 4327,
    blueAmount: 37400,
  },
  {
    id: '7',
    displayName: 'PolkaPilot',
    userName: 'polkaPilot',
    displayImg: 'pfp6.jpeg',
    collectorAmount: 9,
    creatorAmount: 1,
    topHoldersAmount: 14,
    founderNftAMount: 4,
    netWorth: 14000,
    contributorAmount: 5129,
    blueAmount: 5783,
  },
  {
    id: '8',
    displayName: 'ChainlinkChampion',
    userName: 'chainlinkChampion',
    displayImg: 'pfp7.jpeg',
    collectorAmount: 2,
    creatorAmount: 6,
    topHoldersAmount: 7,
    founderNftAMount: 0,
    netWorth: 7000,
    contributorAmount: 8300,
    blueAmount: 900,
  },
  {
    id: '9',
    displayName: 'TezosTracker',
    userName: 'tezosTracker',
    displayImg: 'pfp8.jpeg',
    collectorAmount: 5,
    creatorAmount: 2,
    topHoldersAmount: 9,
    founderNftAMount: 2,
    netWorth: 10500,
    contributorAmount: 12900,
    blueAmount: 11000,
  },
  {
    id: '10',
    displayName: 'MoneroMaverick',
    userName: 'moneroMaverick',
    displayImg: 'pfp9.jpeg',
    collectorAmount: 8,
    creatorAmount: 0,
    topHoldersAmount: 16,
    founderNftAMount: 5,
    netWorth: 16000,
    contributorAmount: 33590,
    blueAmount: 13009,
  },
  {
    id: '11',
    displayName: 'DashDaredevil',
    userName: 'dashDaredevil',
    displayImg: 'pfp10.jpeg',
    collectorAmount: 7,
    creatorAmount: 3,
    topHoldersAmount: 13,
    founderNftAMount: 3,
    netWorth: 13000,
    contributorAmount: 14300,
    blueAmount: 12400,
  },
]

const FeaturedTest: FeaturedUser = {
  displayName: 'Josh.eth',
  userName: 'josh2rich',
  nftCount: 10, // Assuming these should be numbers, not strings
  ovaToken: 20,
  archToken: 12,
  badges: 7,
  img: '/assets/images/timeline/_other-section/featured.png',
  desc: 'Passionate NFT holder exploring the future of digital ownership. Join me in discovering the limitless possibilities of the NFT ecosystem. #NFTCommunity',
}

export default function page() {
  return (
    <div className="flex flex-col w-full bg-[#111115]">
      <div
        className="h-[25vh] w-full g-orange-400 flex items-center justify-center bg-cover shadow"
        style={{ backgroundImage: `url('/assets/images/discoverBack.svg')` }}
      >
        <SearchInput
          inpClass="bg-white rounded-md w-[880px]"
          iconClass={{ fill: 'black' }}
        />
      </div>
      <div className="grid grid-cols-[7fr,3fr]">
        <DiscoverLeft />
        {/* <OtherLinks /> */}
        <DiscoverRight filteredData={TestData} />
      </div>
    </div>
  )
}

function DiscoverLeft() {
  const [Filter, setFilter] = useState<DiscoverFilter>(DiscoverFilter.Creators)
  return (
    <div className="p-10 mb-[100px] overflow-scroll lg:h-[75vh]  flex flex-col gap-10">
      <DiscoverFeature {...FeaturedTest} />
      <DiscoverHolders setFilter={setFilter} Filter={Filter} data={TestData} />
    </div>
  )
}

function DiscoverFeature(user: FeaturedUser) {
  return (
    <div className="border border-[#FFFFFF14] rounded-[14px] p-6 gap-9 flex flex-col">
      <div className="flex items-center w-full justify-between">
        <p className="text-base font-medium text-white">FEATURED</p>

        <Button className="bg-transparent border-none outline-none rounded-none px-0 py-3 w-fit h-fit text-[#CFF073] text-xs transition-all duration-300 hover:opacity-80">
          View all
        </Button>
      </div>
      <div id="featured-user" className={`flex gap-10 items-center w-full  `}>
        <img
          src="/assets/images/timeline/_other-section/featured.png"
          alt={`${user.userName}'s display picture`}
          className="w-[420px] h-auto rounded-2xl"
        />

        <div className="flex flex-col max-w-[372px] gap-4">
          <div className="flex items-center w-full justify-between pb-6 border-b border-[#FFFFFF0D]">
            <div className="flex items-center gap-2">
              <Image
                src={user.img}
                alt={`${user.userName}'s display picture`}
                width={48}
                height={48}
                className="rounded-full"
              />

              <div className="flex flex-col">
                <p className="flex gap-1 items-center text-base font-semibold leading-5 text-white">
                  {user.displayName}
                  <VerifyIcon />
                </p>
                <p className="text-xs leading-5 font-medium text-[#B3B3B3]">
                  {`@${user.userName}`}
                </p>
              </div>
            </div>

            <Button className="bg-[#CFF073] border-none outline-none font-medium w-fit h-fit text-[#0B0A10] text-[9.6px] transition-all duration-300 hover:opacity-80">
              Follow
            </Button>
          </div>

          <p className="text-sm text-[#B3B3B3]">{user.desc}</p>
          <div className="flex w-full gap-2">
            <p className="rounded-full border-[1px] text-[10px] p-1 text-white bg-[#18181C] border-[#353538]">
              {`NFT count: ${user.nftCount}`}
            </p>
            <p className="rounded-full border-[1px] text-[10px] p-1 text-white bg-[#18181C] border-[#353538]">
              {`OVA TOKEN: ${user.ovaToken}`}
            </p>
            <p className="rounded-full border-[1px] text-[10px] p-1 text-white bg-[#18181C] border-[#353538]">
              {`Arch Tokens: ${user.archToken}`}
            </p>
            <p className="rounded-full border-[1px] text-[10px] p-1 text-white bg-[#18181C] border-[#353538]">
              {`Badges: ${user.badges}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DiscoverHolders({ setFilter, Filter, data }: DiscoverHoldersProps) {
  const [filteredData, setFilteredData] = useState<BadgedHolders[]>(
    data.sort((a, b) => a.contributorAmount - b.contributorAmount),
  )

  useEffect(() => {
    const filterData = () => {
      let newData = [...data] // Create a shallow copy of data to avoid direct mutation

      if (Filter === DiscoverFilter.Contributors) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.contributorAmount - b.contributorAmount)
      } else if (Filter === DiscoverFilter.BlueChipHolders) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.blueAmount - b.blueAmount)
      } else if (Filter === DiscoverFilter.Creators) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.creatorAmount - b.creatorAmount)
      } else if (Filter === DiscoverFilter.FounderHolders) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.founderNftAMount - b.founderNftAMount)
      } else if (Filter === DiscoverFilter.HighestNetWorth) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.netWorth - b.netWorth)
      } else if (Filter === DiscoverFilter.NftHolders) {
        // Assuming you want to sort the data based on some criteria
        // Replace `criteria` with the actual property you want to sort by
        newData.sort((a, b) => a.topHoldersAmount - b.topHoldersAmount)
      }

      setFilteredData(newData)
    }

    console.log(filteredData)

    filterData()
  }, [Filter, data]) // This effect depends on `Filter` and `data`, it runs whenever either changes

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between items-center text-base font-medium text-white">
        <p>TOP BADGED HOLDERS</p>
        <Button className="bg-white">View all</Button>
      </div>

      <div className="p-4 items-center w-full rounded-lg flex flex-col gap-10 border-[#353538] border-[1px]">
        <div className="flex gap-2">
          <Button
            variant={
              Filter === DiscoverFilter.Contributors ? 'active' : 'ghost'
            }
            className="border-[1px] rounded-full border-[grey]"
            onClick={() => {
              setFilter(DiscoverFilter.Contributors)
            }}
          >
            Top Contributors
          </Button>
          <Button
            variant={Filter === DiscoverFilter.Creators ? 'active' : 'ghost'}
            className="border-[1px] rounded-full border-[grey]"
            onClick={() => {
              setFilter(DiscoverFilter.Creators)
            }}
          >
            Top Creators
          </Button>
          <Button
            variant={Filter === DiscoverFilter.NftHolders ? 'active' : 'ghost'}
            className="border-[1px] rounded-full border-[grey]"
            onClick={() => {
              setFilter(DiscoverFilter.NftHolders)
            }}
          >
            Top NFT Holders
          </Button>
          <Button
            variant={
              Filter === DiscoverFilter.BlueChipHolders ? 'active' : 'ghost'
            }
            className="border-[1px] rounded-full border-[grey]"
            onClick={() => {
              setFilter(DiscoverFilter.BlueChipHolders)
            }}
          >
            Blue Chip Holders
          </Button>
          <Button
            variant={
              Filter === DiscoverFilter.FounderHolders ? 'active' : 'ghost'
            }
            className="border-[1px] rounded-full border-[grey]"
            onClick={() => {
              setFilter(DiscoverFilter.FounderHolders)
            }}
          >
            Founders NFT Holders
          </Button>
          <Button
            variant={
              Filter === DiscoverFilter.HighestNetWorth ? 'active' : 'ghost'
            }
            className="border-[1px] rounded-full border-[grey] "
            onClick={() => {
              setFilter(DiscoverFilter.HighestNetWorth)
            }}
          >
            Highest Net Worth
          </Button>
        </div>
        <div id="top-3 section" className="w-full flex flex-col gap-10">
          <div
            id="no-1-user"
            className="rounded-lg h-[360px] bg-cover flex flex-col justify-end center items-center"
            style={{
              backgroundImage: `url(/assets/images/${filteredData[0].displayImg})`,
            }}
          >
            <div className="flex w-[90%] h-[90px] text-white pl-4 pr-4 bg-[#1A1A1A] rounded-[20px] mb-10 items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-semibold">1</span>
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={`/assets/images/${filteredData[0].displayImg}`}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-xl font-semibold">
                    {filteredData[0].displayName}
                  </p>
                  <p className="flex gap-2 text-sm items-center">
                    <span>@{filteredData[0].userName} </span>
                    <VerifyIcon />
                  </p>
                </div>
              </div>
              <div className="bg-white text-black p-2 rounded-3xl">
                {filteredData[0].collectorAmount > 1000
                  ? (filteredData[0].collectorAmount / 1000).toFixed(1) + 'k'
                  : filteredData[0].collectorAmount}{' '}
                Collectors
              </div>
            </div>
          </div>{' '}
          <div id="runner-up" className="flex gap-2 justify-between">
            <div
              id="2"
              className="rounded-lg w-[49%] h-[360px] bg-cover flex flex-col justify-end center items-center"
              style={{
                backgroundImage: `url(/assets/images/${filteredData[1].displayImg})`,
              }}
            >
              <div className="flex w-[90%] h-[90px] text-white pl-4 pr-4 bg-[#1A1A1A] rounded-[20px] mb-10 items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">2</span>
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={`/assets/images/${filteredData[1].displayImg}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">
                      {filteredData[1].displayName}
                    </p>
                    <p className="flex gap-2 text-sm items-center">
                      <span>@{filteredData[1].userName} </span>
                      <VerifyIcon />
                    </p>
                  </div>
                </div>
                <div className="bg-white text-black p-2 rounded-3xl">
                  {filteredData[1].collectorAmount > 1000
                    ? (filteredData[1].collectorAmount / 1000).toFixed(1) + 'k'
                    : filteredData[1].collectorAmount}{' '}
                  Collectors
                </div>
              </div>
            </div>
            <div
              id="3"
              className="rounded-lg w-[49%] h-[360px] bg-cover flex flex-col justify-end center items-center"
              style={{
                backgroundImage: `url(/assets/images/${filteredData[2].displayImg})`,
              }}
            >
              <div className="flex w-[90%] h-[90px] text-white pl-4 pr-4 bg-[#1A1A1A] rounded-[20px] mb-10 items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">3</span>
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={`/assets/images/${filteredData[2].displayImg}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">
                      {filteredData[2].displayName}
                    </p>
                    <p className="flex gap-2 text-sm items-center">
                      <span>@{filteredData[2].userName} </span>
                      <VerifyIcon />
                    </p>
                  </div>
                </div>
                <div className="bg-white text-black p-2 rounded-3xl">
                  {filteredData[2].collectorAmount > 1000
                    ? (filteredData[2].collectorAmount / 1000).toFixed(1) + 'k'
                    : filteredData[2].collectorAmount}{' '}
                  Collectors
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-4-10 section" className="flex flex-col gap-5 w-full">
          {filteredData.slice(3).map((user, index) => (
            <div key={index} className="w-full">
              <div className="flex  h-[90px] text-white pl-4 pr-4 bg-[#1A1A1A] rounded-[20px] items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{index + 4}</span>
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={`/assets/images/${user.displayImg}`}
                      width={50}
                      height={50}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-xl font-semibold">{user.displayName}</p>
                    <p className="flex gap-2 text-sm items-center">
                      <span>@{user.userName} </span>
                      <VerifyIcon />
                    </p>
                  </div>
                </div>
                <div className="bg-white text-black p-2 rounded-3xl">
                  {user.collectorAmount > 1000
                    ? (user.collectorAmount / 1000).toFixed(1) + 'k'
                    : user.collectorAmount}{' '}
                  Collectors
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}
interface DiscoverRightProps {
  filteredData: BadgedHolders[]
}

function DiscoverRight({ filteredData }: DiscoverRightProps) {
  return (
    <div className="h-[60vh] overflow-scroll pt-10">
      <div
        className={`flex flex-col w-full border border-[#FFFFFF14] rounded-[14px] p-6 gap-9`}
      >
        <div className="flex items-center w-full justify-between">
          <p className="text-base font-medium text-white">MOST VIEWED</p>

          <Button className="bg-transparent border-none outline-none rounded-none px-0 py-3 w-fit h-fit text-[#CFF073] text-xs transition-all duration-300 hover:opacity-80">
            View all
          </Button>
        </div>

        <img
          src="/assets/images/timeline/_other-section/featured.png"
          alt="User alt picture"
          className="w-full h-auto rounded-2xl"
        />

        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center w-full justify-between pb-6 border-b border-[#FFFFFF0D]">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/timeline/Oval.png"
                alt="User Display Picture"
                width={40}
                height={40}
              />

              <div className="flex flex-col">
                <p className="flex gap-1 items-center text-base font-semibold leading-5 text-white">
                  {filteredData[0].displayName}
                  <VerifyIcon />
                </p>
                <p className="text-xs leading-5 font-medium text-[#B3B3B3]">
                  @{filteredData[0].userName}
                </p>
              </div>
            </div>

            <Button className="bg-[#CFF073] border-none outline-none font-medium w-fit h-fit text-[#0B0A10] text-[9.6px] transition-all duration-300 hover:opacity-80">
              Follow
            </Button>
          </div>

          <p className="text-sm text-[#B3B3B3]">
            Passionate NFT holder exploring the future of digital ownership.
            Join me in discovering the limitless possibilities of the NFT
            ecosystem. #NFTCommunity
          </p>
        </div>
      </div>
      <div id="top-4-10 section" className="flex flex-col gap-5 w-full pt-5">
        {filteredData.slice(3).map((user, index) => (
          <div key={index} className="w-full">
            <div className="flex  h-[80px] text-white pl-4 pr-4 bg-[#1A1A1A] rounded-[20px] items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={`/assets/images/${user.displayImg}`}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-xl font-semibold">{user.displayName}</p>
                  <p className="flex gap-2 text-sm text-[#858487] items-center">
                    <span>@{user.userName} </span>
                    <VerifyIcon />
                  </p>
                </div>
              </div>
              <div className="bg-[#CFF073] text-[10px] font-medium  text-black p-2 rounded-3xl">
                {user.collectorAmount * 1234 > 1000
                  ? ((user.collectorAmount * 1234) / 1000).toFixed(1) + 'k'
                  : user.collectorAmount}{' '}
                Views
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
