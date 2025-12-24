import { A } from "@solidjs/router";

const Istorijos = () => {
  return (
    <div class="body is-article-visible">
      <main id="wrapper">
        <h1>Džagannathos istorijos</h1>
        <ul class="no-bullets align-center">
          <li>
            <A class="link" href="/stories/purioLegendos">
              Džagannatha Purio Legendos
            </A>
          </li>
          <li>
            <A class="link" href="/stories/charchika">
              Mādaḷā Pāñjī pasakojimas apie deivę Čarčiką
            </A>
          </li>
          <li>
            <A class="link" href="/stories/gitaGovinda">
              Gita Govinda
            </A>
          </li>
          <li>
            <A class="link" href="/stories/gitaPanda">
              Gita Panda
            </A>
          </li>
          <li>
            <A class="link" href="/stories/bandhuMohanty">
              Bandhu Mohanty ir Viešpats Džagannatha
            </A>
          </li>
          <li>
            <A class="link" href="/stories/isdidusBhaktas">
              Viešpats Džagannatha ir išdidus bhaktas: tikra istorija
            </A>
          </li>
          <li>
            <A class="link" href="/stories/kilme">
              Kaip atsirado ši unikali Viešpaties Džagannathos forma
            </A>
          </li>
          <li>
            <A class="link" href="/stories/musulmonas">
              Viešpačiai ir musulmonas
            </A>
          </li>
          <li>
            <A class="link" href="/stories/epidemija">
              Viešpats Džagannatha ir epidemija
            </A>
          </li>
          <li>
            <A class="link" href="/stories/vagyste">
              Kaip brahmanai bandė pavogti Džagannathą
            </A>
          </li>
          <li>
            <A class="link" href="/stories/bauri">
              Dasia Bauri ir Viešpats Džagannatha
            </A>
          </li>
          <li>
            <A class="link" href="/stories/ganesa">
              Džagannathos ir Ganeša
            </A>
          </li>
          <li>
            <A class="link" href="/stories/hanumanas">
              Aštuonrankis Hanumanas
            </A>
          </li>
          <p></p>
          <li>
            <a
              class="link"
              href="https://jagannathbaladevsubhadra.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "1rem" }}
            >
              Cituojama iš https://jagannathbaladevsubhadra.blogspot.com/
            </a>
          </li>
        </ul>
        <A class="button" href="/">
          ATGAL Į ŠVENTĖS PUSLAPĮ
        </A>
        <a
          target="_blank"
          rel="noopener noreferrer"
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
      </main>
      <div id="bg"></div>
    </div>
  );
}

export default Istorijos