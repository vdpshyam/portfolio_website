import React from 'react';
import ProjectsPageSingleProjectCarouselCSS from './ProjectsPageSingleProjectCarousel.module.css';
import ProjectsPageSingleProjectCarouselItem from '../ProjectsPageSingleProjectCarouselItem/ProjectsPageSingleProjectCarouselItem';

function ProjectsPageSingleProjectCarousel({ project }) {
    return (
        <div className={ProjectsPageSingleProjectCarouselCSS.carouselItemDiv}>
            <p>{project["title"]}</p>
            {project["projectImagesAndDesc"].map((imageAndDesc) => {
                return <ProjectsPageSingleProjectCarouselItem imageAndDesc={imageAndDesc} />
            })}
        </div>
    );
}

export default ProjectsPageSingleProjectCarousel;