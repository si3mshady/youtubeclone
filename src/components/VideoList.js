import React from 'react'
import {Grid} from '@material-ui/core'
import VideoItem from './VideoItem'
export default function VideoList({videos, onVideoSelect}) {
    const listOfVideos = videos.map((video,index) => (
                <VideoItem key={index} video={video}

                    onVideoSelect={onVideoSelect}
                />

    ))
    return (
        <Grid container spacing={10}>
        {listOfVideos}
      </Grid>
    )
}
