'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { UserServices } from '@/api/services'
import { AccountUser } from './AccountUser'
import { AccountIntro } from './AccountIntro'
import { AccountSvg } from './AccountSvgs'

const getLinkType = (str: string): string => {
  const regex = /(facebook|instagram|twitter|line)/
  let tp = 'nullStr'
  if (str != '') tp = 'link'
  const match = regex.exec(str)
  if (match) {
    tp = match[0]
  }
  return tp
}

export default function Account() {
  const { data: session } = useSession()
  const [links, setLinks] = React.useState([])
  const [modified, setModified] = React.useState<string>('')

  React.useEffect(() => {
    const getLinks = async () => {
      if (!session) return
      const res = await UserServices.getProfileLinks(
        session?.user.email as string
      )
      if (!res) return
      setLinks(res.data.links)
    }
    getLinks()
  }, [session])

  React.useEffect(() => {
    async function modify() {
      if (!modified) return
      const resSet = await UserServices.modifyProfileLinks(
        session?.user.jwtToken as string,
        modified
      )
      if (!resSet) return

      const resGet = await UserServices.getProfileLinks(
        session?.user.email as string
      )
      if (!resGet) return
      setLinks(resGet.data.links)
      setModified('') // reset modified state
    }
    modify()
  }, [modified])

  const handleModifyLink = (link: string) => {
    setModified(link)
  }

  return (
    <section className="flex flex-col md:flex-row gap-x-2 px-4 sm:px-12 md:px-4 lg:px-12">
      <section className="md:mr-5 flex flex-col md:w-1/2 w-full">
        <AccountUser session={session} />
        <div>
          <AccountIntro />
        </div>
      </section>

      <section
        className="md:ml-5 flex flex-col gap-y-12 md:w-1/2 pb-3 w-full"
        /*color and style of svg icons*/
        /*update link after input*/
        /*dialog of photo not work*/
        /*intro flex*/
      >
        <p className="text-2xl font-normal">Links:</p>
        {links &&
          links.length != 0 &&
          links.map(
            (data, idx) =>
              data && (
                <LinkField
                  title={getLinkType(data)}
                  link={data}
                  key={idx}
                  onSaveLink={handleModifyLink}
                  onDeleteLink={handleModifyLink}
                >
                  <AccountSvg icon={getLinkType(data)} />
                </LinkField>
              )
          )}
        <LinkField
          title="new"
          link=""
          onSaveLink={handleModifyLink}
          onDeleteLink={handleModifyLink}
        >
          <AccountSvg icon="new" />
        </LinkField>
      </section>
    </section>
  )
}

interface LinkFieldProps {
  title: string
  children?: React.ReactNode
  link?: string
  onSaveLink: (link: string) => void
  onDeleteLink: (link: string) => void
}

function LinkField({
  title,
  children,
  link = '',
  onSaveLink,
  onDeleteLink,
}: LinkFieldProps) {
  const [inputValue, setInputValue] = React.useState(link)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSaveLink = () => {
    onSaveLink(inputValue)
    setInputValue('')
  }
  const handleDeleteLink = () => {
    onDeleteLink(link)
  }
  const content =
    link.trim() === '' ? (
      <Input
        type="string"
        placeholder="Add Link"
        className="bg-[#dfe7f1] border-0 rounded-none w-full h-full focus-visible:ring-0"
        value={inputValue}
        onChange={handleInputChange}
      />
    ) : (
      <p className="text-sm font-normal border-b-[#466d9e] pt-5 border-2 border-x-0 border-t-0 rounded-none w-full h-full focus-visible:ring-0">
        {link}
      </p>
    )

  const editbutton =
    link.trim() != '' ? (
      <button onClick={handleDeleteLink} className="flex pt-5">
        <AccountSvg icon="deleteLink" />
        <p className="text-sm font-light">delete</p>
      </button>
    ) : (
      <button onClick={handleSaveLink} className="flex pt-5">
        <AccountSvg icon="saveLink" />
        <p className="text-sm font-light">save</p>
      </button>
    )

  return (
    <div className="w-full flex flex-col xl:flex-row gap-y-2">
      <div className="flex">
        <div className="w-14">{children}</div>
        <div className="w-24 flex items-end shrink-0">
          <p className="text-lg font-normal">{title}</p>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <div className="grow max-w-96 shrink">{content}</div>
        <div className="w-14 min-w-14 shrink-0">{editbutton}</div>
      </div>
    </div>
  )
}
