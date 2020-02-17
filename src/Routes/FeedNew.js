import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CustomCKEditor from '../Components/CustomCKEditor';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { HeaderColor } from '../Static/Color/Color';
import FeedMutation from '../Queries/FeedMutation';
import { useMutation } from '@apollo/react-hooks';
import HashTagInput from '../Components/HashTagInput';
import CategorySelect from '../Components/CategorySelect';
import ImageUpload from '../Components/ImageUpload';
import Footer from '../Layouts/Footer';
import Header from '../Layouts/Header';

const FeedNew = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [childCategory, setChildCategory] = useState("");
    const [tags, setTags] = useState([]);

    const FeedMutate = useMutation(FeedMutation, {
        variables: {
            title: title,
            content: content,
            parentCategory: parentCategory,
            childCategory: childCategory,
            tags: tags
        }
    })[0];

    const Post = async() => {
        try {
            await FeedMutate()
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Box>
            <Header/>
            <Box py={8}>
                <Container style={{maxWidth: 686, padding:0}}>
                    <form noValidate autoComplete="off">
                        <Box my={2.5}>
                            <TextField label="Title" fullWidth color="primary" onChange={(e) => setTitle(e.target.value)}/>
                        </Box>
                        <Box>
                            <CategorySelect 
                                setParentCategory={setParentCategory} 
                                setChildCategory={setChildCategory}
                                parentCategory={parentCategory}
                            />
                        </Box>
                        <ImageUpload/>
                        <Box mt={4} px={1} py={1} style={{backgroundColor: 'white', minHeight: 600}}>
                            <CustomCKEditor/>
                        </Box>
                        <Box py={4} style={{position: 'relative'}}>
                            <HashTagInput setTags={setTags} tags={tags}/>
                        </Box>
                        <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button variant="contained" size="large" style={{backgroundColor: HeaderColor, color: 'white', fontSize: 18}} onClick={Post}>
                                Post
                            </Button>
                        </Box>
                    </form>
                </Container>
            </Box>
            <Footer/>
        </Box>
    )
}

export default FeedNew;