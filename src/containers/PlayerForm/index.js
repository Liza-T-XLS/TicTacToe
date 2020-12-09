import { connect } from 'react-redux';
import PlayerForm from 'src/components/PlayerForm';
import { savePlayerName, displayPlayerName, editPlayerName } from 'src/actions/tictactoe';

const mapStateToProps = (state, ownProps) => {
  const playerName = 'playerName' + ownProps.id;
  const displayStatus = 'displayPlayerName' + ownProps.id;
  return ({
    playerName: state.[playerName],
    displayStatus: state.[displayStatus],
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
