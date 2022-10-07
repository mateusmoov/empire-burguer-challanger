import { Flex, Text, StyledButton } from "components"

export const Menu = () => {
    return (
        <Flex css={{
            marginTop: '64px'
        }}>
            <div
                style={{
                    backgroundImage: "url('src/assets/Banner02.png')",
                    width: '100%',
                    height: '100%',
                    minHeight: "545px",
                    minWidth: "437px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                    display: 'flex'
                }}
            >
                <Flex direction={'column'} alignItems={'start'} justifyContent={"center"} css={{
                    marginLeft: '23rem',
                }}>
                    <Flex css={{
                        width: '100%',
                        maxWidth: '495px',
                        marginBottom: '9px'
                    }}>
                        <Text family={'title'} size={'9'} variant={'brown'} css={{
                            lineHeight: '46px'
                        }}>
                            ESCOLHA O SEU COMBO IMPERIAL,
                            <Text variant={'brown300'} size={'9'} family={'display'} weight={'4'} css={{
                                backgroundColor: 'var(--palette-yellow)',
                                padding: '3px',
                                borderRadius: '6px'
                            }}>PEÇA AGORA!</Text>
                        </Text>
                    </Flex>
                    <Flex css={{
                        width: '100%',
                        maxWidth: '665px',
                        marginBottom: '16px',
                        lineHeight: '22px'
                    }}>
                        <Text family={'display'} variant={'brown100'} weight={'1'}>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre promoção!</Text>
                    </Flex>
                    <Flex>
                        <StyledButton variant={'primary'} css={{
                            padding: '10.4307px 20.8614px'
                        }}>
                            Ver Cardápio Completo
                        </StyledButton>
                    </Flex>
                </Flex>
            </div >
            <Flex css={{
                width: '100%',
                maxWidth: '1920px'
            }}></Flex>
        </Flex >
    )
}