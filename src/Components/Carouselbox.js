import React, { Component } from "react" ;
import Carousel from 'react-bootstrap/Carousel';
import img33 from '../img/DSC04114.jpg';
import img44 from '../img/DSC03141-HDR-555.jpg';
import img55 from '../img/DSC08114-1008 Panorama-999.jpg';
import img555 from '../img/DSC08155-999.jpg';
import img66 from '../img/DSC09042.jpg';
import img77 from '../img/DSC08415-777.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel class="carousel slide carousel-fade">
             
                <Carousel.Item>
                    <img 
                    className="d-flex w-100 justify-content-center"
                    src={img33} width="100" height="650" alt="изображение не найдено"
                       />
                       
                    <Carousel.Caption >
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Водопад «Менделиха»</h3>
                        <p>Находится на южном склоне хребта Аибга на высоте 1470 м</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            

                <Carousel.Item>
                    <img
                    className="d-flex w-100 justify-content-center"
                    src={img44} width="100" height="650" alt="изображение не найдено"
                   
                    />
                    <Carousel.Caption>
                        <h3>Кваркуш</h3>
                        <p>Долина реки Жигалан</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                    className="d-flex w-100 justify-content-center"
                    src={img55} width="100" height="650" alt="изображение не найдено"
                    
                    />
                    <Carousel.Caption>
                        <h3>Вулкан Удина</h3>
                        <p>Национальный парк "Вулканы"</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-flex w-100 justify-content-center"
                    src={img555} width="100" height="650" alt="изображение не найдено"
                   
                    />
                    <Carousel.Caption>
                        <h3>Три исполина</h3>
                        <p>Национальный парк "Вулканы"</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                   className="d-flex w-100 justify-content-center"
                    src={img66} width="100" height="650" alt="изображение не найдено"
                    
                    />
                    <Carousel.Caption>
                        <h3>Байкал на рассвете</h3>
                        <p>Остров Тайнак</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-flex w-100 justify-content-center"
                    src={img77} width="100" height="650" alt="изображение не найдено"
                                       />
                    <Carousel.Caption>
                        <h3>Баксан.Кавказ</h3>
                        <p>Долина Нарзанов</p>
                    </Carousel.Caption>
                </Carousel.Item>

              
            </Carousel>
        )
    }
}