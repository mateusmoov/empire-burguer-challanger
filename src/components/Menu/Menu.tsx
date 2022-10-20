import { Flex, Text, StyledButton, TextMenu } from "components"

export const Menu = () => {

    interface TextMenu {
        title: string,
        subtitle: string,
        price: number
    }

    const Menus: TextMenu[] = [
        {
            title: 'CLASSIC BURGUER',
            subtitle: 'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
            price: 49.99
        },
        {
            title: 'SPECIAL BIG BURGUER',
            subtitle: 'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
            price: 49.99
        },
        {
            title: 'MEXICAN BURGUER',
            subtitle: 'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
            price: 49.99
        },
        {
            title: 'SPECIAL BIG BURGUER',
            subtitle: 'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
            price: 49.99
        }
    ]

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
                            <Text variant={'brown300'} size={'9'} weight={'3'} css={{
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
            <Flex direction={'column'} alignItems={'baseline'} css={{
                width: '100%',
                maxWidth: '1920px',
                height: '100%',
                minHeight: "545px",
                backgroundColor: 'var(--palette-brown-300)',
                padding: '25px',
            }}>
                <Text size={'8'} weight={'1'} css={{
                    marginTop: '61px',
                    marginBottom: '15px',
                }}>
                    CARDÁPIO IMPERIAL | BURGUER
                </Text>
                {
                    Menus.map((menu) => (
                        <div style={{
                            marginBottom: '36px'
                        }}>
                            <TextMenu title={menu.title} subtitle={menu.subtitle} price={menu.price} />
                        </div>
                    ))
                }
            </Flex>
        </Flex >
    )
}