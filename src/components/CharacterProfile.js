import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Row, Col, Card, CloseButton, Image, Form, Button} from 'react-bootstrap';
import CharacterTraits from './CharacterTraits';
import '../App.css';

const CharacterClass = ({quizData}) => {
    if(quizData.magicMartial === "magic") {
        return quizData.brainsBrawn === "brains" ? "WIZARD" : "PALADIN"
    } else {
        return quizData.brainsBrawn === "brains" ? "ROGUE" : "BARBARIAN"
    }
}

const CharacterAlignment = ({quizData}) => {
    let lawChaos = quizData.lawChaos;
    let goodEvil = quizData.goodEvil;

    return lawChaos === goodEvil ? "true neutral" : lawChaos + " " + goodEvil
    }

const CharacterPortrait = ({quizData}) => {
    let srcUrl = ""
    let altText = ""

    if(CharacterClass({quizData}) === "WIZARD") {
        srcUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png"
        altText = "wizard"
    } else if(CharacterClass({quizData}) === "PALADIN") {
        srcUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/365/420/618/636272701937419552.png"
        altText = "pally"
    } else if(CharacterClass({quizData}) === "BARBARIAN") {
        srcUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png"
        altText = "barb"
    } else if(CharacterClass({quizData}) === "ROGUE") {
        srcUrl = "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png"
        altText = "rogue"
    } else {
        console.log('failed to choose a portrait')
    }
    return(<Image width="250" src={srcUrl} alt={altText} />)
}

const CharacterProfile = ({quizData, onCloseProfile, randTraits, getRandTraits, traitList}) => {
    let [nameChangeMode, setNameChangeMode] = useState(false)
    let [charName, setCharName] = useState("Choose Your Name")

    function randomizeTraits(getRandTraits, traitList) {
        let newTraits = getRandTraits(traitList);


      return;
    }

    return(
        <>
            <Card className="mb-3 char-prof-container">
              <Card.Header>
                <Row className='my-2 char-prof-title-container'>
                  <Col>
                    <Button className="btn btn-primary btn-sm" onClick={() => setNameChangeMode(!nameChangeMode)}>Change Name</Button>
                  </Col>
                  <Col className='char-name'>
                    {!nameChangeMode && 
                    <h4>{charName}</h4>}

                    {nameChangeMode && 
                    <Form.Group as={Col}>
                        <Form.Label visuallyHidden>Character Name</Form.Label>                        
                        <Form.Control type="text" placeholder="Enter character name" onChange={(e) => setCharName(e.target.value)}/>
                    </Form.Group>}
                  </Col>
                  <Col>
                    <CloseButton onClick={() => onCloseProfile(false)} className="float-end"></CloseButton>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className='p-4 mx-5'>
                  <Col md="6">
                    <CharacterPortrait quizData={quizData}/>
                  </Col>
                  <Col md="6" className="char-prof-text-container">
                    <Row className='d-flex justify-content-center'>
                        <h4 as="Col" className='char-prof-container'><CharacterAlignment quizData={quizData}/></h4>
                    </Row>
                    <Row>
                        <h1 as="Col"><CharacterClass quizData={quizData} /></h1>
                    </Row>
                    <Row>
                        <CharacterTraits randTraits = {randTraits} getRandTraits={() => getRandTraits(traitList)} traitList={traitList}/>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
        </>
    )
}

export default CharacterProfile;