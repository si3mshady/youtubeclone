import React, {useState} from 'react'

import { Paper, TextField}  from '@material-ui/core'

export default function Searchbar({onFormSubmit}) {

const [searchTerm, setSearchTerm] = useState('')

const handleChange = (event) => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
    }

const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(searchTerm)

}


    return (
        <Paper elevation={6} style={{padding: '25px'}}>
            <form onSubmit={handleSubmit}>
                <TextField 
                onChange={handleChange}
                fullWidth label="Search..."/>
            </form>          
        </Paper>
    )
}
