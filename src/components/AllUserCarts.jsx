import { useEffect, useState } from "react"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import UsersMenu from "./UsersMenu"




export default function AllUserCarts() {

  //const [users, setUsers] = useState([])

  //useEffect(() => {fetch("https://fakestoreapi.com/users")
  //.then((response) => response.json())
  //.then((json) => setUsers(json))
  //},[])



  return (
    <>
      <UsersMenu />
      {/*<nav aria-label="main mailbox folders">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightblue' }}>
        {  
          users.map((user) => (
            <ListItem key={user.id}>
              <ListItemButton onClick={()=>navigate("/")}>
                <ListItemAvatar>
                  <Avatar sx= {{backgroundColor:"#1976d2"}}>
                    <AccountCircleOutlinedIcon sx= {{backgroundColor:"#1976d2"}} />
                  </Avatar>
                </ListItemAvatar>
                <Typography sx={{color:"black"}} variant="button">
                <ListItemText primary={user.username} secondary={user.email} />
                </Typography>
              </ListItemButton>
            </ListItem>))
        }
        </List>
      </nav>*/}
    </>
  )
}
