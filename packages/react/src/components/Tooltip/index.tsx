import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipContainer,
  TooltipTrigger,
} from './styles'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  triggerElement: ReactNode
  content: string
}

export function Tooltip({ triggerElement, content, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>{triggerElement}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent asChild={false}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
