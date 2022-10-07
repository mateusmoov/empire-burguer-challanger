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