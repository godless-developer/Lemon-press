const ThreeNewsItems1 = [
    {
      title: "Зах зээл",
      paragraph: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
      date: "С.Ангирмаа / 12 сарын 17, 2024",
      imgUrl: "",
    },
    {
      title: "Эдийн засаг",
      paragraph: "Казакстаны хөгжлийн цаана",
      date: "М.Хулан / 12 сарын 17, 2024",
    },
    {
      title: "Эдийн засаг",
      paragraph:
        "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
      date: "М.Хулан / 12 сарын 16, 2024",
    },
];

  
  const ThreeNews1 = () => {
    return (
      <div className="threenews1-container">
        <img src="https://dash-api.yld.mn/api/image/f64012ed-9f61-469c-934e-593a79b152d2" alt="" />
        {ThreeNewsItems1.map((set) => {
          return (
            <div className="threenews1-bottom">
              <h3>{set.title}</h3>
              <p>{set.paragraph}</p>
              <h4>{set.date}</h4>
            </div>
          );
        })}
      </div>
    );
  };
  export default ThreeNews1;