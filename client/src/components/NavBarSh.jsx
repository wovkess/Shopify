import '../App.css';
import { Flex, Heading, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopRoute, HomeRoute, AuthRoute } from '../utils/consts';

const NavBarSh = () => {
    return (
        <Flex
            align={'center'}
            justify={'space-between'}
            width={'100%'}
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
            borderRadius={'8px'}
            padding={'15px 50px'}
        >
            <Link
                to={HomeRoute}
            >
                <Heading className='heading'>Shopify</Heading>
            </Link>
        
            <Flex
                width={"fit-content"}
            >
                <Link
                    to={HomeRoute}    
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7.5a.5.5 0 0 0 0-1H3V2h7.5a.5.5 0 0 0 0-1H3Zm9.604 3.896a.5.5 0 0 0-.708.708L13.293 7H6.5a.5.5 0 0 0 0 1h6.793l-1.397 1.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708l-2.25-2.25Z" clip-rule="evenodd"/>
                    </svg>
                </Link>
            </Flex>
        </Flex>
    );
  }
  
  export default NavBarSh;
  