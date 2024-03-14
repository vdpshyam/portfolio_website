import React from 'react';
import AboutPageCSS from './AboutPage.module.css';

function AboutPage() {
    return (
        <div className={AboutPageCSS.aboutPageContainerDiv}>
            <div>
                <p className={AboutPageCSS.aboutPageHeading}>About Me </p>
            </div>
            <div>
                <p className={AboutPageCSS.aboutPageSubHeading}>Who Am I?</p>
                <p className={AboutPageCSS.aboutPageContentDiv}>I am Shyam, an enthusiastic developer. And an engineer by graduation.</p>
            </div>
            <div>
                <p className={AboutPageCSS.aboutPageSubHeading}>What are my skills?</p>
                <ol>
                    <li>
                        <p className={AboutPageCSS.aboutPageContentDiv}>
                            <span className={AboutPageCSS.aboutPageContentSubHeading}>
                                1. Frontend development :
                            </span>
                        </p>
                        <ol>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingSubHeading}>
                                        1.1. Web -
                                    </span>
                                    <span className={AboutPageCSS.programmingTech}>
                                        HTML, CSS, Javascript , Angular, React, Bootstrap, JQuery
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingSubHeading}>
                                        1.2. Mobile App -
                                    </span>
                                    <span className={AboutPageCSS.programmingTech}>
                                        Flutter
                                    </span>
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p className={AboutPageCSS.aboutPageContentDiv}>
                            <span className={AboutPageCSS.aboutPageContentSubHeading}>
                                2. Backend development -
                            </span>
                            <span className={AboutPageCSS.programmingTech}>
                                NodeJS, Flask
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className={AboutPageCSS.aboutPageContentDiv}>
                            <span className={AboutPageCSS.aboutPageContentSubHeading}>
                                3. Database -
                            </span>
                            <span className={AboutPageCSS.programmingTech}>
                                MySQL, MongoDB
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className={AboutPageCSS.aboutPageContentDiv}>
                            <span className={AboutPageCSS.aboutPageContentSubHeading}>
                                4. Extras :
                            </span>
                        </p>
                        <ol>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingSubHeading}>
                                        4.1. Coding -
                                    </span>
                                    <span className={AboutPageCSS.programmingTech}>
                                        C, C++, Python
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingContent}>
                                        4.2. Data Structures and Algorithms
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingContent}>
                                        4.3. UI/UX
                                    </span>
                                </p>
                            </li>
                            <li>
                                <p className={AboutPageCSS.aboutPageContentDiv}>
                                    <span className={AboutPageCSS.aboutPageContentSubHeadingContent}>
                                        4.4. Git
                                    </span>
                                </p>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default AboutPage;