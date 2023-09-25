import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Open source AI grading assistant built by{' '}
      <ExternalLink href="https://github.com/rohan-uiuc">Rohan Marwaha</ExternalLink> from{' '}
      <ExternalLink href="https://giesbusiness.illinois.edu/">
        Gies College of Business
      </ExternalLink>
      .
    </p>
  )
}