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
                    <a href='/'>
                        LinkedIn
                    </a>
                    <a href='/'>
                        GitHub
                    </a>
                </div>
            </div>
            <div className={ContactPageCSS.getInTouchDiv}>
                <p className={ContactPageCSS.subHeadingDiv}>
                    Get in touch:
                </p>
                <div className={ContactPageCSS.getInTouchContentDiv}>
                    <p className={ContactPageCSS.getInTouchContent}>
                        Email: vdpshyam@gmail.com
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