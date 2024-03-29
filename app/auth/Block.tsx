export default function Block({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div
      className="w-screen h-screen bg-white flex flex-col content-end items-end flex-wrap 2xl:px-52 xl:px-44 lg:px-28 px-4 2xl:pt-36 xl:pt-24 lg:pt-16 pt-[8%] pb-[4%] md:pb-44"
      /*w/h-screen should be h-dvh/w-dvw but the browser dosen't support*/
    >
      <div className="w-full h-[90%] rounded-3xl border-solid border-[#6a87ad] border-4">
        <div className="w-full md:h-1/6 flex items-end">
          <div className="relative left-[8%] translate-y-1/2 flex flex-col-reverse">
            <div className="relative -left-2 h-5 bg-[#fbd06e] w-36" />
            <div className="relative top-1.5 text-[#0F3E7A] font-medium font-sans text-6xl -tracking-[2%] relative not-italic leading-10">
              {title}
            </div>
          </div>
        </div>
        <div className="relative top-[15%]">{children}</div>
      </div>
    </div>
  )
}
