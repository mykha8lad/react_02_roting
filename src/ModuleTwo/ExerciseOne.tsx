import image1 from './Memorial_in_Reni_01.jpg'
import image2 from './Reni_gerb.png'
import image3 from './Reni_prapor.png'

export default function ExerciseOne() {
    return (
        <>
        <div className="container">
            <div className="header">
                <h2>City Information</h2>
            </div>
            <div className="content">             
                <p><span>City:</span> Reni</p>
                <p><span>Region:</span> Odessa</p>
                <p><span>Country:</span> Ukraine</p>
                <p><span>Square:</span> 15,24 km<sup>2</sup></p>
                <p><span>First mention:</span> 1548</p>
                <p><span>Center height:</span> 285 m</p>
                <p><span>Climate type:</span> temperate continental</p>
                <p><span>Population:</span> ▼17 736 people (2022)</p>
                <br />
                <div className="images-row">                    
                    <div className="image-description"><img src={image1} alt="" /><span>Memorial</span></div>
                    <div className="image-description"><img src={image2} alt="" /><span>Coat of arms</span></div>
                    <div className="image-description"><img src={image3} alt="" /><span>Flag</span></div>
                </div>
            </div>
        </div>
        <div className="exercise-description">
        Создайте и запустите приложение React, выводящее краткую информацию о вашем городе в браузер. Например: название города, название страны, год основания, несколько фотографий достопримечательностей вашего города.
        </div>
    </>
    )
}