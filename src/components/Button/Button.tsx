import { styled } from 'lib/stitches.config'

export const StyledButton = styled('button', {
    //Reset and position
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    outline: 'none',
    cursor: 'pointer',
    border: '0',
    font: 'inherit',
    borderRadius: '0.25rem',
    color: 'var(--palette-white)',
    fontWeight: '700',

    variants: {
        variant: {
            primary: {
                backgroundColor: 'var(--palette-red-100)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-3)'
            },
            secondary: {
                backgroundColor: 'var(--palette-bege)',
                color: 'var(--palette-red-100)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-4)'
            }
        }
    }
})

export const StyledIconButton = styled('button', {
    //Reset and position
    WebkitAppearance: 'none',
    WebkitTapHighlightColor: 'transparent',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0',
    outline: 'none',
    cursor: 'pointer',
    border: '0',
    borderRadius: '0.25rem',
    color: 'var(--palette-white)',
    fontWeight: '700',
    gap: 10,
    variants: {
        variant: {
            primary: {
                backgroundColor: 'var(--palette-yellow)',
                color: 'var(--palette-brown-200)',
                fontFamily: 'var(--font-display)',
            },
        }
    }
})