import { Box, Text, Button, ButtonGroup  } from '@chakra-ui/react'
import { useState} from 'react';

function Card(){
    const [isClicked, setIsClicked] = useState(false)
    return <div>
        <Box maxW='sm' borderWidth='1px' borderRadius='lg'>
            <Text fontSize='4xl'>Hello</Text>
            <Button colorScheme='teal' variant='solid'>Click me!</Button>
        </Box> 
    </div>
}

export default Card;
