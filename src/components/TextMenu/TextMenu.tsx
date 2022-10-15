import { Text, Flex } from 'components'


interface TextMenu {
    title: string,
    subtitle: string,
    price: number
}

export const TextMenu = ({ title, subtitle, price }: TextMenu) => {
    return (
        <Flex direction={'column'}>
            <Flex css={{
                display: 'flex',
                alignItems: 'end',
                width: '100%'
            }}>
                <Text variant={'bege'} size={'4'} family={'title'} weight={'1'} css={{
                    whiteSpace: 'nowrap'
                }}>{title}
                </Text>
                <div style={{
                    borderBottom: '1px dotted var(--palette-bege)',
                    width: '100%',
                    height: '1px',
                    margin: '5px'
                }}>
                </div>
                <Text variant={'bege'} size={'4'} family={'title'} weight={'1'} css={{
                }}>{price}
                </Text>
            </Flex>
            <Text family={'display'} variant={'white'} weight={'1'} size={'2'} css={{
                width: '470px'
            }}>
                {subtitle}
            </Text>
        </Flex>
    )
}