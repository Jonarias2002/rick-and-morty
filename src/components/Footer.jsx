import React from "react";
import { ImWhatsapp } from 'react-icons/im';

const Footer = () => {
    const contact_info = [
    {
        text: "jonathan2002dev@gmail.com"
    },
    { 
        text: "(+58) 414-765-4419"
    },
    {
        link: "https://www.linkedin.com/in/jonajam",
    },
    ];
    return (
    <section id="contact" className="mt-4">
        <div className="">
        <h3 className="text-center text-white">
            Contact <span className="text-success">Me</span>
        </h3>
            <div className="d-flex justify-content-around flex-wrap">
            {contact_info.map((contact, i) => (
                <div
                key={i}
                className=" m-3">
                    <div className="text-white">
                        <p >
                            {contact.text}
                        </p>
                        <a className="text-success" href={contact.link}>{contact.link}</a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
};

export default Footer;