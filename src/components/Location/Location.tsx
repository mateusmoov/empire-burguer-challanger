import { Flex, Text } from "components";

export const Location = () => {
    return (
        <Flex direction={"column"}>
            <Text
                variant={"brown300"}
                weight={"1"}
                size={"8"}
                css={{
                    marginBottom: "4px",
                }}
            >
                ONDE FICAR A NOSSO CASTELO
            </Text>
            <Text
                variant={"brown100"}
                family={"display"}
                size={"2"}
                weight={"1"}
                css={{
                    marginBottom: "32px",
                }}
            >
                Estaremos de portas abertas para a nossa realeza.
            </Text>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.206729394933!2d-60.765712962016444!3d2.800982545325788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d9304db0cfd44ad%3A0xd0cb92ad45765661!2sPintol%C3%A2ndia%2C%20Boa%20Vista%20-%20RR!5e0!3m2!1spt-BR!2sbr!4v1666495845813!5m2!1spt-BR!2sbr"
                width="1900"
                height="207"
            />
        </Flex>
    );
};
