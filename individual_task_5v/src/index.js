import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const NumberedList = ({ items }) => {
  const [clickCounts, setClickCounts] = React.useState(() => {
    let result = {}
    for (let i of items){
      result[i] = 0;
    }
    return result
  });

  //прибавляет + 1 клик на item при нажатии на него
  const handleClick = (item) => {
    let newClickCounts = {};
    Object.assign(newClickCounts, clickCounts);

    newClickCounts[item]+=1;

    setClickCounts(newClickCounts);
  };

  //сортирует список при изменении списка
  React.useEffect(() => {
    items.sort((a, b) => (clickCounts[b]) - (clickCounts[a]));
  }, [clickCounts, items]);

  return (
    <ol>
      {items.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item} ({clickCounts[item] || 0} кликов)
        </li>
      ))}
    </ol>
  );
};

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberedList items={items}/>
  </React.StrictMode>
);

reportWebVitals();
