import { Link, ExternalLink, Pencil, Trash2 } from 'lucide-react'
import { SiLine, SiX, SiInstagram, SiFacebook } from '@icons-pack/react-simple-icons'

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
  return <SiLine className="w-full h-full" />
}

function TwitterIcon() {
  return <SiX className="w-full h-full" />
}

function InstagramIcon() {
  return <SiInstagram className="w-full h-full" />
}

function FacebookIcon() {
  return <SiFacebook className="w-full h-full" />
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
