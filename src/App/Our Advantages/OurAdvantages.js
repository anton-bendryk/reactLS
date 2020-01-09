import React from 'react';
import 'src\App\Our Advantages\OurAdvantages.css';
import benefits1 from 'src\pictures\benefits\benefits1.png';
import benefits2 from 'src\pictures\benefits\benefits2.png';
import benefits3 from 'src\pictures\benefits\benefits3.png';
import benefits4 from 'src\pictures\benefits\benefits4.png';
import benefits5 from 'src\pictures\benefits\benefits5.png';
import benefits6 from 'src\pictures\benefits\benefits6.png';

const OurAdvantages = () => {
    return (
        <div>
        <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
        <div className="container-for-boxes">
            <div className="info-container">
                <div className="box-img"><img src={benefits1} alt=""/></div>
                <div className="box-text"><p>Получите груз вовремя, в установленные сроки</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits2} alt=""/></div>
                <div className="box-text"><p>Оперативно отправляем все закрывающие документы</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits3} alt=""/></div>
                <div className="box-text"><p>Вы всегда можете узнать местонахождение Вашего груза</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits4} alt=""/></div>
                <div className="box-text"><p>Наши цены одни из самых конкурентных на рынке</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits5} alt=""/></div>
                <div className="box-text"><p>Каждому клиенту мы выделяем личного менеджера, для связи</p></div>
            </div>
            <div className="info-container">
                <div className="box-img"><img src={benefits6} alt=""/></div>
                <div className="box-text"><p>Гарантии сохранности груза от момента получения до сдачи</p></div>
            </div>
        </div>
        </div>            
    )
}
export default OurAdvantages