import React from 'react';
import ProjectsCarouselItem from '../ProjectsCarouselItem/ProjectsCarouselItem';

function ProjectsCarousel() {

    const projectsList = [{
        title: "E-Commerce B2B Mobile Application",
        projectDescription: "Good project",
        techStack: ["Flutter", "NodeJS", "MongoDB"],
        projectImagesAndDesc: [{
            image: "image1", imageDescription: "image1 description"
        }, {
            image: "image2", imageDescription: "image2 description"
        }, {
            image: "image3", imageDescription: "image3 description"
        },],
    }, {
        title: "Sales Forcasting Services.",
        projectDescription: "Good project",
        techStack: ["Angular", "Flask"],
        projectImagesAndDesc: [{
            image: "image1", imageDescription: "image1 description"
        }, {
            image: "image2", imageDescription: "image2 description"
        }, {
            image: "image3", imageDescription: "image3 description"
        },],
    },];

    return (
        <div>
            {projectsList.map((project) => {
                return <ProjectsCarouselItem project = {project} />
            })}

        </div>
    );
}

export default ProjectsCarousel;