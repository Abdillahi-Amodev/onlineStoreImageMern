import { makeStyles } from '@material-ui/core'

export const useStyles=makeStyles(theme=>({
input:{
    display:'none'
},
card:{
    width:300,
    display: 'flex',
   justifyContent: 'center',
   marginBottom:10
},
container:{
    display:'flex',
    alignItems:'center',
    // justifyContent:'center',
    flexDirection:'column',
    // border:'1px solid red',
    height:'100vh'
},
divImage:{
        display: 'flex',
         alignItems: 'center',
        justifyContent: 'center',
       
},
label:{
    padding:'15px 15px',
    
    color:'green',
    '&:hover':{
        backgroundColor:'lightgrey',
        transition:'all 0.3s ease'

    }
},
imageIcon:{
    fontSize:'2em'
},
imageContainer:{

width:"200px",
height:"200px",
position:'relative',
marginBottom:10,
    marginTop: '20px'
},
imagePreview:{
    position:'absolute',
    width:'100%',
    height:'100%',
},
root:{
        '& .MuiPaper-root':{
              position:'absolute',
              top:0,
           
    }
},

affichage:{
        width:"100%",
        height:"100px",
    
        backgroundSize:'contain'

},
gridContainer:{
        textAlign:'center'
},
cardImages:{
        width:'245px',
   
        
    }

}))