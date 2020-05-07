import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  <table className="table">
    <thead>
      <th>Name</th>
      <th>Species</th>
      <th>Career</th>
      <th>Level</th>
      <th />
    </thead>

    <tbody>
      {characters.map((character) => {
        return (
          <tr key={character.id}>
            <td>
              <Link to={"/character/" + character.id}>{character.name}</Link>
            </td>
            <td>{character.species}</td>
            <td>{character.career}</td>
            <td>{character.level}</td>
            <td></td>
          </tr>
        );
      })}
    </tbody>
  </table>;
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
