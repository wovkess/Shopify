import '../App.css';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import colors from '../utils/colors';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';
import IntroVideo from '../components/IntroVideo';


const HomePage = () =>{
    const colorPallette = colors(); // colorPallette - хранит значения функции
    const { white, midnight, brown, mediumGreen, black } = colorPallette;
    return(
        <Box
            backgroundColor={midnight}
            width={'100%'}
        >   
            
            <Flex>
                <NavBar/>
            </Flex>    
            <Flex
                w={"100%"}
                justify={'center'}
                zIndex={'-1'}
            >
                <IntroVideo />
                <Text
                    zIndex={'2'}
                    color={black}
                    fontSize={'70px'}
                    fontWeight={'bold'}
                    textAlign={'left'}
                    top={'300'}
                    left={'50'}
                    position={'absolute'}
                >Our speed is your comfort</Text>
                <Text
                    zIndex={'2'}
                    color={brown}
                    fontSize={'35px'}
                    fontWeight={'600'}
                    textAlign={'left'}
                    top={'400'}
                    left={'50'}
                    position={'absolute'}
                >Choose your dream cat online. Quickly and easily</Text>
                <Button position={'absolute'} left={'50'} colorScheme='blackAlpha' zIndex={'2'} top={'480'} width={'150px'} height={'45px'} className='OrderBtn'>Order Now</Button>
                <Flex // main
                    h={'500vh'}
                    justify={'center'}
                >
                    
                    <ToTopButton />
                    <Footer />
                </Flex>



            </Flex>
        </Box>

    )
    
}

export default HomePage;