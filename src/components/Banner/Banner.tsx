import { Flex, Divider, Text, StyledButton } from "components"
import clockIcon from 'assets/timer.svg'

interface Banner {
    width: string,
    haveButton: boolean,
    children: React.ReactNode
}

export const Banner = ({ width, haveButton, children }: Banner) => {
    return (
        <Flex css={{
            width: '100%',
            maxWidth: width,
            borderRadius: '10px',
            backgroundColor: 'var(--palette-red-100)',
            padding: '18px 22px'
        }}>
            <Flex css={{
                gap: '15px'
            }}>
                <img src={clockIcon} alt="timer" width={94} />
                <Divider orientation={'vertical'} variant={'gray'} css={{
                    height: '83px'
                }} />
            </Flex>
            <Flex justifyContent={haveButton ? 'space-between' : 'normal'} css={{
                width: '100%'
            }}>
                <Flex direction={'column'} alignItems={'baseline'} css={{
                    marginLeft: '15px'
                }}>
                    {children}
                    {/* <Text variant={'brown400'} size={'6'} css={{
                    marginBottom: '5.57px'
                }}>HORÁRIO DE FUNCIONAMENTO</Text>
                <Text variant={'white'} size={'2'} family={'display'} css={{
                    marginBottom: '4px'
                }}>Segunda-feira a sexta-feira:
                    <Text variant={'white'} size={'2'} family={'display'} weight={'4'}> 18h00 - 23h00</Text>
                </Text>
                <Text variant={'white'} size={'2'} family={'display'} weight={'3'} css={{
                    marginBottom: '4px'
                }}>Sábado a Domíngo:
                    <Text variant={'white'} size={'2'} family={'display'} weight={'4'}> 18h00 - 23h00</Text>
                </Text> */}
                </Flex>
                {haveButton && (
                    <Flex>
                        <StyledButton variant={'secondary'} css={{
                            padding: '8px 16px'
                        }}>
                            SOLICITAR PEDIDO
                        </StyledButton>
                    </Flex>
                )}
            </Flex>
        </Flex>
    )
}