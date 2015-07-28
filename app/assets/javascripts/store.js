DS.RESTAdapter.reopen({
  namespace: 'api/vi'
});

App.Store = DS.Store.extend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});
