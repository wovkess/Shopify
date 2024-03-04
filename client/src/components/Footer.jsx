import { Flex } from "@chakra-ui/react";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Footer = () =>{
    const colorPallette = colors(); // colorPallette - хранит значения функции
    const { white, midnight, brown, mediumGreen } = colorPallette;
    return(
        <Flex
            width={"fit-content"}
            h={'70px'}
            marginTop={'auto'}
            mb={'10px'}
            gap={30}
            justify={'center'}
            fontSize={'15px'}
            align={'center'}
            color={white}
        >
            <Link>
                <Text>Porsche&nbsp;</Text>
            </Link>
            <Link>
                <Text>Privacy</Text>
            </Link>
            <Link>
                <Text>News</Text>
            </Link>
            <Link>
                <Text>Contact</Text>
            </Link>
            
        </Flex>
    )
    
}

export default Footer;