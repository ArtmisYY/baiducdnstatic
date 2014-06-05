/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("editor-bidi",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)},r="host",i="dir",s="nodeChange",o="bidiContextChange",u="style";e.extend(n,e.Base,{lastDirection:null,firstEvent:null,_checkForChange:function(){var e=this.get(r),t=e.getInstance(),i=new t.EditorSelection,s,u;i.isCollapsed?(s=n.blockParent(i.focusNode,!1,t.EditorSelection.ROOT),s&&(u=s.getStyle("direction"),u!==this.lastDirection&&(e.fire(o,{changedTo:u}),this.lastDirection=u))):(e.fire(o,{changedTo:"select"}),this.lastDirection=null)},_afterNodeChange:function(e){if(this.firstEvent||n.EVENTS[e.changedType])this._checkForChange(),this.firstEvent=!1},_afterMouseUp:function(){this._checkForChange(),this.firstEvent=!1},initializer:function(){var t=this.get(r);this.firstEvent=!0,t.after(s,e.bind(this._afterNodeChange,this)),t.after("dom:mouseup",e.bind(this._afterMouseUp,this))}},{EVENTS:{"backspace-up":!0,"pageup-up":!0,"pagedown-down":!0,"end-up":!0,"home-up":!0,"left-up":!0,"up-up":!0,"right-up":!0,"down-up":!0,"delete-up":!0},BLOCKS:e.EditorSelection.BLOCKS,DIV_WRAPPER:"<DIV></DIV>",blockParent:function(t,r,i){var s=t,o,u;return i=i||e.EditorSelection.ROOT,s||(s=i),s.test(n.BLOCKS)||(s=s.ancestor(n.BLOCKS)),r&&s.compareTo(i)&&(o=e.Node.create(n.DIV_WRAPPER),s.get("children").each(function(e,t){t===0?u=e:o.append(e)}),u.replace(o),o.prepend(u),s=o),s},_NODE_SELECTED:"bidiSelected",addParents:function(t,r){var i,s,o;tester=function(e){if(!e.getData(n._NODE_SELECTED))return o=!1,!0},r=r||e.EditorSelection.ROOT;for(i=0;i<t.length;i+=1)t[i].setData(n._NODE_SELECTED,!0);for(i=0;i<t.length;i+=1)s=t[i].get("parentNode"),!r.compareTo(s)&&!s.getData(n._NODE_SELECTED)&&(o=!0,s.get("children").some(tester),o&&(t.push(s),s.setData(n._NODE_SELECTED,!0)));for(i=0;i<t.length;i+=1)t[i].clearData(n._NODE_SELECTED);return t},NAME:"editorBidi",NS:"editorBidi",ATTRS:{host:{value:!1}},RE_TEXT_ALIGN:/text-align:\s*\w*\s*;/,removeTextAlign:function(e){return e&&(e.getAttribute(u).match(n.RE_TEXT_ALIGN)&&e.setAttribute(u,e.getAttribute(u).replace(n.RE_TEXT_ALIGN,"")),e.hasAttribute("align")&&e.removeAttribute("align")),e}}),e.namespace("Plugin"),e.Plugin.EditorBidi=n,e.Plugin.ExecCommand.COMMANDS.bidi=function(t,s){var o=this.getInstance(),u=new o.EditorSelection,a=this.get(r).get(r).editorBidi,f,l,c,h=o.EditorSelection.ROOT,p,d,v;if(!a){e.error("bidi execCommand is not available without the EditorBiDi plugin.");return}return o.EditorSelection.filterBlocks(),u.isCollapsed?(l=n.blockParent(u.anchorNode,!1,h),l||(l=h.one(o.EditorSelection.BLOCKS)),l=n.removeTextAlign(l),s||(v=l.getAttribute(i),!v||v==="ltr"?s="rtl":s="ltr"),l.setAttribute(i,s),e.UA.ie&&(c=l.all("br.yui-cursor"),c.size()===1&&l.get("childNodes").size()===1&&c.remove()),f=l):(p=u.getSelected(),d=[],p.each(function(e){d.push(n.blockParent(e,!1,h))}),d=o.all(n.addParents(d,h)),d.each(function(e){var t=s;e=n.removeTextAlign(e),t||(v=e.getAttribute(i),!v||v==="ltr"?t="rtl":t="ltr"),e.setAttribute(i,t)}),f=d),a._checkForChange(),f}},"3.17.0",{requires:["editor-base"]});
