'use client'

import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/navigation'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import HomeIcon from '@/app/_components/_icons/homeIcon'
import DiscoverIcon from '@/app/_components/_icons/discoverIcon'
import ProfileIcon from '@/app/_components/_icons/profileIcon'
import SettingsIcon from '@/app/_components/_icons/settingsIcon'
import MessageIcon from '@/app/_components/_icons/messageIcon'
import NotificationIcon from '@/app/_components/_icons/notificationIcon'
import MoreIcon from '@/app/_components/_icons/moreIcon'
import AsideMsgIcon from '@/app/_components/_icons/asideMsgIcon'

interface MenuItem {
  icon: ReactElement
  text: string
  path: string
}

const menuItems: MenuItem[] = [
  { icon: <HomeIcon />, text: 'Home', path: '/timeline' },
  { icon: <DiscoverIcon />, text: 'Discover', path: '/discover' },
  { icon: <ProfileIcon />, text: 'Profile', path: '/profile' },
  { icon: <SettingsIcon />, text: 'Settings', path: '/settings' },
  { icon: <AsideMsgIcon />, text: 'Messages', path: '/messages' },
  { icon: <NotificationIcon />, text: 'Notification', path: '/notification' },
]

export default function Aside() {
  const router = useRouter()
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : ''

  const handleClick = (path: string) => {
    router.push(path)
  }

  return (
    <aside className="flex flex-col items-center gap-7 pt-4 w-[310px] 2xl:w-[310px] border-r border-[#1A1A1A] sticky top-0 bg-[#111115]">
      <div className="w-[85%] flex flex-col h-fit gap-3">
        {menuItems.map((item, index) => {
          const isActive = currentPath === item.path

          return (
            <button
              className={`flex items-center gap-2 p-3 rounded-[50px] group transition-all duration-300 ${
                isActive
                  ? 'bg-[#232227] fill-white stroke-white'
                  : 'fill-[#B3B3B3] stroke-[#B3B3B3] bg-transparent'
              }`}
              key={index}
              onClick={() => handleClick(item.path)}
            >
              {item.icon}
              <p
                className={`group-hover:text-white ${isActive ? 'text-white font-medium' : 'text-[#B3B3B3]'}`}
              >
                {item.text}
              </p>
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between w-[90%] absolute bottom-0 pb-5">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/timeline/Shape.png"
            alt="User Display Picture"
            width={40}
            height={40}
          />

          <div className="flex flex-col">
            <p className="text-base font-semibold leading-5 text-white">
              0xrxc.....d67579
            </p>
            <p className="text-xs leading-5 font-medium text-[#B3B3B3]">
              2,000 &OVA
            </p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger className="p-1 rounded-full">
            <MoreIcon />
          </PopoverTrigger>
          <PopoverContent className="w-fit bg-[#232227] flex flex-col items-start border-none text-white text-base py-2">
            <button className="py-[10px]">Add an existing account</button>
            <button className="py-[10px]">Logout @pancake</button>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  )
}
