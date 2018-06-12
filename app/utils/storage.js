function saveState(state) {
  console.log('saving state to chrome', state);
  chrome.storage.local.set(state, () => {});
}

// squares unmatched count
function setBadge(squares) {
  if (chrome.browserAction) {
    const count = squares.filter(square => !square.matched).length;
    chrome.browserAction.setBadgeText({
      text: count > 0 ? count.toString() : ''
    });
  }
}

export default function() {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.squares);
    });
    return store;
  };
}
