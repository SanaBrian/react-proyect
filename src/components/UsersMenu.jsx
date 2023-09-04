import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useState, useRef, useEffect } from 'react';
import ResumeCarts from './ResumeCarts';



export default function UserMenu() {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("Username");
    const [userId, setUserId] = useState(null);
        
    useEffect(() => {fetch("https://fakestoreapi.com/users")
    .then((response) => response.json())
    .then((json) => setUsers(json))
    },[])

    const tableDisplay = () => {
        if(userId!=null){
            console.log(typeof(userId))
            return <ResumeCarts userId = {userId} />
        }
        return <h3>{console.log(userId)}</h3>
    }
    
    const handleMenuItemClick = (username, userId) => {
        //setSelectedIndex(index);
        setUsername(username);
        setUserId(userId);
        
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

    setOpen(false);
  };

  return (
            <>
                <Button ref={anchorRef} sx={{border:1, width:"500px"}}
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
                
                >
                {username}
                <ArrowDropDownIcon />
                </Button>
            
                <Popper
                    sx={{
                    zIndex: 1,
                    width:"500px"
                    }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                        transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" >
                            {users.map((user) => (
                                <MenuItem
                                key={user.id}                      
                                onClick={() => handleMenuItemClick(user.username, user.id)}
                                >
                                {user.username}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
               {tableDisplay()}
            </>
  );
}