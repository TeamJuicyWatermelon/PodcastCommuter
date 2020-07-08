(this["webpackJsonppodcast-commuter"]=this["webpackJsonppodcast-commuter"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/walkingIcon.f835e1f8.png"},20:function(e,t,a){e.exports=a.p+"static/media/watermelonBikeIcon.f2c0260c.png"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),l=(a(26),a(7)),c=a(2),i=a(3),m=a(5),p=a(4),u=a(6),h=a.n(u),d=a(8),E=a.n(d),g=function(e){return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Podcast Commuter"),r.a.createElement("div",{className:"flexContainer"},r.a.createElement("p",null,r.a.createElement("img",{src:E.a,alt:"watermelon"}),"Your source for juicy podcasts on the go!",r.a.createElement("img",{src:E.a,alt:"watermelon"})),r.a.createElement("ul",null,r.a.createElement("li",null,"How it works:"),r.a.createElement("li",null,"1. Enter your starting address, followed by your destination."),r.a.createElement("li",null,"2. Search for a podcast by name or by genre."),r.a.createElement("li",null,"3. Let us work some magic and populate the perfect, juiciest, most time coordinated podcast just for you and your commute!")),r.a.createElement("button",{className:"startButton",onClick:function(){return e.scrollToSearch(".formBackground")}},"Let's get started!")))))},f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"formBackground"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Tell us your starting address, where you're headed, and pick a podcast!"),r.a.createElement("form",{action:"",onSubmit:this.props.displayMap},r.a.createElement("div",{className:"borderBox1"},r.a.createElement("h2",null,"Please enter your address"),r.a.createElement("label",{htmlFor:""},"Starting Address"),r.a.createElement("input",{value:this.props.from,onChange:this.props.handleChange,name:"from",type:"text",placeholder:"Street address, city, prov.",required:!0}),r.a.createElement("label",{htmlFor:""},"Destination"),r.a.createElement("input",{value:this.props.to,onChange:this.props.handleChange,name:"to",type:"text",placeholder:"Street address, city, prov.",required:!0})),r.a.createElement("div",{className:"borderBox1"},r.a.createElement("h2",null,"Please search for a podcast by name, or choose a podcast genre"," "),r.a.createElement("label",{htmlFor:""},"Search for podcast by name"),r.a.createElement("input",{value:this.props.search,onChange:this.props.handleChange,name:"search",type:"text",placeholder:"Example: My Favorite Murder"}),r.a.createElement("button",{onClick:function(){return e.props.scrollToSearch(".mapBackground")}},"SELECT"),r.a.createElement("p",null,"OR"),r.a.createElement("label",{htmlFor:"podcastGenre"},"Search for podcast by genre"),r.a.createElement("select",{name:"podcastGenre",id:"podcastGenre",onChange:this.props.handleChange},r.a.createElement("option",{value:""},"Choose a genre"),r.a.createElement("option",{value:"127"},"Technology"),r.a.createElement("option",{value:"135"},"True Crime"),r.a.createElement("option",{value:"134"},"Music"),r.a.createElement("option",{value:"77"},"Sports"),r.a.createElement("option",{value:"99"},"News"),r.a.createElement("option",{value:"100"},"Arts"),r.a.createElement("option",{value:"68"},"TV & Film"),r.a.createElement("option",{value:"88"},"Health & Fitness"),r.a.createElement("option",{value:"93"},"Business"),r.a.createElement("option",{value:"111"},"Education"),r.a.createElement("option",{value:"132"},"Kids & Family"),r.a.createElement("option",{value:"122"},"Society & Culture"),r.a.createElement("option",{value:"144"},"Personal Finance"),r.a.createElement("option",{value:"133"},"Comedy"),r.a.createElement("option",{value:"125"},"History"),r.a.createElement("option",{value:"69"},"Religion & Spirituality"),r.a.createElement("option",{value:"107"},"Science"),r.a.createElement("option",{value:"117"},"Government")),r.a.createElement("button",{onClick:function(){return e.props.scrollToSearch(".mapBackground")}},"SELECT")))))}}]),a}(n.Component),y=a(19),b=a.n(y),v=a(20),S=a.n(v),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t="https://www.mapquestapi.com/staticmap/v5/map?start=".concat(this.props.from,"&end=").concat(this.props.to,"&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl&margin=").concat(this.props.margin);return r.a.createElement("section",{className:"mapBackground"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Choose your method of transportation"),this.props.isMapShown?r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"Map of user commute"}),r.a.createElement("button",{onClick:this.props.zoomIn},r.a.createElement("i",{className:"fas fa-search-plus"})),r.a.createElement("button",{onClick:this.props.zoomOut},r.a.createElement("i",{className:"fas fa-search-minus"}))):null,this.props.isMapShown?r.a.createElement("div",{className:"transportationMode"},r.a.createElement("div",{className:"flexContainer2"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.props.getPodcasts("bicycle",".podcastBackground")}},r.a.createElement("img",{src:S.a,alt:"Transportation via biking"}))),this.props.bicycle/60>=1?r.a.createElement("li",null,"Cycling Time: ",Math.floor(this.props.bicycle/60)," hr ",this.props.bicycle-60*Math.floor(this.props.bicycle/60)," mins"):r.a.createElement("li",null,"Cycling Time: ",this.props.bicycle," mins")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return e.props.getPodcasts("pedestrian",".podcastBackground")}},r.a.createElement("img",{src:b.a,alt:"Transportation via walking"}))),this.props.pedestrian/60>=1?r.a.createElement("li",null,"Walking Time: ",Math.floor(this.props.pedestrian/60)," hr ",this.props.pedestrian-60*Math.floor(this.props.pedestrian/60)," mins"):r.a.createElement("li",null,"Walking Time: ",this.props.pedestrian," mins")))):null))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.chosenPodcast;return r.a.createElement("section",{className:"podcastBackground"},r.a.createElement("div",{id:"here",className:"wrapper"},r.a.createElement("h2",null,"Pick your podcast"),r.a.createElement("ul",{className:"podcastSection"},r.a.createElement("div",{className:"flexContainer3"},this.props.podcasts.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("h2",null,t.podcast_title_original),r.a.createElement("img",{src:t.image,alt:t.podcast_title_original}),r.a.createElement("div",{className:"flexContainer"},r.a.createElement("p",null,"Episode: ",t.title_original),r.a.createElement("p",null,"Author: ",t.publisher_original),t.audio_length_sec/60/60>=1?r.a.createElement("p",null,"Time: ",Math.floor(t.audio_length_sec/60/60)," hr ",Math.round(t.audio_length_sec/60)-60*Math.floor(t.audio_length_sec/60/60)," mins"):r.a.createElement("p",null,"Time: ",Math.round(t.audio_length_sec/60)," mins"),r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},"More Info"),r.a.createElement("button",{onClick:function(){return e.props.displayChosenPodcast(t,".chosenPodcastSection")}},"Choose")))}))))),r.a.createElement("div",{className:"chosenPodcastSection wrapper"},r.a.createElement("h2",null,"Audio Player"),this.props.isPodcastShown?r.a.createElement("div",{key:t.id,className:"chosenPodcast"},r.a.createElement("h2",null,t.podcast_title_original),r.a.createElement("div",{className:"flexContainer2"},r.a.createElement("img",{src:t.image,alt:t.podcast_title_original}),r.a.createElement("div",{className:"flexContainer"},r.a.createElement("p",null,"Episode: ",t.title_original),r.a.createElement("p",null,"Author: ",t.publisher_original),r.a.createElement("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},"More Information"),r.a.createElement("audio",{src:t.audio,controls:!0})))):null))}}]),a}(n.Component),C=(a(44),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).scrollToSearch=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})},e.scrollToSearchBottom=function(){document.querySelector(".chosenPodcastSection").scrollIntoView({behavior:"smooth",block:"start"})},e.resultButton=function(){var t=setTimeout((function(){return e.scrollToSearchBottom()}),500);return function(){return clearTimeout(t)}},e.zoomIn=function(t){t.preventDefault(),90===e.state.margin?e.setState({margin:70}):70===e.state.margin?e.setState({margin:40}):e.setState({margin:1})},e.zoomOut=function(t){t.preventDefault(),1===e.state.margin?e.setState({margin:40}):40===e.state.margin?e.setState({margin:70}):e.setState({margin:90})},e.handleChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.displayMap=function(t){if(t.preventDefault(),""!==e.state.from&&""!==e.state.to){["bicycle","pedestrian"].map((function(t){return h()({url:"https://www.mapquestapi.com/directions/v2/route",method:"GET",responseType:"JSONP",params:{key:"EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO",routeType:t,from:e.state.from,to:e.state.to}}).then((function(a){var n=a.data.route.realTime,r="".concat(n/60),o=Math.round(r);e.setState(Object(l.a)({isMapShown:!0},t,o))}))}))}},e.getPodcasts=function(t,a){var n="",r="";"bicycle"===t&&e.state.bicycle<=180?(n=e.state.bicycle,r=Math.round(1.1*e.state.bicycle+1)):"pedestrian"===t&&e.state.pedestrian<=180?(n=e.state.pedestrian,r=Math.round(1.1*e.state.pedestrian+1)):alert("This commute time is too long! We need a commute that is 3 hours or less! Please try again!"),""!==n&&""!==r&&""!==e.state.search?(h()({url:"https://listen-api.listennotes.com/api/v2/search",method:"GET",headers:{"X-ListenAPI-Key":"ea2d65fb95fc4f59a943faa7a423b3ad"},responseType:"JSON",params:{q:e.state.search,genre_ids:e.state.podcastGenre,type:"episode",language:"English",len_min:n,len_max:r}}).then((function(t){(t=t.data.results).length<1?alert("Hey! We didn't find a podcast that matches your search! Please try again!"):t.length>=0&&e.setState({podcasts:t})})).catch((function(){alert("Oops! Request didn't work! Please try again!")})),e.scrollToSearch(a)):""!==n&&""!==r&&""===e.state.search&&(h()({url:"https://listen-api.listennotes.com/api/v2/search",method:"GET",headers:{"X-ListenAPI-Key":"ea2d65fb95fc4f59a943faa7a423b3ad"},responseType:"JSON",params:{q:"podcast",genre_ids:e.state.podcastGenre,type:"episode",language:"English",len_min:n,len_max:r}}).then((function(t){(t=t.data.results).length<1?alert("Hey! We didn't find a podcast that matches your search! Please try again!"):t.length>=0&&e.setState({podcasts:t})})).catch((function(){alert("Oops! Request didn't work! Please try again!")})),e.scrollToSearch(a))},e.displayChosenPodcast=function(t,a){e.resultButton(),e.setState({isPodcastShown:!0,chosenPodcast:t})},e.state={podcasts:[],genre:"",isPodcastShown:!1,chosenPodcast:"",from:"",to:"",isMapShown:!1,podcastGenre:"",search:"",margin:40,bicycle:"",pedestrian:""},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{scrollToSearch:this.scrollToSearch}),r.a.createElement(f,{scrollToSearch:this.scrollToSearch,handleChange:this.handleChange,displayMap:this.displayMap,from:this.state.from,to:this.state.to,search:this.state.search}),r.a.createElement(k,{isMapShown:this.state.isMapShown,zoomIn:this.zoomIn,zoomOut:this.zoomOut,getPodcasts:this.getPodcasts,bicycle:this.state.bicycle,pedestrian:this.state.pedestrian,margin:this.state.margin,to:this.state.to,from:this.state.from}),r.a.createElement(w,{chosenPodcast:this.state.chosenPodcast,podcasts:this.state.podcasts,displayChosenPodcast:this.displayChosenPodcast,isPodcastShown:this.state.isPodcastShown}),r.a.createElement("footer",null,r.a.createElement("div",{className:""},r.a.createElement("p",null,"Podcast Commuter was created by",r.a.createElement("a",{href:"https://github.com/anhthuydang",target:"_blank",rel:"noopener noreferrer"}," Anh Thuy Dang "),"&&",r.a.createElement("a",{href:"https://github.com/cliffstonge",target:"_blank",rel:"noopener noreferrer"}," Cliff St-Onge "),"&&",r.a.createElement("a",{href:"https://github.com/rojhanpaydar",target:"_blank",rel:"noopener noreferrer"}," Ro Paydar "),"&&",r.a.createElement("a",{href:"https://github.com/VictorKwong",target:"_blank",rel:"noopener noreferrer"}," Victor Wong ")))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a.p+"static/media/watermelonfavicon.0ce774d5.png"}},[[21,1,2]]]);
//# sourceMappingURL=main.fcf5c2df.chunk.js.map