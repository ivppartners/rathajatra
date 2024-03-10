import { A, Outlet, useNavigate } from "@solidjs/router";
import { onCleanup, onMount } from "solid-js";

const Tags = () => {
  const navigate = useNavigate();
  let ref;

  const handleClick = (event) => {
    if(!ref.contains(event.target)) {
      navigate("/");
    };
  };

  onMount(() => {
    document.addEventListener('click', handleClick);
  });
  
  onCleanup(() => {
    document.removeEventListener('click', handleClick);
  });

  return (
    <div class="body is-article-visible">
      <main id="wrapper">
        <div id="main" ref={ref}>
          <Outlet />
          <A href="/" title="Uždaryti">
            <div class="close" />
          </A>
        </div>
      </main>
      <div id="bg"></div>
    </div>
  );
}

export default Tags;