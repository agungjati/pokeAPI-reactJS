(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,t,n){e.exports=n(79)},62:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),i=n(17),c=n(12),s=n(20),p=n(18),l=n(19),u=(n(62),n(15)),f=n(80),m=(n(67),n(105)),h=(n(68),n(107)),d=n(106),k=n(104),g=n(103),v=n(109),b={1:"https://imgix.ranker.com/user_node_img/33/642088/original/bulbasaur-photo-u26?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",2:"https://imgix.ranker.com/node_img/63/1246838/original/ivysaur-fictional-characters-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",3:"https://imgix.ranker.com/node_img/3181/63618159/original/venusaur-fictional-characters-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",4:"https://imgix.ranker.com/node_img/3181/63617521/original/charmander-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",5:"https://imgix.ranker.com/user_node_img/3181/63617277/original/charmeleon-fictional-characters-photo-u1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",6:"https://imgix.ranker.com/node_img/36/700363/original/charizard-film-characters-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",7:"https://imgix.ranker.com/node_img/105/2080613/original/squirtle-film-characters-photo-1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",8:"https://imgix.ranker.com/user_node_img/3683/73641094/original/wartortle-fictional-characters-photo-u1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",9:"https://imgix.ranker.com/user_node_img/3181/63618188/original/blastoise-fictional-characters-photo-u1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",10:"https://imgix.ranker.com/user_node_img/35/684205/original/caterpie-u7?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",11:"https://imgix.ranker.com/user_node_img/3683/73641095/original/metapod-fictional-characters-photo-u1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg",12:"https://imgix.ranker.com/user_node_img/3689/73773838/original/butterfree-photo-u1?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg"},y=n(108),j="Refresh Pokes",E="Remove poke list",O="Fetching Pokes",P="Error on fetching pokes",w="Add a Poke",C="Fetching a Poke",M="Error on fetching a poke",_="Catchs a Poke",S="Remove mypoke",x="add a poke to list",q=function(){return function(e){e({type:O}),fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12").then(function(e){return e.json()}).then(function(t){var n=t.results.map(function(e,t){return e.id=++t,e});e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:j,pokes:e}}(n))}).catch(function(t){e(function(e){return{type:P,errorMessage:e}}(t))})}},N=function(e){return function(t){t({type:C}),fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(function(e){return e.json()}).then(function(e){return t({type:w,poke:e})}).catch(function(e){t(function(e){return{type:M,error:!0,errorMessage:e}}(e))})}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n;t((n=e.id,{type:E,id:n})),t(L(e))}},L=function(e){return{type:_,poke:e}},z=function(e){return{type:S,poke:e}},F=function(e){return{type:x,poke:e}},R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).onCatchPoke=function(){n.props.catchPoke(n.props.poke),n.props.handleClose()},n.state={open:!1},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getPoke(this.props.id)}},{key:"render",value:function(){var e=this.props.poke,t=e.id,n=e.name,r=e.height,a=e.weight;return o.a.createElement(d.a,{style:this.props.fetching?{opacity:.5}:{opacity:1},open:this.props.open,onClose:this.props.handleClose},o.a.createElement(v.a,null,t,". ",n),o.a.createElement(g.a,{className:"detail-content"},o.a.createElement("img",{src:b[t],alt:n}),o.a.createElement(y.a,{style:{margin:"5px"},size:"medium",variant:"outlined",color:"primary",label:"Height : "+r}),o.a.createElement(y.a,{style:{margin:"5px"},size:"medium",variant:"outlined",color:"primary",label:"Weight : "+a})),o.a.createElement(k.a,null,o.a.createElement(h.a,{onClick:this.props.handleClose,color:"primary"},"Close"),o.a.createElement(h.a,{onClick:this.onCatchPoke,color:"primary"},"Catch")))}}]),t}(o.a.Component),A=Object(u.b)(null,function(e){return{catchPoke:function(t){return e(D(t))}}},null,{pure:!1})(R),J=Object(u.b)(function(e,t){var n=e.PokeState,r=e.MyPokeState;console.log("my poke  ",r);var o=n.pokes.filter(function(e){return e.id==t.id})[0];return o?{poke:o,fetching:n.fetching}:{poke:{id:t.id},fetching:n.fetching}},function(e){return{getPoke:function(t){return e(N(t))}}},null,{pure:!1})(A),U=n(52),B=n.n(U),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).handleOpenDetail=function(){n.setState({open:!0})},n.handleCloseDetail=function(){n.setState({open:!1})},n.handleSelect=function(){n.props.enableDetail&&n.setState({open:!0}),n.props.enableSelect&&n.setState({selected:!n.state.selected})},n.removeMe=function(){var e={id:n.props.id,name:n.props.name};n.props.removePoke(e)},n.state={open:!1,selected:!1},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,r=e.enableDetail;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{className:"poke",onClick:this.handleSelect,style:this.state.selected?{background:"#afc1c7"}:{}},this.state.selected?o.a.createElement(h.a,{onClick:this.removeMe,align:"right",size:"small",className:"remove-btn"},o.a.createElement(B.a,null)):"",o.a.createElement("div",{className:"poke-no"},t),o.a.createElement("div",{className:"poke-description"},o.a.createElement("img",{alt:n,src:b[t]}),o.a.createElement("div",null,n))),this.state.open&&r?o.a.createElement(J,{open:this.state.open,id:this.props.id,handleClose:this.handleCloseDetail}):"")}}]),t}(o.a.Component),I=Object(u.b)(null,function(e){return{removePoke:function(t){return e(function(e){return function(t){t(z(e)),t(F(e))}}(t))}}},null,{pure:!1})(H),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getPokes()}},{key:"componentDidUpdate",value:function(){var e=this.props.ListPokeState,t=e.error,n=e.errorMessage;t&&console.error(n)}},{key:"render",value:function(){var e=this.props.ListPokeState,t=e.pokes,n=e.fetching;return o.a.createElement("div",{className:"flex-center",style:n?{opacity:.5}:{opacity:1}},o.a.createElement(f.a,{className:"container-poke",style:{backgroundColor:"#f5ae46d6"}},o.a.createElement("h3",{className:"head-listpoke"},"Available Pokemons"),o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(I,{key:t,id:e.id,name:e.name,enableDetail:"true"})}))))}}]),t}(o.a.Component),G=Object(u.b)(function(e){var t=e.ListPokeState;return console.log("li ",t),t.pokes=t.pokes.sort(function(e,t){return e.id>t.id?1:-1}),{ListPokeState:t}},function(e){return{getPokes:function(){return e(q())}}},null,{pure:!1})(W),K=(n(78),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){console.log("my poke",this.props)}},{key:"render",value:function(){var e=this.props.pokes;return o.a.createElement("div",{className:"flex-center"},o.a.createElement(f.a,{className:"my-pokes",style:{backgroundColor:"#6ac5e8db",color:"#fff"}},o.a.createElement("h3",{className:"head-mypoke"},"My Pokemons"),o.a.createElement("div",{className:"container-my-pokes"},e.map(function(e,t){return o.a.createElement(I,{key:t,id:e.id,name:e.name,enableSelect:"true"})}))))}}]),t}(o.a.Component)),Q=Object(u.b)(function(e){return{pokes:e.MyPokeState}},null,null,{pure:!1})(K),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container-app"},o.a.createElement(G,null),o.a.createElement(Q,null))}}]),t}(o.a.Component),V=n(38),X=n(25),Y=function(e,t){var n=e.pokes.filter(function(e){return e.id===t.id});return 0===n.length?e.pokes.push(t):e.pokes=e.pokes.map(function(e){return e.id===n.id?t:e}),e.pokes},Z=Object(X.c)({ListPokeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokes:[],fetching:!0,error:!1},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.pokes,o=void 0===r?[]:r,a=t.id,i=t.errorMessage,c=void 0===i?"":i,s=t.poke,p=void 0===s?{}:s;switch(n){case j:return{pokes:Object(V.a)(o),fetching:!1,error:!1,errorMessage:""};case E:return e.pokes=e.pokes.filter(function(e){return e.id!==a}),e;case O:return{pokes:e.pokes,fetching:!0,error:!1,errorMessage:""};case P:return{pokes:e.pokes,fetching:!1,error:!0,errorMessage:c};case x:return e.pokes.push(p),e;default:return e}},PokeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pokes:[],fetching:!0,error:!1},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.poke,o=void 0===r?{}:r,a=t.errorMessage,i=void 0===a?"":a;switch(n){case w:return e.pokes=Y(e,o),{pokes:e.pokes,fetching:!1,error:!1,errorMessage:""};case C:return{pokes:e.pokes,fetching:!0,error:!1,errorMessage:""};case M:return{pokes:e.pokes,fetching:!1,error:!0,errorMessage:i};default:return e}},MyPokeState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.poke,o=void 0===r?{}:r;switch(n){case _:return e.push(o),e=e.sort(function(e,t){return e.id>t.id?1:-1});case S:return e=e.filter(function(e){return e.id!==o.id});default:return e}}}),$=[n(53).a],ee=Object(X.d)(Z,X.a.apply(void 0,$));Object(a.render)(o.a.createElement(u.a,{store:ee},o.a.createElement(T,null)),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.b25fbfe0.chunk.js.map