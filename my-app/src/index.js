import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const listProf= [
  {prof: "Web-разработчиков",
  discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
  пользователям было быстро и удобно.`},

  {prof: "Гейм-девелоперов",
  discr: `Создают видеоигры. Погружают всех нас в новые миры.`},

  {prof: "AI/ML-cпециалистов",
  discr: `Используют в деле искусственный интеллект и машинное
  обучение. Фактами и прогнозами делает бизнесу хорошо.`},

  {prof: "Аналитиков данных",
  discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
  бизнесу получать еще больше денег.`},

  {prof: "Мобильных разработчиков",
  discr: `Создают мобильные приложения, которые найдут тебя везде.
  Умещают на маленьких экранах максимальный функционал.`}
]

const listImg = ["logo_dvfu.png", "logo_imct.png"]

const root = ReactDOM.createRoot(document.getElementById('root'));

function Head(props) {
  const logoImages =listImg.map((img, index) =>
    <img key={index} src={img} />
  );

  return(
    <div className="head">
      {logoImages}
    </div>
  )
}

function Tagline() {
  return(
    <h1>
    Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
    </h1>
  )
}

function Button(props) {
  return (
    <input className="button" type="button" value={props.val} />
  )
}

function Professions (props) {
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );

  return (
    <div className="prof">
      <h2>{props.title} </h2>
      <ul>
        {listProf}
      </ul>
    </div>
  )
}

function ProfItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
  setOpenClose(!isOpen);


  }
  return(
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      {isOpen &&
        <span className="right">x</span>}
      {!isOpen &&
        <span className="right">+</span>}
      {isOpen &&
      <p> {props.discr}</p>
      }
    </li>
  )
}

function Content() {
  return(
    <>
      <Head listImg={listImg} />
      <Tagline/>
      <Button val="Хочу учиться!"/>
      <Professions title="Обучаем на:" list={listProf} />
    </>
  )
}
root.render(<Content />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
