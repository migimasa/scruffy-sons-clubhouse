import React from "react";
import { connect } from "react-redux";
import * as characterActions from "../../redux/actions/characterActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CharacterList from "./CharacterList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

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
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-character"
              onClick={() =>
                this.setState({ redirectToAddCharacterPage: true })
              }
            >
              Add Character
            </button>

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
