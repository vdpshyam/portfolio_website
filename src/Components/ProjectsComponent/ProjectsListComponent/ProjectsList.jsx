import React from 'react';

import ProjectsListCSS from './ProjectsList.module.css';

import MoveLeftIcon from '../../../Assets/Icons/moveleft3.png';
import MoveRightIcon from '../../../Assets/Icons/moveright3.png';

import P1n1dashboard1 from '../../../Assets/Images/Projects/ECommerce/P1n1dashboard1.png';
import P1n2dashboard1 from '../../../Assets/Images/Projects/ECommerce/P1n2dashboard1.png';
import P1n3search1 from '../../../Assets/Images/Projects/ECommerce/P1n3search1.png';
import P1n4filters1 from '../../../Assets/Images/Projects/ECommerce/P1n4filters1.png';
import P1n5orders from '../../../Assets/Images/Projects/ECommerce/P1n5orders.png';
import P1n6fav1 from '../../../Assets/Images/Projects/ECommerce/P1n6fav1.png';
import P1n7profset1 from '../../../Assets/Images/Projects/ECommerce/P1n7profset1.png';
import P1n8proddet1 from '../../../Assets/Images/Projects/ECommerce/P1n8proddet1.png';
import P1n9listeditems from '../../../Assets/Images/Projects/ECommerce/P1n9listeditems.png';
import P1n10reviews from '../../../Assets/Images/Projects/ECommerce/P1n10reviews.png';

import P2n1login1 from '../../../Assets/Images/Projects/SalesForecating/P2n1login1.png';
import P2n2input1 from '../../../Assets/Images/Projects/SalesForecating/P2n2input1.png';
import P2n3input2 from '../../../Assets/Images/Projects/SalesForecating/P2n3input2.png';
import P2n4input3 from '../../../Assets/Images/Projects/SalesForecating/P2n4input3.png';
import P2n5res1 from '../../../Assets/Images/Projects/SalesForecating/P2n5res1.png';
import P2n6res2 from '../../../Assets/Images/Projects/SalesForecating/P2n6res2.png';
import P2n7error1 from '../../../Assets/Images/Projects/SalesForecating/P2n7error1.png';

function ProjectsList({onMouseLeaveHandlerForChangingCustomCursor, onMouseEnterHandlerForChangingCustomCursor}) {

    const projectsList = [{
        projectId: 1,
        title: "E-Commerce B2B Mobile Application",
        projectDescription:
            <div>
                <p style={{ margin: 0 }}>This app has two types of users:</p>
                <ol style={{ margin: 0 }}>
                    <li style={{ margin: 0 }}> <p> <b>Seller: </b> Farmer who lists his cultivated product.  </p></li>
                    <li style={{ margin: 0 }}> <p><b>Buyer: </b> Wholesaler who buys the products from farmers. </p></li>
                </ol>
            </div>,
        techStack: <div>
            <table>
                <tbody>
                    <tr>
                        <td> <p className={ProjectsListCSS.projectTechStackCategory}>Frontend</p></td>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>:</p></td>
                        <td style={{ fontFamily: "Cascadia Code" }}><p>Flutter</p></td>
                    </tr>
                    <tr>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>Backend</p></td>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>:</p></td>
                        <td style={{ fontFamily: "Cascadia Code" }}><p>NodeJS</p></td>
                    </tr>
                    <tr>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>Database </p></td>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>:</p></td>
                        <td style={{ fontFamily: "Cascadia Code" }}><p>MongoDB</p></td>
                    </tr>
                </tbody>
            </table>
        </div>,
        projectImagesAndDesc: [{
            imageAndDescId: 1,
            image: P1n1dashboard1, imageDescTitle: "New user dasboard", imageDescription: "This shows summary of the sales made, etc. This screen is shown when the user is new. Common for both types of users, with minor changes. "
        }, {
            imageAndDescId: 2,
            image: P1n2dashboard1, imageDescTitle: "User dasboard", imageDescription: "This shows summary of the sales made, etc. Common for both types of users, with minor changes."
        }, {
            imageAndDescId: 3,
            image: P1n3search1, imageDescTitle: "Search Screen", imageDescription: "For searching the products. Buyer specific. "
        }, {
            imageAndDescId: 4,
            image: P1n4filters1, imageDescTitle: "Sort and filter options in search page", imageDescription: "For filtering the products found in the search results. Buyer specific. "
        }, {
            imageAndDescId: 5,
            image: P1n5orders, imageDescTitle: "Orders screen", imageDescription: "Shows the orders categorized by their porgress. Common for both users, with minor changes."
        }, {
            imageAndDescId: 6,
            image: P1n6fav1, imageDescTitle: "Favourites screen", imageDescription: "Shows the favorite products for the buyer. Buyer specific. "
        },
        {
            imageAndDescId: 7,
            image: P1n7profset1, imageDescTitle: "Profile settings", imageDescription: "Shows the specific user details and also allows them to edit them. Common for both users."
        },
        {
            imageAndDescId: 8,
            image: P1n8proddet1, imageDescTitle: "Product details screen", imageDescription: "Shows the details of a product. The seller could also edit the details of the product. Common for both users, with minor changes."
        },
        {
            imageAndDescId: 9,
            image: P1n9listeditems, imageDescTitle: "Listed Items page", imageDescription: "Shows the products listed by the seller. Seller specific."
        },
        {
            imageAndDescId: 10,
            image: P1n10reviews, imageDescTitle: "Personal reviews screen", imageDescription: "Shows the reviews posted for a user and also the reviews posted by the user. The user could also reply to the reviews posted for him/her and could also delete the reviews posted by him/her. Common for both users."
        },],
    }, {
        projectId: 2,
        title: "Sales Forcasting Services.",
        projectDescription: <p> This is a web app for predicting the sales for any company. The Machine Learning algorithm used here is SARIMA, which stands for Seasonal AutoRegressive Integrated Moving Average. It is an extension of ARIMA that can account for seasonal patterns in the data.</p>,
        techStack: <div>
            <table>
                <tbody>
                    <tr>
                        <td> <p className={ProjectsListCSS.projectTechStackCategory}>Frontend</p></td>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>:</p></td>
                        <td style={{ fontFamily: "Cascadia Code" }}><p>Angular</p></td>
                    </tr>
                    <tr>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>Backend</p></td>
                        <td><p className={ProjectsListCSS.projectTechStackCategory}>:</p></td>
                        <td style={{ fontFamily: "Cascadia Code" }}><p>Flask</p></td>
                    </tr>
                </tbody>
            </table>
        </div>,
        projectImagesAndDesc: [{
            imageAndDescId: 1,
            image: P2n1login1, imageDescTitle: "Login Page", imageDescription: "Login Page/Home Page for the website."
        }, {
            imageAndDescId: 2,
            image: P2n2input1, imageDescTitle: "Input Page - Empty", imageDescription: "User enters the required time duration and uploads the sales dataset in this page."
        }, {
            imageAndDescId: 3,
            image: P2n3input2, imageDescTitle: "Input Page - Empty", imageDescription: "The available intervals for selection are Days, Weeks, Months and Years."
        },
        {
            imageAndDescId: 4,
            image: P2n4input3, imageDescTitle: "Input Page - With filled data", imageDescription: "Now in the above example, the \"ds mod.csv\" is used for training the ML model and the results will be shown for 9 months from the last date entry in the dataset."
        },
        {
            imageAndDescId: 5,
            image: P2n5res1, imageDescTitle: "Result Page", imageDescription: "The prediction results are shown in form of graphs."
        },
        {
            imageAndDescId: 6,
            image: P2n6res2, imageDescTitle: "Result Page", imageDescription: "The main evaluation stats of the ML model are also shown, i.e., MSE, RMSE, MAPE. And the users could also download the predicted results in the form of a CSV."
        },
        {
            imageAndDescId: 7,
            image: P2n7error1, imageDescTitle: "Error Page", imageDescription: "The 404 Error Page."
        },],
    },];

    /* Project 0 */
    const [activeIndex0, setActiveIndex0] = React.useState(0);
    function updateIndex0(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= projectsList[0]["projectImagesAndDesc"].length) {
            newIndex = projectsList[0]["projectImagesAndDesc"].length - 1;
        }
        setActiveIndex0(newIndex);
    }

    /* Project 1 */
    const [activeIndex1, setActiveIndex1] = React.useState(0);
    function updateIndex1(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= projectsList[1]["projectImagesAndDesc"].length) {
            newIndex = projectsList[1]["projectImagesAndDesc"].length - 1;
        }
        setActiveIndex1(newIndex);
    }

    function onMouseEnterHandler(){
        onMouseEnterHandlerForChangingCustomCursor();
    }

    function onMouseLeaveHandler(){
        onMouseLeaveHandlerForChangingCustomCursor();
    }

    return (
        <div className={ProjectsListCSS.projectsListDiv}>
            {/* projectId 1 */}
            <div className={ProjectsListCSS.singleProjectDiv}>
                <div className={ProjectsListCSS.verticalLine}>
                    <div className={ProjectsListCSS.projectNumberIndicator}>
                        1
                    </div>
                </div>
                <div>
                    <div className={ProjectsListCSS.carouselItemDiv}>
                        <p className={ProjectsListCSS.projectTitle}>{projectsList[0]["title"]}</p>
                        <span className={ProjectsListCSS.projectDesc}>{projectsList[0]["projectDescription"]}</span>
                        <p className={ProjectsListCSS.projectTechStackTitle}>Tech Stack used: </p>
                        <span className={ProjectsListCSS.projectTechStack}>{projectsList[0]["techStack"]}</span>
                        <p className={ProjectsListCSS.projectHintText}>Have a look at some of the snapshots of the project below ...</p>
                        <div className={ProjectsListCSS.inner} style={{ transform: "translate(-" + (activeIndex0 * 100) + "%)" }} >
                            {projectsList[0]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                // console.log("imageAndDescId : " + imageAndDesc.imageAndDescId);
                                return <div className={ProjectsListCSS.carouselItemSlideDiv} key={index}>
                                    <div className={ProjectsListCSS.carouselItemSlideContentDiv}>
                                        <p className={ProjectsListCSS.projectImageDescTitle}>{imageAndDesc["imageDescTitle"]}</p>
                                        <div className={ProjectsListCSS.carouselItemSlideContentImgDescDiv}>
                                            <div className={ProjectsListCSS.carouselItemSlideContentImgDescImgDiv}>
                                                <img className={ProjectsListCSS.carouselItemP1Img} src={imageAndDesc["image"]} alt='Project Snapshot'></img>
                                            </div>
                                            <div className={ProjectsListCSS.carouselItemSlideContentImgDescDescDiv}>
                                                <p>{imageAndDesc["imageDescription"]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className={ProjectsListCSS.carouselItemBtn}>
                            <button className={ProjectsListCSS.carouselItemNavBtnPrev} onClick={() => {
                                updateIndex0(activeIndex0 - 1);
                            }} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                <img src={MoveLeftIcon} alt="Move left" className={ProjectsListCSS.carouselItemNavBtnPrevIcon} />
                            </button>
                            <div className={ProjectsListCSS.currentCarouselItemIndicators}>
                                {projectsList[0]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                    return (
                                        <div className={ProjectsListCSS.currentCarouselItemIndicatorBtn} key={index} onClick={() => {
                                            updateIndex0(index);
                                        }}>
                                            <button className={index === activeIndex0 ? ProjectsListCSS.currentCarouselItemIndicatorsBtnActive : ProjectsListCSS.currentCarouselItemIndicatorsBtn} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                                <div>
                                                    {index + 1}
                                                </div>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className={ProjectsListCSS.carouselItemNavBtnNext} onClick={() => {
                                updateIndex0(activeIndex0 + 1);
                            }} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                <img src={MoveRightIcon} alt="Move right" className={ProjectsListCSS.carouselItemNavBtnNextIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* projectId 2 */}
            <div className={ProjectsListCSS.singleProjectDiv}>
                <div className={ProjectsListCSS.verticalLine}>
                    <div className={ProjectsListCSS.projectNumberIndicator}>
                        2
                    </div>
                </div>
                <div>
                    <div className={ProjectsListCSS.carouselItemDiv}>
                        <p className={ProjectsListCSS.projectTitle}>{projectsList[1]["title"]}</p>
                        <span className={ProjectsListCSS.projectDesc}>{projectsList[1]["projectDescription"]}</span>
                        <p className={ProjectsListCSS.projectTechStackTitle}>Tech Stack used: </p>
                        <span className={ProjectsListCSS.projectTechStack}>{projectsList[1]["techStack"]}</span>
                        <p className={ProjectsListCSS.projectHintText}>Have a look at some of the snapshots of the project below ...</p>
                        <div className={ProjectsListCSS.inner} style={{ transform: "translate(-" + (activeIndex1 * 100) + "%)" }} >
                            {projectsList[1]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                // console.log("imageAndDescId : " + imageAndDesc.imageAndDescId);
                                return <div className={ProjectsListCSS.carouselItemSlideDiv} key={index}>
                                    <div className={ProjectsListCSS.carouselItemSlideContentDiv}>
                                        <p className={ProjectsListCSS.projectImageDescTitle}>{imageAndDesc["imageDescTitle"]}</p>
                                        <div className={ProjectsListCSS.carouselItemSlideContentImgDescDivP2}>
                                            <div className={ProjectsListCSS.carouselItemSlideContentImgDescImgDiv}>
                                                <img className={ProjectsListCSS.carouselItemP2Img} src={imageAndDesc["image"]} alt='Project Snapshot'></img>
                                            </div>
                                            <div className={ProjectsListCSS.carouselItemP2SlideContentImgDescDescDiv}>
                                                <p>{imageAndDesc["imageDescription"]}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className={ProjectsListCSS.carouselItemBtn}>
                            <button className={ProjectsListCSS.carouselItemNavBtnPrev} onClick={() => {
                                updateIndex1(activeIndex1 - 1);
                            }} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                <img src={MoveLeftIcon} alt="Move left" className={ProjectsListCSS.carouselItemNavBtnPrevIcon} />
                            </button>
                            <div className={ProjectsListCSS.currentCarouselItemIndicators}>
                                {projectsList[1]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                    return (
                                        <div className={ProjectsListCSS.currentCarouselItemIndicatorBtn} key={index} onClick={() => {
                                            updateIndex1(index);
                                        }}>
                                            <button className={index === activeIndex1 ? ProjectsListCSS.currentCarouselItemIndicatorsBtnActive : ProjectsListCSS.currentCarouselItemIndicatorsBtn} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                                {index + 1}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className={ProjectsListCSS.carouselItemNavBtnNext} onClick={() => {
                                updateIndex1(activeIndex1 + 1);
                            }} onMouseEnter={() => onMouseEnterHandler()} onMouseLeave={() => onMouseLeaveHandler()}>
                                <img src={MoveRightIcon} alt="Move right" className={ProjectsListCSS.carouselItemNavBtnNextIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProjectsList;