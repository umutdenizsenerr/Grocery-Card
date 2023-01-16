import styled from "styled-components";

const SearchBarButtonContainer = styled.div`
  display: flex;
`;

const SearchBarInput = styled.input`
  width: 15em;
  height: 3em;
  border: none;
  background-color: white;
  resize: none;
  outline: none;
  border-radius: 5px;
  text-align: center;
  font-size: 0.85em;
`;

export { SearchBarButtonContainer, SearchBarInput };
