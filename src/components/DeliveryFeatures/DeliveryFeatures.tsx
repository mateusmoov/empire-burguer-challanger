import { Flex, Text, Divider } from 'components'
interface DeliveryFeatures {
    image: string,
    title: string,
    subtitle: string
}

export const DeliveryFeatures = ({ image, title, subtitle }: DeliveryFeatures) => {
    return (
        <Flex css={{
            width: '100%',
            maxWidth: '569px',
            borderRadius: '10px'
        }}>
            <Flex css={{
                padding: '15px 60px 15px 22px',
                gap: '18px'
            }}>
                <img src={image} alt="motoboy" />
                <Divider orientation={'vertical'} variant={'gray'} css={{
                    height: '45px'
                }} />
                <Flex alignItems={'baseline'} direction={'column'} css={{
                    gap: '4px',
                }}>
                    <Text variant={'brown300'} weight={'1'} size={'3'} >{title}</Text>
                    <Text
                        variant={"brown100"}
                        family={"display"}
                        size={"2"}
                        weight={"1"}>
                        {subtitle}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}