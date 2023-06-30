import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class Header extends React.Component {
  render(){
    return(
      <header>
        <div class="header_text">
          <p>GREAT PIZZA!</p>
          <p>Самая лучшая пицца!</p>
        </div>
      </header>
    )
  }
}

function BestShiefs (props) {
  return (
    <div class="bestShiefs">
      <div class="bestShiefsText">
        <span>{props.text}</span>
      </div>
      <img src="pizza-sensei.png"/>
    </div>
  )
}

function Rider() {
  const [translateX, setTranslateX] = React.useState(window.innerWidth*1.5); 

  const handleScroll = () => {
    setTranslateX(translateX - window.scrollY*window.innerWidth/600)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div class="rider" style={{ transform: `translate(${translateX}px, 0px)` }}>
      <img src="superman.png"/>
      <span>У нас самая быстрая доставка!</span>
    </div>
  )
}

function Dostavka(props) {
  return (
    <div class="dostavka">
      <img src="relax_pizza.png"/>
      <div class="dostavkaText">
        <span>{props.text}</span>
      </div>
    </div>
  )
}

function BestPizza(props) {
  return (
    <div class="bestPizza">
      <img src="best_pizza.jpg"/>
      <div class="bestPizzaText">
        <span>{props.text}</span>
      </div>
    </div>
  )
}

let dostavkaText = <>Наши курьеры доставляют пиццу в течении 15 минут после ее приготовления. <br/> Если курьер не успеет доставить вам пиццу в установленный лимит времени, то выполучите купон на бесплатную пиццу!'</>
let bestShiefsText = <>У нас работают только элитные повара!</>
let bestPizzaText = <>У нас самая вкусная и недорогая пицца! <br/> Скидка на 1й заказ 50%!</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <BestShiefs text={bestShiefsText}/>
    <BestPizza text={bestPizzaText}/>
    <Rider />
    <Dostavka text={dostavkaText}/>
  </>
);