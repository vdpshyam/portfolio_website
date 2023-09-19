// import React from 'react';
// import ProjectsPageSingleProjectCarouselCSS from './ProjectsPageSingleProjectCarousel.module.css';
// import ProjectsPageSingleProjectCarouselItem from '../ProjectsPageSingleProjectCarouselItem/ProjectsPageSingleProjectCarouselItem';

// function ProjectsPageSingleProjectCarousel({ project }) {

//     const [activeIndex, setActiveIndex] = React.useState(0);

//     function updateIndex(newIndex) {
//         if (newIndex < 0) {
//             newIndex = 0;
//         } else if (newIndex >= project["projectImagesAndDesc"].length) {
//             newIndex = project["projectImagesAndDesc"].length - 1;
//         }
//         setActiveIndex(newIndex);
//     }


//     return (
//         <div className={ProjectsPageSingleProjectCarouselCSS.carouselItemDiv}>
//             <p>{project["title"]}</p>
//             <div className={ProjectsPageSingleProjectCarouselCSS.inner} style={{ transform: "translate(-" + (activeIndex * 100) + "%)" }} >
//                 {project["projectImagesAndDesc"].map((imageAndDesc) => {
//                     // console.log("imageAndDescId : " + imageAndDesc.imageAndDescId);
//                     return <ProjectsPageSingleProjectCarouselItem imageAndDesc={imageAndDesc} key={imageAndDesc.imageAndDescId} />
//                 })}
//             </div>
//             <div className={ProjectsPageSingleProjectCarouselCSS.carouselItemBtn}>
//                 <button onClick={() => {
//                     updateIndex(activeIndex - 1);
//                 }}>
//                     arrow left
//                 </button>
//                 <div className={ProjectsPageSingleProjectCarouselCSS.currentCarouselItemIndicators}>
//                     {project["projectImagesAndDesc"].map((imageAndDesc, index) => {
//                         return (
//                             <div className={ProjectsPageSingleProjectCarouselCSS.currentCarouselItemIndicatorBtn} key={index} onClick={() => {
//                                 updateIndex(index);
//                             }}>
//                                 <button>radio</button>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <button onClick={() => {
//                     updateIndex(activeIndex + 1);
//                 }}>
//                     arrow right
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ProjectsPageSingleProjectCarousel;