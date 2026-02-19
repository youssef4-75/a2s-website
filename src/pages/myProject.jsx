import React, { useState } from 'react';

import './Myprojects.css';


const MyProject = ({ category = '', title = '', description = '', videoLink = '', details = '', smartIcons = [] }) => {



    return (
        <>
            <main>
                <div className='category' >
                    <h1>Full Stack 4.0</h1>
                </div>
                <div className='title-holder' >
                    <h1 className='title' >Plateforme E-Learning </h1>
                </div>
                <div className='description-holder'>
                    <p className='description' >Un tableau de bord de surveillance en temps réel conçu pour l'OCP afin de visualiser les flux de transport de phosphate. Utilisant la technologie de Jumeau Numérique, ce système prédit les besoins de maintenance et optimise l'efficacité</p>
                </div>
                <div className='buttonsHolder'>
                    <a href="">More projects</a>
                    <a href="">Contact Us</a>
                </div>
                <div className='video-holder'>
                    <video src=""></video>
                </div>
                <div className='details'>
                    <div className='smart-icons' >
                        <div>
                            <img src="" alt="" />
                            <h1></h1>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h1></h1>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h1></h1>
                        </div>
                    </div>
                    <div className='more-details' >
                        <p>        gchgcghchgcjgcgjc     </p>

                    </div>

                </div>

            </main>

        </>
    );
}

export default MyProject;