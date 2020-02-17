import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Escape(content){
    return (
    <div dangerouslySetInnerHTML={ {__html: content} }/>
    )
}

const ContentCard = ({title, thumbnail, content, createdAt}) => {
    console.log(createdAt)
    return (
        <Box px={2} pb={3}>
            <Card style={{width:'100%'}}>
                <CardActionArea>
                    <div style={{
                            height: 240, 
                            backgroundImage: `url(https://bizchoollab.s3.amazonaws.com/${thumbnail})`, 
                            backgroundPosition: 'center', 
                            backgroundSize: 'cover', 
                            backgroundRepeat: 'no-repeat',
                            position: "relative"
                        }}
                    >
                        <h3 style={{position: "absolute", bottom: 10, right: 10, color: 'white', margin:0}}>{createdAt}</h3>
                    </div>
                    <CardContent style={{height: 100}}>
                        <Typography gutterBottom variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
  );
}

export default ContentCard;
