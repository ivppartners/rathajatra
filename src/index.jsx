/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import "./index.css";

//const App = lazy(() => import("./App"));
const Home = lazy(() => import("./routes/home"));
const Main = lazy(() => import("./routes/main"));
const Svente = lazy(() => import("./routes/main/svente"));
const Programa = lazy(() => import("./routes/main/programa"));
const Motyvacija = lazy(() => import("./routes/main/motyvacija"));
const Parama = lazy(() => import("./routes/main/parama"));
const Apie = lazy(() => import("./routes/main/apie"));
const Kontaktai = lazy(() => import("./routes/main/kontaktai"));

const Tags = lazy(() => import("./routes/tags"));
const AbsoliutiTiesa = lazy(() => import("./routes/tags/absoliutitiesa"));
const Ahimsa = lazy(() => import("./routes/tags/ahimsa"));
const Bhakti = lazy(() => import("./routes/tags/bhakti"));
const BhaktiJoga = lazy(() => import("./routes/tags/bhaktijoga"));
const HareKrishna = lazy(() => import("./routes/tags/harekrishna"));
const Iskcon = lazy(() => import("./routes/tags/iskcon"));
const Jagannatha = lazy(() => import("./routes/tags/jagannatha"));
const Karma = lazy(() => import("./routes/tags/karma"));
const Krishna = lazy(() => import("./routes/tags/krishna"));
const Prabhupada = lazy(() => import("./routes/tags/prabhupada"));
const Rathayatra = lazy(() => import("./routes/tags/rathayatra"));
const Reinkarnacija = lazy(() => import("./routes/tags/reinkarnacija"));

const Istorijos = lazy(() => import("./routes/istorijos"));
const Stories = lazy(() => import("./routes/stories"));
const Bandhu = lazy(() => import("./routes/stories/bandhuMohanty"));
const Bauri = lazy(() => import("./routes/stories/bauri"));
const Epidemija = lazy(() => import("./routes/stories/epidemija"));
const Ganesa = lazy(() => import("./routes/stories/ganesa"));
const GitaGovinda = lazy(() => import("./routes/stories/gitaGovinda"));
const GitaPanda = lazy(() => import("./routes/stories/gitaPanda"));
const Hanumanas = lazy(() => import("./routes/stories/hanumanas"));
const IsdidusBhaktas = lazy(() => import("./routes/stories/isdidusBhaktas"));
const Kilme = lazy(() => import("./routes/stories/kilme"));
const Musulmonas = lazy(() => import("./routes/stories/musulmonas"));
const PurioLegendos = lazy(() => import("./routes/stories/purioLegendos"));
const Vagyste = lazy(() => import("./routes/stories/vagyste"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/main" component={Main}>
        <Route path="/svente" component={Svente} />
        <Route path="/programa" component={Programa} />
        <Route path="/motyvacija" component={Motyvacija} />
        <Route path="/parama" component={Parama} />
        <Route path="/apie" component={Apie} />
        <Route path="/kontaktai" component={Kontaktai} />
      </Route>
      <Route path="/tags" component={Tags}>
        <Route path="/absoliutitiesa" component={AbsoliutiTiesa} />
        <Route path="/ahimsa" component={Ahimsa} />
        <Route path="/bhakti" component={Bhakti} />
        <Route path="/bhaktijoga" component={BhaktiJoga} />
        <Route path="/harekrishna" component={HareKrishna} />
        <Route path="/iskcon" component={Iskcon} />
        <Route path="/jagannatha" component={Jagannatha} />
        <Route path="/karma" component={Karma} />
        <Route path="/krishna" component={Krishna} />
        <Route path="/prabhupada" component={Prabhupada} />
        <Route path="/rathayatra" component={Rathayatra} />
        <Route path="/reinkarnacija" component={Reinkarnacija} />
      </Route>
      <Route path="/istorijos" component={Istorijos} />
      <Route path="/stories" component={Stories}>
        <Route path="/bandhuMohanty" component={Bandhu} />
        <Route path="/bauri" component={Bauri} />
        <Route path="/epidemija" component={Epidemija} />
        <Route path="/ganesa" component={Ganesa} />
        <Route path="/gitaGovinda" component={GitaGovinda} />
        <Route path="/gitaPanda" component={GitaPanda} />
        <Route path="/hanumanas" component={Hanumanas} />
        <Route path="/isdidusBhaktas" component={IsdidusBhaktas} />
        <Route path="/kilme" component={Kilme} />
        <Route path="/musulmonas" component={Musulmonas} />
        <Route path="/purioLegendos" component={PurioLegendos} />
        <Route path="/vagyste" component={Vagyste} />
      </Route>
    </Router>
  ),
  root
);
