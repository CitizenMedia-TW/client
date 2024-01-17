import { cn } from '@/lib/utils'

function PrimarySection({
  children,
  title,
  className,
}: {
  children: React.ReactNode
  title?: string
  className?: string
}) {
  return (
    <fieldset
      className={cn(
        'p-2 border-2 rounded-md border-primary relative',
        className
      )}
    >
      <legend className="px-2">{title}</legend>
      {children}
    </fieldset>
  )
}

function SectionContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className={cn('bg-secondary p-2 rounded-md', className)}>
      {children}
    </main>
  )
}

export { PrimarySection, SectionContent }
