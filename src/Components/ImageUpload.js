import React, {useState} from 'react';
import ImageUploader from 'react-images-upload';
 
const ImageUpload = () => {
    const [picture, setPicture] = useState([]);

    const onDrop = (image) => {
        setPicture(picture.concat(image));
        console.log(image);
    }
    return (
        <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={(e) => console.log(e[0].name)}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
        />
    );
}

export default ImageUpload;