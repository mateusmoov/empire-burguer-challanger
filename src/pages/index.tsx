import { Navbar, Text, Flex, StyledButton, WeDoSection } from "components";


export const IndexPage = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: "url('src/assets/Banner01.png')",
                    minHeight: "545px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position: "relative",
                }}
            >
                <Navbar />
                <Flex css={{
                    flexDirection: 'column',
                    alignItems: 'baseline',
                    margin: '7rem 0 0 23rem'
                }}>
                    <Text variant={'brown'} family={'display'} size={'4'}>Uma nova experiência!</Text>
                    <div>
                        <Text family={'title'} size={'10'} variant={'brown'}>KING</Text>
                        <Text family={'title'} size={'10'}>BURGUER</Text>
                    </div>
                    <div>
                        <Text as='p' variant={'brown'} family={'display'} weight={'1'}>Para quem tem um
                            <Text as='span' variant={'brown300'} family={'display'} weight={'4'} css={{
                                backgroundColor: 'var(--palette-yellow)',
                                padding: '3px',
                                borderRadius: '6px'
                            }} > Apetite de um REI!</Text>
                        </Text>
                    </div>
                    <StyledButton variant={'primary'} css={{
                        padding: '10px 20px', marginTop: '0.8rem'
                    }}>
                        Comprar Agora
                    </StyledButton>
                </Flex>
            </div>
            <div style={{
                position: 'relative',
                bottom: '50px'
            }}>
                <WeDoSection />
            </div>
        </div>
    )
}