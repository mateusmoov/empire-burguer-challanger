import { styled } from "lib/stitches.config";

export const Divider = styled('hr', {
    variants: {
        orientation: {
            vertical: {
                height: '100%'
            },
            horizontal: {
                width: '100%',
            }
        },
        variant: {
            red: { border: '1px solid var(--palette-red-200)' },
            gray: { border: '1px solid var(--palette-gray)' },
            brown500: { border: '1px solid var(--palette-brown-500)' }
        }
    }
})
