import {FC} from "react";
import {Box,  Button, Flex, Spacer, Divider, Text, VStack} from "@chakra-ui/react";
import Comment from "./Comment";

interface Props {
    title: string;
    body: string;
    postedAt: Date;
}

const Post: FC<Props> = ({title, body, postedAt}) => {
    // TODO: Implemnt a Post!
    return <div>
        <Box bg='gray' w='100%' p={4} color='white'>
        <Text fontSize='3xl'>Welcome to the space!</Text>   
    </Box>
        <Box bg='black' w='100%' p={4} color='white'>
     This is a safe space to speak your mind. Please remain respectful of all users.
    </Box>
    <Flex>
    <Text fontSize='lg'>I hate it here</Text>    
    <Spacer />
    <Box w='100px' h='10' />
    <Spacer />
         <Text fontSize='sm'>{postedAt.toString()}</Text>
    </Flex>

    </div>
}

export default Post;