import React from 'react'
import NotificationsIcon from "@material-ui/icons/Notifications";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";
import FaceIcon from '@material-ui/icons/Face';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const UserInfo = () => {
    return (
        <div className='moret'>
        <div className="moret__in">
             <FaceIcon/>
             <p>Profile</p>
            </div>
            <hr/>
            <div className="moret__in">
               <NotificationsIcon/>
               <p>Notification Preferences</p> 
            </div>
            <hr/>
            <div className="moret__in">
            <LiveHelpIcon/>
            <p>24*7 Cutomer Care</p>
            </div>
            <hr/>
            <div className="moret__in">
               <TrendingUpIcon/>
              <p> Advertises</p>
            </div>
            <hr/>
            <div className="moret__in">
             <GetAppIcon/>
             <p>Download app</p>
            </div>
            <div className="moret__in">
             <ExitToAppIcon/>
             <p>Logout</p>
            </div>
        </div>
    )
}

export default UserInfo;
