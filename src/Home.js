import * as React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById("aboutme");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="jumbotron" id="home">
      <div>
        <h1 class="name">
          Hi, I'm
          <span> Robert</span>
          <span> Gan</span>
        </h1>
        <h3 class="subtitle">
          <span>Software Engineer </span> and
          <span> Maker </span> from North Carolina
        </h3>
      </div>
      <div class="down-arrow" onClick={handleClickScroll}>
        <FontAwesomeIcon icon="fa-solid fa-angle-down" inverse />
      </div>
    </div>
  );
}
export default Home;
