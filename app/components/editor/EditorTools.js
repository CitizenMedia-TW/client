import InlineCode from '@editorjs/inline-code'
import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import Code from '@editorjs/code'
import Marker from '@editorjs/marker'

import Image from '@editorjs/image'
import { ImageServices } from '@/app/api/services'

export class CustomImage extends Image {
  async removed() {
    /* console.log(this._data) */
    /* console.log(this._data.file._id) */
    if (this._data.file._id === undefined) return
    return await ImageServices.deleteImage(this._data.file._id)
  }
}

export const EDITOR_TOOLS = {
  code: Code,
  header: Header,
  inlineCode: InlineCode,
  list: NestedList,
  Marker: Marker,
}
