import "./publish_page.css";
import SmallSidenavbar from "../../components/SmallSidenavbarComponent/SmallSidenavbar";

import FacebookIcon from "~/images/social_profiles_icon_images/facebook.png";
import InstagramIcon from "~/images/social_profiles_icon_images/social.png";
import TiktokIcon from "~/images/social_profiles_icon_images/tik-tok.png";
import YoutubeIcon from "~/images/social_profiles_icon_images/youtube.png";
import LinkedinIcon from "~/images/social_profiles_icon_images/linkedin.png";
import TwitterIcon from "~/images/social_profiles_icon_images/logos.png";

export default function PublishPage(){
    return(
        <div className="main_outer_publish_page_container">
            <div className="publish_page_container">
                <div className="small_sidenavbar_container">
                    <SmallSidenavbar />
                </div>

                <div className="actual_outer_content_container">
                    <div className="channels_outer_container">
                        <h4 className="channels_header">Select channels to upload to:</h4>

                        <div className="channels_container">
                    
                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={FacebookIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Facebook</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Facebook page 1</option>
                                        <option>Facebook page 2</option>
                                        <option>Facebook page 3</option>
                                        <option>Facebook page 4</option>
                                    </select>
                                </div>
                            </div> 

                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={InstagramIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Instagram</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Instagram page 1</option>
                                        <option>Instagram page 2</option>
                                        <option>Instagram page 3</option>
                                        <option>Instagram page 4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={TiktokIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Tiktok</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Tiktok page 1</option>
                                        <option>Tiktok page 2</option>
                                    </select>
                                </div>
                            </div>

                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={YoutubeIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Youtube</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Youtube channel 1</option>
                                        <option>Youtube channel 2</option>
                                        <option>Youtube channel 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={LinkedinIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Linkedin</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Linkedin page 1</option>
                                        <option>Linkedin page 2</option>
                                    </select>
                                </div>
                            </div>

                            <div className="single_channel_container">
                                <div className="single_channel_toppart">
                                    <img src={TwitterIcon} className="social_channel_profile_image" alt="facebook social channel" />
                                    <h5 className="cahnnel_title">Twitter/X</h5>
                                </div>
                                <div className="single_channel_bottompart">
                                    <select className="channel_pages_options">
                                        <option>Twitter account 1</option>
                                        <option>Twitter account 2</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    
                    </div>


                    <div className="actual_upload_outer_container">
                        <h1>Upload new post here &#128513;</h1>

                        <div className="upload_new_post_outer_container">
                            <div className="upload_post_container_toppart">
                                <textarea className="upload_content_area" placeholder="Enter the content you want to upload here"></textarea>
                            </div>

                            <div className="upload_post_container_bottompart">
                                <div className="upload_post_container_bottompart_leftside">
                                    <button className="ai_assistant_btn">AI Assistant</button>
                                </div>

                                <div className="upload_post_container_bottompart_rightside">
                                    <button className="schedule_post_btn">Schedule</button>
                                    <button className="upload_post_btn">Upload</button>
                                </div>
                            </div>
                        </div>

                        <div className="suggested_content_outer_container">
                            <h3 className="suggeted_hashtags_header">Suggested hashtags:</h3>
                            <div className="suggested_hashtags_container">
                                <div className="single_suggested_hashtag">#test_hashtag1</div>
                                <div className="single_suggested_hashtag">#test_hashtag2</div>
                                <div className="single_suggested_hashtag">#test_hashtag3</div>
                                <div className="single_suggested_hashtag">#test_hashtag4</div>
                                <div className="single_suggested_hashtag">#test_hashtag5</div>
                            </div>
                        </div>
                        
                        <div className="suggested_timings_outer_container">
                            <h3 className="suggested_timings_header">Suggested times to post:</h3>
                            <div className="suggested_timings_container">
                                <div className="single_suggested_time">1:30 - 2:30 pm</div>
                                <div className="single_suggested_time">3:30 - 4:30 pm</div>
                                <div className="single_suggested_time">6:30 - 8:30 pm</div>
                                <div className="single_suggested_time">9:30 - 10:30 pm</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}