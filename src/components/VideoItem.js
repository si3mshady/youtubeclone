import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'
export default function VideoItem({video, onVideoSelect}) {
    return (
        <Grid item xs={15}>

                <Paper style={{display: 'flex', alignItems: 'center'
                , cursor: "pointer","fontSize":"small"
            }} onClick={() => onVideoSelect(video)}>
                    <img style={{marginRight: '20px'}} alt='thumbnail'
                    src={video.snippet.thumbnails.medium.url} />
                <Typography variant='caption text'>
                    <b>{video.snippet.title}</b>
                </Typography>

                </Paper>
        </Grid>
          
    )
}
