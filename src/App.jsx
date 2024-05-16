import "./App.css";
import Header from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/images/big-main-bg.png')] bg-cover">
        <Header />
        <div className="px-5 sm:px-[80px] md:px-[135px]">
          {/* Main text block */}
          <div className="flex flex-col gap-5 items-start justify-start pt-[18%]">
            <h1 className="font-normal leading-[55px] text-[55px] max-w-[650px]">
              Вам нужен фирменный стиль или ребрендинг?
            </h1>
            <p className="text-[34px] font-normal leading-[37px]">
              Разработаем в срок от 10-ти дней
            </p>
            <div className="flex items-center gap-5 pt-[20px]">
              <Button size="lg" className="rounded-[40px] text-sm font-medium">
                Портфолио
              </Button>
              <Button size="lg" className="rounded-[40px] text-sm font-medium">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-[80px] md:px-[135px]">
        {/* Section about custom text */}
        <div className="w-full flex flex-col items-start gap-5 pt-[50px] pb-[100px]">
          <h2 className="text-4xl font-medium">Что такое фирменный стиль</h2>
          <div className="w-full flex items-center gap-[30px]">
            <img
              className="w-full max-w-[635px] h-full max-h-[381px]"
              src="/images/section-1.png"
              alt="tomatoes"
            />
            <div>
              <p className="text-lg font-medium">
                Это набор тех уникальных «признаков», по которым клиент отличит
                вас от других компаний. Фирменный стиль отражает миссию бренда,
                ценности, является способом его идентификации, формирует
                определённое восприятие в коммуникации с потребителями.
              </p>
              <br />
              <p className="text-lg font-medium">
                В идеале разработка корпоративного стиля должна происходить
                одновременно с созданием бизнеса и формированием его
                фундаментальных идей. Есть и второй вариант: бизнес существует
                определенное время и ему нужен перезапуск - это называется
                редизайн или ребрендинг: в мире жёсткой конкуренции важно быть
                «в тренде», успевать за изменениями в поведениях покупателя и
                “говорить” с ним на одном языке.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
