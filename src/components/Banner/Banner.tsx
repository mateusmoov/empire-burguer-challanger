import { Flex, Divider, Text, StyledButton } from "components"

interface Banner {
    width: string,
    haveButton: boolean,
    children: React.ReactNode,
    icon: string
}

export const Banner = ({ width, haveButton, children, icon }: Banner) => {
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
                <img src={icon} alt="timer" width={94} />
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
                            padding: '8px 16px',
                            lineHeight: '25px'
                        }}>
                            SOLICITAR PEDIDO
                        </StyledButton>
                    </Flex>
                )}
            </Flex>
        </Flex >
    )
}