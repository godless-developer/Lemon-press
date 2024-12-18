const ThreeNewsItems = [
  {
    title: "Зах зээл",
    paragraph: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
    date: "С.Ангирмаа / 12 сарын 17, 2024",
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

const ThreeNews = () => {
  return (
    <div className="threenews-container">
      <div className="threenews-top"></div>
      {ThreeNewsItems.map((set) => {
        return (
          <div className="threenews-bottom">
            <h3>{set.title}</h3>
            <p>{set.paragraph}</p>
            <h4>{set.date}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default ThreeNews;
