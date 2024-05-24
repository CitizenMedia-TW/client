import { LoaderCircle } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex flex-row items-center justify-center h-full">
      <LoaderCircle className="animate-spin mx-1" />
      <p className="text-xl">Loading...</p>
    </div>
  )
}
