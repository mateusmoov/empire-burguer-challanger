import Menu1 from "assets/hamburguer-price1.png";
import Menu2 from "assets/hamburguer-price2.png";
import Menu3 from "assets/hamburguer-price3.png";
import ClockIcon from 'assets/timer.svg'
import Phone from 'assets/phone.svg'
import { TextVariants } from "components/Typography";
import {
    Navbar,
    Text,
    Flex,
    StyledButton,
    WeDoSection,
    SpecialMenu,
    Banner,
    Menu,
    ServiceSection,
    Divider,
    DeliverySection
} from "components";

interface SpecialMenu {
    title: string;
    weight: string;
    variant: TextVariants["variant"];
    weightVariant: TextVariants["variant"];
    image: string;
    onlyToday: boolean;
}

export const IndexPage = () => {
    const SpecialMenus: SpecialMenu[] = [
        {
            title: "BURGUER IMPERIAL + BATATA",
            weight: "250kg",
            variant: "white",
            weightVariant: "bege",
            image: Menu1,
            onlyToday: true,
        },
        {
            title: "BATATA",
            weight: "150kg",
            variant: "brown200",
            weightVariant: "brown",
            image: Menu2,
            onlyToday: false,
        },
        {
            title: "SORVETE",
            weight: "50kg",
            variant: "brown200",
            weightVariant: "brown",
            image: Menu3,
            onlyToday: false,
        },
    ];
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
                <Flex
                    direction={"column"}
                    alignItems={"baseline"}
                    css={{
                        margin: "7rem 0 0 23rem",
                    }}
                >
                    <Text variant={"brown"} family={"display"} size={"4"}>
                        Uma nova experiência!
                    </Text>
                    <div>
                        <Text family={"title"} size={"10"} variant={"brown"}>
                            KING
                        </Text>
                        <Text family={"title"} size={"10"}>
                            BURGUER
                        </Text>
                    </div>
                    <div>
                        <Text as="p" variant={"brown"} family={"display"} weight={"1"}>
                            Para quem tem um
                            <Text
                                as="span"
                                variant={"brown300"}
                                family={"display"}
                                weight={"4"}
                                css={{
                                    backgroundColor: "var(--palette-yellow)",
                                    padding: "3px",
                                    borderRadius: "6px",
                                }}
                            >
                                {" "}
                                Apetite de um REI!
                            </Text>
                        </Text>
                    </div>
                    <StyledButton
                        variant={"primary"}
                        css={{
                            padding: "10px 20px",
                            marginTop: "0.8rem",
                        }}
                    >
                        Comprar Agora
                    </StyledButton>
                </Flex>
            </div>
            <div
                style={{
                    position: "relative",
                    bottom: "50px",
                }}
            >
                <WeDoSection />
            </div>
            <Flex
                direction={"column"}
                alignItems={"baseline"}
                css={{
                    margin: "0px 0px 0px 23rem",
                }}
            >
                <Text
                    variant={"brown300"}
                    family={"title"}
                    size={"8"}
                    css={{
                        marginTop: "4px",
                    }}
                >
                    OFERTAS ESPECIAIS
                </Text>
                <Text
                    variant={"brown100"}
                    family={"display"}
                    size={"1"}
                    weight={"1"}
                >
                    Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
                    sempre estamos mudando o nosso cardapio.
                </Text>
                <Flex
                    css={{
                        marginTop: "16px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "30px",
                    }}
                >
                    {SpecialMenus.map((menu, index) => (
                        <SpecialMenu
                            key={index}
                            title={menu.title}
                            weight={menu.weight}
                            variant={menu.variant}
                            weightVariant={menu.weightVariant}
                            image={menu.image}
                            onlyToday={menu.onlyToday}
                        />
                    ))}
                </Flex>
            </Flex>
            <Flex
                justifyContent={"center"}
                css={{
                    marginTop: "64px",
                }}
            >
                <Banner width="570px" haveButton={false} icon={ClockIcon}>
                    <Text
                        variant={"brown400"}
                        size={"6"}
                        css={{
                            marginBottom: "5.57px",
                        }}
                    >
                        HORÁRIO DE FUNCIONAMENTO
                    </Text>
                    <Text
                        variant={"white"}
                        size={"2"}
                        family={"display"}
                        css={{
                            marginBottom: "4px",
                        }}
                    >
                        Segunda-feira a sexta-feira:
                        <Text variant={"white"} size={"2"} family={"display"} weight={"4"}>
                            {" "}
                            18h00 - 23h00
                        </Text>
                    </Text>
                    <Text
                        variant={"white"}
                        size={"2"}
                        family={"display"}
                        weight={"3"}
                        css={{
                            marginBottom: "4px",
                        }}
                    >
                        Sábado a Domíngo:
                        <Text variant={"white"} size={"2"} family={"display"} weight={"4"}>
                            {" "}
                            18h00 - 23h00
                        </Text>
                    </Text>
                </Banner>
                <Flex
                    direction={"column"}
                    alignItems={"baseline"}
                    css={{
                        marginLeft: "30px",
                        gap: "3px",
                    }}
                >
                    <Text family={"display"} variant={"brown100"} weight={"1"}>
                        Não esqueça de marcar a gente no Instagram:
                    </Text>
                    <Text size={"6"} variant={"red"}>
                        #EMPIREBURGUER
                    </Text>
                </Flex>
            </Flex>
            <Menu />
            <Flex justifyContent={'center'} css={{
                margin: '71px 0 128px 0'
            }}>
                <ServiceSection />
            </Flex>
            <Divider
                orientation={'vertical'}
                variant={"gray"}
                css={{ width: '1170px' }} />
            <DeliverySection />
            <Flex justifyContent={'center'}>
                <Banner width="1168px" haveButton={true} icon={Phone}>
                    <Text
                        variant={"brown400"}
                        size={"6"}
                        css={{
                            marginBottom: "5.57px",
                        }}
                    >
                        FAÇA SEU PEDIDO AGORA MESMO!
                    </Text>
                    <Text
                        variant={"white"}
                        size={"2"}
                        family={"display"}
                        weight={'1'}
                        css={{
                            marginBottom: "4px",
                        }}
                    >
                        Venha saborear a melhor experiência de hamburguenses artesanal <br /> do&nbsp;
                        <Text
                            variant={"white"}
                            size={"2"}
                            family={"display"}
                            weight={'2'}
                            css={{
                                marginBottom: "4px",
                            }}
                        >
                            Empires Burger,&nbsp;
                        </Text>
                        com temática medieval!
                    </Text>
                </Banner>
            </Flex>
        </div>

    );
};
