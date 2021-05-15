import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import {Tooltip} from "@material-ui/core";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hamburger from "../../components/hamburger";
import './drawer.css';
import {connect} from "react-redux";
import {setActiveRoute} from "../../features/actions/activeRoute";

function FixedDrawer({links, ...props}) {
    const [open, setOpen] = React.useState(false);
    const {dispatch} = props;
    const handleDrawerOpen = (val) => {
        console.log("open", open)
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleScreenChange = (screen) => {
        if (typeof screen == "string")  {
            dispatch(setActiveRoute(screen));
        }
    }
    return (
        <div className="drawer-root">
            <Drawer
                variant="permanent"
                className={`drawer drawer-${open ? 'open' : 'close'}`}
                classes={{
                    paper: `drawer-${open ? 'open' : 'close'}`,
                }}
            >
                <div className="drawer-toolbar">
                    {
                        open ?  <IconButton onClick={handleDrawerClose} className="drawer-menu-button">
                                    <ChevronLeftIcon />
                                </IconButton>
                            :  <Hamburger className="drawer-menu-button" onClick={handleDrawerOpen} permanent/>
                    }
                </div>
                <Divider />
                <List>
                    {links.map((l, index) => (
                        <ListItem button key={index} onClick={() => handleScreenChange(l.screen)}>
                            {
                                open ?
                                    (l.renderIcon && <ListItemIcon>{l.renderIcon()}</ListItemIcon>)
                                    :
                                    (l.renderIcon && <Tooltip title={l.name} placement="right-end"><ListItemIcon>{l.renderIcon()}</ListItemIcon></Tooltip>)


                            }
                            <ListItemText primary={l.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <section className="drawer-children">
                <div className="drawer-toolbar"/>
                {props.children}
            </section>
        </div>
    );
}

export default connect()(FixedDrawer);
