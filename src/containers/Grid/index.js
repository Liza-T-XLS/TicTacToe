import { connect } from 'react-redux';
import Grid from 'src/components/Grid';
import { changeMarkForm } from 'src/actions/tictactoe';

const mapStateToProps = (state) => ({
  grid: state.grid,
});

const mapDispatchToProps = (dispatch) => ({
  changeMarkForm: (id) => {
    dispatch(changeMarkForm(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);
