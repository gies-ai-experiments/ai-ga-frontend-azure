import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Find top scoring students',
    message: `How many students showed an exemplary performance based on the "grading results"?`
  },
  {
    heading: 'List students based on score breakdown',
    message: 'List the students that scored less in [section] of the rubric?'
  },
  {
    heading: 'Average score of the class',
    message: `What is the average score of the from the "grading results"?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to AI Grading Assitant
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an AI grading assistant app meant to grade and provide feedback to student assignments at {' '}
          <ExternalLink href="https://canvas.illinois.edu/">UIUC Canvas</ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can also start a conversation here with grading results or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
