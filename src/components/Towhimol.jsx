// import { createElement } from "react";
const TowhimolItems = [
  {
    Date: "Tue, 17 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "✈️🌍 Нэг тэнгэрт нэг л компани",
  },
  {
    Date: "Mon, 16 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар",
  },
  {
    Date: "Sun, 15 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🪙 Крипто самурай Нью-Йоркт",
  },
  {
    Date: "Thu, 12 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    Date: "Wed, 11 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🔮🪄 Accio: Тэр эргэн ирнэ",
  },
  {
    Date: "Tue, 17 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "✈️🌍 Нэг тэнгэрт нэг л компани",
  },
  {
    Date: "Mon, 16 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар",
  },
  {
    Date: "Sun, 15 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🪙 Крипто самурай Нью-Йоркт",
  },
  {
    Date: "Thu, 12 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    Date: "Wed, 11 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🔮🪄 Accio: Тэр эргэн ирнэ",
  },
  {
    Date: "Tue, 17 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "✈️🌍 Нэг тэнгэрт нэг л компани",
  },
  {
    Date: "Mon, 16 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар",
  },
  {
    Date: "Sun, 15 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🪙 Крипто самурай Нью-Йоркт",
  },
  {
    Date: "Thu, 12 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?",
  },
  {
    Date: "Wed, 11 Dec 2024 23:00:00 +0000",
    iconImg: "",
    name: "🔮🪄 Accio: Тэр эргэн ирнэ",
  },
];

/* {<div class="container">
       <div class="header"></div>
       <div class="content">
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
       </div>
</div> }*/
const Scrol = () => {
  return (
    <div className="container">
      <div className="h4">
        <h4>Товхимлууд</h4>
      </div>
      <div className="contents">
        {TowhimolItems.map((set) => {
          return (
            <div className="content">
              <p>{set.Date}</p>
              <h1>{set.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scrol;
