const ScrollSideItems = [
    {
        title: "Хэвлэлийн мэдээ",
        paragraph:"Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ "
    },
]
const ScrollSides = () => {
    return (
        <div className="scrollSide-container">
            {ScrollSideItems.map((set) => {
                return (
                    <div className="scrollSide-content">
                        <h5>{set.title}</h5>
                        <h2>{set.paragraph}</h2>
                    </div>
                )
            })
            }
        </div>
    )
}
export default ScrollSides;