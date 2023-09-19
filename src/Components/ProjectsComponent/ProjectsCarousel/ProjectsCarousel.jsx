// import React from 'react';
// import ProjectsCarouselCSS from './ProjectsCarousel.module.css';
// import ProjectsCarouselItem from '../ProjectsCarouselItem/ProjectsCarouselItem';
// import moveUp from '../../../Assets/Icons/moveup1.png';
// import moveDown from '../../../Assets/Icons/movedown1.png';

// function ProjectsCarousel() {

//     const projectsList = [{
//         projectId: 1,
//         title: "E-Commerce B2B Mobile Application",
//         projectDescription: "Good project",
//         techStack: ["Flutter", "NodeJS", "MongoDB"],
//         projectImagesAndDesc: [{
//             imageAndDescId: 1,
//             image: "image1 E-Commerce B2B Mobile Application", imageDescTitle: "Login screen", imageDescription: "image1 description E-Commerce B2B Mobile Application"
//         }, {
//             imageAndDescId: 2,
//             image: "image2 E-Commerce B2B Mobile Application", imageDescTitle: "Orders screen", imageDescription: "image2 description E-Commerce B2B Mobile Application"
//         }, {
//             imageAndDescId: 3,
//             image: "image3 E-Commerce B2B Mobile Application", imageDescTitle: "Search Screen", imageDescription: "image3 description E-Commerce B2B Mobile Application"
//         },],
//     }, {
//         projectId: 2,
//         title: "Sales Forcasting Services.",
//         projectDescription: "Good project",
//         techStack: ["Angular", "Flask"],
//         projectImagesAndDesc: [{
//             imageAndDescId: 1,
//             image: "image1 Sales Forcasting Services.", imageDescTitle: "Login screen", imageDescription: "image1 description Sales Forcasting Services."
//         }, {
//             imageAndDescId: 2,
//             image: "image2 Sales Forcasting Services.", imageDescTitle: "orders screen", imageDescription: "image2 description Sales Forcasting Services."
//         }, {
//             imageAndDescId: 3,
//             image: "image3 Sales Forcasting Services.", imageDescTitle: "searcvh screen", imageDescription: "image3 description Sales Forcasting Services."
//         },],
//     }, {
//         projectId: 1,
//         title: "wefdsfcsdcsdcsdcsc",
//         projectDescription: "Good project",
//         techStack: ["Flutter", "NodeJS", "MongoDB"],
//         projectImagesAndDesc: [{
//             imageAndDescId: 1,
//             image: "image1 E-Commerce Bsdcsdcs Application", imageDescription: "image1 description E-Commercsdcscspplication"
//         }, {
//             imageAndDescId: 2,
//             image: "image2 E-Commsdcsdcse Application", imageDescription: "image2 description E-Commerce BsdcsdApplication"
//         }, {
//             imageAndDescId: 3,
//             image: "image3 E-Commerce sdcsdication", imageDescription: "image3 description E-Comsdcsdcile Application"
//         },],
//     }];

//     const [activeIndex, setActiveIndex] = React.useState(0);

//     function updateIndex(newIndex) {
//         if (newIndex < 0) {
//             newIndex = 0;
//         } else if (newIndex >= projectsList.length) {
//             newIndex = projectsList.length - 1;
//         }
//         setActiveIndex(newIndex);
//     }

//     return (
//         <div className={ProjectsCarouselCSS.carouselItemDiv}>
//             <div className={ProjectsCarouselCSS.carouselWrapper}>
//                 <div>
//                     <button className={ProjectsCarouselCSS.moveUpButton} onClick={() => {
//                         updateIndex(activeIndex - 1);
//                     }}> <img src={moveUp} alt='Move up' className={ProjectsCarouselCSS.moveUpIcon}></img> </button>
//                 </div>
//                 <div className={ProjectsCarouselCSS.carouselDiv}>
//                     <div className={ProjectsCarouselCSS.carousel}>
//                         <div className={ProjectsCarouselCSS.verticalLine}>
//                             <div className={ProjectsCarouselCSS.projectNumberIndicator}>
//                                 {activeIndex + 1}
//                             </div>
//                         </div>
//                         <div className={ProjectsCarouselCSS.slides}>
//                             <div className={ProjectsCarouselCSS.carouselInner} style={{ transform: "translateY(-" + (activeIndex * ((100) / (projectsList.length))) + "%)" }}>
//                                 {projectsList.map((project, index) => {
//                                     return <ProjectsCarouselItem project={project} key={projectsList[index].projectId} />
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <button className={ProjectsCarouselCSS.moveDownButton} onClick={() => {
//                         updateIndex(activeIndex + 1);
//                     }}><img src={moveDown} alt='Move down' className={ProjectsCarouselCSS.moveUpIcon}></img></button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProjectsCarousel;