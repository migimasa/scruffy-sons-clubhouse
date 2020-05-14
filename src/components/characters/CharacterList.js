import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CharacterList = ({ characters }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="character table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Career</TableCell>
            <TableCell>Level</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {characters.map((character) => {
            return (
              <TableRow key={character.id}>
                <TableCell>
                  <Link to={"/character/" + character.id}>
                    {character.name}
                  </Link>
                </TableCell>
                <TableCell>{character.species}</TableCell>
                <TableCell>{character.career}</TableCell>
                <TableCell>{character.level}</TableCell>
                <TableCell />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

const useStyles = makeStyles({
  table: {
    minWidthd: 650,
  },
});

export default CharacterList;
