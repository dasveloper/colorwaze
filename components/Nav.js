import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { CaretDown } from 'phosphor-react';
import { Button } from '@components/common';
import Link from 'next/link';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    name: 'Security', description: "Your customers' data will be safe and secure.", href: '#',
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
  },
];

export default function Nav() {
  return (
    <Popover>
      <div className="flex items-center justify-between relative">
        <div className="flex items-center space-x-8 ">
          <Link href="/">
            <a>
              <span className="sr-only">Colorwaze home</span>
              <img
                className="h-8 sm:h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Colorwaze logo"
              />
            </a>
          </Link>
          <Popover.Group as="nav" className="flex">
            <Popover className="sm:relative">
              <>
                <Popover.Button
                  className="group rounded-md inline-flex items-center font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span>Discover</span>
                  <CaretDown
                    className="ml-2 h-5 w-5 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-3 transform left-0 w-screen max-w-full sm:max-w-md lg:max-w-2xl">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {solutions.map((solution) => (
                          <a
                            key={solution.name}
                            href={solution.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <div className="">
                              <p className="text-base font-medium text-gray-900">{solution.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 sm:p-8">
                        <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                          <div className="flex items-center">
                            <div className="text-base font-medium text-gray-900">Enterprise</div>
                            <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                              New
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Empower your entire team with even more advanced tools.
                          </p>
                        </a>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            </Popover>
          </Popover.Group>
        </div>
        <Link href="/" passHref>
          <Button size="sm" variant="light">Sign in</Button>
        </Link>
      </div>
    </Popover>
  );
}
