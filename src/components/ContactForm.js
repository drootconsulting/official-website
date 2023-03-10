import React from 'react'
import { useState } from 'react';

function ContactForm({ status, message, onValidated }) {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        contactInfo.name &&
            contactInfo.email &&
            contactInfo.message &&
            contactInfo.email.indexOf("@") > -1 &&
            onValidated({
                MERGE0: contactInfo.email,
                MERGE1: contactInfo.name,
                MERGE2: contactInfo.message,
            });

        setContactInfo({
            name: "",
            email: "",
            message: ""
        })
    }
    return (
        <div>
            <form id="cform" method="post" onSubmit={handleSubmit}>
                <div className="group">
                    <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={contactInfo.name}
                            onChange={handleInputChange}
                            style={{ backgroundColor: "#1C2224", outline: "none", fontFamily: "sans-serif" }}
                        />
                    </div>
                </div>
                <div className="group">
                    <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                            style={{ backgroundColor: "#1C2224", fontFamily: "sans-serif" }}
                        />
                    </div>
                </div>
                <div className="group full">
                    <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active">
                        <textarea
                            type="text"
                            name="message"
                            placeholder="Message"
                            value={contactInfo.message}
                            onChange={handleInputChange}
                            style={{ backgroundColor: "#1C2224", border: "none", fontFamily: "sans-serif" }}
                        />
                    </div>
                </div>
                <div
                    className="submit scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                >
                    <button className="btn" style={{ border: "2px solid #c0c0c7", borderRadius: "50px" }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm