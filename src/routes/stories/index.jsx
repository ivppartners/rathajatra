import { A, useNavigate } from "@solidjs/router";
import { onCleanup, onMount } from "solid-js";

export default function Stories(props) {
  const navigate = useNavigate();
  let ref;

  const handleClick = (event) => {
    if (!ref.contains(event.target)) {
      navigate("/istorijos");
    }
  };

  onMount(() => {
    document.addEventListener("click", handleClick);
  });

  onCleanup(() => {
    document.removeEventListener("click", handleClick);
  });

  return (
    <div class="body is-article-visible">
      <main id="wrapper">
        <div id="main" ref={ref}>
          {props.children}
          <A href="/istorijos" title="Uždaryti">
            <div class="close" />
          </A>
        </div>
      </main>
      <div id="bg"></div>
    </div>
  );
}
