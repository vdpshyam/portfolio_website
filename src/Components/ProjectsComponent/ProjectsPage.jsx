import React from 'react';
import ProjectsPageCSS from './ProjectsPage.module.css';
import ProjectsList from './ProjectsListComponent/ProjectsList'

function ProjectsPage({ onMouseEnterHandlerForChangingCustomCursor, onMouseLeaveHandlerForChangingCustomCursor }) {
    return (
        <div>
            <div className={ProjectsPageCSS.projectsPageDiv}>
                <p className={ProjectsPageCSS.projectsPageTitle}>
                    Projects
                </p>
                <ProjectsList onMouseEnterHandlerForChangingCustomCursor={ onMouseEnterHandlerForChangingCustomCursor } onMouseLeaveHandlerForChangingCustomCursor={ onMouseLeaveHandlerForChangingCustomCursor }/>
            </div>
        </div>
    );
}

export default ProjectsPage;