import React from "react";
import { connect } from "react-redux";
import * as characterActions from "../../redux/actions/characterActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CharacterList from "./CharacterList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import Button from "@material-ui/core/Button";

class CharactersPage extends React.Component {
  state = {
    redirectToAddCharacterPage: false,
  };

  componentDidMount() {
    const { characters, actions } = this.props;

    if (characters.length === 0) {
      actions.loadCharacters().catch((error) => {
        alert("Loading characters failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCharacterPage && <Redirect to="/character" />}
        <h2>Characters</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <Button
              style={{ marginBottom: 20 }}
              variant="contained"
              color="primary"
              onClick={() =>
                this.setState({ redirectToAddCharacterPage: true })
              }
            >
              Add Character
            </Button>

            <CharacterList characters={this.props.characters} />
          </>
        )}
      </>
    );
  }
}

CharactersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  characters: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  debugger;
  return {
    characters: state.characters,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCharacters: bindActionCreators(
        characterActions.loadCharacters,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
