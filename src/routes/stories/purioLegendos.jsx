import Youtube from "../../components/youtube";

const PurioLegendos = () => {
  return (
    <article id="purioLegendos">
      <h2 className="major">Džaganatha Purio Legendos</h2>
      <div>
        <Youtube className="youtube-embed"
          src="https://www.youtube.com/embed/ARfiIiJovGY"
          title="Džaganatha Purio Legendos. National Geographic filmas lietuvių kalba."
        />
      </div>
      <p>
        Džaganatha Purio Legendos yra dokumentinis filmas rodytas per
        Nacionalinės Geografijos kanalą. Rajeev Khandelwal pasiims mus į Purį,
        Orisos valstijoje, pažiūrėti garsiąją Viešpaties Džaganathos, Viešpaties
        Balabhadros ir Devi Subhadros Rathajatrą. Kartu su juo ištirti didingą
        Džaganathos šventyklos architektūrą ir sužinoti, kaip ši Jatra suburia
        kartu įvairias kultūras, religijas ir mitologiją. Originali serija anglų
        kalba yra internete adresu:{' '}
        <a href="https://youtu.be/VI0RLlQ6dZg">https://youtu.be/VI0RLlQ6dZg</a>
      </p>
    </article>
  )
}

export default PurioLegendos
