import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Row, Col, Card, CloseButton, Image, Form, Button} from 'react-bootstrap';
import CharacterTraits from './CharacterTraits';

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
        console.
        console.log('failed to choose a portrait')
    }
    return(<Image width="250" src={srcUrl} alt={altText} />)
}

const CharacterProfile = ({quizData, onCloseProfile, traitList}) => {
    let [nameChangeMode, setNameChangeMode] = useState(false)
    let [charName, setCharName] = useState("Choose Your Name")

    return(
        <>
            <Card className="mb-3">
              <Card.Header>
                <Row className='mt-2'>
                  <Col>
                    {!nameChangeMode && 
                    <h4>{charName}</h4>}

                    {nameChangeMode && 
                    <Form.Group as={Col}>
                        <Form.Label visuallyHidden>Character Name</Form.Label>                        
                        <Form.Control type="text" placeholder="Enter character name" onChange={(e) => setCharName(e.target.value)}/>
                    </Form.Group>}
                  </Col>
                  <Col>
                    <Button className="d-flex btn btn-sm" onClick={() => setNameChangeMode(!nameChangeMode)}>Change Name</Button>
                  </Col>
                  <Col className='d-flex align-items-center justify-content-end'>
                    <CloseButton onClick={() => onCloseProfile(false)} className="float-end"></CloseButton>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className='p-4'>
                  <Col md="7">
                    <CharacterPortrait quizData={quizData}/>
                  </Col>
                  <Col md="5">
                    <Row className='d-flex justify-content-center'>
                        <h4 as="Col"><CharacterAlignment quizData={quizData}/></h4>
                    </Row>
                    <Row>
                        <h1 as="Col"><CharacterClass quizData={quizData} /></h1>
                    </Row>
                <Row>
                  <Col md="8">
                    <CharacterTraits traitList = {traitList}/>
                    {/* <ListGroup>
                        <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(posTraitList)}</strong></ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(neuTraitList)}</strong></ListGroupItem>
                        <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(negTraitList)}</strong></ListGroupItem>
                    </ListGroup> */}
                  </Col>
                </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
        </>
    )
}

export default CharacterProfile;