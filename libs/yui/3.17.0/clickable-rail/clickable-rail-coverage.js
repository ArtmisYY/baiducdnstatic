/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/clickable-rail/clickable-rail.js']) {
   __coverage__['build/clickable-rail/clickable-rail.js'] = {"path":"build/clickable-rail/clickable-rail.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":45}}},"2":{"name":"ClickableRail","line":17,"loc":{"start":{"line":17,"column":0},"end":{"line":17,"column":25}}},"3":{"name":"(anonymous_3)","line":32,"loc":{"start":{"line":32,"column":28},"end":{"line":32,"column":40}}},"4":{"name":"(anonymous_4)","line":59,"loc":{"start":{"line":59,"column":28},"end":{"line":59,"column":40}}},"5":{"name":"(anonymous_5)","line":72,"loc":{"start":{"line":72,"column":30},"end":{"line":72,"column":42}}},"6":{"name":"(anonymous_6)","line":88,"loc":{"start":{"line":88,"column":26},"end":{"line":88,"column":39}}},"7":{"name":"(anonymous_7)","line":104,"loc":{"start":{"line":104,"column":29},"end":{"line":104,"column":42}}},"8":{"name":"(anonymous_8)","line":161,"loc":{"start":{"line":161,"column":23},"end":{"line":161,"column":36}}},"9":{"name":"(anonymous_9)","line":181,"loc":{"start":{"line":181,"column":30},"end":{"line":181,"column":49}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":212,"column":44}},"2":{"start":{"line":17,"column":0},"end":{"line":19,"column":1}},"3":{"start":{"line":18,"column":4},"end":{"line":18,"column":30}},"4":{"start":{"line":21,"column":0},"end":{"line":209,"column":9}},"5":{"start":{"line":33,"column":12},"end":{"line":33,"column":62}},"6":{"start":{"line":45,"column":12},"end":{"line":47,"column":15}},"7":{"start":{"line":49,"column":12},"end":{"line":49,"column":58}},"8":{"start":{"line":50,"column":12},"end":{"line":50,"column":58}},"9":{"start":{"line":60,"column":12},"end":{"line":60,"column":42}},"10":{"start":{"line":62,"column":12},"end":{"line":63,"column":53}},"11":{"start":{"line":73,"column":12},"end":{"line":78,"column":13}},"12":{"start":{"line":74,"column":16},"end":{"line":75,"column":75}},"13":{"start":{"line":77,"column":16},"end":{"line":77,"column":48}},"14":{"start":{"line":89,"column":12},"end":{"line":92,"column":13}},"15":{"start":{"line":90,"column":16},"end":{"line":90,"column":54}},"16":{"start":{"line":91,"column":16},"end":{"line":91,"column":35}},"17":{"start":{"line":105,"column":12},"end":{"line":105,"column":21}},"18":{"start":{"line":109,"column":12},"end":{"line":114,"column":19}},"19":{"start":{"line":116,"column":12},"end":{"line":148,"column":13}},"20":{"start":{"line":117,"column":16},"end":{"line":117,"column":43}},"21":{"start":{"line":118,"column":16},"end":{"line":118,"column":74}},"22":{"start":{"line":121,"column":16},"end":{"line":121,"column":57}},"23":{"start":{"line":124,"column":16},"end":{"line":124,"column":52}},"24":{"start":{"line":128,"column":16},"end":{"line":130,"column":46}},"25":{"start":{"line":132,"column":16},"end":{"line":132,"column":58}},"26":{"start":{"line":140,"column":16},"end":{"line":140,"column":63}},"27":{"start":{"line":143,"column":16},"end":{"line":143,"column":44}},"28":{"start":{"line":168,"column":12},"end":{"line":168,"column":28}},"29":{"start":{"line":182,"column":12},"end":{"line":183,"column":56}},"30":{"start":{"line":186,"column":12},"end":{"line":189,"column":14}}},"branchMap":{"1":{"line":33,"type":"binary-expr","locations":[{"start":{"line":33,"column":28},"end":{"line":33,"column":41}},{"start":{"line":33,"column":46},"end":{"line":33,"column":60}}]},"2":{"line":73,"type":"if","locations":[{"start":{"line":73,"column":12},"end":{"line":73,"column":12}},{"start":{"line":73,"column":12},"end":{"line":73,"column":12}}]},"3":{"line":89,"type":"if","locations":[{"start":{"line":89,"column":12},"end":{"line":89,"column":12}},{"start":{"line":89,"column":12},"end":{"line":89,"column":12}}]},"4":{"line":89,"type":"binary-expr","locations":[{"start":{"line":89,"column":16},"end":{"line":89,"column":41}},{"start":{"line":89,"column":45},"end":{"line":89,"column":66}}]},"5":{"line":116,"type":"if","locations":[{"start":{"line":116,"column":12},"end":{"line":116,"column":12}},{"start":{"line":116,"column":12},"end":{"line":116,"column":12}}]},"6":{"line":140,"type":"binary-expr","locations":[{"start":{"line":140,"column":27},"end":{"line":140,"column":48}},{"start":{"line":140,"column":52},"end":{"line":140,"column":62}}]}},"code":["(function () { YUI.add('clickable-rail', function (Y, NAME) {","","/**"," * Adds support for mouse interaction with the Slider rail triggering thumb"," * movement."," *"," * @module slider"," * @submodule clickable-rail"," */","","/**"," * Slider extension that allows clicking on the Slider's rail element,"," * triggering the thumb to align with the location of the click."," *"," * @class ClickableRail"," */","function ClickableRail() {","    this._initClickableRail();","}","","Y.ClickableRail = Y.mix(ClickableRail, {","","    // Prototype methods added to host class","    prototype: {","","        /**","         * Initializes the internal state and sets up events.","         *","         * @method _initClickableRail","         * @protected","         */","        _initClickableRail: function () {","            this._evtGuid = this._evtGuid || (Y.guid() + '|');","","            /**","             * Broadcasts when the rail has received a mousedown event and","             * triggers the thumb positioning.  Use","             * <code>e.preventDefault()</code> or","             * <code>set(&quot;clickableRail&quot;, false)</code> to prevent","             * the thumb positioning.","             *","             * @event railMouseDown","             * @preventable _defRailMouseDownFn","             */","            this.publish('railMouseDown', {","                defaultFn: this._defRailMouseDownFn","            });","","            this.after('render', this._bindClickableRail);","            this.on('destroy', this._unbindClickableRail);","        },","","        /**","         * Attaches DOM event subscribers to support rail interaction.","         *","         * @method _bindClickableRail","         * @protected","         */","        _bindClickableRail: function () {","            this._dd.addHandle(this.rail);","","            this.rail.on(this._evtGuid + Y.DD.Drag.START_EVENT,","                Y.bind(this._onRailMouseDown, this));","        },","","        /**","         * Detaches DOM event subscribers for cleanup/destruction cycle.","         *","         * @method _unbindClickableRail","         * @protected","         */","        _unbindClickableRail: function () {","            if (this.get('rendered')) {","                var contentBox = this.get('contentBox'),","                    rail = contentBox.one('.' + this.getClassName('rail'));","","                rail.detach(this.evtGuid + '*');","            }","        },","","        /**","         * Dispatches the railMouseDown event.","         *","         * @method _onRailMouseDown","         * @param e {DOMEvent} the mousedown event object","         * @protected","         */","        _onRailMouseDown: function (e) {","            if (this.get('clickableRail') && !this.get('disabled')) {","                this.fire('railMouseDown', { ev: e });","                this.thumb.focus();","            }","        },","","        /**","         * Default behavior for the railMouseDown event.  Centers the thumb at","         * the click location and passes control to the DDM to behave as though","         * the thumb itself were clicked in preparation for a drag operation.","         *","         * @method _defRailMouseDownFn","         * @param e {Event} the EventFacade for the railMouseDown custom event","         * @protected","         */","        _defRailMouseDownFn: function (e) {","            e = e.ev;","","            // Logic that determines which thumb should be used is abstracted","            // to someday support multi-thumb sliders","            var dd     = this._resolveThumb(e),","                i      = this._key.xyIndex,","                length = parseFloat(this.get('length'), 10),","                thumb,","                thumbSize,","                xy;","","            if (dd) {","                thumb = dd.get('dragNode');","                thumbSize = parseFloat(thumb.getStyle(this._key.dim), 10);","","                // Step 1. Allow for aligning to thumb center or edge, etc","                xy = this._getThumbDestination(e, thumb);","","                // Step 2. Remove page offsets to give just top/left style val","                xy = xy[ i ] - this.rail.getXY()[i];","","                // Step 3. Constrain within the rail in case of attempt to","                // center the thumb when clicking on the end of the rail","                xy = Math.min(","                        Math.max(xy, 0),","                        (length - thumbSize));","","                this._uiMoveThumb(xy, { source: 'rail' });","","                // Set e.target for DD's IE9 patch which calls","                // e.target._node.setCapture() to allow imgs to be dragged.","                // Without this, setCapture is called from the rail and rail","                // clicks on other Sliders may have their thumb movements","                // overridden by a different Slider (the thumb on the wrong","                // Slider moves).","                e.target = this.thumb.one('img') || this.thumb;","","                // Delegate to DD's natural behavior","                dd._handleMouseDownEvent(e);","","                // TODO: this won't trigger a slideEnd if the rail is clicked","                // check if dd._move(e); dd._dragThreshMet = true; dd.start();","                // will do the trick.  Is that even a good idea?","            }","        },","","        /**","         * Resolves which thumb to actuate if any.  Override this if you want to","         * support multiple thumbs.  By default, returns the Drag instance for","         * the thumb stored by the Slider.","         *","         * @method _resolveThumb","         * @param e {DOMEvent} the mousedown event object","         * @return {DD.Drag} the Drag instance that should be moved","         * @protected","         */","        _resolveThumb: function (e) {","            /* Temporary workaround","            var primaryOnly = this._dd.get('primaryButtonOnly'),","                validClick  = !primaryOnly || e.button <= 1;","","            return (validClick) ? this._dd : null;","             */","            return this._dd;","        },","","        /**","         * Calculates the top left position the thumb should be moved to to","         * align the click XY with the center of the specified node.","         *","         * @method _getThumbDestination","         * @param e {DOMEvent} The mousedown event object","         * @param node {Node} The node to position","         * @return {Array} the [top, left] pixel position of the destination","         * @protected","         */","        _getThumbDestination: function (e, node) {","            var offsetWidth  = node.get('offsetWidth'),","                offsetHeight = node.get('offsetHeight');","","            // center","            return [","                (e.pageX - Math.round((offsetWidth  / 2))),","                (e.pageY - Math.round((offsetHeight / 2)))","            ];","        }","","    },","","    // Static properties added onto host class","    ATTRS: {","        /**","         * Enable or disable clickable rail support.","         *","         * @attribute clickableRail","         * @type {Boolean}","         * @default true","         */","        clickableRail: {","            value: true,","            validator: Y.Lang.isBoolean","        }","    }","","}, true);","","","}, '3.17.0', {\"requires\": [\"slider-base\"]});","","}());"]};
}
var __cov_D5B6SYP8dFqpGt4iwN8wxA = __coverage__['build/clickable-rail/clickable-rail.js'];
__cov_D5B6SYP8dFqpGt4iwN8wxA.s['1']++;YUI.add('clickable-rail',function(Y,NAME){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['1']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['2']++;function ClickableRail(){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['2']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['3']++;this._initClickableRail();}__cov_D5B6SYP8dFqpGt4iwN8wxA.s['4']++;Y.ClickableRail=Y.mix(ClickableRail,{prototype:{_initClickableRail:function(){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['3']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['5']++;this._evtGuid=(__cov_D5B6SYP8dFqpGt4iwN8wxA.b['1'][0]++,this._evtGuid)||(__cov_D5B6SYP8dFqpGt4iwN8wxA.b['1'][1]++,Y.guid()+'|');__cov_D5B6SYP8dFqpGt4iwN8wxA.s['6']++;this.publish('railMouseDown',{defaultFn:this._defRailMouseDownFn});__cov_D5B6SYP8dFqpGt4iwN8wxA.s['7']++;this.after('render',this._bindClickableRail);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['8']++;this.on('destroy',this._unbindClickableRail);},_bindClickableRail:function(){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['4']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['9']++;this._dd.addHandle(this.rail);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['10']++;this.rail.on(this._evtGuid+Y.DD.Drag.START_EVENT,Y.bind(this._onRailMouseDown,this));},_unbindClickableRail:function(){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['5']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['11']++;if(this.get('rendered')){__cov_D5B6SYP8dFqpGt4iwN8wxA.b['2'][0]++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['12']++;var contentBox=this.get('contentBox'),rail=contentBox.one('.'+this.getClassName('rail'));__cov_D5B6SYP8dFqpGt4iwN8wxA.s['13']++;rail.detach(this.evtGuid+'*');}else{__cov_D5B6SYP8dFqpGt4iwN8wxA.b['2'][1]++;}},_onRailMouseDown:function(e){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['6']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['14']++;if((__cov_D5B6SYP8dFqpGt4iwN8wxA.b['4'][0]++,this.get('clickableRail'))&&(__cov_D5B6SYP8dFqpGt4iwN8wxA.b['4'][1]++,!this.get('disabled'))){__cov_D5B6SYP8dFqpGt4iwN8wxA.b['3'][0]++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['15']++;this.fire('railMouseDown',{ev:e});__cov_D5B6SYP8dFqpGt4iwN8wxA.s['16']++;this.thumb.focus();}else{__cov_D5B6SYP8dFqpGt4iwN8wxA.b['3'][1]++;}},_defRailMouseDownFn:function(e){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['7']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['17']++;e=e.ev;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['18']++;var dd=this._resolveThumb(e),i=this._key.xyIndex,length=parseFloat(this.get('length'),10),thumb,thumbSize,xy;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['19']++;if(dd){__cov_D5B6SYP8dFqpGt4iwN8wxA.b['5'][0]++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['20']++;thumb=dd.get('dragNode');__cov_D5B6SYP8dFqpGt4iwN8wxA.s['21']++;thumbSize=parseFloat(thumb.getStyle(this._key.dim),10);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['22']++;xy=this._getThumbDestination(e,thumb);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['23']++;xy=xy[i]-this.rail.getXY()[i];__cov_D5B6SYP8dFqpGt4iwN8wxA.s['24']++;xy=Math.min(Math.max(xy,0),length-thumbSize);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['25']++;this._uiMoveThumb(xy,{source:'rail'});__cov_D5B6SYP8dFqpGt4iwN8wxA.s['26']++;e.target=(__cov_D5B6SYP8dFqpGt4iwN8wxA.b['6'][0]++,this.thumb.one('img'))||(__cov_D5B6SYP8dFqpGt4iwN8wxA.b['6'][1]++,this.thumb);__cov_D5B6SYP8dFqpGt4iwN8wxA.s['27']++;dd._handleMouseDownEvent(e);}else{__cov_D5B6SYP8dFqpGt4iwN8wxA.b['5'][1]++;}},_resolveThumb:function(e){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['8']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['28']++;return this._dd;},_getThumbDestination:function(e,node){__cov_D5B6SYP8dFqpGt4iwN8wxA.f['9']++;__cov_D5B6SYP8dFqpGt4iwN8wxA.s['29']++;var offsetWidth=node.get('offsetWidth'),offsetHeight=node.get('offsetHeight');__cov_D5B6SYP8dFqpGt4iwN8wxA.s['30']++;return[e.pageX-Math.round(offsetWidth/2),e.pageY-Math.round(offsetHeight/2)];}},ATTRS:{clickableRail:{value:true,validator:Y.Lang.isBoolean}}},true);},'3.17.0',{'requires':['slider-base']});
