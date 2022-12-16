import {InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap"
// import { BsCheck2 } from "react-icons/bs"

const DropDown = ({orderBy, onOrderByChange, sortBy, onSortByChange}) => {
    return(
        <>
            <DropdownButton
                variant="secondary"
                title="Sort" >
                <Dropdown.Item href="#" onClick={() => onSortByChange('firstName')} >
                    First Name
                </Dropdown.Item>
            </DropdownButton>
        </>
    )
}

const Search = ({query, onQueryChange, orderBy, onOrderByChange, sortBy, onSortByChange}) => {
    return(
        <>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search" 
                            onChange={(event) => {onQueryChange(event.target.value)}} 
                            value={query} />
                <DropDown
                    sortBy = {sortBy}
                    onSortByChange = {mySort => onSortByChange(mySort)}
                    orderBy = {orderBy}
                    onOrderByChange = {mySort => onOrderByChange(mySort)} />
            </InputGroup>
        </>
    )
}

export default Search;