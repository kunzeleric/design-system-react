import { styled } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(TooltipPrimitive.Root, {})

export const TooltipTrigger = styled(TooltipPrimitive.Trigger, {
  border: 0,
  backgroundColor: 'transparent',
  display: 'inline-block',
})

export const TooltipPortal = styled(TooltipPrimitive.Portal, {})

export const TooltipContent = styled(TooltipPrimitive.Content, {
  border: 0,
  borderRadius: '$md',
  minWidth: 100,
  maxWidth: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  color: '$white',
  textAlign: 'center',
  padding: '$3 $4',
  fontFamily: '$default',
  left: '50%',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  height: '$2',
  width: '$4',
  fill: '$gray900',
})
