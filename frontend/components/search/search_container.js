import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_action';

const mapStateToProps = state => {
    // console.log(state.entities.clicked_song);
    return {
        searchResults: Object.values(state.entities.search_results)
    }
};

const mapDispatchToProps = dispatch => {
    // debugger
   return {
   fetchSearchResults: query => dispatch(fetchSearchResults(query))
}};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);