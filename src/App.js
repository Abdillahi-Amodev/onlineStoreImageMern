import { Card, CardContent, Container, TextField, Typography, Dialog, DialogContent, DialogActions, Button, Grid, CardMedia, CardActions } from '@material-ui/core'
import PhotoLibrarySharpIcon from '@material-ui/icons/PhotoLibrarySharp';
import React, { useEffect, useState } from 'react'
import {useStyles} from './styles'
import axios from 'axios'

function App() {
    const classes=useStyles()
    const [photo,setPhoto]=useState('')
    const [url,setUrl]=useState('')
    const [open,setOpen]=useState(false)
    const [name,setName]=useState('')
    const  [stores,setStores]=useState([])

useEffect(()=>{
    axios.get('http://localhost:8000')
        .then(allResponse=>{
            console.log(allResponse.data);
            setStores(allResponse.data)
        }).catch(err=>{
            console.log(err)
        })

},[])



const handlePost=async()=>{
    const data= new FormData();
    data.append('file',photo)
    data.append('name',name)
try {
    let response = await axios.post('http://localhost:8000', data)
    console.log(response.data);
    setStores([...stores,response.data])
    setOpen(false)
    setName('')
} catch (error) {
    console.log(error);
}

} 

const handleClose=()=>{
    setOpen(false)
}
    return (
        <>
            <Dialog
                open={open}
                className={classes.root}
                maxWidth='md'

            >
                <DialogContent>
                    <div>
                        <TextField label='Nom' variant='filled'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={url} alt="yeah" className={classes.imagePreview} />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='primary'
                        onClick={handlePost}
                    >Upload</Button>
                    <Button variant='contained'
                        onClick={() => setOpen(false)}
                    >Cancel</Button>
                </DialogActions>
            </Dialog>


            
        <Container className={classes.container}>
            <div>

   
            <Card className={classes.card} >
                <CardContent>
                    <form>
                        <div>
                            <TextField type='text' variant='filled' fullWidth/>
                        </div><br />
                        <div className={classes.divImage}>
                            <label htmlFor="image" className={classes.label}>
                                <input 
                                type="file" 
                                name="file" 
                                id="image" 
                                className={classes.input} accept='image' 
                                
                                onChange={(e)=>{
                                    setPhoto(e.target.files[0])
                                    setUrl(URL.createObjectURL(e.target.files[0]))
                                   
                                    console.log(URL.createObjectURL(e.target.files[0]));
                                    setOpen(true)
                                }}
                                />
                                    <PhotoLibrarySharpIcon className={classes.imageIcon}/>
                            </label>
                        </div>
                    </form>
                </CardContent>
                       
            </Card>
                </div>
                <div className={classes.gridContainer}>

                
            <Grid container spacing={2} >
                {
                    stores.map(store=>{
                        
                        console.log(store.image)
                        return <Grid item key={store._id} xs={12} sm={6} md={4} lg={3}>
                                <Card className={classes.cardImages}>
                                    <div>
                                    <CardMedia
                                    image={`/uploader/${store.image}`}
                                    title={store.image}
                                    className={classes.affichage}
                                    />
                                    </div>

                                    <div>
                                <CardActions className={classes.footer}>
                                    <Button  color='primary'>Send</Button>
                                </CardActions>
                                    </div>

                                    
                                
                                </Card>

                            {/* <img src={`/uploader/${store.image}`} alt={store.image}  className={classes.affichage}/> */}
                            </Grid>
                           
                
                    })
                }

            </Grid>
                </div>

          
        </Container>
    
        </>
    )
}

export default App
