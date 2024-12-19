

 export const NewsItems = [
    {
        title: "Улс төр",
        paragraph: 'Утааны асуудлыг "Яндангүй бүс" гаргаж шийдэх юм гэнэ',
        date: "С.Ангирмаа 12 сарын 19, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/cfd29a6b-73f6-4daf-ad3a-5c431949aedc"
    },
    {
        title: "Зах зээл",
        paragraph: "Ирэх онд нээлтээ хийх ТОП 10 кино",
        date: "М.Хулан 12 сарын 19, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/f4cee43c-b1e6-4211-885b-8dc224a43114"
    },
    {
        title: "Mining 101",
        paragraph: "Оюу толгой орон нутгийн тогтвортой хөгжлийг жил бүр $5 саяар дэмждэг",
        date: "С.Ангирмаа 12 сарын 19, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/6bdb8f4f-f124-421c-995b-863f69858179"
    },
    {
        title: "Хэвлэлийн мэдээ",
        paragraph: "Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ ",
        date: "Lemon Press 12 сарын 18, 2024",
        imgUrl:"https://dash-api.yld.mn/api/image/28b2bfc0-03b5-41d1-befc-0b4e483c81f8"
    },
    {
        title: "Бизнес",
        paragraph: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
        date: "С.Ангирмаа 12 сарын 18, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/90d5d4f6-1b7e-464d-9247-1c137ee7365a"
    },
    {
        title: "Зах зээл",
        paragraph: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
        date: "М.Хулан 12 сарын 18, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2"
    },
    {
        title: "Сурталчилгаа",
        paragraph: "Аз жаргалын амт нэгээр нэмэгдлээ",
        date: "Б. Эмүжин 12 сарын 18, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/0f8170ba-6592-4b0b-91d9-7998db6f9c2f"
    },
    {
        title: "Зах зээл",
        paragraph: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
        date: "С.Ангирмаа 12 сарын 17, 2024",
        imgUrl: "https://dash-api.yld.mn/api/image/58348918-6f3f-48bb-a049-8e8b2f71237e"
    },
]

export const News = () => {
    return (
        <div className="news-container">
            {NewsItems.map((set) => {
                return (
                    <div className="news-new">
                       <div className="news-new-img">
                        <img src={set.imgUrl} alt="" />
                       </div>
                       <div className="news-new-content">
                        <h5>{set.title}</h5>
                        <p>{set.paragraph}</p>
                        <h6>{set.date}</h6>
                       </div>
                    </div>
                )
            })}
        </div>
    )
}