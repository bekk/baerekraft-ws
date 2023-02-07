import { Header } from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import moment from "moment";

import _ from "lodash";

function App() {
  // A simple homepage for a blog
  return (
    <body>
      <Header />
      <Outlet />
      <footer>
        <section id="contact">
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <br />
            <button type="submit">Send</button>
          </form>
        </section>
        <p>Copyright ©{moment(_.now()).format("YYYY")} Techno co.</p>
      </footer>
    </body>
  );
}

export default App;
