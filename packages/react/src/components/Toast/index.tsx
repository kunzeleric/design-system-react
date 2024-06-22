import { ComponentProps, useEffect } from 'react'
import {
  Close,
  Description,
  TextWrapper,
  Title,
  ToastContainer,
  Viewport,
} from './styles'
import { ToastProvider } from '@radix-ui/react-toast'
import { X } from '@phosphor-icons/react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const Toast = ({
  open,
  onOpenChange,
  title,
  description,
  ...props
}: ToastProps) => {
  useEffect(() => {
    let timerId: NodeJS.Timeout
    if (open) {
      timerId = setTimeout(() => onOpenChange(false), 3000)
    }
    return () => clearTimeout(timerId)
  }, [open, onOpenChange])

  return (
    <ToastProvider>
      <ToastContainer
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={true}
        {...props}
      >
        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>
        <Close onClick={() => onOpenChange(false)} asChild aria-label="Close">
          <X weight="bold" size={20} />
        </Close>
      </ToastContainer>
      <Viewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
