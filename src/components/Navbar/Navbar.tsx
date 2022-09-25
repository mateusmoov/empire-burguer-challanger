import { Flex } from "components/Flex/Flex";
import Text from "components/Typography/TypographyText";
import Divider from "components/Divider/Divider";
import Crown from "assets/crown-logo.svg";
import IfoodLogo from "assets/ifood-logo.svg"
import InstagramLogo from "assets/instagram-logo.svg"
import WhatsAppLogo from 'assets/whatsapp-logo.svg'
import { StyledIconButton } from "components/Button/Button";


export const Navbar = () => {
    return (
        <Flex justifyContent={'center'} css={{ backgroundColor: 'red' }}>
            <Flex css={{ gap: 7, marginRight: 61 }}
            >
                <img src={Crown} alt="CrownLogo" />
                <Text family={"display"} weight={"4"} size={"7"} variant={"brown200"}>
                    EMPIRE
                </Text>
                <Text family={"display"} weight={"2"} size={"7"} variant={"brown200"}>
                    BURGUER
                </Text>
            </Flex>

            <Flex css={{ gap: 16, marginRight: 100 }}>
                <Text as='a' family={"display"} weight={"2"} size={"3"} variant={"brown300"} href="http://pudim.com.br" >Home</Text>
                <Text as='a' family={"display"} weight={"2"} size={"3"} variant={"brown300"} href="http://pudim.com.br" >Promoção</Text>
                <Text as='a' family={"display"} weight={"2"} size={"3"} variant={"brown300"} href="http://pudim.com.br" >Cardapio</Text>
                <Text as='a' family={"display"} weight={"2"} size={"3"} variant={"brown300"} href="http://pudim.com.br" >Comentario</Text>
                <Text as='a' family={"display"} weight={"2"} size={"3"} variant={"brown300"} href="http://pudim.com.br" >Contato</Text>
            </Flex>
            <Flex css={{ gap: 16, marginRight: 13 }}>
                <a href=""><img src={IfoodLogo} alt="ifood" color="black" /></a>
                <a href=""> <img src={InstagramLogo} alt="instagram" color="black" /></a>
                <Divider orientation={'vertical'} variant={'red'} css={{ height: 47 }} />
            </Flex>
            <StyledIconButton variant={'primary'} css={{ padding: '4px 16px' }}>
                <img src={WhatsAppLogo} alt="whatsapp" />
                Contato
            </StyledIconButton>
        </Flex>
    );
};
