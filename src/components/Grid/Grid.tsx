import { styled } from 'lib/stitches.config';

export const Grid = styled('div', {
    display: 'grid',
    height: 'inherit',
    variants: {
        align: {
            start: {
                alignItems: 'start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'end',
            },
            stretch: {
                alignItems: 'stretch',
            },
            baseline: {
                alignItems: 'baseline',
            },
        },
        justify: {
            start: {
                justifyContent: 'start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        flow: {
            row: {
                gridAutoFlow: 'row',
            },
            column: {
                gridAutoFlow: 'column',
            },
            dense: {
                gridAutoFlow: 'dense',
            },
            rowDense: {
                gridAutoFlow: 'row dense',
            },
            columnDense: {
                gridAutoFlow: 'column dense',
            },
        },
        columns: {
            1: {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },
            2: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            3: {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            4: {
                gridTemplateColumns: 'repeat(4, 1fr)',
            },
            5: {
                gridTemplateColumns: 'repeat(5, 1fr)',
            },
            small: {
                gridTemplateColumns: 'var(--layout-small)',
            },
            medium: {
                gridTemplateColumns: 'var(--layout-medium)',
            },
        },
    },
    defaultVariants: {
        align: 'stretch',
        justify: 'initial',
    },
});
