import { A } from "@solidjs/router";
import Youtube from "../components/youtube";
//import skelbimas from "../assets/images/skelbimas.png";

function Home() {
  return (
    <div class="body">
      <div id="wrapper">
        <header id="header">
          <div class="content">
            <div class="inner">
              <h1>Rathajatra - taikos formulė</h1>
              <h2>Visatos Viešpaties šventė</h2>
              <h3>Lai visi būna laimingi</h3>
              <h3>
                Vilniuje, 2025 m. birželio 8 d. 12 val. Rotušės aikštėje, 14
                val. V. Kudirkos aikštėje
              </h3>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <A href="/main/svente">Šventė</A>
              </li>
              <li>
                <A href="/main/programa">Programa</A>
              </li>
              <li>
                <A href="/main/motyvacija">Motyvacija</A>
              </li>
              <li>
                <A href="/main/parama">Parama</A>
              </li>
              <li>
                <A href="/main/apie">Apie mus</A>
              </li>
              <li>
                <A href="/main/kontaktai">Kontaktai</A>
              </li>
            </ul>
          </nav>
          <div class="youtube-container">
            <Youtube className="youtube" src="https://www.youtube.com/embed/dAFzdtntdPw" title="Rathajatros vaizdo klipas" />
          </div>
        </header>

        <footer id="footer">
          <A class="link" href="/tags/rathayatra">
            #Rathayatra
          </A>
          ,{" "}
          <A class="link" href="/tags/iskcon">
            #ISKCON
          </A>
          ,{" "}
          <A class="link" href="/tags/krishna">
            #Krišna
          </A>
          ,{" "}
          <A class="link" href="/tags/harekrishna">
            #HareKrišna
          </A>
          ,{" "}
          <A class="link" href="/tags/jagannatha">
            #Jagannatha
          </A>
          ,{" "}
          <A class="link" href="/tags/reinkarnacija">
            #Reinkarnacija
          </A>
          ,{" "}
          <A class="link" href="/tags/karma">
            #Karma
          </A>
          ,{" "}
          <A class="link" href="/tags/bhakti">
            #Bhakti
          </A>
          ,{" "}
          <A class="link" href="/tags/absoliutitiesa">
            #AbsoliutiTiesa
          </A>
          ,{" "}
          <A class="link" href="/tags/prabhupada">
            #Prabhupada
          </A>
          ,{" "}
          <A class="link" href="/tags/bhaktijoga">
            #BhaktiJoga
          </A>
          ,{" "}
          <A class="link" href="/tags/ahimsa">
            #Ahimsa
          </A>
          ,{" "}
          #Caitanya, #AšNesuŠisKūnas, #Santarvė,
          #VienasDievasVisiems, #MeilėDievui, #MeilėArtimui, #Vienybė,
          #Vaišnavai, #KrišnosFestivaliai, #ŠventėMiestui, #joga, #Indija,
          #KarmosTaškai, #Atvirumas, #Grožis, #TikKartąMetuose, #BeribėMalonė,
          #SeeAllBeingsWithEqualVision, #RestartReligion, #ŠluokDievuikKelią,
          #LaimingasŽmogus, #Mantra, #meditation, #SavęsPažinimas, #SielosSiela,
          #DevaDeva, #SieląIšvaduojantiTarnystė, #DasaDasaAnudasa, #Santarvė,
          #Kirtana, #Sankirtana, #FoodForLife, #MaistasKūnuiIrSielai, #NoDrugs,
          #Nityananda, #GyvenimoEsmė, #HighThinkingSimpleLiving, #BackToGodhead,
          #AtgalNamoPasDievą, #FinalSale, #Gauranga, #Radha, #Vilniečiams,
          #ŠokiaiViešpačiui, #Prasadas, #Vrindavanas, #Gopės, #Vedos,
          #BhagavadGita, #ŠrimadBhagavatam, #40MetųLietuvoje
        </footer>
        <A class="button" href="/istorijos">
          APIE DŽAGANATĄ
        </A>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.hey.lt/details.php?id=rathayatra2023"
        >
          <img
            width="88"
            height="31"
            border="0"
            src="https://www.hey.lt/count.php?id=rathayatra2023"
            alt="Hey.lt - Nemokamas lankytojų skaitliukas"
          />
        </a>
      </div>
      <div id="bg"></div>
    </div>
  );
}

export default Home;
