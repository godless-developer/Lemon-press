const OntslohItems = [
  {
    title: "Зах зээл",
    paragraph: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
    date: "М.Хулан / 12 сарын 18, 2024",
  },
];
const Ontsloh = () => {
  return (
    <div className="Ontsloh-container">
      <div className="Ontsloh-top"></div>
      <div>
        {OntslohItems.map((set) => {
          return (
            <div className="Ontsloh-bottom">
              <h6>{set.title}</h6>
              <p>{set.paragraph}</p>
              <h4>{set.date}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ontsloh;
