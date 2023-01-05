import { ListGroup, ListGroupItem } from "react-bootstrap";

const CharacterTraits = ({randTraits}) => {
    return(
        <>
            <ListGroup>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{randTraits[0]}</strong></ListGroupItem>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{randTraits[1]}</strong></ListGroupItem>
                <ListGroupItem className='d-flex justify-content-center list-group-item-action'><strong>{randTraits[2]}</strong></ListGroupItem>
            </ListGroup>
        </>
    )
}

export default CharacterTraits;