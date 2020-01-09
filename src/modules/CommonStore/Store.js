const store = {
  state: {
    names: [
      {
        id: 1,
        value: 'Ron',
      },
      {
        id: 2,
        value: 'Hermoine',
      },
      {
        id: 3,
        value: 'Harry',
      },
      {
        id: 4,
        value: 'Snape',
      },
      {
        id: 5,
        value: 'Slitherin',
      },
      {
        id: 6,
        value: 'Quiddich',
      },
    ],
  },
  pushNewName(newName) {
    this.state.names.push(newName);
  },
  removeName(name) {
    this.state.names.splice(this.state.names.indexOf(name), 1);
  },
};

export default store;
