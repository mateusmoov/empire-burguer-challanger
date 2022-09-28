import { Flex, Text } from "components"
import HamburguerIcon from 'assets/hamburguer.svg'

export const WeDoSection = () => {
    return (
        <Flex>
            <Flex css={{
                maxWidth: '970px',
                width: '100%',
                backgroundColor: 'pink',
                borderRadius: '10px'
            }}>
                <Flex css={{
                    alignItems: 'baseline',
                }}>
                    <Flex>
                        <img src={HamburguerIcon} alt="hamburguer" />
                    </Flex>
                    <Flex css={{
                        flexDirection: 'column'
                    }}>
                        <Text variant={'brown300'} family={'title'} size={'4'}>ARTESANAL</Text>
                        <Text variant={'brown'} family={'display'} size={'1'}>
                            Nossas receitas são feitas com todo cuidado
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}