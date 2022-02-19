import {FC} from "react";
import {Box, Divider, Text} from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'
import { useState} from 'react';
import { Input } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

interface Props {
    content?: string;
    postedAt: Date;
}


const Comment: FC<Props> = ({content, postedAt}) => {
    // TODO: Implemnt a Comment!
    const [isClicked, setIsClicked] = useState(false)
    return <div>
    <Input variant='outline' placeholder='enter comment here' />
    <Flex>

    <Text fontSize='lg'>I also hate it here</Text>    
    <Spacer />
    <Box w='100px' h='10' />
    <Spacer />
         <Text fontSize='sm'>{postedAt.toString()}</Text>
    </Flex>
    <Input variant='outline' placeholder='enter comment here' />
    </div>
}

export default Comment;