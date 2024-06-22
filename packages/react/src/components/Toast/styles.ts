import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 24px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(calc(100% + 24px))',
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  borderRadius: '$sm',
  justifyContent: 'space-between',
  padding: '$3 $5',
  minWidth: 300,
  height: 60,
  gap: '$1',
  color: '$white',
  fontFamily: '$default',
  zIndex: 999999999,
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideIn} 300ms ease`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 300ms ease`,
  },
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: '$6',
  margin: 0,
  listStyle: 'none',
  zIndex: 999999999,
})

export const Title = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$lg',
})

export const Description = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
})

export const TextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$3',
})

export const Close = styled(Toast.Close, {
  cursor: 'pointer',

  '&:hover': {
    color: '$gray200',
    transition: 'color 200ms ease',
  },
})
