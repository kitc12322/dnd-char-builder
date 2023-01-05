import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Quiz from "./components/Quiz";
import {useCallback, useEffect, useState} from 'react';
import CharacterProfile from './components/CharacterProfile';
import './App.css';

function App() {
  
    const initQuizState = {
      lawChaos: "",
      goodEvil: "",
      magicMartial: "",
      brainsBrawn: ""
    }

  let [showCharProfile, setShowCharProfile] = useState(false);
  let [quizData, setQuizData] = useState(initQuizState);
////////////////////////
  let [traitList, setTraitList] = useState([]);

    var responseClone;
    // fetching traitList from traitList.json
    const fetchData = useCallback(() => {
        fetch('./traitList.json')
        .then((response) => {
            responseClone = response.clone();
            return response.json();
        })
        .then((data) => {
            setTraitList(data)
            }, (rejectionReason) => {
                console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
                responseClone.text() // 5
                .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText); // 6
            });
        });
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData])
    //////////////////////////////////////

    function getRandTraits(traitList) {
      let randTraits = [3];
      let sourceTraits = traitList.traits;

      for (let index = 0; index < sourceTraits.length; index++) {
        randTraits[index] = sourceTraits[index][Math.floor(Math.random() * sourceTraits[index].length)];
      }
      return randTraits;
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="my-3">
            <h1 className="text-center"><strong>DnD Character Builder</strong></h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8">
            <Quiz quizData={quizData} showCharProfile={showCharProfile} setShowCharProfile={() => setShowCharProfile(true)} setQuizData={(quizData) => setQuizData(quizData)}  />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {showCharProfile && <CharacterProfile quizData={quizData} onCloseProfile={() => setShowCharProfile(false)} randTraits = {getRandTraits(traitList)} getRandTraits={() => getRandTraits(traitList)} traitList={traitList}/>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
