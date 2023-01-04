import { ListGroup, ListGroupItem } from "react-bootstrap";

const CharacterTraits = (traitList) => {

    console.log("trait list")
    console.log(traitList.traitList.traits[0])
    // console.log(traitList)



    let posTraitList = traitList.traitList.traits[0];
    let neuTraitList = traitList.traitList.traits[1];
    let negTraitList = traitList.traitList.traits[2];

    function getRandTrait(traitList) {
        return traitList[Math.floor(Math.random() * traitList.length)];
    }

    return(
        <>
            <ListGroup>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(posTraitList)}</strong></ListGroupItem>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(neuTraitList)}</strong></ListGroupItem>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{getRandTrait(negTraitList)}</strong></ListGroupItem>
            </ListGroup>
        </>
    )
}

export default CharacterTraits;