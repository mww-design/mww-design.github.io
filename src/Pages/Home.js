import { Container, CardGroup, Card } from "react-bootstrap";
// import CardDeck from "react-bootstrap/CardDeck";
// import CarouselBox from "../Components/Carouselbox";
import img33 from '../img/DSC04114.jpg';
import img44 from '../img/DSC03141-HDR-555.jpg';
import img55 from '../img/DSC08114-1008 Panorama-999.jpg';
import img555 from '../img/DSC08155-999.jpg';
import img66 from '../img/DSC09042.jpg';
import img77 from '../img/DSC08415-777.jpg';

function Home() {
  return (
<div>
  
  

    <Container>
      <h2 className="text-center n-4">  </h2>
<CardGroup 
 className="col-m-4 ml-auto mt-4 mb-4">
  <Card bg="success" text="dark" border="danger" className="ms-2" class="col-4">
    <Card.Img 
    variant="top"
    src={img33} width="100" height="200" alt="изображение не найдено" 
            />
     <Card.Body>
<Card.Title>Красная поляна</Card.Title>
<Card.Text>
Парк водопадов «Менделиха» находится на южном склоне хребта Аибга на высоте 1470 м. 
Он получил свое имя от реки, в русле которой и расположены живописные каскады. 
А река была названа в честь семьи Менделей, которые проживали на ее берегу 
со второй половины XIX века.
</Card.Text>

     </Card.Body>
  </Card>

  <Card bg="info" text="primary" border="warning" className="ms-2" class="col-4">
        
        <Card.Img 
    variant="top"
    src={img555} width="100" height="200" alt="изображение не найдено" 
        />
      <Card.Body>
<Card.Title>Камчатка</Card.Title>
<Card.Text>
Полуостров Камчатка находится на стыке тектонических плит в зоне активного 
вулканизма, где современные природные процессы и история нашей планеты неразделимы.
Здесь на ограниченной площади сконцентрировано 30 действующих и около 300 потухших 
вулканов, а также более 150 термальных и минеральных источников.
</Card.Text>

     </Card.Body>
   
  </Card>

  <Card bg="warning" text="primary" border="info" className="ms-2" class="col-4">
    <Card.Img 
    variant="top"
    src={img44} width="100" height="200" alt="изображение не найдено" 
        />
     <Card.Body>
<Card.Title>Кваркуш</Card.Title>
<Card.Text>
«Кваркуш - одна из самых высоких гор Урала... С северной стороны, из 
глубочайшей пропасти, вытекает быстрая река Жигалан, правый приток Улсуя.
На широкой спине хребта Кваркуш немало горных пиков и останцев, хранящих 
память о древних вулканах. Царствует над всеми Вогульский камень высотой в 1066 м. 
</Card.Text>

     </Card.Body>
   </Card>

   
   <div class="w-100"></div>
   <br></br>
   
 
   <Card  bg="info" text="primary" border="warning" className="ms-2" class="col-4">
   <div class="row justify-content-between"></div>
    <Card.Img 
    variant="top"
    src={img66} width="100" height="200" alt="изображение не найдено" 
        />
     <Card.Body>
<Card.Title>Байкал</Card.Title>
<Card.Text>
С давних времен местные жители называют Байкал морем. Оценить всю красоту и 
сказочность знаменитого озера можно, когда оно покрыто прозрачным льдом — 
настолько хрустальным, что видны камешки на дне. 
</Card.Text>

     </Card.Body>
  </Card>



  <Card bg="warning" text="primary" border="info" className="ms-2" class="col-4">
    <Card.Img 
    variant="top"
    src={img77} width="100" height="200" alt="изображение не найдено" 
   
        />
     <Card.Body>
     
<Card.Title>Долина нарзанов</Card.Title>
<Card.Text>
В 30-ти км от Кисловодска по направлению к урочищу Джилы-Су находится удивительное 
живописное место — Долина нарзанов. Сама дорога к долине многого стоит: с безумными 
видами и крутыми серпантинами. 
</Card.Text>

     </Card.Body>
  </Card>

  <Card bg="success" text="dark"  border="danger" className="ms-2" class="col-4 md-4" >
      <Card.Img 
    variant="top"
    src={img55} width="100" height="200" alt="изображение не найдено" 
        />
      <Card.Body>
     
<Card.Title>Вулканы Камчатки</Card.Title>
<Card.Text>
Вулканический район, расположеный в Центральной части полуострова Камчатка -
Ключевская группа вулканов. Здесь ярко выраженные активные процессы вулканизма, 
которые проявляются через кратеры центральные, побочные и ареальные трещинные зоны.
Гигантские размеры вулканов, довольно плотное их скопление на сравнительно небольшой
площади притягивают в эти места ученых, туристов, альпинистов.
</Card.Text>

     </Card.Body>
  </Card>

</CardGroup>

</Container>
    </div>

  );
}

export default Home;