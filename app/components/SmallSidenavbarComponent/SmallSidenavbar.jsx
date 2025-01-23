import "./SmallSidenavbar.css";

import CurrentUserProfile from "../../images/current_user_profile.png";
import DashboardIcon from "../../images/sidenavbar_images/menu.png";
import MedialibraryIcon from "../../images/sidenavbar_images/video.png";
import PublishIcon from "../../images/sidenavbar_images/send.png";
import CalendarIcon from "../../images/sidenavbar_images/calendar.png";
import AnalyticsIcon from "../../images/sidenavbar_images/monitor.png";
import SocialProfilesIcon from "../../images/sidenavbar_images/add-user.png";

export default function SmallSidenavbar(){
    return(
        <div class="main_outer_small_sidenavbar_container">
            <div class="small_sidenavbar_container">
                <div class="sidenavbar_toppart">

                    <ul class="navbar">
                        <li>
                            <img src={DashboardIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/dashboard`}>Dashboard</a> */}
                        </li>
                        <li>
                            <img src={MedialibraryIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/media_library`}>Media Library</a> */}
                        </li>
                        <li>
                            <img src={PublishIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/publish`}>Publish</a> */}
                        </li>
                        <li>
                            <img src={CalendarIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/media_library`}>Calendar</a> */}
                        </li>
                        <li>
                            <img src={AnalyticsIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/media_library`}>Analytics</a> */}
                        </li>
                    </ul>
                </div>

                <div class="sidenavbar_bottompart">
                    <ul class="bottom_navbar_links">
                        <li>
                            <img src={SocialProfilesIcon} class="navbar_link_icon" alt="navbar icon profile" />
                            {/* <a href={`/app/media_library`}>Social account</a> */}
                        </li>
                    </ul>

                    <div class="current_user_container">
                        <div class="current_user_leftside_container">
                            <img src={CurrentUserProfile} class="current_user_profile_img" alt="current users profile" />
                        </div>
                        <div class="current_user_rightside_container">
                            {/* <a href="/" class="current_user_username">@test_username1</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}