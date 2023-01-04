import {Row, Col, Card, Form, Button} from "react-bootstrap";
import {useState} from 'react';
import './Quiz.css';

const Quiz = ({quizData, setShowCharProfile, setQuizData, showCharProfile}) => {

    let [toggleForm, setToggleForm] = useState(true);

    function handleOnChange(e) {
        quizData[e.target.name] = e.target.id
    }

    function handleSubmit(e) {
        for(let key in quizData) {
            if(quizData[key] === "") {
               alert("Please fill out every field in the quiz.")
               return(key)
            }
        }
        console.log(quizData)
        console.log("submitting from Quiz")
        setShowCharProfile(true);
        setQuizData(quizData);
    }

    return(
        <>
            <Card className="mb-3">
                <Card.Header>Quiz
                    {/* <Button size="sm"
                            variant="warning" 
                            className="small float-end" 
                            onClick={() => {setToggleForm(!toggleForm)}}>
                        minimize
                    </Button> */}
                </Card.Header>
                { toggleForm &&
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" onChange={(e) => handleOnChange(e)}>
                            <Row>
                                <Col md="4">
                                    <Form.Label className="form-label me-2 required">Lawful or Chaotic?</Form.Label>
                                </Col>
                                <Col md="8">
                                    <Form.Check inline label="Lawful" name="lawChaos" id="lawful" type="radio"/>
                                    <Form.Check inline label="Neutral" name="lawChaos" id="neutral" type="radio"/>
                                    <Form.Check inline label="Chaotic" name="lawChaos" id="chaotic" type="radio"/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => handleOnChange(e)}>
                            <Row>
                                <Col md="4">
                                    <Form.Label className="form-label me-2 required">Good or evil?</Form.Label>
                                </Col>
                                <Col md="8">
                                    <Form.Check inline label="Good" name="goodEvil" id="good" type="radio"/>
                                    <Form.Check inline label="Neutral" name="goodEvil" id="neutral" type="radio"/>
                                    <Form.Check inline label="Evil" name="goodEvil" id="evil" type="radio"/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => handleOnChange(e)}>
                            <Row>
                                <Col md="4">
                                    <Form.Label className="form-label me-2 required">Magical or Martial?</Form.Label>
                                </Col>
                                <Col md="8" className="">
                                    <Form.Check inline label="Magic" name="magicMartial" id="magic" type="radio"/>
                                    <Form.Check inline label="Martial" name="magicMartial" id="martial" type="radio"/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3" onChange={(e) => handleOnChange(e)}>
                            <Row>
                                <Col md="4">
                                    <Form.Label className="form-label me-2 required">Brains or brawn?</Form.Label>
                                </Col>
                                <Col md="8" className="">
                                    <Form.Check inline label="Brains" name="brainsBrawn" id="brains" type="radio"/>
                                    <Form.Check inline label="Brawn" name="brainsBrawn" id="brawn" type="radio"/>
                                </Col>
                            </Row>
                            </Form.Group>
                        <Button class="btn btn-primary" variant="primary" onClick={handleSubmit} disabled={showCharProfile}>Submit</Button>
                    </Form>
                </Card.Body>
                }
            </Card>
        </>
    )
}

export default Quiz;