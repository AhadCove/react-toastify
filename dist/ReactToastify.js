!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["prop-types","react","react-dom"],e):"object"==typeof exports?exports.ReactToastify=e(require("prop-types"),require("react"),require("react-dom")):t.ReactToastify=e(t["prop-types"],t.react,t["react-dom"])}(window,function(t,e,n){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},function(t,e,n){"use strict";function o(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==t&&void 0!==t&&this.setState(t)}function r(t){this.setState(function(e){var n=this.constructor.getDerivedStateFromProps(t,e);return null!==n&&void 0!==n?n:null}.bind(this))}function i(t,e){try{var n=this.props,o=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function a(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof e.getSnapshotBeforeUpdate)return t;var n=null,a=null,s=null;if("function"==typeof e.componentWillMount?n="componentWillMount":"function"==typeof e.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof e.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof e.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof e.componentWillUpdate?s="componentWillUpdate":"function"==typeof e.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s){var u=t.displayName||t.name,l="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof t.getDerivedStateFromProps&&(e.componentWillMount=o,e.componentWillReceiveProps=r),"function"==typeof e.getSnapshotBeforeUpdate){if("function"!=typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var c=e.componentDidUpdate;e.componentDidUpdate=function(t,e,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,t,e,o)}}return t}n.r(e),n.d(e,"polyfill",function(){return a}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},function(t,e,n){"use strict";e.__esModule=!0,e.default=void 0;var o=s(n(0)),r=s(n(1)),i=n(3),a=n(6);function s(t){return t&&t.__esModule?t:{default:t}}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},p=function(t){function e(e,n){var o,r=(o=t.call(this,e,n)||this).handleExited.bind(l(l(o)));return o.state={handleExited:r,firstRender:!0},o}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},n.componentDidMount=function(){this.appeared=!0},e.getDerivedStateFromProps=function(t,e){var n=e.children,o=e.handleExited;return{children:e.firstRender?(0,a.getInitialChildMapping)(t,o):(0,a.getNextChildMapping)(t,n,o),firstRender:!1}},n.handleExited=function(t,e){var n=(0,a.getChildMapping)(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.setState(function(e){var n=u({},e.children);return delete n[t.key],{children:n}}))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,o=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["component","childFactory"]),i=c(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===e?i:r.default.createElement(e,o,i)},e}(r.default.Component);p.childContextTypes={transitionGroup:o.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(t){return t}};var f=(0,i.polyfill)(p);e.default=f,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=e.EXITING=e.ENTERED=e.ENTERING=e.EXITED=e.UNMOUNTED=void 0;var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};o.get||o.set?Object.defineProperty(e,n,o):e[n]=t[n]}return e.default=t,e}(n(0)),r=s(n(1)),i=s(n(7)),a=n(3);n(8);function s(t){return t&&t.__esModule?t:{default:t}}var u="unmounted";e.UNMOUNTED=u;var l="exited";e.EXITED=l;var c="entering";e.ENTERING=c;var p="entered";e.ENTERED=p;e.EXITING="exiting";var f=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var r,i=n.transitionGroup,a=i&&!i.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?a?(r=l,o.appearStatus=c):r=p:r=e.unmountOnExit||e.mountOnEnter?u:l,o.state={status:r},o.nextCallback=null,o}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.getChildContext=function(){return{transitionGroup:null}},e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===u?{status:l}:null},n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(e=c):n!==c&&n!==p||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!=typeof o&&(t=o.exit,e=o.enter,n=o.appear),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e){this.cancelNextCallback();var n=i.default.findDOMNode(this);e===c?this.performEnter(n,t):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:u})},n.performEnter=function(t,e){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:e,i=this.getTimeouts();e||o?(this.props.onEnter(t,r),this.safeSetState({status:c},function(){n.props.onEntering(t,r),n.onTransitionEnd(t,i.enter,function(){n.safeSetState({status:p},function(){n.props.onEntered(t,r)})})})):this.safeSetState({status:p},function(){n.props.onEntered(t)})},n.performExit=function(t){var e=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(t),this.safeSetState({status:"exiting"},function(){e.props.onExiting(t),e.onTransitionEnd(t,o.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(t)})})})):this.safeSetState({status:l},function(){e.props.onExited(t)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e,n){this.setNextCallback(n),t?(this.props.addEndListener&&this.props.addEndListener(t,this.nextCallback),null!=e&&setTimeout(this.nextCallback,e)):setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===u)return null;var e=this.props,n=e.children,o=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(t,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},e}(r.default.Component);function d(){}f.contextTypes={transitionGroup:o.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var h=(0,a.polyfill)(f);e.default=h},function(t,e,n){"use strict";e.__esModule=!0,e.getChildMapping=r,e.mergeChildMappings=i,e.getInitialChildMapping=function(t,e){return r(t.children,function(n){return(0,o.cloneElement)(n,{onExited:e.bind(null,n),in:!0,appear:a(n,"appear",t),enter:a(n,"enter",t),exit:a(n,"exit",t)})})},e.getNextChildMapping=function(t,e,n){var s=r(t.children),u=i(e,s);return Object.keys(u).forEach(function(r){var i=u[r];if((0,o.isValidElement)(i)){var l=r in e,c=r in s,p=e[r],f=(0,o.isValidElement)(p)&&!p.props.in;!c||l&&!f?c||!l||f?c&&l&&(0,o.isValidElement)(p)&&(u[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:p.props.in,exit:a(i,"exit",t),enter:a(i,"enter",t)})):u[r]=(0,o.cloneElement)(i,{in:!1}):u[r]=(0,o.cloneElement)(i,{onExited:n.bind(null,i),in:!0,exit:a(i,"exit",t),enter:a(i,"enter",t)})}}),u};var o=n(1);function r(t,e){var n=Object.create(null);return t&&o.Children.map(t,function(t){return t}).forEach(function(t){n[t.key]=function(t){return e&&(0,o.isValidElement)(t)?e(t):t}(t)}),n}function i(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,r=Object.create(null),i=[];for(var a in t)a in e?i.length&&(r[a]=i,i=[]):i.push(a);var s={};for(var u in e){if(r[u])for(o=0;o<r[u].length;o++){var l=r[u][o];s[r[u][o]]=n(l)}s[u]=n(u)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function a(t,e,n){return null!=n[e]?n[e]:t.props[e]}},function(t,e){t.exports=n},function(t,e,n){"use strict";e.__esModule=!0,e.transitionTimeout=function(t){var e="transition"+t+"Timeout",n="transition"+t;return function(t){if(t[n]){if(null==t[e])return new Error(e+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof t[e])return new Error(e+" must be a number (in milliseconds)")}return null}},e.classNamesShape=e.timeoutsShape=void 0;var o=function(t){return t&&t.__esModule?t:{default:t}}(n(0));var r=o.default.oneOfType([o.default.number,o.default.shape({enter:o.default.number,exit:o.default.number}).isRequired]);e.timeoutsShape=r;var i=o.default.oneOfType([o.default.string,o.default.shape({enter:o.default.string,exit:o.default.string,active:o.default.string}),o.default.shape({enter:o.default.string,enterDone:o.default.string,enterActive:o.default.string,exit:o.default.string,exitDone:o.default.string,exitActive:o.default.string})]);e.classNamesShape=i},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(0),a=n.n(i),s=n(2),u=n.n(s),l=n(4),c=n.n(l),p={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},f={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},d={SHOW:0,CLEAR:1,DID_MOUNT:2,WILL_UNMOUNT:3,ON_CHANGE:4};function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function g(t){var e=t.delay,n=t.isRunning,o=t.closeToast,i=t.type,a=t.hide,s=t.className,l=t.style,c=t.rtl,p=h({},l,{animationDuration:e+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1}),f=u()("Toastify__progress-bar","Toastify__progress-bar--"+i,{"Toastify__progress-bar--rtl":c},s);return r.a.createElement("div",{className:f,style:p,onAnimationEnd:o})}g.propTypes={delay:a.a.number.isRequired,isRunning:a.a.bool.isRequired,closeToast:a.a.func.isRequired,rtl:a.a.bool.isRequired,type:a.a.string,hide:a.a.bool,className:a.a.oneOfType([a.a.string,a.a.object])},g.defaultProps={type:f.DEFAULT,hide:!1};var m=g;function y(t){return"number"==typeof t&&!isNaN(t)&&t>0}function v(t){return Object.keys(t).map(function(e){return t[e]})}function b(t){return t.isRequired=function(e,n,o){if(void 0===e[n])return new Error("The prop "+n+" is marked as required in \n      "+o+", but its value is undefined.");t(e,n,o)},t}var E=b(function(t,e,n){var o=t[e];return!1===o||y(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}),O=b(function(t,e,n){var r=t[e];return!1===r||Object(o.isValidElement)(r)?null:new Error(n+" expect "+e+" \n      to be a valid react element or equal to false. "+r+" given.")});function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function x(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}var C=function(){},_=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.ref.style.transition="",e.drag.start=e.drag.x=x(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=x(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.drag.y=function(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}(t),e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){var t=e.ref.getBoundingClientRect(),n=t.top,o=t.bottom,r=t.left,i=t.right;e.props.pauseOnHover&&e.drag.x>=r&&e.drag.x<=i&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()},e}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},n.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},n.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},n.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},n.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},n.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},n.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},n.render=function(){var t=this,e=this.props,n=e.closeButton,o=e.children,i=e.autoClose,a=e.pauseOnHover,s=e.closeOnClick,l=e.type,c=e.hideProgressBar,p=e.closeToast,f=e.transition,d=e.position,h=e.onExited,g=e.className,y=e.bodyClassName,v=e.progressClassName,b=e.progressStyle,E=e.updateId,O=e.role,x=e.rtl,C={className:u()("Toastify__toast","Toastify__toast--"+l,{"Toastify__toast--rtl":x},g)};return i&&a&&(C.onMouseEnter=this.pauseToast,C.onMouseLeave=this.playToast),s&&(C.onClick=function(){return t.flag.canCloseOnClick&&p()}),r.a.createElement(f,{in:this.props.in,appear:!0,unmountOnExit:!0,onExited:h,position:d,preventExitTransition:this.state.preventExitTransition},r.a.createElement("div",T({},C,{ref:function(e){return t.ref=e},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onTransitionEnd:this.onDragTransitionEnd}),r.a.createElement("div",T({},this.props.in&&{role:O},{className:u()("Toastify__toast-body",y)}),o),n&&n,i&&r.a.createElement(m,T({},E?{key:"pb-"+E}:{},{rtl:x,delay:i,isRunning:this.state.isRunning,closeToast:p,hide:c,type:l,style:b,className:v}))))},e}(o.Component);_.propTypes={closeButton:O.isRequired,autoClose:E.isRequired,children:a.a.node.isRequired,closeToast:a.a.func.isRequired,position:a.a.oneOf(v(p)).isRequired,pauseOnHover:a.a.bool.isRequired,pauseOnFocusLoss:a.a.bool.isRequired,closeOnClick:a.a.bool.isRequired,transition:a.a.func.isRequired,rtl:a.a.bool.isRequired,hideProgressBar:a.a.bool.isRequired,draggable:a.a.bool.isRequired,draggablePercent:a.a.number.isRequired,in:a.a.bool,onExited:a.a.func,onOpen:a.a.func,onClose:a.a.func,type:a.a.oneOf(v(f)),className:a.a.oneOfType([a.a.string,a.a.object]),bodyClassName:a.a.oneOfType([a.a.string,a.a.object]),progressClassName:a.a.oneOfType([a.a.string,a.a.object]),progressStyle:a.a.object,updateId:a.a.number,ariaLabel:a.a.string},_.defaultProps={type:f.DEFAULT,in:!0,onOpen:C,onClose:C,className:null,bodyClassName:null,progressClassName:null,updateId:null,role:"alert"};var N=_;function S(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return r.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:e,"aria-label":o},"✖")}S.propTypes={closeToast:a.a.func,arialLabel:a.a.string},S.defaultProps={ariaLabel:"close"};var D=S,j=n(5),R=n.n(j);function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var w=function(){},M=function(t){var e=t.enter,n=t.exit,o=t.duration,i=void 0===o?750:o,a=t.appendPosition,s=void 0!==a&&a;return function(t){var o,a,u=t.children,l=t.position,c=t.preventExitTransition,p=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["children","position","preventExitTransition"]),f=s?e+"--"+l:e,d=s?n+"--"+l:n;Array.isArray(i)&&2===i.length?(o=i[0],a=i[1]):o=a=i;return r.a.createElement(R.a,P({},p,{timeout:c?0:{enter:o,exit:a},onEnter:function(t){t.classList.add(f),t.style.animationFillMode="forwards",t.style.animationDuration=.001*o+"s"},onEntered:function(t){t.classList.remove(f),t.style.cssText=""},onExit:c?w:function(t){t.classList.add(d),t.style.animationFillMode="forwards",t.style.animationDuration=.001*a+"s"}}),u)}},I=M({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),k=M({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),L=M({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),F=M({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),U={list:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return void 0===t&&(t=null),this.list.delete(t),this},emit:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return!!this.list.has(t)&&(this.list.get(t).forEach(function(t){return setTimeout(function(){return t.call.apply(t,[null].concat(n))},0)}),!0)}};function A(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function W(){return(W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var q=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;U.on(d.SHOW,function(e,n){return t.show(e,n)}).on(d.CLEAR,function(e){return null!==e?t.removeToast(e):t.clear()}).emit(d.DID_MOUNT,this)},n.componentWillUnmount=function(){U.off(d.SHOW).off(d.CLEAR).emit(d.WILL_UNMOUNT)},n.removeToast=function(t){this.setState({toast:this.state.toast.filter(function(e){return e!==t})},this.dispatchChange)},n.dispatchChange=function(){U.emit(d.ON_CHANGE,this.state.toast.length)},n.makeCloseButton=function(t,e,n){var r=this,i=this.props.closeButton;return(Object(o.isValidElement)(t)||!1===t)&&(i=t),!1!==i&&Object(o.cloneElement)(i,{closeToast:function(){return r.removeToast(e)},type:n})},n.getAutoCloseDelay=function(t){return!1===t||y(t)?t:this.props.autoClose},n.canBeRendered=function(t){return Object(o.isValidElement)(t)||"string"==typeof t||"number"==typeof t||"function"==typeof t},n.parseClassName=function(t){return"string"==typeof t?t:null!==t&&"object"==typeof t&&"toString"in t?t.toString():null},n.show=function(t,e){var n,r=this;if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var i=e.toastId,a=function(){return r.removeToast(i)},s={id:i,type:e.type,closeToast:a,updateId:e.updateId,rtl:this.props.rtl,position:e.position||this.props.position,transition:e.transition||this.props.transition,className:this.parseClassName(e.className||this.props.toastClassName),bodyClassName:this.parseClassName(e.bodyClassName||this.props.bodyClassName),closeButton:this.makeCloseButton(e.closeButton,i,e.type),pauseOnHover:"boolean"==typeof e.pauseOnHover?e.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"==typeof e.pauseOnFocusLoss?e.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"==typeof e.draggable?e.draggable:this.props.draggable,draggablePercent:"number"!=typeof e.draggablePercent||isNaN(e.draggablePercent)?this.props.draggablePercent:e.draggablePercent,closeOnClick:"boolean"==typeof e.closeOnClick?e.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(e.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(e.autoClose),hideProgressBar:"boolean"==typeof e.hideProgressBar?e.hideProgressBar:this.props.hideProgressBar};"function"==typeof e.onOpen&&(s.onOpen=e.onOpen),"function"==typeof e.onClose&&(s.onClose=e.onClose),Object(o.isValidElement)(t)&&"string"!=typeof t.type&&"number"!=typeof t.type?t=Object(o.cloneElement)(t,{closeToast:a}):"function"==typeof t&&(t=t({closeToast:a})),this.collection=W({},this.collection,((n={})[i]={position:s.position,options:s,content:t},n)),this.setState({toast:s.updateId?A(this.state.toast):A(this.state.toast).concat([i])},this.dispatchChange)},n.makeToast=function(t,e){return r.a.createElement(N,W({},e,{isDocumentHidden:this.state.isDocumentHidden,key:"toast-"+e.id}),t)},n.clear=function(){this.setState({toast:[]})},n.renderToast=function(){var t=this,e={},n=this.props,o=n.className,i=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach(function(n){var o=t.collection[n],r=o.position,i=o.options,a=o.content;e[r]||(e[r]=[]),-1!==t.state.toast.indexOf(i.id)?e[r].push(t.makeToast(a,i)):(e[r].push(null),delete t.collection[n])}),Object.keys(e).map(function(n){var a=1===e[n].length&&null===e[n][0],s={className:u()("Toastify__toast-container","Toastify__toast-container--"+n,{"Toastify__toast-container--rtl":t.props.rtl},t.parseClassName(o)),style:a?W({},i,{pointerEvents:"none"}):W({},i)};return r.a.createElement(c.a,W({},s,{key:"container-"+n}),e[n])})},n.render=function(){return r.a.createElement("div",{className:"Toastify"},this.renderToast())},e}(o.Component);q.propTypes={position:a.a.oneOf(v(p)),autoClose:E,closeButton:O,hideProgressBar:a.a.bool,pauseOnHover:a.a.bool,closeOnClick:a.a.bool,newestOnTop:a.a.bool,className:a.a.oneOfType([a.a.string,a.a.object]),style:a.a.object,toastClassName:a.a.oneOfType([a.a.string,a.a.object]),bodyClassName:a.a.oneOfType([a.a.string,a.a.object]),progressClassName:a.a.oneOfType([a.a.string,a.a.object]),progressStyle:a.a.object,transition:a.a.func,rtl:a.a.bool,draggable:a.a.bool,draggablePercent:a.a.number,pauseOnFocusLoss:a.a.bool},q.defaultProps={position:p.TOP_RIGHT,transition:I,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:r.a.createElement(D,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null};var B=q;function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var H=null,X=[],V=0,Y=function(){return!1};function z(t,e){return G({},t,{type:e,toastId:function(t){if(t&&("number"==typeof t.toastId&&!isNaN(t.toastId)||"string"==typeof t.toastId))return t.toastId;return++V}(t)})}function Z(t,e){return null!==H?U.emit(d.SHOW,t,e):X.push({action:d.SHOW,content:t,options:e}),e.toastId}var J=G(function(t,e){return Z(t,z(e,e&&e.type||f.DEFAULT))},{success:function(t,e){return Z(t,z(e,f.SUCCESS))},info:function(t,e){return Z(t,z(e,f.INFO))},warn:function(t,e){return Z(t,z(e,f.WARNING))},warning:function(t,e){return Z(t,z(e,f.WARNING))},error:function(t,e){return Z(t,z(e,f.ERROR))},dismiss:function(t){return void 0===t&&(t=null),H&&U.emit(d.CLEAR,t)},isActive:Y,update:function(t,e){setTimeout(function(){if(H&&void 0!==H.collection[t]){var n=H.collection[t],o=n.options,r=n.content,i=o.updateId?o.updateId+1:1,a=G({},o,e,{toastId:t,updateId:i}),s=void 0!==a.render?a.render:r;delete a.render,Z(s,a)}},0)},onChange:function(t){"function"==typeof t&&U.on(d.ON_CHANGE,t)},POSITION:p,TYPE:f});U.on(d.DID_MOUNT,function(t){H=t,J.isActive=function(t){return H.isToastActive(t)},X.forEach(function(t){U.emit(t.action,t.content,t.options)}),X=[]}).on(d.WILL_UNMOUNT,function(){H=null,J.isActive=Y,V=0});var K=J;n.d(e,"ToastContainer",function(){return B}),n.d(e,"toast",function(){return K}),n.d(e,"cssTransition",function(){return M}),n.d(e,"Bounce",function(){return I}),n.d(e,"Slide",function(){return k}),n.d(e,"Zoom",function(){return L}),n.d(e,"Flip",function(){return F})}])});
//# sourceMappingURL=ReactToastify.js.map