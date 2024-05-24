import {
  Link,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Pencil,
  Trash2,
} from 'lucide-react'
import { FaLine } from 'react-icons/fa6'

export function AccountSvg({ icon }: { icon: string }) {
  switch (icon) {
    case 'link':
      return <LinkIcon />
    case 'line':
      return <LineIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'new':
      return <NewIcon />
    case 'saveLink':
      return <SaveLinkIcon />
    case 'deleteLink':
      return <DeleteLinkIcon />
    default:
      return <LinkIcon />
  }
}

function LinkIcon() {
  return <Link className="w-full h-full" />
}

function LineIcon() {
  return <FaLine className="w-full h-full" />
}

function TwitterIcon() {
  return <Twitter className="w-full h-full" />
}

function InstagramIcon() {
  return <Instagram className="w-full h-full" />
}

function FacebookIcon() {
  return <Facebook className="w-full h-full" />
}

function NewIcon() {
  return <ExternalLink className="w-full h-full" />
}

function SaveLinkIcon() {
  return <Pencil className="w-full h-full" />
}

function DeleteLinkIcon() {
  return (
    <Trash2 className="w-full h-full group-hover:text-red-600 dark:group-hover:text-red-400" />
  )
}
