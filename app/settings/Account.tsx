'use client'
import React, { useState, useEffect } from 'react'
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
  const [links, setLinks] = useState([])
  const [modified, setModified] = useState<string>('')

  useEffect(() => {
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

  useEffect(() => {
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
    <section role="grid" className="grid grid-cols-12 gap-x-5">
      <section
        role="gridcell"
        className="col-span-full xl:col-span-6 flex flex-col gap-y-16"
      >
        <AccountUser session={session} />
        <AccountIntro />
      </section>

      <section
        role="gridcell"
        className="col-span-full xl:col-span-6 flex flex-col gap-y-8 pb-3"
        /*color and style of svg icons*/
        /*update link after input*/
        /*dialog of photo not work*/
        /*intro flex*/
      >
        <h2 className="text-2xl font-bold">Links:</h2>
        {links &&
          links.length !== 0 &&
          links.map(
            (link, idx) =>
              link && (
                <LinkField
                  title={getLinkType(link)}
                  link={link}
                  key={idx}
                  onSaveLink={handleModifyLink}
                  onDeleteLink={handleModifyLink}
                >
                  <AccountSvg icon={getLinkType(link)} />
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
  const [inputValue, setInputValue] = useState(link)
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
        className="bg-[#dfe7f1] border-0 rounded-none focus-visible:ring-0"
        value={inputValue}
        onChange={handleInputChange}
      />
    ) : (
      <p className="text-sm font-normal border-b-[#466d9e] pt-5 border-2 border-x-0 border-t-0 rounded-none focus-visible:ring-0">
        {link}
      </p>
    )

  const editButton = (
    <button
      role="gridcell button"
      title={link.trim() ? 'delete' : 'save'}
      onClick={link.trim() ? handleDeleteLink : handleSaveLink}
      className="group flex items-end mx-auto md:mx-0 gap-x-1 hover:opacity-75 focus:opacity-75"
    >
      <AccountSvg icon={link.trim() ? 'deleteLink' : 'saveLink'} />
      <p className="hidden md:block text-sm font-light">
        {link.trim() ? 'delete' : 'save'}
      </p>
    </button>
  )

  return (
    <section className="grid grid-cols-12 gap-4 px-2">
      <article
        title={`${title[0].toUpperCase()}${title.slice(1)}`}
        className="col-span-2 md:col-span-3 flex gap-x-4"
      >
        <div className="mx-auto md:mx-0 max-w-12 max-h-12 aspect-square">
          {children}
        </div>
        <h1 className="hidden md:block self-end text-lg font-normal first-letter:uppercase">
          {title}
        </h1>
      </article>

      <div
        role="grid"
        className="col-span-10 md:col-span-9 grid grid-cols-12 gap-x-4 self-end"
      >
        <div role="gridcell" className="col-span-10">
          {content}
        </div>

        <div role="gridcell" className="col-span-2 self-end">
          {editButton}
        </div>
      </div>
    </section>
  )
}
