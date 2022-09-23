import { styled } from "lib/stitches.config";

const Divider = styled('hr', {
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
            red: { backgroundColor: 'var(--palette-red-200)' },
            gray: { backgroundColor: 'var(--palette-gray)' },
            brown500: { backgroundColor: 'var(--palette-brown-500)' }
        }
    }
})

export default Divider