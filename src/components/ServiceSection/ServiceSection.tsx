import { Text, Flex, StyledButton } from 'components'
import GirlHamburguer from 'assets/girl-hamburguer.png'

export const ServiceSection = () => {
    return (
        <Flex>
            <img src={GirlHamburguer} alt="mulher com hamburguer na mão" />
            <Flex direction={'column'} css={{
                marginLeft: '33px'
            }}>
                <Text family={'title'} size={'9'} variant={'brown'} weight={'3'} css={{
                    lineHeight: '50px',
                    marginBottom: '10px'
                }}>ATENDIMENTO <br />
                    <Text variant={'brown300'} size={'9'} weight={'3'} css={{
                        backgroundColor: 'var(--palette-yellow)',
                        padding: '3px',
                        borderRadius: '6px'
                    }}>PERSONALIZADO</Text>
                </Text>
                <Flex direction={'column'} alignItems={'baseline'} css={{
                    gap: '20px'
                }}>
                    <Text
                        variant={"brown100"}
                        family={"display"}
                        size={"3"}
                        weight={"1"}
                        css={{
                            lineHeight: '29px'
                        }}>
                        Todos os nossos clientes são tratados como rei e<br /> rainha, com a nossa colunaria artesanal.
                    </Text>
                    <StyledButton variant={'primary'} css={{
                        padding: '10.4307px 20.8614px',
                        fontSize: '23px',
                        lineHeight: '33px'
                    }}>Cardápio Imperial</StyledButton>
                </Flex>
            </Flex>
        </Flex >
    )
}