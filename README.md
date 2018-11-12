# Simple Tree

A very simple library for trees with collapsible nodes in HTML.

Written in 2018 by William de Beaumont

To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication along with this software. If not, see http://creativecommons.org/publicdomain/zero/1.0/ .

## Usage

See simple-tree.html for an example. You construct a tree of `div` elements with three basic classes, `subtree`, `node`, and `children`, and call `initTrees()`. If you change it later on, you should call `updateSubtree()` on the relevant `div.subtree` element. Clicking on the `node` child of a `subtree` toggles visibility of its `children` and changes the marker next to the `node`.

You are not restricted to using `div` elements. You can also for example use `ul`, `li`, and `span` elements for the `children`, `subtree`, and `node` classes, respectively.

## Versus something like [jsTree](https://www.jstree.com/)

### Pros

 - You can put anything you want in a `node`: images, form controls, etc.
 - Simple and lightweight; <2kb, no dependencies.
 - Public domain.

### Cons

 - Lacks many built-in UI features like:
  - item selection
  - editing
  - icons (except ▸/▾/▪)
  - connecting lines
  - smooth animation
 - No data structure backing the tree besides the DOM itself.
