import '../App.css';
import { Text, Box, Flex, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button } from '@chakra-ui/react'
import Porsche911 from '../images/porsche911.png'

const CardItem = () =>{
    return(
        <Card
            width={'500px'}
            height={'400px'}
            boxShadow={'1px 1px 10px #808080'}
            borderRadius={'8px'}
        >
            <CardBody
                display={'flex'}
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                <Image
                        src={Porsche911}
                        width={'300px'}
                        alt='porsche911'
                ></Image>
                <Box
                    width={'100%'}
                    textAlign={'center'}
                >
                    <Heading fontSize={'30px'}>Porsche 911</Heading>
                </Box>
                <Box>
                    <Text>
                        <b>Feuteres:</b> <i>Power 385hp | Weight 1700kg | Max speed 303km/h</i>
                    </Text>
                </Box>
                <Flex
                    width={'65%'}
                    justify={'space-around'}
                    align={'center'}
                >
                    <Text fontSize={'17px'} fontWeight={'600'}>Price: 133.049€</Text>
                    <Button width='150px' colorScheme='whatsapp'>Order</Button>
                </Flex>
            </CardBody>

            
        </Card>
    )
}
export default CardItem; // выгружаем компонент