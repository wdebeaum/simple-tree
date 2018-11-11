// onclick handler for .node elements that toggles whether the subtree they are
// the root of is expanded or collapsed
function toggleExpandedCollapsed(evt) {
  var subtree = evt.currentTarget.parentNode;
  if (subtree.matches('.collapsed')) {
    subtree.classList.remove('collapsed');
    subtree.classList.add('expanded');
  } else {
    subtree.classList.remove('expanded');
    subtree.classList.add('collapsed');
  }
}

// make sure css classes of subtree t are in a consistent state
function updateSubtree(t, recursive) {
  var kids = t.children;
  var hasChildren = false;
  for (var j = 0; j < kids.length; j++) {
    if (kids[j].matches('.node')) {
      kids[j].onclick = toggleExpandedCollapsed;
    }
    if (kids[j].matches('.children')) {
      hasChildren = true;
      if (recursive) {
	var grandkids = kids[j].children;
	for (var k = 0; k < grandkids.length; k++) {
	  updateSubtree(grandkids[k], true);
	}
      }
      break;
    }
  }
  if (hasChildren && !t.matches('.expanded, .collapsed')) {
    t.classList.remove('leaf');
    t.classList.add('collapsed');
  }
  if ((!hasChildren) && !t.matches('.leaf')) {
    t.classList.remove('expanded');
    t.classList.remove('collapsed');
    t.classList.add('leaf');
  }
}

// update all subtrees in the document
function initTrees() {
  var subtrees = document.querySelectorAll('.subtree');
  for (var i = 0; i < subtrees.length; i++) {
    updateSubtree(subtrees[i], false);
  }
}
