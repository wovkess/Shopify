import '../App.css';
import { Flex, Box, Text, Button, AspectRatio } from '@chakra-ui/react';
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
                h={'100vh'}
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
            </Flex>
            <Flex // about
                h={'100vh'}
                justify={'center'}
                flexWrap={'wrap'}
            >
                <Text h={'fit-content'} color={white} fontSize={'40px'} fontWeight={'800'}>This page summarizes our main services that we offer to our clients</Text>
                <Flex mb={50} w={'80%'} h={'70%'} justify={"center"} gap={5} flexWrap={'wrap'}>
                    <Box width={380} h={260} bg={white} borderRadius={8} padding={5}>
                        <Flex align={'center'} justify={'center'} width={"64px"} height={"64px"} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M7.394 20.025q-.688-.025-1.308-.357q-.62-.331-1.173-.97q-.903-1.027-1.408-2.526Q3 14.673 3 13.058q0-1.883.701-3.535q.7-1.652 1.926-2.877t2.867-1.935Q10.137 4 12 4t3.506.713q1.642.714 2.857 1.935q1.216 1.221 1.926 2.87Q21 11.164 21 13.04q0 1.618-.52 3.11q-.518 1.492-1.438 2.565q-.584.662-1.196.986q-.611.324-1.296.324q-.354 0-.688-.084q-.335-.083-.67-.25l-1.4-.7q-.415-.208-.878-.312q-.462-.104-.933-.104q-.49 0-.944.104q-.452.104-.849.311l-1.38.7q-.36.193-.697.276q-.338.084-.717.059ZM12 14.5q.633 0 1.066-.434q.434-.433.434-1.066q0-.22-.066-.429q-.067-.21-.18-.39L15.1 9.794q.365.344.64.784q.273.44.456.941h1.05q-.49-1.796-1.941-2.907Q13.854 7.5 12 7.5T8.683 8.614Q7.219 9.73 6.735 11.52h1.03q.485-1.369 1.656-2.194Q10.592 8.5 12 8.5q.637 0 1.213.18q.577.182 1.1.505l-1.851 2.398q-.108-.039-.231-.06q-.123-.023-.231-.023q-.633 0-1.066.434q-.434.433-.434 1.066t.434 1.066q.433.434 1.066.434Z"/>
                                </svg>
                        </Flex>
                        <Text ml={2} fontSize={25} fontWeight={'600'}>Speed</Text>
                        <Text ml={2} fontSize={20} opacity={0.6}>
                            Thanks to our search engine you can quickly find the right candidate for you
                        </Text>
                    </Box>
                    <Box width={380} h={260} bg={white} borderRadius={8} padding={5}>
                        <Flex align={'center'} justify={'center'} width={"64px"} height={"64px"} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 48 48">
                                <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                    <path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"/>
                                    <path fill="#2F88FF" d="M29.8 29H38.2L41 32.5294L34 41L27 32.5294L29.8 29Z"/>
                                </g>
                            </svg>
                        </Flex>
                        <Text ml={2} fontSize={25} fontWeight={'600'}>Quality</Text>
                        <Text ml={2} fontSize={20} opacity={0.6}>
                            Thanks to our development team, our app is fast and reliable
                        </Text>
                    </Box>
                    <Box width={380} h={260} bg={white} borderRadius={8} padding={5}>
                        <Flex align={'center'} justify={'center'} width={"64px"} height={"64px"} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 14 14">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.36 13.43h0a1 1 0 0 1-.72 0h0A9.57 9.57 0 0 1 .5 4.49v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3a9.57 9.57 0 0 1-6.14 8.94Z"/>
                            </svg>
                        </Flex>
                        <Text ml={2} fontSize={25} fontWeight={'600'}>Safety</Text>
                        <Text ml={2} fontSize={20} opacity={0.6}>
                            Our application provides a high level of protection for our users
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex // footer
                h={'100vh'}
                justify={'center'}
            >
                <ToTopButton />
                <Footer />  
            </Flex>
                    




        </Box>

    )
    
}

export default HomePage;