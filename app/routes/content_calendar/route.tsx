import "./content_calendar.css";
import CurrentUserProfile from "~/images/current_profile_2.png";
import TestImage1 from "~/images/test_media_library_images/test_image1 (1).jpg";
import NextMonthIcon from "~/images/next.png";
import PrevMonthIcon from "~/images/arrow.png";
import NotificationsIcon from "~/images/notification.png";
import SettingsIcon from "~/images/settings-gear-icon.png";
import OtherAppsIcon from "~/images/list.png";
import SmallSidenavbar from "~/components/SmallSidenavbarComponent/SmallSidenavbar";

export default function ContentCalendarPage(){
    return(
        <div className="main_outer_content_calendar_page_container">
            <div className="content_calendar_page_container">
                <div className="small_sidenavbar_container">
                    <SmallSidenavbar />
                </div>

                <div className="actual_outer_content_container">

                    <div className="upcoming_posts_outer_container">
                        <h4 className="upcoming_posts_header">Upcoming posts...</h4>

                        <div className="upcoming_posts_container">
                            <div className="platform_selection_container">
                                <select>
                                    <option>Facebook</option>
                                    <option>Instagram</option>
                                    <option>Linkedin</option>
                                    <option>Youtube</option>
                                    <option>Tiktok</option>
                                    <option>Twitter/X</option>
                                </select>
                            </div>

                            <div className="scheduled_posts_container">
                                <div className="single_post">
                                    <div className="single_post_toppart">
                                        <div className="post_left_side">
                                            <img src={CurrentUserProfile} className="current_user_profile_img" alt="users profile pic" />
                                        </div>
                                        <div className="post_right_side">
                                            <div className="right_side_toppart">name_of_current_page</div>
                                            <div className="right_side_bottompart">Just Now</div>
                                        </div>
                                    </div>

                                    <div className="single_post_bottompart">
                                        <div className="single_post_content">
                                            This is the actual content of the post for the platforms that it atleast looks nice
                                            and presentable in the ui design of the app.
                                        </div>
                                        <div className="single_post_media_container">
                                            <img src={TestImage1} className="single_post_media_image" alt="this is the media content of the scheduled post" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_post">
                                    <div className="single_post_toppart">
                                        <div className="post_left_side">
                                            <img src={CurrentUserProfile} className="current_user_profile_img" alt="users profile pic" />
                                        </div>
                                        <div className="post_right_side">
                                            <div className="right_side_toppart">name_of_current_page</div>
                                            <div className="right_side_bottompart">Just Now</div>
                                        </div>
                                    </div>

                                    <div className="single_post_bottompart">
                                        <div className="single_post_content">
                                            This is the actual content of the post for the platforms that it atleast looks nice
                                            and presentable in the ui design of the app.
                                        </div>
                                        <div className="single_post_media_container">
                                            <img src={TestImage1} className="single_post_media_image" alt="this is the media content of the scheduled post" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_post">
                                    <div className="single_post_toppart">
                                        <div className="post_left_side">
                                            <img src={CurrentUserProfile} className="current_user_profile_img" alt="users profile pic" />
                                        </div>
                                        <div className="post_right_side">
                                            <div className="right_side_toppart">name_of_current_page</div>
                                            <div className="right_side_bottompart">Just Now</div>
                                        </div>
                                    </div>

                                    <div className="single_post_bottompart">
                                        <div className="single_post_content">
                                            This is the actual content of the post for the platforms that it atleast looks nice
                                            and presentable in the ui design of the app.
                                        </div>
                                        <div className="single_post_media_container">
                                            <img src={TestImage1} className="single_post_media_image" alt="this is the media content of the scheduled post" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_post">
                                    <div className="single_post_toppart">
                                        <div className="post_left_side">
                                            <img src={CurrentUserProfile} className="current_user_profile_img" alt="users profile pic" />
                                        </div>
                                        <div className="post_right_side">
                                            <div className="right_side_toppart">name_of_current_page</div>
                                            <div className="right_side_bottompart">Just Now</div>
                                        </div>
                                    </div>

                                    <div className="single_post_bottompart">
                                        <div className="single_post_content">
                                            This is the actual content of the post for the platforms that it atleast looks nice
                                            and presentable in the ui design of the app.
                                        </div>
                                        <div className="single_post_media_container">
                                            <img src={TestImage1} className="single_post_media_image" alt="this is the media content of the scheduled post" />
                                        </div>
                                    </div>
                                </div>

                                <div className="single_post">
                                    <div className="single_post_toppart">
                                        <div className="post_left_side">
                                            <img src={CurrentUserProfile} className="current_user_profile_img" alt="users profile pic" />
                                        </div>
                                        <div className="post_right_side">
                                            <div className="right_side_toppart">name_of_current_page</div>
                                            <div className="right_side_bottompart">Just Now</div>
                                        </div>
                                    </div>

                                    <div className="single_post_bottompart">
                                        <div className="single_post_content">
                                            This is the actual content of the post for the platforms that it atleast looks nice
                                            and presentable in the ui design of the app.
                                        </div>
                                        <div className="single_post_media_container">
                                            <img src={TestImage1} className="single_post_media_image" alt="this is the media content of the scheduled post" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="actual_big_calendar_outer_container">

                        <div className="big_calendar_container_outisde">
                            <div className="big_calendar_toppart_container">
                                <div className="toppart_container_leftside">
                                    <div className="current_month_container">
                                        <h3 className="current_big_calendar_month">January 2025</h3>
                                    </div>

                                    <div className="month_toggle_container">
                                        <div className="previous_month_container">
                                            <img src={PrevMonthIcon} className="prev_month_icon_image" alt="previous month" />
                                        </div>
                                        <div className="next_month_container">
                                            <img src={NextMonthIcon} className="next_month_icon_image" alt="next month" />
                                        </div>
                                    </div>
                                </div>

                                <div className="toppart_container_rightside">

                                    <div className="calendar_view_container">
                                        <select>
                                            <option>Month</option>
                                            <option>Week</option>
                                            <option>Day</option>
                                            <option>Year</option>
                                            <option>Schedule</option>
                                        </select>
                                    </div>

                                    <div className="notifications_icon_cpntainer">
                                        <img src={NotificationsIcon} className="notifications_icon_image" alt="user notifcations" />
                                    </div>

                                    <div className="settings_icon_container">
                                        <img src={SettingsIcon} className="settings_icon_image" alt="user settings" />
                                    </div>

                                    <div className="other_apps_icon_container">
                                        <img src={OtherAppsIcon} className="other_apps_icon_image" alt="user other apps" />
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="big_calendar_bottompart_container">
                                <div className="weekdays_container">
                                    <div className="single_weekday">Sun</div>
                                    <div className="single_weekday">Mon</div>
                                    <div className="single_weekday">Tue</div>
                                    <div className="single_weekday">Wed</div>
                                    <div className="single_weekday">Thur</div>
                                    <div className="single_weekday">Fri</div>
                                    <div className="single_weekday">Sat</div>
                                </div>

                                <div className="actual_days_container">
                                    <div className="single_day_container">1</div>
                                    <div className="single_day_container">2</div>
                                    <div className="single_day_container">3</div>
                                    <div className="single_day_container">4</div>
                                    <div className="single_day_container">5</div>
                                    <div className="single_day_container">6</div>
                                    <div className="single_day_container">7</div>
                                    <div className="single_day_container">8</div>
                                    <div className="single_day_container">9</div>
                                    <div className="single_day_container">10</div>
                                    <div className="single_day_container">11</div>
                                    <div className="single_day_container">12</div>
                                    <div className="single_day_container">13</div>
                                    <div className="single_day_container">14</div>
                                    <div className="single_day_container">15</div>
                                    <div className="single_day_container">16</div>
                                    <div className="single_day_container">17</div>
                                    <div className="single_day_container">18</div>
                                    <div className="single_day_container">19</div>
                                    <div className="single_day_container">20</div>
                                    <div className="single_day_container">21</div>
                                    <div className="single_day_container">22</div>
                                    <div className="single_day_container">23</div>
                                    <div className="single_day_container">24</div>
                                    <div className="single_day_container">25</div>
                                    <div className="single_day_container">26</div>
                                    <div className="single_day_container">27</div>
                                    <div className="single_day_container">28</div>
                                    <div className="single_day_container">29</div>
                                    <div className="single_day_container">30</div>
                                    <div className="single_day_container">31</div>
                                </div>
                            </div>

                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    )
};