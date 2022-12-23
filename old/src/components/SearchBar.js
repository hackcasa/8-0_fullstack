import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { RiSearchFill } from "react-icons/ri";

function SearchBar() {
  return (
    
    <InputGroup>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroup.Text><RiSearchFill /></InputGroup.Text>
    </InputGroup>
  );
}

export default SearchBar;