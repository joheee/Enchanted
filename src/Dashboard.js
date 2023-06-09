import { Fragment, useContext, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuAlt2Icon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { FilterItem } from './component/FilterItem'
import { ProductItem } from './component/ProductItem'
import { Product } from './variable/Product'
import { FilterIndicatorItem } from './component/FilterIndicatorItem'
import { Type } from './variable/Type'
import { Sort } from './variable/Sort'
import { FeatureContext } from './variable/Context'


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const features = useContext(FeatureContext)

  function handleClearAllFilter(){
    features.SetFilter([])
    features.SetRefresh(!features.Refresh)
  }


  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <div className="font-bold">ENCHANTED</div>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="flex-1 px-2 bg-white space-y-1 ml-2">
                    <div className="mb-3">Filter</div>
                    <div className="font-semibold">Product Type</div>
                    {Type.map((item,i) => (
                        <FilterItem key={i} title={item}/>
                    ))}

                    <div className="font-semibold">Sort</div>
                    {Sort.map((item,i) => (
                        <FilterItem key={i} title={item}/>
                    ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
                <div className="font-bold">ENCHANTED</div>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
                <nav className="flex-1 px-2 bg-white space-y-1 ml-2">
                    <div className="mb-3">Filter</div>
                    <div className="font-semibold">Product Type</div>
                    {Type.map((item,i) => (
                        <FilterItem key={i} title={item}/>
                    ))}

                    <div className="font-semibold">Sort</div>
                    {Sort.map((item,i) => (
                        <FilterItem key={i} title={item}/>
                    ))}
                </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    onChange={(e) => features.SetSearch(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button onClick={() => features.SetIsCartModal(true)} className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown">
                <span className="sr-only">View notifications</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <button className="bg-white p-1 ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown">
                        <span className="sr-only">Open user menu</span>
                        <img 
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6 flex gap-2 items-center justify-between">
                {
                  features.Filter.length === 0 ? null :
                  <>
                    <div className="flex gap-3">
                    {
                      features.Filter.map((item,i)=>(
                        <FilterIndicatorItem key={i} title={item}/>
                      ))
                    }
                    </div>
                    <div onClick={handleClearAllFilter} className="font-semibold text-brown mr-5 cursor-pointer text-lg">
                      clear all filter
                    </div>
                  </>
                }
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-3 gap-y-5">
            {
              (features.Filter.length > 0
                ? Product.filter((product) =>
                    (product.name.toLowerCase().includes(features.Search.toLowerCase()) || product.price.toLowerCase().includes(features.Search.toLowerCase())) &&
                    (features.Filter.includes(product.type) || features.Filter.includes(product.sort))
                  )
                : Product.filter((product) =>
                    (product.name.toLowerCase().includes(features.Search.toLowerCase()) || product.price.toLowerCase().includes(features.Search.toLowerCase()))
                  )
              ).map((item, i) => (
                <ProductItem key={i} {...item} />
              ))
            }
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
