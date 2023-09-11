import React from 'react';
import ProjectsPageSingleProjectCarouselItemCSS from './ProjectsPageSingleProjectCarouselItem.module.css';

function ProjectsPageSingleProjectCarouselItem({ imageAndDesc }) {
    return (
        <div className={ProjectsPageSingleProjectCarouselItemCSS.carouselItemDiv}>
            <p>{imageAndDesc["image"]}</p>
            <p>{imageAndDesc["imageDescTitle"]}</p>
            <p>{imageAndDesc["imageDescription"]}</p>
        </div>
    );
}

export default ProjectsPageSingleProjectCarouselItem;