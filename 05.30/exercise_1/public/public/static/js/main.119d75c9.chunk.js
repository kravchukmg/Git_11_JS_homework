(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(15),a(16),a(1)),s=a(4),u=a(5),i=a(7),m=a(6),p=a(8),d=(a(17),function(e){var t=e.names,a=e.state;return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.firstPlayerName),a.hystorySteps.firstPlayerStep.map(function(e,t){return r.a.createElement("td",{key:t},e)})),r.a.createElement("tr",null,r.a.createElement("td",null,t.secondPlayerName),a.hystorySteps.secondPlayerStep.map(function(e,t){return r.a.createElement("td",{key:t},e)})),r.a.createElement("tr",null,r.a.createElement("td",null,"Value"),a.compValue.map(function(e,t){return r.a.createElement("td",{key:t},e)}))))}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getRandomValue=function(){return Math.floor(100*Math.random()+1)},a.addToHistory=function(e){a.setState(function(t){var a=t.compValue;return{compValue:[].concat(Object(c.a)(a),[e])}})},a.check=function(){var e=a.getRandomValue();a.addToHistory(e);var t=parseInt(a.refs.firstInput.value),n=parseInt(a.refs.secondInput.value),r=Math.abs(e-t),l=Math.abs(e-n);r<l?a.setState({winnerName:a.props.firstPlayerName}):r>l?a.setState({winnerName:a.props.secondPlayerName}):a.setState({winnerName:"Draw"});var o=a.state.hystorySteps,s=o.firstPlayerStep,u=o.secondPlayerStep;a.setState({hystorySteps:{firstPlayerStep:[].concat(Object(c.a)(s),[t]),secondPlayerStep:[].concat(Object(c.a)(u),[n])}})},a.state={compValue:[],hystorySteps:{firstPlayerStep:[],secondPlayerStep:[]},winnerName:"No"},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"\u0413\u0440\u0430 \xab\u0412\u0456\u0434\u0433\u0430\u0434\u0430\u0439 \u0447\u0438\u0441\u043b\u043e\xbb.  \u0414\u0432\u043e\u0454 \u0433\u0440\u0430\u0432\u0446\u0456\u0432 \u0432\u043a\u0430\u0437\u0443\u044e\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u0447\u0438\u0441\u0435\u043b. \u0412\u0438\u0433\u0440\u0430\u0454 \u0442\u043e\u0439, \u0447\u0438\u0454 \u0447\u0438\u0441\u043b\u043e \u0431\u043b\u0438\u0436\u0447\u0435 \u0434\u043e \u0447\u0438\u0441\u043b\u0430, \u044f\u043a\u0435 \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u043e \u043a\u043e\u043c\u043f\u2019\u044e\u0442\u0435\u0440\u043e\u043c \u0432\u0438\u043f\u0430\u0434\u043a\u043e\u0432\u0438\u043c \u0447\u0438\u043d\u043e\u043c."),this.props.firstPlayerName,": ",r.a.createElement("input",{ref:"firstInput",type:"number",placeholder:"Enter the number 1-100"}),this.props.secondPlayerName,": ",r.a.createElement("input",{ref:"secondInput",type:"number",placeholder:"Enter the number 1-100"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.check},"Get result"),r.a.createElement("h3",null,this.state.winnerName," win!"),r.a.createElement(d,{names:this.props,state:this.state}))}}]),t}(n.Component);var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{firstPlayerName:"Sem",secondPlayerName:"Jhon"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.119d75c9.chunk.js.map