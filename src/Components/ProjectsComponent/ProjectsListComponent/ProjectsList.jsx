import React from 'react';
import ProjectsListCSS from './ProjectsList.module.css';
// import ProjectsPageSingleProjectCarousel from '../ProjectsPageSingleProjectCarousel/ProjectsPageSingleProjectCarousel';
// import ProjectsPageSingleProjectCarouselCSS from './ProjectsPageSingleProjectCarousel.module.css';
import ProjectsPageSingleProjectCarouselItem from '../ProjectsPageSingleProjectCarouselItem/ProjectsPageSingleProjectCarouselItem';

function ProjectsList() {

    const projectsList = [{
        projectId: 1,
        title: "E-Commerce B2B Mobile Application",
        projectDescription: "This app has two types of users. 1.	Seller: Farmer who lists his cultivated product. 2.	Buyer: Wholesaler who buys the products from farmers",
        techStack: [{ "Frontend": "Flutter" }, { "Backend": "NodeJS" }, { "Database": "MongoDB" }],
        projectImagesAndDesc: [{
            imageAndDescId: 1,
            image: "image1 E-Commerce B2B Mobile Application", imageDescTitle: "Login screen", imageDescription: "image1 description E-Commerce B2B Mobile Application"
        }, {
            imageAndDescId: 2,
            image: "image2 E-Commerce B2B Mobile Application", imageDescTitle: "Orders screen", imageDescription: "image2 description E-Commerce B2B Mobile Application"
        }, {
            imageAndDescId: 3,
            image: "image3 E-Commerce B2B Mobile Application", imageDescTitle: "Search Screen", imageDescription: "image3 description E-Commerce B2B Mobile Application"
        },],
    }, {
        projectId: 2,
        title: "Sales Forcasting Services.",
        projectDescription: "Good project",
        techStack: [{ "Frontend": "Angular" }, { "Backend": "Flask" },],
        projectImagesAndDesc: [{
            imageAndDescId: 1,
            image: "image1 Sales Forcasting Services.", imageDescTitle: "Login screen", imageDescription: "image1 description Sales Forcasting Services."
        }, {
            imageAndDescId: 2,
            image: "image2 Sales Forcasting Services.", imageDescTitle: "orders screen", imageDescription: "image2 description Sales Forcasting Services."
        }, {
            imageAndDescId: 3,
            image: "image3 Sales Forcasting Services.", imageDescTitle: "searcvh screen", imageDescription: "image3 description Sales Forcasting Services."
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
                        <p>{projectsList[0]["title"]}</p>
                        <div className={ProjectsListCSS.inner} style={{ transform: "translate(-" + (activeIndex0 * 100) + "%)" }} >
                            {projectsList[0]["projectImagesAndDesc"].map((imageAndDesc) => {
                                // console.log("imageAndDescId : " + imageAndDesc.imageAndDescId);
                                return <ProjectsPageSingleProjectCarouselItem imageAndDesc={imageAndDesc} key={imageAndDesc.imageAndDescId} />
                            })}
                        </div>
                        <div className={ProjectsListCSS.carouselItemBtn}>
                            <button onClick={() => {
                                updateIndex0(activeIndex0 - 1);
                            }}>
                                arrow left
                            </button>
                            <div className={ProjectsListCSS.currentCarouselItemIndicators}>
                                {projectsList[0]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                    return (
                                        <div className={ProjectsListCSS.currentCarouselItemIndicatorBtn} key={index} onClick={() => {
                                            updateIndex0(index);
                                        }}>
                                            <button>radio</button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={() => {
                                updateIndex0(activeIndex0 + 1);
                            }}>
                                arrow right
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
                        <p>{projectsList[1]["title"]}</p>
                        <div className={ProjectsListCSS.inner} style={{ transform: "translate(-" + (activeIndex1 * 100) + "%)" }} >
                            {projectsList[1]["projectImagesAndDesc"].map((imageAndDesc) => {
                                // console.log("imageAndDescId : " + imageAndDesc.imageAndDescId);
                                return <ProjectsPageSingleProjectCarouselItem imageAndDesc={imageAndDesc} key={imageAndDesc.imageAndDescId} />
                            })}
                        </div>
                        <div className={ProjectsListCSS.carouselItemBtn}>
                            <button onClick={() => {
                                updateIndex1(activeIndex1 - 1);
                            }}>
                                arrow left
                            </button>
                            <div className={ProjectsListCSS.currentCarouselItemIndicators}>
                                {projectsList[1]["projectImagesAndDesc"].map((imageAndDesc, index) => {
                                    return (
                                        <div className={ProjectsListCSS.currentCarouselItemIndicatorBtn} key={index} onClick={() => {
                                            updateIndex1(index);
                                        }}>
                                            <button>radio</button>
                                        </div>
                                    )
                                })}
                            </div>
                            <button onClick={() => {
                                updateIndex1(activeIndex1 + 1);
                            }}>
                                arrow right
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ProjectsList;