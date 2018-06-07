chrome.storage.local.get('squares', obj => {
  let squares = obj.squares;
  if (squares) {
    squares = JSON.parse(squares);
    const len = squares.filter(square => !todo.matched).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '1' });
  }
});
