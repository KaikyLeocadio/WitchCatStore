import React, { useState, useEffect } from 'react';
import Styles from './slider.module.css';
import Caneca1 from '../canecas/canecacao.jpeg';
import Caneca2 from '../canecas/canecaface.jpeg';
import Caneca3 from '../canecas/canecatatakae.jpeg';

//SCROLL PARA TEMAS
const scrollToTemas = () => {
    const temasSection = document.getElementById('temas');
    if (temasSection) {
      temasSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; 
//SCROLL PARA TEMAS

//SLIDER DAS CANECAS
const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Caneca1, Caneca2, Caneca3]; // Adicione mais imagens conforme necessário
    const intervalDuration = 4000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [images.length]);
//SLIDER DAS CANECAS

    return (
        <section className={Styles.slider} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className={Styles.Alinha}>
            <h1>
            Canecas <span className={Styles.pinta}> personalizadas!</span>  
                                       <br />
                    <span className={Styles.alinhabaixo}>Por e para você!</span>
            </h1>

            <br />

            <p>
            Você pode criar uma caneca inteiramente <br />
            customizavel por você, ou escolher algum <br />
            modelo já existente.
            </p>

            <br />

            <div className={Styles.alinhabotao}>

            <a>
            <button onClick={scrollToTemas}>
                Ver modelos
            </button>
            </a>

            <a href="https://wa.me/5511985471100?text=Olá%2C%20tudo%20bem%3F%20Gostaria%20de%20encomendar%20uma%20caneca%20personalizada!%20%3AD" target="_blank">
            <button>Quero a minha!</button>
            </a>
            </div>

            </div>
        </section>
    );
};

export default Slider;
