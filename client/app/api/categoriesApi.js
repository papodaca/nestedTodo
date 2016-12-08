class CategoriesApi {
  constructor() {
    this.req = {
      url: "/api/categories",
      method: "GET"
    };
  }
  makeReq(req, resolve, reject) {
    $.ajax(req).done(resolve).fail(reject);
  }
  all() {
    return new Promise((resolve, reject) => {
      this.makeReq(this.req, resolve, reject);
    });
  }
  get(id) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + id,
        method: 'POST'
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  create(category) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        ...this.req,
        method: 'POST',
        data: category,
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  update(category) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + category.id,
        data: category,
        method: 'PUT'
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  destroy(category) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + category.id,
        method: 'DELETE'
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  createTodo(category, todo) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + category.id + '/todos',
        method: 'POST',
        data: todo
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  updateTodo(category, todo) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + category.id + '/todos/' + todo.id,
        method: 'PUT',
        data: todo
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
  destroyTodo(category, todo) {
    return new Promise((resolve, reject) => {
      var thisReq = {
        url: this.req.url + '/' + category.id + '/todos/' + todo.id,
        method: 'DELETE'
      };
      this.makeReq(thisReq, resolve, reject);
    });
  }
}

export default new CategoriesApi();
