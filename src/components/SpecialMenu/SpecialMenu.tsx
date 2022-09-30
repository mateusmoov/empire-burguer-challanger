import { Text, Flex } from 'components'
import { TextVariants } from 'components/Typography'


interface SpecialMenu {
    title: string,
    weight: string,
    variant: TextVariants['variant'],
    weightVariant: TextVariants['variant'],
    image: string,
    onlyToday: boolean
}

export const SpecialMenu = ({ title, weight, variant, weightVariant, image, onlyToday }: SpecialMenu) => {

    return (
        <Flex css={{
            '&:first-child': { gridRow: 'span 2' },
            position: 'relative',
            textAlign: 'center',
        }}>
            <Flex direction={'column'} alignItems={'baseline'} css={{
                position: 'absolute',
                top: '12px',
                left: '17px'
            }}>
                <Text variant={variant} weight={'1'} size={'6'}>
                    {title}
                </Text>
                <Text family={'display'} variant={weightVariant} weight={'1'} size={'4'}>
                    {weight}
                </Text>
            </Flex>
            <div style={{
                position: 'absolute',
                bottom: '25px',
                right: '25px'
            }}>
                {onlyToday && (<Text family={'display'} variant={'bege'} weight={'1'} size={'4'}>
                    Apenas <br /> <Text as="span" variant={'white'} weight={'1'} size={'8'} >HOJE</Text>
                </Text>
                )}
            </div>
            <img src={image} alt="" />
        </Flex>
    )

}