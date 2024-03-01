import NavBarSh from '../components/NavBarSh';
import { Flex, Heading, Text, Input, InputGroup,InputLeftElement, Button  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RegisterRoute } from '../utils/consts';


const AuthPage = () =>{
    return(
        <Flex
            width={'100%'}
            flexWrap={'wrap'}
            justify={'center'}
        >
            <NavBarSh />
            <Flex
                width={'90%'}
                justify={'center'}
                align={'center'}
                height={'70vh'}
            >
                <Flex
                    boxShadow={'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;'}
                    width={'350px'}
                    height={'430px'}
                    borderRadius={'8px'}
                    justify={'center'}
                    flexWrap={'wrap'}
                >
                    <Text w={'100%'} fontSize={'40px'} textAlign={'center'} fontWeight={'bold'} mt={'8%'}>Sign in</Text>
                    <Flex w={'100%'} justify={'center'} mt={'30px'} flexWrap={'wrap'} height={'110px'}>
                        <InputGroup w={'80%'}>
                            <InputLeftElement  width="5" height="5" top={'17%'} left={'10px'} pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/>
                            </svg>
                            </InputLeftElement>
                            <Input type='tel' placeholder='email' />
                        </InputGroup>
                        <InputGroup w={'80%'}>
                            <InputLeftElement  width="6" height="6" top={'15%'} left={'8px'} pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 10.25h-.25V8a4.75 4.75 0 0 0-9.5 0v2.25H7A2.75 2.75 0 0 0 4.25 13v5A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18v-5A2.75 2.75 0 0 0 17 10.25ZM8.75 8a3.25 3.25 0 0 1 6.5 0v2.25h-6.5Zm9.5 10A1.25 1.25 0 0 1 17 19.25H7A1.25 1.25 0 0 1 5.75 18v-5A1.25 1.25 0 0 1 7 11.75h10A1.25 1.25 0 0 1 18.25 13Z"/>
                            </svg>
                            </InputLeftElement>
                            <Input type='tel' placeholder='password' />
                        </InputGroup>
                    </Flex>
                    <Button w='50%' h={'40px'} bg={"green"} color={'#fff'}>Login</Button>
                    <Flex>                    
                        <Text mr={'5px'}>Do not have account?</Text>
                        <Link to={RegisterRoute}><Text color={"#00A9BE"}>Register</Text></Link>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
       
       
    )
    
}

export default AuthPage;