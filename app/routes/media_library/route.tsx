import "./media_library.css";
import Sidenavbar from "~/components/SidenavbarComponent/Sidenavbar";
import Topnavbar from "~/components/TopnavbarComponent/Topnavbar";
import ListViewIcon from "../../images/list.png";
import GridViewIcon from "../../images/layout.png"; 

import TestImage1 from "../../images/test_media_library_images/test_image1 (1).jpg";
import TestImage2 from "~/images/test_media_library_images/test_image1 (1).png";
import TestImage3 from "~/images/test_media_library_images/test_image1 (2).jpg";
import TestImage4 from "~/images/test_media_library_images/test_image1 (2).png";
import TestImage5 from "~/images/test_media_library_images/test_image1 (3).png";

export default function MediaLibraryPage(){
    return(
        <div className="main_outer_media_library_page_container">
            <div className="media_library_page_container">
                <div className="sidenavbar_container">
                    <Sidenavbar />
                </div>

                <div className="actual_outer_content_container">
                    <div className="topnavbar_container">
                        <Topnavbar />
                    </div>

                    <div className="actual_content_container">

                        <h2> Media Library</h2>

                        <div className="extra_functionality_btns_container">
                            <div className="extra_btns_leftside">
                                <button className="add_new_idea_btn">+ Upload File</button>
                            </div>

                            <div className="extra_btns_rightside">
                                <button className="list_view_btn">
                                    List View
                                    <img src={ListViewIcon} className="list_view_icon_btn" alt="list view btn" />
                                </button>
                                <button className="grid_view_btn">
                                    Grid View
                                    <img src={GridViewIcon} className="grid_view_icon_btn" alt="grid view btn" />
                                </button>
                            </div>
                        </div>

                        <div className="upload_files_container">
                            <div className="single_file_container">
                                <div className="single_file_toppart">
                                    <img src={TestImage1} className="uploaded_media_library_image" alt="media library content" />
                                </div>
                                <div className="single_file_bottompart">
                                    <h4 className="file_title">This is the title of the file</h4>
                                    <p className="file_date_uploaded">date uploaded: 22/10/2024</p>
                                </div>
                            </div>

                            <div className="single_file_container">
                                <div className="single_file_toppart">
                                    <img src={TestImage2} className="uploaded_media_library_image" alt="media library content" />
                                </div>
                                <div className="single_file_bottompart">
                                    <h4 className="file_title">This is the title of the file</h4>
                                    <p className="file_date_uploaded">date uploaded: 22/10/2024</p>
                                </div>
                            </div>

                            <div className="single_file_container">
                                <div className="single_file_toppart">
                                    <img src={TestImage3} className="uploaded_media_library_image" alt="media library content" />
                                </div>
                                <div className="single_file_bottompart">
                                    <h4 className="file_title">This is the title of the file</h4>
                                    <p className="file_date_uploaded">date uploaded: 22/10/2024</p>
                                </div>
                            </div>

                            <div className="single_file_container">
                                <div className="single_file_toppart">
                                    <img src={TestImage4} className="uploaded_media_library_image" alt="media library content" />
                                </div>
                                <div className="single_file_bottompart">
                                    <h4 className="file_title">This is the title of the file</h4>
                                    <p className="file_date_uploaded">date uploaded: 22/10/2024</p>

                                </div>
                            </div>

                            <div className="single_file_container">
                                <div className="single_file_toppart">
                                    <img src={TestImage5} className="uploaded_media_library_image" alt="media library content" />
                                </div>
                                <div className="single_file_bottompart">
                                    <h4 className="file_title">This is the title of the file</h4>
                                    <p className="file_date_uploaded">date uploaded: 22/10/2024</p>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}