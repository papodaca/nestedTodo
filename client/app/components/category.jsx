import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Todos from './todos';
import * as categoryActions from '../actions/categoryActions';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      title: ""
    };
  }

  startEdit() {
    this.setState({
      showEdit: true,
      title: this.props.data.title
    });
  }

  finishEdit() {
    this.props.actions.updateCategory({
      ...this.props.data,
      title: new String(this.state.title)
    });
    this.setState({
      showEdit: false,
      title: ""
    });
  }

  onChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDelete() {
    this.props.actions.destroyCategory({
      ...this.props.data
    });
  }

  render() {
    let title = "",
        editButton = "";
    if(this.state.showEdit) {
      title = (
        <div className="input-group" style={{display: 'inline-block'}}>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            style={{height: '25px', display: 'inline-block'}}
            value={this.state.title}
            onChange={this.onChange.bind(this)}/>
        </div>
      );
      editButton = (
        <button className="btn btn-default btn-sm" onClick={this.finishEdit.bind(this)} style={{width: '33px'}}>
          <i className="fa fa-floppy-o" aria-hidden="true"></i>
          <span className="sr-only">Save</span>
        </button>
      );
    } else {
      title = <h4
        className="panel-title pull-left"
        style={{paddingTop: '7.5px'}}>{this.props.data.title}</h4>
        editButton = (
          <button className="btn btn-default btn-sm" onClick={this.startEdit.bind(this)} style={{width: '33px'}}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <span className="sr-only">Edit</span>
          </button>
        );
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          {title}
          <div className="btn-group pull-right">
            {editButton}
            <button className="btn btn-danger btn-sm" onClick={this.handleDelete.bind(this)}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
              <span className="sr-only">Delete</span>
            </button>
          </div>
        </div>
        <div className="panel-body">
          <Todos data={this.props.data.todos} category={{title: this.props.data.title, id: this.props.data.id}} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
