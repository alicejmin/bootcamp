import type { NextPage } from 'next'
import Card from '../components/Card'
import Comment from '../components/Comment'
import { Button, Box, Container, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import Post from "../components/Post";
import NewPostModal from "../components/NewPostModal";
import { useEffect, useState } from "react";
import axios from 'axios';

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)})
    }, [])

    return (
        <>
            <Container maxW='xl' centerContent>
               {posts?.length === 0 && <Text>No posts :(</Text>}
               {/* {posts?.map(post => <Post key={post._id} title={post.title} body={post.body} postedAt={new Date(post.postedAt)}/>)} */}
           </Container>
            <Post title="posts" body="body" postedAt={new Date()} />
            <Comment postedAt={new Date()} />
            <Button onClick={() => setOpen(true)}>New Post</Button>
            <NewPostModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default Home
