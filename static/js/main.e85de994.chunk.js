(this["webpackJsonppodcast-commuter"]=this["webpackJsonppodcast-commuter"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/walkingIcon.f835e1f8.png"},18:function(e,t,a){e.exports=a.p+"static/media/watermelonBikeIcon.f2c0260c.png"},21:function(e,t,a){e.exports=a(45)},26:function(e,t,a){},4:function(e,t,a){e.exports=a.p+"static/media/watermelonfavicon.0ce774d5.png"},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(14),r=a.n(o),c=(a(26),a(2)),s=a(15),i=a(16),m=a(20),u=a(19),d=a(3),p=a.n(d),h=a(17),E=a.n(h),g=a(18),f=a.n(g),v=a(4),y=a.n(v),b=(a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).scrollToSearch=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})},e.toggle=function(t){t.preventDefault(),40===e.state.margin?e.setState({margin:70}):70===e.state.margin?e.setState({margin:90}):e.setState({margin:40})},e.handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.displayMap=function(t){if(t.preventDefault(),""!==e.state.from&&""!==e.state.to){["bicycle","pedestrian"].map((function(t){return p()({url:"https://www.mapquestapi.com/directions/v2/route",method:"GET",responseType:"JSONP",params:{key:"EP7bQzAhNEdKJsfFtJeLQDYa3muNllNO",routeType:t,from:e.state.from,to:e.state.to}}).then((function(a){var n=a.data.route.realTime,l="".concat(n/60),o=Math.round(l);e.setState(Object(c.a)({isMapShown:!0},t,o))}))}))}},e.getPodcasts=function(t,a){var n,l;"bicycle"===t?(n=e.state.bicycle,l=Math.round(1.1*e.state.bicycle+1)):"pedestrian"===t&&(n=e.state.pedestrian,l=Math.round(1.1*e.state.pedestrian+1)),p()({url:"https://listen-api.listennotes.com/api/v2/search",method:"GET",headers:{"X-ListenAPI-Key":"ea2d65fb95fc4f59a943faa7a423b3ad"},responseType:"JSON",params:{q:e.state.search+e.state.podcastGenre,genre_ids:e.state.podcastGenre,type:"episode",language:"English",len_min:n,len_max:l}}).then((function(t){t=t.data.results,e.setState({podcasts:t})})).catch((function(e){console.log(e)})),e.scrollToSearch(a)},e.displayChosenPodcast=function(t,a){e.setState({isPodcastShown:!0,chosenPodcast:t}),e.scrollToSearch(a)},e.state={podcasts:[],genre:"",isPodcastShown:!1,chosenPodcast:"",from:"",to:"",isMapShown:!1,minTime:"",maxTime:"",podcastGenre:"",search:"",margin:40},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.chosenPodcast,a="https://www.mapquestapi.com/staticmap/v5/map?start=".concat(this.state.from,"&end=").concat(this.state.to,"&size=400,200@2x&key=GjfNgstNA6zUKUgGcbkAzOwhHGvwyPRl&margin=").concat(this.state.margin);return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"flexContainer"},l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Podcast Commuter"),l.a.createElement("div",{className:"flexContainer"},l.a.createElement("p",null,l.a.createElement("img",{src:y.a,alt:"watermelon"}),"Your source for juicy podcasts on the go!",l.a.createElement("img",{src:y.a,alt:"watermelon"}))),l.a.createElement("ul",null,l.a.createElement("li",null,"How it works:"),l.a.createElement("li",null,"1. enter your starting address, followed by your destination."),l.a.createElement("li",null,"2. search a podcast by name, or select a cateogory of podcast you're in the mood for!"),l.a.createElement("li",null,"3. let us work some magic and populate the perfect, juiciest, most time coordinated podcast just for you and your commute!")),l.a.createElement("button",{className:"startButton",onClick:function(){return e.scrollToSearch(".background1")}},"Let's get started!"," ")))),l.a.createElement("section",{className:"background1"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"Tell us your starting address, where you're headed, and pick a podcast!"),l.a.createElement("form",{action:"",onSubmit:this.displayMap},l.a.createElement("div",{className:"borderBox1"},l.a.createElement("h2",null,"please enter your address"),l.a.createElement("label",{htmlFor:""},"Starting Address"),l.a.createElement("input",{value:this.state.from,onChange:this.handleChange,name:"from",type:"text",placeholder:"Street number, street name, city, province",required:!0}),l.a.createElement("label",{htmlFor:""},"Destination"),l.a.createElement("input",{value:this.state.to,onChange:this.handleChange,name:"to",type:"text",placeholder:"Street number, street name, city, province",required:!0})),l.a.createElement("div",{className:"borderBox1"},l.a.createElement("h2",null,"please search for a podcast by name, or choose a podcast genre"," "),l.a.createElement("label",{htmlFor:""},"Search for podcast by name"),l.a.createElement("input",{value:this.state.search,onChange:this.handleChange,name:"search",type:"text",placeholder:"Example: My Favorite Murder"}),l.a.createElement("button",{onClick:function(){return e.scrollToSearch(".background2")}},"SELECT"),l.a.createElement("p",null,"OR"),l.a.createElement("label",{htmlFor:"podcastGenre"},"Search for podcast by genre"),l.a.createElement("select",{name:"podcastGenre",id:"podcastGenre",onChange:this.handleChange},l.a.createElement("option",{value:""},"Choose a podcast genre"),l.a.createElement("option",{value:""},"Back to search by name"),l.a.createElement("option",{value:"144"},"Personal Finance"),l.a.createElement("option",{value:"77"},"Sports"),l.a.createElement("option",{value:"93"},"Business"),l.a.createElement("option",{value:"111"},"Education"),l.a.createElement("option",{value:"100"},"Arts"),l.a.createElement("option",{value:"132"},"Kids & Family"),l.a.createElement("option",{value:"122"},"Society & Culture"),l.a.createElement("option",{value:"133"},"Comedy"),l.a.createElement("option",{value:"168"},"Fiction"),l.a.createElement("option",{value:"117"},"Government"),l.a.createElement("option",{value:"88"},"Health & Fitness"),l.a.createElement("option",{value:"125"},"History"),l.a.createElement("option",{value:"82"},"Leisure"),l.a.createElement("option",{value:"134"},"Music"),l.a.createElement("option",{value:"99"},"News"),l.a.createElement("option",{value:"69"},"Religion & Spirituality"),l.a.createElement("option",{value:"107"},"Science"),l.a.createElement("option",{value:"68"},"TV & Film"),l.a.createElement("option",{value:"127"},"Technology"),l.a.createElement("option",{value:"135"},"True Crime")),l.a.createElement("button",{onClick:function(){return e.scrollToSearch(".background2")}},"SELECT"))," "))),l.a.createElement("section",{className:"background2"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"Choose your method of transportion"),this.state.isMapShown?l.a.createElement("img",{src:a,alt:"Map of user commute",onClick:this.toggle}):null,l.a.createElement("button",null,"+"),l.a.createElement("button",null,"-"),l.a.createElement("div",{className:"transportationMode"},l.a.createElement("div",{className:"flexContainer2"},l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement("button",{onClick:function(){return e.getPodcasts("bicycle",".background3")}},l.a.createElement("img",{src:f.a,alt:"Transportation via biking"}))),l.a.createElement("li",null,this.state.bicycle/60>=1?l.a.createElement("li",null,"Cycling Time: ",Math.floor(this.state.bicycle/60),"hr"," ",this.state.bicycle-60*Math.floor(this.state.bicycle/60),"mins"," "):l.a.createElement("li",null,"Cycling Time: ",this.state.bicycle," mins"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){return e.getPodcasts("pedestrian",".background3")}},l.a.createElement("img",{src:E.a,alt:"Transportation via walking"}))),l.a.createElement("li",null,this.state.pedestrian/60>=1?l.a.createElement("li",null,"Walking Time: ",Math.floor(this.state.pedestrian/60)," ","hr"," ",this.state.pedestrian-60*Math.floor(this.state.pedestrian/60),"mins"," "):l.a.createElement("li",null,"Walking Time: ",this.state.pedestrian," mins"))))))),l.a.createElement("section",{className:"background3"},l.a.createElement("div",{id:"here",className:"wrapper"},l.a.createElement("h2",null,"Pick your podcast!"),l.a.createElement("ul",{className:"podcastSection"},l.a.createElement("div",{className:"flexContainer3"},this.state.podcasts.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement("h2",null,t.podcast_title_original),l.a.createElement("img",{src:t.image,alt:t.podcast_title_original}),l.a.createElement("div",{className:"flexContainer"},l.a.createElement("p",null,"Author: ",t.publisher_original),t.audio_length_sec/60/60>=1?l.a.createElement("p",null,"Time:"," ",Math.floor(t.audio_length_sec/60/60)," hr"," ",Math.round(t.audio_length_sec/60)-60*Math.floor(t.audio_length_sec/60/60)," ","mins"):l.a.createElement("p",null,"Time: ",Math.round(t.audio_length_sec/60)," ","mins"),l.a.createElement("a",{href:t.link},"More Info"),l.a.createElement("button",{onClick:function(){return e.displayChosenPodcast(t,".chosenPodcastSection")}},"Choose")))}))))),l.a.createElement("section",{className:"chosenPodcastSection wrapper"},l.a.createElement("h2",null,"Audio Player"),this.state.isPodcastShown?l.a.createElement("div",{key:t.id,className:"chosenPodcast"},l.a.createElement("h2",null,t.podcast_title_original),l.a.createElement("div",{className:"flexContainer2"},l.a.createElement("img",{src:t.image,alt:t.podcast_title_original}),l.a.createElement("div",{className:"flexContainer"},l.a.createElement("p",null,"Author: ",t.publisher_original),l.a.createElement("a",{href:t.link},"More Information"),l.a.createElement("audio",{src:t.audio,controls:!0})))):null)),l.a.createElement("footer",null,l.a.createElement("p",null,"this juicy app was created during a not so juicy time in 2020 by Cliff, Victor, Anh, and Ro")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.e85de994.chunk.js.map