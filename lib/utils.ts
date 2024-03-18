import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toDate(timestamp: { seconds: number; nanos: number }) {
  return new Date(timestamp.seconds * 1000 + timestamp.nanos / 1e6)
}
