import { connect } from 'react-redux';
import PlayerForm from 'src/components/PlayerInfo/PlayerForm';
import { savePlayerName, displayPlayerName, editPlayerName } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const player = state.players[ownProps.id - 1];
  return ({
    playerName: player.name,
    displayStatus: player.displayName,
  });
};

const mapDispatchToProps = (dispatch) => ({
  savePlayerName: (id, newValue) => {
    dispatch(savePlayerName(id, newValue));
  },
  displayPlayerName: (id) => {
    dispatch(displayPlayerName(id));
  },
  editPlayerName: (id) => {
    dispatch(editPlayerName(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerForm);
