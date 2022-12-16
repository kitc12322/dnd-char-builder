import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";

const CharacterTraits = (traitList) => {

    // let [traitList, setTraitList] = useState([]);

    // var responseClone;
    // // fetching traitList from traitList.json
    // const fetchData = useCallback(() => {
    //     fetch('./traitList.json')
    //     .then((response) => {
    //         responseClone = response.clone();
    //         return response.json();
    //     })
    //     .then((data) => {
    //         setTraitList(data)
    //         }, (rejectionReason) => {
    //             console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    //             responseClone.text() // 5
    //             .then(function (bodyText) {
    //             console.log('Received the following instead of valid JSON:', bodyText); // 6
    //         });
    //     });
    // }, []);

    // useEffect(() => {
    //     fetchData()
    // }, [fetchData])


    console.log("trait list")
    console.log(traitList.traitList.traits[0])
    // console.log(traitList)



    let posTraitList = traitList.traitList.traits[0];
    let neuTraitList = traitList.traitList.traits[1];
    let negTraitList = traitList.traitList.traits[2];

    // let posTraitList = [1,2,3,4,5];
    // let neuTraitList = [1,2,3,4,5];
    // let negTraitList = [1,2,3,4,5];

    // randomly select trait
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