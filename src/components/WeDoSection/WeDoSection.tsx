import { Flex, Text, Divider } from "components"
import HamburguerIcon from 'assets/hamburguer.svg'
import HeadsetIcon from 'assets/fone-logo.svg'
import MotoboyIcon from 'assets/motoboy-logo.svg'

export const WeDoSection = () => {
    return (
        <Flex css={{
            justifyContent: 'center'
        }}>
            <Flex css={{
                maxWidth: '1000px',
                width: '100%',
                backgroundColor: 'var(--palette-white)',
                borderRadius: '10px',
                gap: '51px',
                paddingLeft: '21px',
            }}>
                <Flex css={{
                    gap: '28px'
                }}>
                    <Flex>
                        <img src={HamburguerIcon} alt="hamburguer" />
                    </Flex>
                    <Flex css={{
                        flexDirection: 'column',
                        alignItems: 'baseline',
                        marginRight: '33px'
                    }}>
                        <Text variant={'brown300'} family={'title'} size={'4'} css={{
                            marginBottom: '5px'
                        }}>
                            ARTESANAL
                        </Text>
                        <Text variant={'brown100'} family={'display'} size={'1'} weight={'1'} css={{
                            maxWidth: '230.06px',
                            width: '100%',
                        }}>
                            Nossas receitas são feitas com todo cuidado
                        </Text>
                    </Flex>
                    <Divider orientation={'vertical'} variant={'gray'} css={{
                        height: '83px',
                    }} />
                </Flex>
                <Flex css={{
                    gap: '28px'
                }}>
                    <Flex>
                        <img src={HeadsetIcon} alt="headset" />
                    </Flex>
                    <Flex css={{
                        flexDirection: 'column',
                        alignItems: 'baseline',
                        marginRight: '33px'
                    }}>
                        <Text variant={'brown300'} family={'title'} size={'4'} css={{
                            marginBottom: '5px'
                        }}>
                            ATENDIMENTO
                        </Text>
                        <Text variant={'brown100'} family={'display'} size={'1'} weight={'1'} css={{
                            maxWidth: '150px',
                            width: '100%'
                        }}>
                            Totalmente personalizado
                        </Text>
                    </Flex>
                    <Divider orientation={'vertical'} variant={'gray'} css={{
                        height: '83px',
                    }} />
                </Flex>
                <Flex css={{
                    gap: '28px'
                }}>
                    <Flex>
                        <img src={MotoboyIcon} alt="motoboy" />
                    </Flex>
                    <Flex css={{
                        flexDirection: 'column',
                        alignItems: 'baseline',
                        marginRight: '33px'
                    }}>
                        <Text variant={'brown300'} family={'title'} size={'4'} css={{
                            marginBottom: '5px',
                            maxWidth: '200px',
                            width: '100%'
                        }}>
                            DELIVERY SPEED
                        </Text>
                        <Text variant={'brown100'} family={'display'} size={'1'} weight={'1'} css={{
                            maxWidth: '250px',
                            width: '100%'
                        }}>
                            Entregamos menos de 45 minutos
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}