import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="rounded-lg bg-gray-800 p-10 text-center text-white shadow-lg">
                <p>Hecho y desarrollado por los desarrolladores web Full Stack, Franco y Freddy.</p>

                <div className="flex justify-center mb-4">
                    <a
                        className="mr-4"
                        href="https://www.linkedin.com/in/franco-silva-flores-389b69265/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Franco22s" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white" />
                    </a>
                    <span className="text-white ml-2">Perfil de Franco</span>
                </div>

                <div className="flex justify-center">
                    <a
                        className="mr-4"
                        href="https://www.linkedin.com/in/developer-freddyaminzapata/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/goku673" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white" />
                    </a>
                    <span className="text-white ml-2">Perfil de Freddy Amin</span>
                </div>
            </div>
        </div>
    );
};

export default About;