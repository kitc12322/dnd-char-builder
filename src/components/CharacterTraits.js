import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "../App.css"
import {useState} from 'react';


const CharacterTraits = ({randTraits, getRandTraits, traitList}) => {

    let [posTrait, setPosTrait] = useState(randTraits[0]);
    let [neuTrait, setNeuTrait] = useState(randTraits[1]);
    let [negTrait, setNegTrait] = useState(randTraits[2]);

    function randomizeTraits(traitList) {
        randTraits = getRandTraits(traitList.traits);

        setPosTrait(randTraits[0]);
        setNeuTrait(randTraits[1]);
        setNegTrait(randTraits[2]);

        return;
    }

    return(
        <>
            <ListGroup className="p-0">
                <ListGroupItem className='list-group-item list-group-item-action'><strong>{posTrait}</strong></ListGroupItem>
                <ListGroupItem className='list-group-item list-group-item-action'><strong>{neuTrait}</strong></ListGroupItem>
                <ListGroupItem className='list-group-item list-group-item-action'><strong>{negTrait}</strong></ListGroupItem>
            </ListGroup>
            <Button className="mt-3 btn btn-danger char-profile-btn" onClick={() => randomizeTraits(traitList)}>Randomize Traits</Button>

        </>
    )
}

export default CharacterTraits;