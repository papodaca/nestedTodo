import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Todo from './todo';
import * as categoryActions from '../actions/categoryActions';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      showArchived: false
    };
  }

  onChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  createTodo(event) {
    event.preventDefault();
    this.props.actions.createTodo(this.props.category, {
      title: this.state.newTodo
    });
    this.setState({
      newTodo: ""
    });
  }

  toggleArchived() {
    this.setState({
      showArchived: !this.state.showArchived
    });
  }

  render() {
    let todos = this.props.data.filter(todo => !todo.archived).map((todo) => {
      return <Todo key={todo.id} data={todo} category={this.props.category} />;
    });
    let archivedTodos = this.props.data.filter(todo => todo.archived).map((todo) => {
      return <Todo key={todo.id} data={todo} category={this.props.category} />;
    });
    let archivedCount = archivedTodos.length;
    archivedTodos = this.state.showArchived ? archivedTodos : [];
    let archivedTitle = "";
    if(archivedCount > 0) {
      archivedTitle = (
        <li className="list-group-item" onClick={this.toggleArchived.bind(this)}>
          <span className="badge">{archivedCount}</span>
          Archived Items
        </li>
      );
    }
    console.log(`todos: ${todos.length}, archivedTodos: ${archivedTodos.length}, archivedCount: ${archivedCount}`);
    return (<div>
      <ul className="list-group">
        {todos}
        {archivedTitle}
        {archivedTodos}
      </ul>
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="New Todo"
            value={this.state.newTodo}
            onChange={this.onChange.bind(this)}/>
        </div>
        <button
          className="btn btn-success"
          onClick={this.createTodo.bind(this)}>Create</button>
      </form>
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
