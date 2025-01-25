import "./social_profiles.css";
import Sidenavbar from "~/components/SidenavbarComponent/Sidenavbar";
import Topnavbar from "~/components/TopnavbarComponent/Topnavbar";
import FacebookIcon from "~/images/communication.png";
import InstagramIcon from "~/images/social.png";
import LinkedinIcon from "~/images/linkedin.png";
import YoutubeIcon from "~/images/youtube.png";
import TiktokIcon from "~/images/tik-tok.png";
import TwitterIcon from "~/images/twitter.png";
import PinterestIcon from "~/images/pinterest.png";
import TestImage1 from "~/images/current_user_profile.png";
import { ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface LoaderData{
    appId: string,
    message: string
}

// export async function action({ request }: ActionFunctionArgs ) {

// };

export async function loader(){
    return {
        "appId": process.env.appId || "No app id this is not working",
        "message": "Hello there is this working"
    };
}

export default function SocialProfilesPage(){
    const data = useLoaderData<LoaderData>();
    const openFbLoginDialog = () => {
        const redirectUri = "https://47social-media-remix.vercel.app/oauth";
        const uniqueStateValue = Math.random().toString(36).substring(2, 40);
        const permissions = "pages_events,pages_manage_engagement,pages_manage_metadata,pages_manage_posts,pages_messaging,pages_read_engagement,pages_read_user_content,pages_show_list,publish_video,read_insights,instagram_basic";
        const appId = data.appId;
        const apiUrl = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&state=${uniqueStateValue}&scope=${permissions}&response_type=token`
        window.open(apiUrl, "_blank");
    };

    return(
        <div className="main_outer_social_profiles_page_container">
            <div className="social_profiles_page_container">
                <div className="sidenavbar_container">
                    <Sidenavbar />
                </div>

                <div className="actual_outer_content_container">
                    <div className="topnavbar_container">
                        <Topnavbar />
                    </div>

                    <div className="actual_content_container">
                    
                        <h2>Connect all your favourite social media platforms</h2>

                        <div className="social_profiles_container">
                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={FacebookIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Facebook</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button" onClick={openFbLoginDialog} type="submit">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={InstagramIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Instagram</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button" type="submit">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={LinkedinIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Linkedin</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button" type="submit">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={YoutubeIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Youtube</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={TiktokIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Tiktok</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={TwitterIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Twitter/X</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single_social_profile">
                                <div className="single_social_profile_toppart">
                                    <div className="socail_profile_toppart_leftside">
                                        <img src={PinterestIcon} className="socail_profile_header_image" alt="facebook header social profile" />
                                        <h3 className="social_profile_title">Pinterest</h3>
                                    </div>
                                    <div className="socail_profile_toppart_rightside">
                                        <button className="connect_profile_button">+ Connect</button>
                                    </div>
                                </div>
                                <div className="single_social_profile_bottompart">
                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>

                                    <div className="single_connected_social_profile_container">
                                        <div className="social_profile_bottompart_leftside">
                                            <img src={TestImage1} className="social_profile_user_image" alt="user's account header" />
                                        </div>
                                        <div className="social_profile_bottompart_rightside">
                                            <h3 className="social_profile_users_account_name">Brandon Mahuvava</h3>
                                            <p className="social_profile_current_status">Connected</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}