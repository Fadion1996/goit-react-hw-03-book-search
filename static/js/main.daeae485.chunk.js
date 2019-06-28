(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){e.exports=a(382)},227:function(e,t,a){},31:function(e,t,a){e.exports={card:"book-list-item_card__R7o_j",details:"book-list-item_details__LtuhI",media:"book-list-item_media__11C-7",actions:"book-list-item_actions__2liGh"}},363:function(e,t,a){},364:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(17),s=a.n(r),c=a(42),i=a(43),l=a(46),m=a(44),u=a(47),d=a(127),h=a.n(d),p=(a(227),a(15)),b=a(129),g=a.n(b),f=a(31),v=a.n(f),E=function(e){var t=e.image,a=void 0===t?"404":t,n=e.title,r=void 0===n?"No data":n,s=e.description,c=void 0===s?"No data":s,i=e.author,l=void 0===i?"No name":i,m=e.publisher,u=void 0===m?"No name":m,d=e.publishedDate,h=void 0===d?"No data":d,b=e.pageCount,f=void 0===b?"No data":b,E=e.rating,k=void 0===E?0:E;return o.a.createElement(p.c,{className:v.a.card},o.a.createElement(p.g,{className:v.a.media,image:a.thumbnail,title:r}),o.a.createElement("div",{className:v.a.details},o.a.createElement(p.f,{title:r,subheader:"Published date: "+h}),o.a.createElement(p.e,null,o.a.createElement(p.l,{component:"p"},o.a.createElement("b",null,"Publisher: "),u),o.a.createElement(p.l,{component:"p"},o.a.createElement("b",null,"Authors: "),l),o.a.createElement(p.l,{component:"p"},o.a.createElement("b",null,"Description: "),c)),o.a.createElement(p.d,{className:v.a.actions,disableActionSpacing:!0},o.a.createElement(p.i,{"aria-label":"Add to favorites",disabled:!0},o.a.createElement(p.a,{badgeContent:k,color:"primary"},o.a.createElement(g.a,null))),o.a.createElement(p.l,{component:"p"},"Pages: ",f))))},k=a(45),N=a.n(k),y=(a(363),function(e){return o.a.createElement("section",{className:"book-list"},e.booksList.map(function(e){return o.a.createElement(E,{key:N.a.generate(),image:e.imageLinks,title:e.title,description:e.description,author:e.authors,publisher:e.publisher,publishedDate:e.publishedDate,pageCount:e.pageCount,rating:e.ratingsCount})}))}),C=(a(364),a(130)),w=a.n(C),_=function(){return o.a.createElement("section",{className:"loader"},o.a.createElement(w.a,{name:"line-scale"}))},j=(a(381),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={searchBook:"",selectGenre:""},a.selectChange=function(e){a.setState({selectGenre:e.target.value})},a.searchChange=function(e){a.setState({searchBook:e.target.value})},a.handleClick=function(){a.props.onSubmit(a.state.searchBook,a.state.selectGenre)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.genres,a=this.state,n=a.searchBook,r=a.selectGenre;return o.a.createElement("section",{className:"search-form"},o.a.createElement(p.k,{id:"outlined-with-placeholder",className:"search-form-input",label:"Search book",placeholder:"Enter name",margin:"normal",variant:"outlined",value:n,onChange:this.searchChange}),o.a.createElement(p.h,{className:"search-form-dropdown"},o.a.createElement(p.k,{id:"outlined-select-currency",select:!0,label:"Select genre",className:"search-form-dropdown-select",value:r,onChange:this.selectChange,margin:"normal",variant:"outlined"},t.map(function(e){return o.a.createElement(p.j,{className:"search-form-dropdown-select-option",key:N.a.generate(),value:e},e)}))),o.a.createElement(p.b,{variant:"contained",color:"primary",onClick:function(){return e.handleClick()}},"Search"))}}]),t}(n.Component)),O="AIzaSyCy_9n4RfX6YAFvWQAw-dPPbLTUptnMLHs",S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={genres:["fantasy","thriller","drama","mystery","horror","satire","computers"],books:[],isLoading:!0},a.setUserOption=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a.setState({isLoading:!0,books:[]}),h.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"+subject:").concat(t,"&key=").concat(O)).then(function(e){e.data.items.map(function(e){return a.setState({books:a.state.books.concat(e.volumeInfo)}),null}),a.setState({isLoading:!1})}).catch(function(){a.setState({isLoading:!1})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setUserOption()}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(j,{genres:this.state.genres,onSubmit:this.setUserOption}),this.state.isLoading?o.a.createElement(_,null):this.state.books.length?o.a.createElement(y,{booksList:this.state.books}):o.a.createElement(p.l,{className:"no-results",component:"h4",variant:"h4"},"No results."))}}]),t}(n.Component);s.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.daeae485.chunk.js.map