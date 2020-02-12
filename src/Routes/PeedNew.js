import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { HeaderColor } from '../Static/Color/Color';
import PeedMutation from '../Queries/PeedMutation';
import { useMutation } from '@apollo/react-hooks';
import HashTagInput from '../Components/HashTagInput';
import CategorySelect from '../Components/CategorySelect';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: HeaderColor
        },
    },
});  

const PeedNew = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState(EditorState.createEmpty());
    const [parentCategory, setParentCategory] = useState("");
    const [childCategory, setChildCategory] = useState("");
    const [tags, setTags] = useState("");

    const PeedMutate = useMutation(PeedMutation, {
        variables: {
            title: title,
            content: content,
            parentCategory: parentCategory,
            childCategory: childCategory,
            tags: tags
        }
    });

    const Post = async() => {
        try {
            await PeedMutate()
        } catch (e) {
            console.log(e)
        }
    }

    console.log(content)
    return (
        <Box py={8}>
            <Container maxWidth="sm">
                <form noValidate autoComplete="off">
                    <ThemeProvider theme={theme}>
                        <Box my={2.5}>
                            <TextField label="Title" fullWidth color="primary" onChange={(e) => setTitle(e.target.value)}/>
                        </Box>
                        <Box>
                            <CategorySelect/>
                        </Box>
                        <Box mt={4} px={1} py={1} style={{backgroundColor: 'white', minHeight: 600}}>
                            <Editor
                                editorState={content}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={(e) => setContent(e)}
                            />
                        </Box>
                        <Box py={4} style={{position: 'relative'}}>
                            <HashTagInput/>
                        </Box>
                        <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button onPress={Post} variant="contained" size="large" style={{backgroundColor: HeaderColor, color: 'white', fontSize: 18}}>
                                Post
                            </Button>
                        </Box>
                    </ThemeProvider>
                </form>
            </Container>
        </Box>
    )
}

export default PeedNew;