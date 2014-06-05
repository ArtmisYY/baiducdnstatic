/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("tree-node",function(e,t){function n(t,n){n||(n={}),this.id=this._yuid=n.id||this.id||e.guid("treeNode-"),this.tree=t,this.children=n.children||[],this.data=n.data||{},this.state=n.state||{},n.canHaveChildren?this.canHaveChildren=n.canHaveChildren:this.children.length&&(this.canHaveChildren=!0),e.mix(this,n);for(var r=0,i=this.children.length;r<i;r++)this.children[r].parent=this}n.prototype={_isIndexStale:!0,_isYUITreeNode:!0,_serializable:["canHaveChildren","data","id","state"],append:function(e,t){return this.tree.appendNode(this,e,t)},depth:function(){if(this.isRoot())return 0;var e=0,t=this.parent;while(t)e+=1,t=t.parent;return e},empty:function(e){return this.tree.emptyNode(this,e)},find:function(e,t,n){return this.tree.findNode(this,e,t,n)},hasChildren:function(){return!!this.children.length},index:function(){return this.parent?this.parent.indexOf(this):-1},indexOf:function(e){var t;return this._isIndexStale&&this._reindex(),t=this._indexMap[e.id],typeof t=="undefined"?-1:t},insert:function(e,t){return this.tree.insertNode(this,e,t)},isInTree:function(){return this.tree&&this.tree.rootNode===this?!0:!!this.parent&&!!this.parent.isInTree()},isRoot:function(){return!!this.tree&&this.tree.rootNode===this},next:function(){if(this.parent)return this.parent.children[this.index()+1]},prepend:function(e,t){return this.tree.prependNode(this,e,t)},previous:function(){if(this.parent)return this.parent.children[this.index()-1]},remove:function(e){return this.tree.removeNode(this,e)},size:function(){var e=this.children,t=e.length,n=t;for(var r=0;r<t;r++)n+=e[r].size();return n},toJSON:function(){var e={},t=this.state,n,r,i;if(t.destroyed)return null;for(n=0,i=this._serializable.length;n<i;n++)r=this._serializable[n],r in this&&(e[r]=this[r]);if(this.canHaveChildren){e.children=[];for(n=0,i=this.children.length;n<i;n++)e.children.push(this.children[n].toJSON())}return e},traverse:function(e,t,n){return this.tree.traverseNode(this,e,t,n)},_reindex:function(){var e=this.children,t={},n,r;for(n=0,r=e.length;n<r;n++)t[e[n].id]=n;this._indexMap=t,this._isIndexStale=!1}},e.namespace("Tree").Node=n},"3.17.0");
