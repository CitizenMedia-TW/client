import { IoReload } from 'react-icons/io5'

export function Loading() {
  return (
    <div className="flex flex-row items-center justify-center h-full">
      <IoReload className="animate-spin mx-1" />
      <p className="text-xl">Loading...</p>
    </div>
  )
}
