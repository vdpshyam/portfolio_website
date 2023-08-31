import React from 'react';
import ProjectsCarouselItemCSS from './ProjectsCarouselItem.module.css';
import ProjectsPageSingleProjectCarousel from '../ProjectsPageSingleProjectCarousel/ProjectsPageSingleProjectCarousel';

function ProjectsCarouselItem({ project }) {
    return (
        <div className={ProjectsCarouselItemCSS.carouselItemDiv}>
            <ProjectsPageSingleProjectCarousel project={project} />
        </div>
    );
}

export default ProjectsCarouselItem;