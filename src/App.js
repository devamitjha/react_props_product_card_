import React from 'react';
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="What is Lorem Ipsum?"
          images="../images/batman.png"
          old_price="9,999"
          newPrice="9999"
          rupess="$"
          alt="batman"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          images="../images/blackpanter.png"
          old_price="599"
          newPrice="500"
          rupess="&#x20B9;"
          alt="blackpanter"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          images="../images/arthur.png"
          old_price="7999"
          newPrice="7000"
          rupess="$"
          alt="arthur"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          images="../images/kashima.png"
          old_price="999"
          newPrice="500"
          rupess="$"
          alt="kashima"
          exp_date="25-10-2020"
        />
      </div>
    </div>
  );
}
export default App;