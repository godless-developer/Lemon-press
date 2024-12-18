function Header() {
  return (
    <div className="headers">
      <div className="header-start">
        <img src="https://lemonpress.mn/logo/lemonpress.svg" alt="" />
        <div className="header-center">
          <p>Товхимол</p>
          <p>Нийтлэлүүд</p>
          <p>Цувралууд</p>
          <p>Подкаст</p>
          <p>Бидний тухай</p>
        </div>
      </div>
      <div className="header-end">
        <button className="headers-button">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="headers-button-read">Уншаад үзье</button>
      </div>
    </div>
  );
}

export default Header;
