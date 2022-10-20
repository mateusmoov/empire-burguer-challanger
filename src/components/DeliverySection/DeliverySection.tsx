import { Flex, Text, DeliveryFeatures } from 'components'
import HamburguerDelivery from 'assets/phone-hamburguer.png'
import WhatsAppDelivery from "assets/whatsapp-delivery.svg";
import MotoboyDelivery from "assets/motoboy-delivery.svg";
import IceCreamDelivery from "assets/icecream-delivery.svg";
import IfoodDelivery from "assets/ifood-delivery.svg";


const deliveryCard = [
    {
        image: WhatsAppDelivery,
        title: 'WHATSAPP',
        subtitle: 'Vamos direto ao ponto, sem perder tempo!'
    },
    {
        image: MotoboyDelivery,
        title: 'ENTREGA',
        subtitle: 'Entregamos menos de 45 minutos na porta da sua casa!'
    },
    {
        image: IceCreamDelivery,
        title: 'SOBREMESA',
        subtitle: 'Pedidos assima de 100 reais, ganham brindes.'
    },
    {
        image: IfoodDelivery,
        title: 'IFOOD',
        subtitle: 'Nossa loja é Top 1 da região!'
    },
]

export const DeliverySection = () => {
    return (
        <Flex justifyContent={'center'} css={{
            margin: '128px 0 100px 0'
        }}>
            <img src={HamburguerDelivery} alt="hamburguer no celular" />
            <Flex alignItems={'baseline'} direction={'column'} css={{
                marginLeft: '30px',
            }}>
                <Text variant={'brown300'} weight={'1'} size={'8'} css={{
                    marginBottom: '16px'
                }}>
                    NOVAS ENTREGAS
                </Text>
                <Flex direction={'column'} css={{
                    gap: '8px'
                }}>
                    {
                        deliveryCard.map((feature, index) => (
                            <DeliveryFeatures key={index} image={feature.image} title={feature.title} subtitle={feature.subtitle} />
                        ))
                    }
                </Flex >
            </Flex>
        </Flex>
    )
}