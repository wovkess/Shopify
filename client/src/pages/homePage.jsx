import '../App.css';
import { Flex, Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import colors from '../utils/colors';
import Footer from '../components/Footer';
import ToTopButton from '../components/ToTopButton';


const HomePage = () =>{
    const colorPallette = colors(); // colorPallette - хранит значения функции
    const { white, midnight, brown, mediumGreen } = colorPallette;
    return(
        <Box
            backgroundColor={midnight}
            width={'100%'}
        >   
            <Flex>
                <NavBar />
            </Flex>    
            <Flex
                w={"100%"}
                justify={'center'}
            >
                <Flex // первая страница
                    h={'100vh'}
                >
                <Flex // крайняя страница
                   h={'100vh'}
                   flexWrap={'wrap'}
                   justify={'center'}
                   align={'center'}
                   w={'100%'}
                >
                    <ToTopButton />
                    <Footer />
                </Flex>
                
            </Flex>
            </Flex>
        </Box>

    )
    
}

export default HomePage;