 export const EmailBoxs = () => {
    return (
        <div className="EmailBoxs-container">
            <div className="EmailBoxs-content">
                <h4>NEWSLETTER</h4>
                <div className="EmailBoxs-content-h2">
                    <h2>Хөрөнгө оруулалт , бизнесийн тоймийг</h2>
                    <p>5 минутад</p>
                </div>
                <div className="EmailBoxs-content-email">
                    <input type="email" />
                    <label htmlFor=""></label>
                    <button>Уншаад үзье</button>
                </div>
                <div className="EmailBoxs-content-p">
                   <p>Таны шийдвэр гаргалтад зайлшгүй хэрэгтэй мэдээллийг агуулсан имэйл товхимлыг ажлын өдөр бүр, өглөө 07:00 цагт үнэгүй илгээнэ.</p>
                </div>
            </div>
        </div>
    )
}