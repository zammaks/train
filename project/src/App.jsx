import React from 'react';
import './EmpireRailways.css';

const EmpireRailways = () => {
  return (
    <div className="empire-wrapper">
      {/* ====================== NAVBAR ====================== */}
      <nav className="navbar">
        {/* Поиск */}
        <div className="search-bar">

          <input
            type="text"
            className="search-input"
          />
          <img
            src="/src/pictures/Group 1000003052.svg"
            alt="Поиск"
            className="search-icon-right"
          />
        </div>

        {/* Навигация */}
        <div className="nav-capsule">
          <a href="#" className="nav-item">Главная</a>
          <a href="#" className="nav-item active">О проекте</a>
          <a href="#" className="nav-item">Помощь</a>
          <a href="#" className="nav-item">Связаться с нами</a>
        </div>
      </nav>

      {/* ====================== HERO ====================== */}
      <section className="hero">
        <div className="quote-box">
          <img
            src="/src/pictures/Group 1000003027.svg"
            alt="Кавычки"
            className="quote-icon"
          />
          «Путь империи: от первых составов до трансконтинентальных магистралей. Вы строите не дороги, а новую Россию».
        </div>
        <div className="hero-content">
          <img src="/src/pictures/historical pictures.png" alt="" className="historical-picture" />
          <img src="/src/pictures/Railways of the Russian Empire.png" alt="" className="text-picture" />
          <img src="/src/pictures/a train.png" alt="" className="train-picture" />
          <img src="/src/pictures/Assistant Window.png" alt="" className="assistant-window-picture" />
          <img src="/src/pictures/Assistant.png" alt="" className="assistant-picture" />
          <img src="/src/pictures/Watch.png" alt="" className="watch-picture" />
          <img src="/src/pictures/Vector 1057.png" alt="" className="input-picture" />
          <div className="hero-buttons">
            <button className="btn primary">Начать путешествие</button>
            <button className="btn secondary">О проекте</button>
          </div>
          <form className="message-form">
            <input
              type="text"
              placeholder="Напишите сообщение..."
              className="message-input"
              name="message"
            />
            <button type="submit" className="send-button">
              Отправить
            </button>
          </form>
        </div>
      </section>
      <section className='about_project'>
        <div className="about-project-wrapper">
          <img src="/src/pictures/wrapp.png" alt="" className='wrapper-name-picture' />
          <p className='wrapper-name-title'>О ПРОЕКТЕ</p>
        </div>
        <div className="design_element_wrapper">
          <img src="/src/pictures/design_elements.png" alt="" className='design-element-picture' />
          <img src="/src/pictures/Vector 1063.png" alt="" className='vector-first-picture' />
          <img src="/src/pictures/Vector 1064.png" alt="" className='vector-second-picture' />
          <img src="/src/pictures/Subtract.png" alt="" className='subtract-picture' />
          <p className="first-title">ОПИСАНИЕ ПРОЕКТА</p>
          <p className="second-title">ИГРОВОЙ ЦИКЛ</p>
          <p className="first_text">Это компьютерная игра в жанре симулятора строительства и управления (экономическая стратегия) для PC, которая погружает пользователя в историю железных дорог Российской империи: в период с начала XIX века до образования СССР игроку предстоит развивать железнодорожную сеть в крупнейших городах империи. Проект органично сочетает игровой формат с элементами книги. Способствует изучению ключевых событий, выдающихся личностей и их вклада в развитие страны </p>
          <p className="second_text">В симуляторе игрок управляет компанией: планирует финансы, кадры и логистику, взаимодействует с властями и конкурентами. Строительство ограничено бюджетом, материалами и сезонностью. Развитие проходит этапы от паровых локомотивов до тепловозов; игрок выбирает стратегии расширения и контролирует эффективность. Историческая достоверность обеспечивается реалиями эпохи. <br />
            Цель — создать устойчивую сеть для экономического роста империи в заданных условиях.  </p>


        </div>
      </section>
      <section className='impery_way'>
        <p className="impery_way_title">ПУТЬ ИМПЕРИИ</p>
        <img src="/src/pictures/rails.png" alt="" className='impery_way_picture' />
        <ul className="impery_way_card_wrapper">
          <li className='card'>
            <div className='card_year first_year'>1837 г.</div>
            <h3 className='card_title'>Открытие первой железной дороги в России</h3>
            <p className='card_text'>Запущена линия Санкт-Петербург - Царское Село, ставшая первой общественной железной дорогой в империи и показавшей перспективность нового вида транспорта</p>
          </li>
          <li className='card_spec'>
            <img src="/src/pictures/card.png" alt="" />
          </li>
          <li className='card'>
            <div className='card_year second_year'>1860-1870 г.</div>
            <h3 className='card_title'>Массовое железнодорожное строительство</h3>
            <p className='card_text'>Государство и частный капитал активно инвестирует строительство дорог, формируется разветвлённая сеть, связывающая центральные районы с промышленными и сырьевыми регионами</p>
          </li>
          <li className='card'>
            <div className='card_year third_year'>1891 г.</div>
            <h3 className='card_title'>Начало строительства Транссибирской магистрали</h3>
            <p className='card_text'>Старт крупнейшего инфраструктурного проекта империи, целью которого было соединение европейской части России и Дальним Востоком</p>
          </li>
          <li className='card'>
            <div className='card_year fourth_year'>1905 г.</div>
            <h3 className='card_title'>Завершение сквозного движения по Транссибирской магистрали</h3>
            <p className='card_text'>Обеспечено непрерывное железнодорожное сообщение от европейской России до Тихого океана, что ускорило экономическое развитие и заселение восточных территорий</p>
          </li>

        </ul>


      </section >
    </div >
  );
};

export default EmpireRailways;