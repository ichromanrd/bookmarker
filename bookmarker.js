chrome.tabs.getCurrent(function(tab) {
  //return tab.url;
  alert('active url is: ' + tab.url);
});

// chrome.bookmarks.create({
//   'parentId': null,
//   'title': 'Ext bookmark doc',
//   'url': url
// });
