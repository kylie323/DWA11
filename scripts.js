const { createStore } = Redux;

const initialState = 0;

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}


const store = createStore(counter);


function updateCounter() {
  document.getElementById("counter").innerText = store.getState();
}


store.subscribe(() => {
  console.log('State:', store.getState());
  updateCounter();
});


function addCounter() {
  store.dispatch({ type: 'INCREMENT' });
}

function subtractCounter() {
  store.dispatch({ type: 'DECREMENT' });
}

function resetCounter() {
  store.dispatch({ type: 'RESET' });
  alert("Counter has been reset!");
}


updateCounter();
