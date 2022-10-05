import type * as Stitches from '@stitches/react';
import { styled } from 'lib/stitches.config';


export const Text = styled('span', {
  padding: 0,
  textRendering: 'optimizeLegibility',

  variants: {
    family: {
      default: {
        fontFamily: 'inherit',
      },
      display: {
        fontFamily: 'var(--font-display)',
      },
      title: {
        fontFamily: 'var(--font-title)',
      },
      footer: {
        fontFamily: 'var(--font-footer)',
      },
    },
    size: {
      1: {
        fontSize: 'var(--font-size-1)',
      },
      2: {
        fontSize: 'var(--font-size-2)',
      },
      3: {
        fontSize: 'var(--font-size-3)',
      },
      4: {
        fontSize: 'var(--font-size-4)',
      },
      5: {
        fontSize: 'var(--font-size-5)',
      },
      6: {
        fontSize: 'var(--font-size-6)',
      },
      7: {
        fontSize: 'var(--font-size-7)',
      },
      8: {
        fontSize: 'var(--font-size-8)',
      },
      9: {
        fontSize: 'var(--font-size-9)',
      },
      10: {
        fontSize: 'var(--font-size-10)',
      },
    },
    weight: {
      1: {
        fontWeight: 'var(--font-weight-1)',
      },
      2: {
        fontWeight: 'var(--font-weight-2)',
      },
      3: {
        fontWeight: 'var(--font-weight-3)',
      },
      4: {
        fontWeight: 'var(--font-weight-4)',
      },
    },
    variant: {
      default: { color: 'currentColor' },
      brown: { color: 'var(--palette-brown-400)' },
      bege: { color: 'var(--palette-bege)' },
      yellow: { color: 'var(--palette-yellow)' },
      red: { color: 'var(--palette-red-100)' },
      white: { color: 'var(--palette-white)' },
      brown100: { color: 'var(--palette-brown-100)' },
      brown200: { color: 'var(--palette-brown-200)' },
      brown300: { color: 'var(--palette-brown-300)' },
      brown400: { color: 'var(--palette-brown-400)' },
      brown500: { color: 'var(--palette-brown-500)' },
    },
  },
  defaultVariants: {
    family: 'title',
    size: '3',
    variant: 'yellow',
    weight: '2',
  }
})

export type TextVariants = Stitches.VariantProps<typeof Text>
