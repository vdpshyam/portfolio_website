import React from 'react';
import ProjectsPageSingleProjectCarouselItemCSS from './ProjectsPageSingleProjectCarouselItem.module.css';

function ProjectsPageSingleProjectCarouselItem({ imageAndDesc }) {
    return (
        <div className={ProjectsPageSingleProjectCarouselItemCSS.carouselItemDiv}>
            <img src={imageAndDesc["image"]} alt='Project Snapshot'></img>
            <p>{imageAndDesc["imageDescTitle"]}</p>
            <p>{imageAndDesc["imageDescription"]}</p>
        </div>
    );
}

export default ProjectsPageSingleProjectCarouselItem;