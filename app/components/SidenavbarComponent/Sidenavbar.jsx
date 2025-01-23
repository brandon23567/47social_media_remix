import "./Sidenavbar.css";
import { Link } from "@remix-run/react";

import TestHeaderImage1 from "../../images/current_user_profile.png";
import DashboardIcon from "../../images/sidenavbar_images/menu.png";
import MedialibraryIcon from "../../images/sidenavbar_images/video.png";
import PublishIcon from "../../images/sidenavbar_images/send.png";
import CalendarIcon from "../../images/sidenavbar_images/calendar.png";
import AnalyticsIcon from "../../images/sidenavbar_images/monitor.png";
import SocialProfilesIcon from "../../images/sidenavbar_images/add-user.png";

export default function Sidenavbar() {
  return (
	
    <div class="main_outer_sidenavbar_container">

		<div class="sidenavbar_container">
			<div class="sidenavbar_toppart">
				<div class="logo_container">
					<h2 class="logo">47SocialMedia</h2>
				</div>

				<ul class="navbar">
					<li>
						<img
							src={DashboardIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/dashboard`}>Dashboard</Link>
					</li>
					<li>
						<img
							src={MedialibraryIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/media_library`}>Media Library</Link>
					</li>
					<li>
						<img
							src={PublishIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/publish`}>Publish</Link>
					</li>
					<li>
						<img
							src={CalendarIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/content_calendar`}>Calendar</Link>
					</li>
					<li>
						<img
							src={AnalyticsIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/analytics`}>Analytics</Link>
					</li>
				</ul>
			</div>

			<div class="sidenavbar_bottompart">
				<ul class="bottom_navbar_links">
					<li>
						<img
							src={SocialProfilesIcon}
							class="navbar_link_icon"
							alt="navbar icon profile"
						/>
						<Link to={`/social_profiles`}>Social account</Link>
					</li>
				</ul>

				<div class="current_user_container">
					<div class="current_user_leftside_container">
						<img
							src={TestHeaderImage1}
							class="current_user_profile_img"
							alt="current users profile"
						/>
					</div>
					<div class="current_user_rightside_container">
						<Link to="/" class="current_user_username">
							@test_username1
						</Link>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}
