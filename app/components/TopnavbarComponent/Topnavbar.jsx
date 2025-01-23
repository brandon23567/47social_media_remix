import "./Topnavbar.css";

import NotificationsIcon from "../../images/notification.png";
import SettingsIcon from "../../images/settings-gear-icon.png";
import OtherAppsIcon from "../../images/list.png";

export default function Topnavbar(){
    return(
        <div class="main_outer_topnavbar_container">
            <div class="topnavbar_container">
                <div class="topnavbar_leftisde_container">
                    <input type="text" placeholder="Search for your ideas here..." />
                </div>

                <div class="topnavbar_rightside_container">
                    <div class="notfications_icon_container">
                        <img src={NotificationsIcon} class="notifications_icon_image" alt="notifications of user" />
                    </div>

                    <div class="settings_icon_container">
                        <img src={SettingsIcon} class="settings_icon_image" alt="settings of user" />
                    </div>

                    <div class="other_apps_icon_container">
                        <img src={OtherAppsIcon} class="other_apps_icon_image" alt="other apps of user" />
                    </div>
                </div>
            </div>
        </div>
    )
}