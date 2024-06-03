import pic03 from "../../assets/images/vilnius-1.webp";

const Kontaktai = () => {
  return (
    <article id="kontaktai">
      <h2 className="major">Susisiekime</h2>
      <span className="image main">
        <img src={pic03} alt="" />
      </span>
      <p>Turite klausimų, pasiūlymų šventės organizatoriams?</p>
      <p>
        <strong>Rašykite mums arba skambinkite:</strong>
        <br />
        Šatakula d.: satakula(eta)gmail.com, +370 670 69480
        <br />
        Vilniaus Hare Krišna centro svetainė internete - <a href="https://www.gauranga.lt" target="_blank" rel="noopener noreferrer">www.gauranga.lt</a>
      </p>
      <p>
        <strong>Arba ateikite pas mus:</strong>
        <br />
        Vilniaus Harė Krišna centras
        <br />
        Raugyklos g. 23-1, Vilnius.
        <br />
        Atidaryta kasdien nuo: 4:30 - 21:00
      </p>
    </article>
  );
};

export default Kontaktai;
