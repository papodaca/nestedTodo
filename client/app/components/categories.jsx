import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Category from './category';
import * as categoryActions from '../actions/categoryActions';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategory: ""
    };
  }
  handleCreate(event) {
    event.preventDefault();
    this.props.actions.createCategory({
      title: new String(this.state.newCategory)
    });
    this.setState({
      newCategory: ""
    });
  }

  componentWillMount() {
    this.props.actions.loadCategories();
    this.setState({});
  }

  onChange(event) {
    this.setState({
      newCategory: event.target.value
    });
  }

  render() {
    let paramCategories = this.props.slice.categories || [];
    let categories = paramCategories.map((category) => {
      return <Category key={category.id} data={category} />;
    });

    return (<div>
      {categories}
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="New Category"
            value={this.state.newCategory}
            onChange={this.onChange.bind(this)}/>
        </div>
        <button
          className="btn btn-success"
          onClick={this.handleCreate.bind(this)}>Create</button>
      </form>
    </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    slice: state.categories,
    ...ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
