import BTN from "./components/BTN";
import Header from "./components/Header";
import Image from "./components/Image";
import Student from "./components/Student";



function App() {
  return (
    <div>
      <BTN text = {"push me"}/>
      <Header text={"Header 1"}/>
      <Image url={"https://i.pinimg.com/originals/b5/fa/6f/b5fa6f68f194c8efa5af7fbaaf7a43fd.jpg"}  />

      <Student firstName="Student 1" lastName="Student 1" assessment={[5, 4, 5, 3, 2, 4, 5, 4]} />
      <Student firstName="Student 2" lastName="Student 2" assessment={[5, 3, 2, 2, 3]} />
      <Student firstName="Student 3" lastName="Student 3" assessment={[3, 4, 3, 4, 4, 3]} />
      <Student firstName="Student 4" lastName="Student 4" assessment={[3, 3, 3, 3, 3, 3]} />
    </div>
  );
}

export default App;
