import "./App.css";
import { Button } from "./button";
import { HeadOne } from "./head1";
import { HeadTwo } from "./head2";
import { HeadThree } from "./head3";

function App() {
  return (
    <fragment>
      <HeadOne />
      <HeadTwo />
      <HeadThree />
      <Button />
    </fragment>
  );
}

export default App;
