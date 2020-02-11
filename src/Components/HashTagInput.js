import React, {useState} from 'react';
import { TagInput } from 'reactjs-tag-input'

const HashTagInput = () => {
    const [tags, setTags] = useState([])

    const onTagsChanged = (tags) => {
        setTags(tags);
        console.log(tags);
    }
    
    return (
        <TagInput 
            tagStyle={`background: #00adb5`}
            placeholder="관련있는 해시태그를 넣어주세요!"
            wrapperStyle={{position: 'static', width: '96%', transform: 'none'}}
            tags={tags} onTagsChanged={onTagsChanged.bind(tags)} 
        />
    )
}

export default HashTagInput;