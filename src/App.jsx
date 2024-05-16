import "./App.css";
import Header from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/images/big-main-bg.png')] bg-cover">
        <Header />
        <div className="w-full m-auto max-w-[1570px] px-5 sm:px-[80px] md:px-[135px]">
          {/* Main text block */}
          <div className="flex flex-col gap-5 items-start justify-start pt-[18%]">
            <h1 className="font-normal leading-[55px] text-[55px] max-w-[650px]">
              Вам нужен фирменный стиль или ребрендинг?
            </h1>
            <p className="text-[34px] font-normal leading-[37px]">
              Разработаем в срок от 10-ти дней
            </p>
            <div className="flex items-center gap-5 pt-[20px]">
              <Button variant="outline" size="lg"  className="border-black rounded-[40px] text-sm font-medium">
                Портфолио
              </Button>
              <Button variant="outline" size="lg"  className="border-black rounded-[40px] text-sm font-medium">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* container */}
      <div className="w-full m-auto max-w-[1570px] px-5 sm:px-[80px] md:px-[135px]">
        {/* Section about custom text */}
        <div className="w-full flex flex-col items-start justify-between gap-5 pt-[50px] pb-[100px]">
          <h2 className="text-4xl font-medium">Что такое фирменный стиль</h2>
          <div className="w-full flex items-center gap-[30px]">
            <img
              className="w-full max-w-[635px] h-full max-h-[381px]"
              src="/images/section-1.png"
              alt="tomatoes"
            />
            <div className="max-w-[450px] w-full">
              <p className="text-lg leading-[25px] font-medium">
                Это набор тех уникальных «признаков», по которым клиент отличит
                вас от других компаний. Фирменный стиль отражает миссию бренда,
                ценности, является способом его идентификации, формирует
                определённое восприятие в коммуникации с потребителями.
              </p>
              <br />
              <p className="text-lg leading-[25px] font-medium">
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
        {/* Section with steps for make brand */}
        <div className="w-full flex flex-col items-start justify-between gap-[40px]">
          <h2 className="text-[50px] leading-[55px] font-medium">
            Название и логотип – важные составляющие фирменного стиля, но на
            этом всё только начинается. Ниже основные элементы:
          </h2>
          <div className="flex justify-between items-start gap-5">
            <div className="flex items-start justify-start gap-2 max-w-[250px]">
              <h5 className="text-[55px] leading-[55px] font-medium">1</h5>
              <p className="text-lg leading-[25px] font-medium pt-[25px]">
                Название <br /> компании
              </p>
            </div>
            <div className="flex items-start justify-start gap-2 max-w-[250px]">
              <h5 className="text-[55px] leading-[55px] font-medium">2</h5>
              <p className="text-lg leading-[25px] font-medium pt-[25px]">
                Логотип – <br /> основной <br /> графический <br /> символ
              </p>
            </div>
            <div className="flex items-start justify-start gap-2 max-w-[250px]">
              <h5 className="text-[55px] leading-[55px] font-medium">3</h5>
              <p className="text-lg leading-[25px] font-medium pt-[25px]">
                Фирменные <br /> цвета всей <br /> коммуникации <br /> (онлайн и{" "}
                <br /> оффлайн)
              </p>
            </div>
            <div className="flex items-start justify-start gap-2 max-w-[250px]">
              <h5 className="text-[55px] leading-[55px] font-medium">4</h5>
              <p className="text-lg leading-[25px] font-medium pt-[25px]">
                Шрифт
              </p>
            </div>
            <div className="flex items-start justify-start gap-2 max-w-[400px]">
              <h5 className="text-[55px] leading-[55px] font-medium">5</h5>
              <p className="text-lg leading-[25px] font-medium pt-[25px]">
                Носители <br /> фирменного <br /> стиля <br /> <br />{" "}
                <span className="leading-[22px]">
                  Этот набор варьируется в зависимости от нужд и потребностей
                  компании: визитные карточки, фирменные бланки и прочая деловая
                  документация, упаковка, сувенирная продукция, брендинг
                  автотранспорта.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Section how much does it cost to make own brand logo and title */}
        <div className="w-full max-w-[1200px] flex items-end justify-between gap-[50px] py-[100px]">
          <div className="flex flex-col items-start justify-start gap-5 max-w-[400px]">
            <p className="text-lg leading-[25px] font-medium">
              Каждая задача по разработке фирменного стиля уникальна для нас —
              это новый вызов и новые эмоции. Мы принципиально не предлагаем вам
              стандартизированные пакеты “эконом”, “стандрат”, или “премиум”, мы
              не штампуем, мы - создаем.
            </p>
            <p className="text-lg leading-[25px] font-medium">
              Стоимость разработки фирменного стиля в нашем агентстве начинается
              от 120 000 руб., финальную планку без брифинга определить
              невозможно - давайте созвонимся и обсудим ваш проект!{" "}
            </p>
            <p className="text-lg leading-[25px] font-medium text-white p-[5px] bg-[#2B59C3] rounded-sm">
              Каждый клиент нашего агентства получает приятный бонус на финише
              проекта, о котором мы расскажем ниже ▼
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <h2 className="font-medium text-4xl">
              Сколько стоит фирменный стиль?
            </h2>
            <img
              className="w-full max-w-[630px] h-full"
              src="/images/section-3.png"
              alt="examples-of-logos"
            />
          </div>
        </div>
        {/* Section Example 1 - Amperia */}
        <div className="flex flex-col justify-between item-start gap-[40px]">
          <img
            className="w-full max-w-[1200px] h-full"
            src="/images/section-4.png"
            alt="Amperia design"
          />
          <div className="flex justify-start items-start gap-[50px]">
            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-[55px] leading-[55px] font-medium">
                Amperia
              </h3>
              <p className="text-lg font-medium">
                Бранд красивых сувениров <br />и подарков для дома
              </p>
            </div>
            <Button variant="outline" className="border-black rounded-[40px]">Смотреть проект</Button>
          </div>
        </div>
        {/* Section Example 2 - AQ.Lifecare */}
        <div className="flex flex-col justify-between item-start gap-[40px] py-[100px]">
          <img
            className="w-full max-w-[1200px] h-full"
            src="/images/section-5.png"
            alt="Amperia design"
          />
          <div className="flex justify-start items-start gap-[50px]">
            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-[55px] leading-[55px] font-medium">
                AQ.Lifecare
              </h3>
              <p className="text-lg font-medium">
                Инновационная клиника <br />
                внутривенной медицины
              </p>
            </div>
            <Button variant="outline" className="border-black rounded-[40px]">Смотреть проект</Button>
          </div>
        </div>
        {/* Section Example 3 - Vilate */}
        <div className="flex flex-col justify-between item-start gap-[40px]">
          <img
            className="w-full max-w-[1200px] h-full"
            src="/images/section-6.png"
            alt="Amperia design"
          />
          <div className="flex justify-start items-start gap-[50px]">
            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-[55px] leading-[55px] font-medium">Vilate</h3>
              <p className="text-lg font-medium">
                Бренд натуральных и <br />
                вкусных соусов
              </p>
            </div>
            <Button variant="outline" className="border-black rounded-[40px]">Смотреть проект</Button>
          </div>
        </div>
        {/* Section Example 4 - Coral Black */}
        <div className="flex flex-col justify-between item-start gap-[40px] py-[100px]">
          <img
            className="w-full max-w-[1200px] h-full"
            src="/images/section-7.png"
            alt="Amperia design"
          />
          <div className="flex justify-start items-start gap-[50px]">
            <div className="flex flex-col justify-start items-start gap-2">
              <h3 className="text-[55px] leading-[55px] font-medium">
                Coral Black
              </h3>
              <p className="text-lg font-medium">
                Черная икра в современной <br />
                инторпритации
              </p>
            </div>
            <Button variant="outline" className="border-black rounded-[40px]">Смотреть проект</Button>
          </div>
        </div>
        {/* Show more examples div */}
        <div className="w-full h-full flex justify-center items-center">
          <Button size="lg" className="rounded-[40px]">
            Показать еще
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
