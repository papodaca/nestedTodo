import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as categoryActions from '../actions/categoryActions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.data.complete,
      title: ""
    };
  }

  onChangeCheckbox(event) {
    let checked = $(event.target).is(':checked');
    this.setState({
      checked: checked
    });
    this.props.actions.updateTodo(this.props.category, {
      ...this.props.data,
      complete: checked
    });
  }

  startEdit(event) {
    event.preventDefault();
    this.setState({
      edit: true,
      title: this.props.data.title
    });
  }

  finishEdit(event) {
    event.preventDefault();
    this.props.actions.updateTodo(this.props.category, {
      ...this.props.data,
      title: new String(this.state.title)
    });
    this.setState({
      edit: false,
      title: ""
    });
  }

  onChangeEdit(event) {
    this.setState({
      title: event.target.value
    });
  }

  archive(event) {
    event.preventDefault();
    this.props.actions.updateTodo(this.props.category, {
      ...this.props.data,
      archived: !this.props.data.archived
    });
  }

  destroy(event) {
    event.preventDefault();
    this.props.actions.destroyTodo(this.props.category, this.props.data);
  }

  render() {
    let label = "";
    let editInput = "";
    let edit = "";
    if(this.state.edit) {
      editInput = (
        <div className="form-group" style={{marginBottom: '0', display: 'inline-block'}}>
          <input
            type="text"
            className="form-control"
            placeholder="Todo"
            value={this.state.title}
            onChange={this.onChangeEdit.bind(this)}/>
        </div>
      );
      edit = (
        <button className="btn btn-default btn-sm" onClick={this.finishEdit.bind(this)}>
          <i className="fa fa-floppy-o" aria-hidden="true"></i>
          <span className="sr-only">Save</span>
        </button>
      );
    } else {
      label = this.props.data.title;
      edit = (
        <button className="btn btn-default btn-sm" onClick={this.startEdit.bind(this)}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          <span className="sr-only">Edit</span>
        </button>
      );
    }
    return (
      <li className="list-group-item">
        <div className="checkbox" style={{display: 'inline-block'}}>
          <label style={Object.assign({fontWeight: 'normal'}, this.state.checked && {textDecoration: 'line-through', color: '#c2c2c2'})}>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.onChangeCheckbox.bind(this)}/>
            &nbsp;&nbsp;&nbsp;{label}
          </label>
          {editInput}
        </div>
        <div className="btn-group pull-right" style={{marginTop: '5px'}}>
          {edit}
          <button className="btn btn-default btn-sm" onClick={this.archive.bind(this)}>
            <i className="fa fa-archive" aria-hidden="true"></i>
            <span className="sr-only">Archive</span>
          </button>
          <button className="btn btn-danger btn-sm" onClick={this.destroy.bind(this)}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            <span className="sr-only">Delete</span>
          </button>
        </div>
      </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
