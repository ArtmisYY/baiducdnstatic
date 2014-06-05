/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/arraylist-add/arraylist-add.js']) {
   __coverage__['build/arraylist-add/arraylist-add.js'] = {"path":"build/arraylist-add/arraylist-add.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":28,"loc":{"start":{"line":28,"column":9},"end":{"line":28,"column":31}}},"3":{"name":"(anonymous_3)","line":55,"loc":{"start":{"line":55,"column":12},"end":{"line":55,"column":46}}},"4":{"name":"(anonymous_4)","line":80,"loc":{"start":{"line":80,"column":19},"end":{"line":80,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":87,"column":42}},"2":{"start":{"line":13,"column":0},"end":{"line":84,"column":3}},"3":{"start":{"line":29,"column":8},"end":{"line":29,"column":32}},"4":{"start":{"line":31,"column":8},"end":{"line":36,"column":9}},"5":{"start":{"line":32,"column":12},"end":{"line":32,"column":41}},"6":{"start":{"line":35,"column":12},"end":{"line":35,"column":29}},"7":{"start":{"line":38,"column":8},"end":{"line":38,"column":20}},"8":{"start":{"line":56,"column":8},"end":{"line":56,"column":54}},"9":{"start":{"line":58,"column":8},"end":{"line":65,"column":9}},"10":{"start":{"line":59,"column":12},"end":{"line":64,"column":13}},"11":{"start":{"line":60,"column":16},"end":{"line":60,"column":41}},"12":{"start":{"line":61,"column":16},"end":{"line":63,"column":17}},"13":{"start":{"line":62,"column":20},"end":{"line":62,"column":26}},"14":{"start":{"line":67,"column":8},"end":{"line":67,"column":20}},"15":{"start":{"line":81,"column":8},"end":{"line":81,"column":23}}},"branchMap":{"1":{"line":31,"type":"if","locations":[{"start":{"line":31,"column":8},"end":{"line":31,"column":8}},{"start":{"line":31,"column":8},"end":{"line":31,"column":8}}]},"2":{"line":56,"type":"binary-expr","locations":[{"start":{"line":56,"column":21},"end":{"line":56,"column":31}},{"start":{"line":56,"column":35},"end":{"line":56,"column":53}}]},"3":{"line":59,"type":"if","locations":[{"start":{"line":59,"column":12},"end":{"line":59,"column":12}},{"start":{"line":59,"column":12},"end":{"line":59,"column":12}}]},"4":{"line":61,"type":"if","locations":[{"start":{"line":61,"column":16},"end":{"line":61,"column":16}},{"start":{"line":61,"column":16},"end":{"line":61,"column":16}}]}},"code":["(function () { YUI.add('arraylist-add', function (Y, NAME) {","","/**"," * Collection utilities beyond what is provided in the YUI core"," * @module collection"," * @submodule arraylist-add"," * @deprecated Use ModelList or a custom ArrayList subclass"," */","","/*"," * Adds methods add and remove to Y.ArrayList"," */","Y.mix(Y.ArrayList.prototype, {","","    /**","     * Add a single item to the ArrayList.  Does not prevent duplicates.","     *","     * @method add","     * @param { mixed } item Item presumably of the same type as others in the","     *                       ArrayList.","     * @param {Number} index (Optional.)  Number representing the position at","     * which the item should be inserted.","     * @return {ArrayList} the instance.","     * @for ArrayList","     * @deprecated Use ModelList or a custom ArrayList subclass","     * @chainable","     */","    add: function(item, index) {","        var items = this._items;","","        if (Y.Lang.isNumber(index)) {","            items.splice(index, 0, item);","        }","        else {","            items.push(item);","        }","","        return this;","    },","","    /**","     * Removes first or all occurrences of an item to the ArrayList.  If a","     * comparator is not provided, uses itemsAreEqual method to determine","     * matches.","     *","     * @method remove","     * @param { mixed } needle Item to find and remove from the list.","     * @param { Boolean } all If true, remove all occurrences.","     * @param { Function } comparator optional a/b function to test equivalence.","     * @return {ArrayList} the instance.","     * @for ArrayList","     * @deprecated Use ModelList or a custom ArrayList subclass","     * @chainable","     */","    remove: function(needle, all, comparator) {","        comparator = comparator || this.itemsAreEqual;","","        for (var i = this._items.length - 1; i >= 0; --i) {","            if (comparator.call(this, needle, this.item(i))) {","                this._items.splice(i, 1);","                if (!all) {","                    break;","                }","            }","        }","","        return this;","    },","","    /**","     * Default comparator for items stored in this list.  Used by remove().","     *","     * @method itemsAreEqual","     * @param { mixed } a item to test equivalence with.","     * @param { mixed } b other item to test equivalance.","     * @return { Boolean } true if items are deemed equivalent.","     * @for ArrayList","     * @deprecated Use ModelList or a custom ArrayList subclass","     */","    itemsAreEqual: function(a, b) {","        return a === b;","    }","","});","","","}, '3.17.0', {\"requires\": [\"arraylist\"]});","","}());"]};
}
var __cov_lGOrLyvDuAhWT5H2MG_q_w = __coverage__['build/arraylist-add/arraylist-add.js'];
__cov_lGOrLyvDuAhWT5H2MG_q_w.s['1']++;YUI.add('arraylist-add',function(Y,NAME){__cov_lGOrLyvDuAhWT5H2MG_q_w.f['1']++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['2']++;Y.mix(Y.ArrayList.prototype,{add:function(item,index){__cov_lGOrLyvDuAhWT5H2MG_q_w.f['2']++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['3']++;var items=this._items;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['4']++;if(Y.Lang.isNumber(index)){__cov_lGOrLyvDuAhWT5H2MG_q_w.b['1'][0]++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['5']++;items.splice(index,0,item);}else{__cov_lGOrLyvDuAhWT5H2MG_q_w.b['1'][1]++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['6']++;items.push(item);}__cov_lGOrLyvDuAhWT5H2MG_q_w.s['7']++;return this;},remove:function(needle,all,comparator){__cov_lGOrLyvDuAhWT5H2MG_q_w.f['3']++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['8']++;comparator=(__cov_lGOrLyvDuAhWT5H2MG_q_w.b['2'][0]++,comparator)||(__cov_lGOrLyvDuAhWT5H2MG_q_w.b['2'][1]++,this.itemsAreEqual);__cov_lGOrLyvDuAhWT5H2MG_q_w.s['9']++;for(var i=this._items.length-1;i>=0;--i){__cov_lGOrLyvDuAhWT5H2MG_q_w.s['10']++;if(comparator.call(this,needle,this.item(i))){__cov_lGOrLyvDuAhWT5H2MG_q_w.b['3'][0]++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['11']++;this._items.splice(i,1);__cov_lGOrLyvDuAhWT5H2MG_q_w.s['12']++;if(!all){__cov_lGOrLyvDuAhWT5H2MG_q_w.b['4'][0]++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['13']++;break;}else{__cov_lGOrLyvDuAhWT5H2MG_q_w.b['4'][1]++;}}else{__cov_lGOrLyvDuAhWT5H2MG_q_w.b['3'][1]++;}}__cov_lGOrLyvDuAhWT5H2MG_q_w.s['14']++;return this;},itemsAreEqual:function(a,b){__cov_lGOrLyvDuAhWT5H2MG_q_w.f['4']++;__cov_lGOrLyvDuAhWT5H2MG_q_w.s['15']++;return a===b;}});},'3.17.0',{'requires':['arraylist']});
