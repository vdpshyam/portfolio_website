import React from 'react';
import ProjectsPageCSS from './ProjectsPage.module.css';
// import ProjectsCarousel from './ProjectsCarousel/ProjectsCarousel';
import ProjectsList from './ProjectsListComponent/ProjectsList'

function ProjectsPage() {
    return (
        <div>
            <div className={ProjectsPageCSS.projectsPageDiv}>
                <p className={ProjectsPageCSS.projectsPageTitle}>
                    Projects
                </p>
                {/* <p>
                    Note: These are not the only projects that I have done, these are either my personal projects or the only projects that I can publicly showcase with the approval from my client.
                </p> */}
                {/* <ProjectsCarousel /> */}
                <ProjectsList />
            </div>
        </div>
    );
}

export default ProjectsPage;