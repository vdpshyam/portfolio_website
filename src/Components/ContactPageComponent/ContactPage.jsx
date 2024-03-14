import React from 'react';
import ContactPageCSS from './ContactPage.module.css';

function ContactPage() {
    return (
        <div className={ContactPageCSS.contactPageContainerDiv}>
            <div className={ContactPageCSS.findMeOnDiv}>
                <p className={ContactPageCSS.subHeadingDiv}>
                    Find me on:
                </p>
                <div className={ContactPageCSS.findMeOnContentDiv}>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/v-d-p-shyam-9b6ba3162/'> <p className={ContactPageCSS.linkedIn}>
                        LinkedIn
                    </p>
                    </a>
                    <a className={ContactPageCSS.gitHub} target="_blank" rel="noreferrer" href='https://github.com/vdpshyam'>
                        <p className={ContactPageCSS.gitHub}>
                            GitHub
                        </p>
                    </a>
                </div>
            </div>
            <div className={ContactPageCSS.getInTouchDiv}>
                <p className={ContactPageCSS.subHeadingDiv}>
                    Get in touch:
                </p>
                <div className={ContactPageCSS.getInTouchContentDiv}>
                    <p className={ContactPageCSS.getInTouchContent}>
                        Email: <span className={ContactPageCSS.email}>vdpshyam@gmail.com </span>
                    </p>
                    <p className={ContactPageCSS.getInTouchContent}>
                        You can mail me with the subject as work, and I will get back to you ASAP.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;