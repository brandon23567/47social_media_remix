import "./dashboard_page.css";

import ListViewIcon from "../../images/list.png";
import GridViewIcon from "../../images/layout.png"; 
import Sidenavbar from "../../components/SidenavbarComponent/Sidenavbar";
import Topnavbar from "../../components/TopnavbarComponent/Topnavbar";

export default function DashboardPage(){
    return(
        <div className="main_outer_dashboard_page_container">
            <div className="dashboard_page_container">
                <div className="sidenavbar_container">
                    <Sidenavbar />
                </div>

                <div className="actual_outer_content_container">
                    <div className="topnavbar_container">
                        <Topnavbar />
                    </div>

                    <div className="actual_content_container">

                        <h2>Your ideas board</h2>

                        <div className="extra_functionality_btns_container">
                            <div className="extra_btns_leftside">
                                <button className="add_new_idea_btn">+ New Idea</button>
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

                        <div className="user_content_ideas_container">
                            <div className="rough_ideas_container">
                                <h4 className="container_header_title">Rough ideas</h4>
                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="concept_ideas_container">
                                <h4 className="container_header_title">Concept ideas</h4>
                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ready_ideas_container">
                                <h4 className="container_header_title">Ready to publish ideas</h4>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single_idea_container">
                                    <div className="single_idea_toppart">
                                        <h4 className="idea_title">
                                            This is the title of the header idea
                                        </h4>
                                    </div>
                                    <div className="single_idea_bottompart">
                                        <p className="idea_description">
                                            This is a short description fo the overall idea which the user has 
                                            brain stormed. I will add functionality to add images to the header 
                                            so i looks nice and clean
                                        </p>

                                        <div className="idea_categories_container">
                                            <div className="single_category">Category 1</div>
                                            <div className="single_category">Category 2</div>
                                            <div className="single_category">Category 3</div>
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