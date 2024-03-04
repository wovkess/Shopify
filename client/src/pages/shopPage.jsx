import '../App.css';
import CardItem from '../components/cardItem';
import { Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import colors from '../utils/colors';

const ShopPage = () =>{
    const {midnight} = colors();
    return(

        <Flex
            flexWrap={'wrap'}
            justify={'center'}
            width={'100%'}
            bg={midnight}
        >
            <NavBar/>
            <Flex
                flexWrap={'wrap'}
                mt={'50px'}
                width={'90%'}
                justify={'center'}
                gap={'35px'}
            > 
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
            </Flex>
           
        </Flex>
    )
    
}

export default ShopPage;