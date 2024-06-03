import book_image from './book.jpg'

export default function ExerciseThree() {
    return (
        <>
        <div className="container">
            <div className="header">
                <h2>Book Information</h2>
            </div>
            <div className="book-content">             
                <div>
                    <img src={book_image} alt="Book image" />
                </div>
                <div className="book-info">
                    <div>
                        <p><span>Name:</span> <ins>Phenomenology of spirit</ins></p>
                        <p><span>Author:</span> <ins>Hegel Georg Wilhelm Friedrich</ins></p>
                        <p><span>Genre:</span> <ins>Philosophy</ins></p>
                        <p><span>Number of pages:</span> <ins>768</ins></p>
                        <p><span>Year of issue:</span> <ins>1807 year</ins></p>
                    </div>
                    <div>
                        <p>
                        Георг Вильгельм Фридрих Гегель (1770–1831) – всемирно известный мыслитель, один из творцов немецкой классической философии.
«Феноменология духа» – первая из крупных работ Гегеля, явившаяся в то же время первым выражением всей его системы абсолютного идеализма.
В этой работе Гегель делает предметом изучения духовное, оставляя материальное, бездуховное за пределами науки о явлениях духа. Метод, использованный Гегелем в «Феноменологии духа», был использован в дальнейших трудах этого мыслителя и оказал значительное влияние на развитие европейской и мировой философии, получив название «метод Гегеля».
                        </p>
                    </div>
                </div>                
            </div>
        </div>
        <div className="exercise-description">
            Создайте и запустите приложение React, выводящее информацию о вашей любимой книге в браузер. Например: название книги, ФИО автора, жанр книги, количество страниц, несколько рецензий на неё.
        </div>
    </>
    )
}