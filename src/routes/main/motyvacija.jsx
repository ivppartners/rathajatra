import pic03 from '../../assets/images/rathayatra.webp'
import Youtube from "../../components/youtube";

const Motyvacija = () => {
    return (
        <article id="kodel">
          <h2 className="major">Motyvacija</h2>
          <Youtube className="youtube-embed" src="https://www.youtube.com/embed/wy55mL2QG7A" title="Rathajatros vaizdo klipas" />
          <p>"Pasistenkite suprasti Džaganathą. Jagat reiškia judantį pasaulį, gacchati iti jagat. Sanskrito žodis gacchati reiškia tai, kas juda - visos šios planetos, visata, saulė - viskas juda, ir mes judame. Jagat-nātha, nātha reiškia šeimininką ir savininką. Todėl Džaganatha reiškia viso šio judėjimo savininką ar šeimininką. O Balabhadra, Balarāma - Bala reiškia stiprybę, o rāma reiškia malonumą. Balarāma reiškia tą, kuris jums duoda dvasinę stiprybę, kad galėtumėte mėgautis amžinu palaimingu gyvenimu. Subhadrā - su reiškia palankią, o bhadra reiškia gerovę. Subhadra, Džagannatha ir Balarama čia yra kartu, kad ištrauktų jus visus iš apgailėtinos gyvenimo būklės. Tokia šios Rathajatros paskirtis! Jei kas nors pamatys Džaganathą, Subhadrą ir Baladevą vežime, jam nebereikės dar kartą gimti šiame materialiame pasaulyje. Ratheja vamanaṁ dṛṣṭa.“ (Prabhupada, 1970-07-05 San Fransisko Rathajatra)</p>
          <span className="image main"><img src={pic03} alt="" /></span>
        </article>
    );
};

export default Motyvacija;