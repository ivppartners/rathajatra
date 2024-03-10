import pic01 from '../../assets/images/jagannatha.webp'
import Youtube from "../../components/youtube";

const Intro = () => {
  return (
    <article id="kas" >
      <h2 className="major">Šventė</h2>
      <span className="image main">
        <Youtube className="youtube-embed" src="https://www.youtube.com/embed/k6ooCyBghXg?start=16" title="Rathajatra Vilnius, 2019" />
      </span>
      <h3>Visatos Viešpaties vežimų šventė</h3>
      <p>
      Kviečiame Indijos mylėtojus, dvasingumo ir Absoliučios Tiesos ieškotojus, religijų vienytojus ir visus kitus smalsuolius į džiaugsmingą šventę, kurios giliausioji prasmė – pasodinti Džaganathą - pasaulio Viešpatį, visų religijų Viešpatį į savo širdies vežimą ir prieraišumo virvėmis nutempti jį į tikruosius sielos namus, kur nėra sielvarto, nerimo, baimės ir priešiškumo. Ši šventė daugialypė, nes nežinia, ar Dievas Pats mus veda į sąjungą su juo, ar mes pirmi pakviečiame Jį į susitikimą. Aišku tik viena, kad namai, į kuriuos savo širdies vežime mes visi jį tempiame, yra ir Dievo ir mūsų namai. Nors ši šventė labai spalvinga ir triukšminga, vis tik ji yra širdies ir ramybės šventė. Traukdami vežimą su Pasaulio Viešpačiu - Džaganatha, kuris apima Vedų trejybę – Egzistenciją, Suvokimą ir Palaimą (atitinkamai Baladeva, Krišna ir Subhadra) miesto gatvėmis, mes pirmiausia atliekame vidinį veiksmą – pakviečiame Viešpatį atsisėsti mūsų širdies vežime, ir traukiame jį širdies vežime į susitikimo vietą – sielos namus, kuriuos Vedos vadina Vrindavanu. 
      </p>
      <span className="image main">
        <img src={pic01} alt="" />
      </span>
      <p>
      Džaganatha (sanskr. jagan nātha – visatos viešpats) – pati džiaugsmingiausia Dievo forma: Jo akys išsiplėtusios iš meilės, šypsena - per visą veidą, ir net rankos susitraukusios į kūną iš malonumo, matant Jį šlovinančius atsidavusius žmones. Džiaugsmas užlieja ir kiekvieną dalyvaujantį festivalyje: skambant Harė Krišna mantrai, būgnams, cimbolams ir kitiems instrumentams, žmonės šoka iš laimės, ta nuotaika užkrėsdami ir praeivius. Žmonės dažnai nustemba ir nušvinta – niekada nėra matę tiek tikro džiaugsmo, nors ši šventė švenčiama be jokių svaigalų!
      </p>
      <p>
        <i>
          rathārūḍho gacchan pathi milita-bhūdeva-paṭalaiḥ
          <br />
          stuti-prādurbhāvam prati-padam upākarṇya sadayaḥ
          <br />
          dayā-sindhur bandhuḥ sakala jagatāṁ sindhu-sutayā
          <br />
          jagannāthah svāmī nayana-patha-gāmī bhavatu me (5)
        </i>
      </p>
      <p>
        "Kuomet Džaganatha juda keliu Savo vežime, kiekvieną žingsnį dideli būriai brahmanų garsiai gieda maldas ir dainuoja dainas Jo malonumui. Klausydamasis jų himnų, Džaganatha labai palankiai nusiteikia jų atžvilgiu. Jis yra malonės vandenynas ir tikrasis visų pasaulių draugas. Lai Džaganatha kartu su savo sutuoktine Lakšme, gimusia iš nektaro vandenyno, pasirodys mano akims." ("Šri Džaganatha aštaka, 5")
      </p>
      <p>
      Rathajatra (sanskr. ratha yatra - vežimų šventė), kurios prasmė aprašyta aukščiau, tūkstančius metų kasmet švenčiama Indijoje, Odišos valstijoje, Puryje – mieste prie vandenyno. Ji sutraukia milijonus įvairiausių tikėjimų žmonių iš viso pasaulio. 1968 m. ISKCON įkūrėjas-ačarja A.C. Bhaktivedanta Svami Prabhupada surengė pirmąją Rathajatros šventę Vakarų pasaulyje. Ši šventė dabar vyksta daugybėje miestų pasaulyje. Lietuvoje pirmoji Rathajatros šventė įvyko 1992 m.
      </p>
      <Youtube className="youtube-embed" src="https://www.youtube.com/embed/09Z3wBGkar0" title="Rathajatra Puryje, 2019" />
    </article>
  )
}

export default Intro
