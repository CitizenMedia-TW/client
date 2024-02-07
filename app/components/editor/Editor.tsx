import React, { memo, useEffect, useRef } from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'

import { EDITOR_TOOLS } from './EditorTools'
import { CustomImage } from './EditorTools'

import { ImageServices } from '@/app/api/services'

import './editor.css'

type Props = {
  data?: OutputData
  onDataChange(val: OutputData): void
  holder: string
  readOnly: boolean
}

function RedactorPadding() {
  return (
    <style>
      {`
          /* Resize the redactor padding */
          .codex-editor__redactor {
            padding-bottom: 2rem !important;
          }
        `}
    </style>
  )
}

const EditorBlock = ({ data, onDataChange, holder, readOnly }: Props) => {
  // Add a reference to editor
  const ref = useRef<EditorJS>()

  // Initialize editorjs
  useEffect(() => {
    // Initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: {
          ...EDITOR_TOOLS,
          image: {
            class: CustomImage as any,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  const formData = new FormData()
                  formData.append('image', file)
                  return await ImageServices.postImage(formData)
                },
              },
            },
          },
        },
        data,
        async onChange(api, _event) {
          const data = await api.saver.save()
          console.log(data)
          onDataChange(data)
        },
        hideToolbar: false,
        readOnly: readOnly,
      })
      ref.current = editor
    }

    // Add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy()
      }
    }
  }, [])

  return (
    <>
      <div id={holder} className="w-full" />
      {readOnly ? <RedactorPadding /> : <></>}
    </>
  )
}

export default memo(EditorBlock)
