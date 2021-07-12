import './App.css';
import Greetings from './Greetings'
import DisplayCards from './DisplayCards'
import Random from './Random'
import BoxColor from './BoxColor'
import DisplayCreditCards from './DisplayCreditCards'
import DisplayRating from './DisplayRating'
import DisplayDriverCards from './DisplayDriverCards'
import LikeButton from './LikeButton'

function App() {
  return (
    <>
      <DisplayCards />
      <Greetings
        lang="de"
        children='Ludwig'
      />
      <Greetings
        lang="fr"
        children='François'
      />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <DisplayCreditCards />
      <DisplayRating />
      <DisplayDriverCards />
      <LikeButton />
    </>
  )
}

export default App;
