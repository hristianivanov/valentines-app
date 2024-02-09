import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Не",
      "Сигурна ли си?",
      "Наистина ли си сигурна?",
      "Помисли отново!",
      "Последен шанс!",
      "Наистина ли?",
      "Може да съжаляваш за това!",
      "Обмисли го отново!",
      "Напълно ли си сигурна?",
      "Това може да е грешка!",
      "Имай поне малко сърце!",
      "Не бъди толкова студена!",
      "Промяна в решението?",
      "Няма ли малко да помислиш?",
      "Това ли е окочателният ти отговор?",
      "Разбиваш ми сърцето ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const textStyle = {
    fontFamily: 'Axiforma, sans-serif', // Set Axiforma as the font family
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl font-bold my-4" style={textStyle}>
            Уааа, иеееее!!!!
          </div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4" style={textStyle}>
            Ще бъдеш ли моята валентинка?
          </h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize, ...textStyle }}
              onClick={() => setYesPressed(true)}
            >
              Да
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              style={textStyle}
            >
              {noCount === 0 ? "Не" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
