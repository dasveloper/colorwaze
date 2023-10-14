import { Popover } from '@headlessui/react'

import Link from 'next/link'
import { Sparkle } from 'phosphor-react'

export default function Nav() {
  return (
    <Popover>
      <header className="flex items-center justify-between gap-x-4 relative">
        <Link href="/">
          <a className="hover:bg-gray-200 rounded-full">
            <span className="sr-only">Colorwaze home</span>
            <img className="h-10 sm:h-12 w-auto" src="/logo.svg" width="50" height="50" alt="Colorwaze logo" />
          </a>
        </Link>
        <div className="flex items-center">
          <Sparkle weight="bold" className="-ml-1 mr-1.5 h-4 w-4 text-amber-500" />
          <a href="https://coolors.co/?ref=629fe563c3b4ba000af28ff7" target="_blank" rel="noopener noreferrer">
            Love colors? <strong>Try Coolors!</strong>
          </a>
        </div>
      </header>
    </Popover>
  )
}
