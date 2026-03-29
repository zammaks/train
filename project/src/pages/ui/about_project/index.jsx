import {
  map,
  wrapp,
  left_underline,
  right_underline,
  design_elements,
  second_background
} from "../../../app/images";



import "./index.css";

export const AboutProject = () => {

  return (
    <section  className='about_project' style={{ backgroundImage: `url(${second_background})` }}>
      <div className="about-project-wrapper" style={{ backgroundImage: `url(${second_background})` }}>
        <img  id="about_project" src={wrapp} alt="" className='wrapper-name-picture' />
        <p className='wrapper-name-title'>О ПРОЕКТЕ</p>
      </div>
      <div className="design_element_wrapper">
        <img src={design_elements} alt="" className='design-element-picture' />
        <img src={right_underline} alt="" className='vector-first-picture' />
        <img src={left_underline} alt="" className='vector-second-picture' />
        <img src={map} alt="" className='subtract-picture' />
        <p className="first-title">ОПИСАНИЕ ПРОЕКТА</p>
        <p className="second-title">ИГРОВОЙ ЦИКЛ</p>
        <p className="first_text">Это компьютерная игра в жанре симулятора строительства и управления (экономическая стратегия) для PC, которая погружает пользователя в историю железных дорог Российской империи: в период с начала XIX века до образования СССР игроку предстоит развивать железнодорожную сеть в крупнейших городах империи. Проект органично сочетает игровой формат с элементами книги. Способствует изучению ключевых событий, выдающихся личностей и их вклада в развитие страны </p>
        <p className="second_text">В симуляторе игрок управляет компанией: планирует финансы, кадры и логистику, взаимодействует с властями и конкурентами. Строительство ограничено бюджетом, материалами и сезонностью. Развитие проходит этапы от паровых локомотивов до тепловозов; игрок выбирает стратегии расширения и контролирует эффективность. Историческая достоверность обеспечивается реалиями эпохи. <br />
          Цель — создать устойчивую сеть для экономического роста империи в заданных условиях.  </p>


      </div>
    </section>
  );
}