import "../App.css"
import NavBarSh from '../components/NavBarSh';
import { Flex, Text, Input, InputGroup,InputLeftElement, Button  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthRoute } from '../utils/consts';

const RegisterPage = () =>{
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
                    <Text w={'100%'} fontSize={'40px'} textAlign={'center'} fontWeight={'bold'} mt={'8%'}>Sign up</Text>
                    <Flex w={'100%'} justify={'center'} mt={'30px'} flexWrap={'wrap'} height={'160px'}>
                        <InputGroup w={'80%'}>
                            <InputLeftElement  width="4" height="4" top={'30%'} left={'12px'} pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16c-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4c14.6 0 38.3 16 89.6 16c51.7 0 74.9-16 89.6-16c47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0S80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96s-96-43.1-96-96s43.1-96 96-96z"/>
                            </svg>
                            </InputLeftElement>
                            <Input type='text' placeholder='login' />
                        </InputGroup>
                        <InputGroup w={'80%'}>
                            <InputLeftElement  width="5" height="5" top={'30%'} left={'10px'} pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/>
                            </svg>
                            </InputLeftElement>
                            <Input type='email' placeholder='email' />
                        </InputGroup>
                        <InputGroup w={'80%'}>
                            <InputLeftElement  width="6" height="6" top={'20%'} left={'8px'} pointerEvents='none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17 10.25h-.25V8a4.75 4.75 0 0 0-9.5 0v2.25H7A2.75 2.75 0 0 0 4.25 13v5A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18v-5A2.75 2.75 0 0 0 17 10.25ZM8.75 8a3.25 3.25 0 0 1 6.5 0v2.25h-6.5Zm9.5 10A1.25 1.25 0 0 1 17 19.25H7A1.25 1.25 0 0 1 5.75 18v-5A1.25 1.25 0 0 1 7 11.75h10A1.25 1.25 0 0 1 18.25 13Z"/>
                            </svg>
                            </InputLeftElement>
                            <Input type='password' placeholder='password' />
                        </InputGroup>
                    </Flex>
                    <Button w='50%' h={'40px'} bg={"green"} color={'#fff'}>Login</Button>
                    <Flex>                    
                        <Text mr={'5px'}>Have you got an account?</Text>
                        <Link to={AuthRoute}><Text color={"#00A9BE"}>Login</Text></Link>
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
       
       
    )
    
}

export default RegisterPage;