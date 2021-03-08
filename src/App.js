import React , {useState, useEffect} from 'react'
import {Grid} from '@material-ui/core'
import youtube from './api/youtube'
import { Searchbar, VideoDetail, VideoList} from './components'

function App() {

  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState()

 
  function onVideoSelect(video) {
    setSelectedVideo(video)
  }

  const handleSubmit =  async (searchTerm) => {
    // console.log("fromAppJS",searchTerm)
    const response = await youtube.get('search', {params: {q: searchTerm}})

    // console.log(response.data.items) youtube returns array with search results 
    setVideos(response.data.items)
    setSelectedVideo(videos[0])

}

useEffect(() => { handleSubmit("ReactJS")}, [])


  return (
    <Grid style={{justifyContent:"center"}} container spacing={10}>
    
        <Grid item xs={11} >
          <Grid container spacing={10}>            
            <Grid item xs={12}>
                <Searchbar onFormSubmit={handleSubmit}/>
            </Grid>
            <Grid item xs={8} >
            <VideoDetail video={selectedVideo} />
            </Grid>
             <Grid item xs={4} >
             <VideoList  onVideoSelect={onVideoSelect} videos={videos}/>
            </Grid>
          </Grid>
        </Grid>    
    </Grid>
  );
}

export default App;
