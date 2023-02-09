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
        <div class="namesub">
          <h1 class="name">Hi, I'm Robert Gan</h1>
          <h3 class="subtitle">
            Software Engineer from North Carolina solving modern problems with
            modern technology
          </h3>
        </div>
        <div class="down-arrow" onClick={handleClickScroll}>
          <FontAwesomeIcon icon="fa-solid fa-angle-down" />
        </div>
      </div>
    </div>
  );
}
export default Home;
