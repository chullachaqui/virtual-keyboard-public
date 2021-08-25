(()=>{"use strict";var t={d:(e,i)=>{for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{K:()=>c});class e{constructor(t){"en"===t?(this.initialAlert="Unable to retrieve user's location. Please use the search engine.",this.emblem="ENG",this.placeholder="Search city or location",this.search="Search",this.searchAlert="Please retry with a valid location name",this.timezone=`${t}-GB`,this.wind="Wind speed: ",this.feelsLike="Feels like: ",this.humidity="Humidity: ",this.latitude="Latitude: ",this.longitude="Longitude: "):(this.initialAlert="Nie ustalono pozycji użytkownika. Proszę użyć wyszukiwarki.",this.emblem="PL",this.placeholder="Znajdź miasto lub miejsce",this.search="Szukaj",this.searchAlert="Spróbój ponownie wpisując poprawne dane",this.timezone="pl",this.wind="Prędkość wiatru: ",this.feelsLike="Temperatura odczuwalna: ",this.humidity="Wilgotność: ",this.latitude="Szerokość geograficzna: ",this.longitude="Długość geograficzna: ")}}class i{constructor(t,e,i,a){const n=document.createElement(t);return i&&n.classList.add(i),e.appendChild(n),a&&Object.keys(a).forEach((t=>{n.setAttribute(t,a[t])})),n}}class a{constructor(t){this.dictionary=new e(t),this.container=document.querySelector(".dashboard");const a=new i("div",this.container,"buttons");this.changeBackground=new i("div",a,"button"),this.changeBackground.button=new i("span",this.changeBackground,"material-icons-outlined"),this.changeBackground.button.innerHTML="refresh";const n=new i("div",a,"listContainer");this.changeLanguage=new i("div",n,"closed-list"),this.changeLanguage.chosen=new i("div",this.changeLanguage,"languageSelected"),this.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.changeLanguage.choice1=new i("div",this.changeLanguage,"languageSelection"),this.changeLanguage.choice1.innerHTML="ENG",this.changeLanguage.choice2=new i("div",this.changeLanguage,"languageSelection"),this.changeLanguage.choice2.innerHTML="PL",this.celsius=new i("div",a,"units-c"),this.celsius.innerHTML="°C",this.fahrenheit=new i("div",a,"units-f"),this.fahrenheit.innerHTML="°F","celsius"===localStorage.getItem("units")?this.celsius.classList.add("active-button"):this.fahrenheit.classList.add("active-button");const s=new i("div",this.container,"searchArea"),o=new i("div",s,"voiceButton");this.voiceIcon=new i("div",o,"material-icons-outlined"),this.voiceIcon.innerHTML="mic",this.searchBar=new i("input",s,"searchBar",{type:"search",placeholder:this.dictionary.placeholder}),this.searchButton=new i("input",s,"searchButton",{type:"button",value:this.dictionary.search})}translateDashboard(){this.searchBar.setAttribute("placeholder",c.dictionary.placeholder),this.searchButton.setAttribute("value",c.dictionary.search)}}class n{constructor(){this.units=localStorage.getItem("units")||"celsius",this.main=document.querySelector(".main");const t=new i("section",this.main,"weather"),e=new i("div",t);this.location=new i("p",e,"location"),this.time=new i("p",e,"time");const a=new i("div",e,"condition");this.temperature=new i("p",a,"temperature-today");const n=new i("div",a,"overview");this.icon=new i("img",n,"icon"),this.description=new i("p",n,"text"),this.wind=new i("p",n,"text"),this.feelsLike=new i("p",n,"text"),this.humidity=new i("p",n,"text");const s=new i("div",t,"forecast");for(let t=1;t<=3;t++){const e=new i("div",s,"forecast-day");this[`day${t}`]=e,e.weekday=new i("div",e,"forecast-weekday");const a=new i("p",e,"forecast-condition");e.temperature=new i("div",a,"forecast-temperature"),e.icon=new i("img",a,"forecast-icon")}}getWeather(t,e){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t}&lon=${e}&exclude=minutely,hourly,alerts&cnt=3&appid=f9d19679058f35da8b74e2b7fb3b62a1&lang=${localStorage.getItem("lang")}&units=metric`).then((t=>t.json())).then((t=>{this.displayWeather(t)}))}displayWeather(t){const e=t.timezone,i=(new Date).toLocaleString(c.dictionary.timezone,{weekday:"short",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:`${e}`}).replaceAll(",","");this.time.innerHTML=`${i}`,this.description.innerHTML=`${t.current.weather[0].description}`,this.temperature.value=this.unitSwitch(t.current.temp),this.temperature.innerHTML=this.temperature.value,this.feelsLike.value=this.unitSwitch(t.current.feels_like),this.icon.setAttribute("src",`http://openweathermap.org/img/wn/${t.current.weather[0].icon}@2x.png`),this.wind.innerHTML=`${c.dictionary.wind}${t.current.wind_speed} m/s`,this.feelsLike.innerHTML=`${c.dictionary.feelsLike}${this.feelsLike.value}`,this.humidity.innerHTML=`${c.dictionary.humidity}${t.current.humidity} %`;for(let e=1;e<=3;e+=1){let i=new Date,a=i.getDate();a+=e,i.setDate(a);const n=this[`day${e}`];n.weekday.innerHTML=i.toLocaleString(c.dictionary.timezone,{weekday:"long"}),n.icon.setAttribute("src",`http://openweathermap.org/img/wn/${t.daily[e].weather[0].icon}@2x.png`),n.temperature.innerHTML=this.unitSwitch((t.daily[e].temp.min+t.daily[e].temp.max)/2)}}unitSwitch(t){return"celsius"===localStorage.getItem("units")?`${Math.round(t)}°C`:`${Math.round(1.8*t+32)}°F`}}const s=t=>Math.round(1e3*t)/1e3,o=t=>{const e=t%1*60,i=e%1*60;return`${Math.round(t)}° ${Math.abs(Math.floor(e))}" ${Math.abs(Math.floor(i))}'`};class r{constructor(){const t=document.querySelector(".main");this.container=new i("section",t,"map"),this.mapContainer=new i("div",this.container,"map",{id:"map",style:"width: 350px; height: 300px;"}),mapboxgl.accessToken="pk.eyJ1IjoiY2h1bGxhY2hhcXVpIiwiYSI6ImNrcm50OXpvbzEwMTAyb25veWN2MG5kM3AifQ.mzkVMgGbIu7ApGVaWtPAbg",this.coordinates=new i("div",this.container,"coordinates"),this.coordinates.latititude=new i("p",this.coordinates),this.coordinates.longitude=new i("p",this.coordinates)}centerPosition(t,e){new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[e,t],zoom:10})}displayCoordinates(t,e){this.coordinates.latititude.innerHTML=`${c.dictionary.latitude}${o(t)}`,this.coordinates.longitude.innerHTML=`${c.dictionary.longitude}${o(e)}`}}class h{constructor(){const t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.interimResults=!0}voiceSearchListener(){const t=document.querySelector(".voiceButton");t.addEventListener("click",(()=>{this.recognition.start(),t.classList.toggle("active-button"),this.recognition.addEventListener("result",(e=>{if(e.results[0].isFinal){const i=document.querySelector(".searchBar");i.value=`${e.results[0][0].transcript}`,c.getLocationBasedWeather(i.value),t.classList.remove("active-button")}})),this.recognition.addEventListener("end",(()=>{this.recognition.abort(),t.classList.remove("active-button")}))}))}}const c=new class{constructor(){this.generateHTML(),this.getInitialWeather(),this.language=localStorage.getItem("lang")||"en",this.dashboard=new a(this.language),this.weather=new n,this.map=new r,this.speech=new h,this.dictionary=new e(this.language),this.previousLat="",this.previousLng="",this.searchListeners(),this.unitChangeListeners(),this.languageListeners(),this.backgroundListeners(),this.speech.voiceSearchListener()}generateHTML(){this.dashboardElement=new i("header",document.body,"dashboard"),this.mainElement=new i("main",document.body,"main")}getBackground(){fetch(`https://api.unsplash.com/photos/random?&client_id=L0JtEhlUZnLRnHtLs5d8-BZBPQNp-Pejvs5PKObs7eE&orientation=landscape&per_page=1&query=${this.weather.description.innerHTML},sky,weather`).then((t=>t.json())).then((t=>{const e=t.urls.regular;document.body.setAttribute("style",`background-image: url(${e});`)}))}getInitialWeather(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((t=>{if(t.coords){const e=t.coords.latitude,i=t.coords.longitude;this.getLocationBasedWeather(`${e},${i}`)}}),(()=>{this.getBackground(),alert(this.dictionary.initialAlert)}),{enableHighAccuracy:!0})}getLocationBasedWeather(t){fetch(`https://api.opencagedata.com/geocode/v1/json?q=${t}&key=d1e4f3c55f444cfa82590e0c3d733a98&limit=1&language=${localStorage.getItem("lang")}`).then((t=>t.json())).then((t=>{let e;this.latitude=t.results[0].geometry.lat,this.longitude=t.results[0].geometry.lng,this.map.displayCoordinates(this.latitude,this.longitude),this.dashboard.translateDashboard(),t.results[0].components.city?e=t.results[0].components.city:t.results[0].components.town?e=t.results[0].components.town:t.results[0].components.administrative?e=t.results[0].components.administrative:t.results[0].components.village?e=t.results[0].components.village:t.results[0].components.region&&(e=t.results[0].components.region),this.getBackground(),s(this.previousLat)!==s(this.latitude)&&s(this.previousLng)!==s(this.longitude)&&this.map.centerPosition(this.latitude,this.longitude),this.weather.location.innerHTML=e?`${e}, ${t.results[0].components.country}`:`${t.results[0].components.country}`,this.previousLat=this.latitude,this.previousLong=this.longitude,this.weather.getWeather(this.latitude,this.longitude)})).catch((()=>alert(this.dictionary.searchAlert)))}searchListeners(){this.dashboard.searchButton.addEventListener("click",(()=>{this.getLocationBasedWeather(this.dashboard.searchBar.value),this.dashboard.searchBar.value=""})),this.dashboard.searchBar.addEventListener("keydown",(t=>{"Enter"===t.code&&(this.getLocationBasedWeather(this.dashboard.searchBar.value),this.dashboard.searchBar.value="")}))}unitChangeListeners(){this.dashboard.celsius.addEventListener("click",(()=>{localStorage.setItem("units","celsius"),this.weather.getWeather(this.latitude,this.longitude),this.dashboard.celsius.classList.add("active-button"),this.dashboard.fahrenheit.classList.remove("active-button")})),this.dashboard.fahrenheit.addEventListener("click",(()=>{localStorage.setItem("units","fahrenheit"),this.weather.getWeather(this.latitude,this.longitude),this.dashboard.fahrenheit.classList.add("active-button"),this.dashboard.celsius.classList.remove("active-button")}))}languageListeners(){this.dashboard.changeLanguage.addEventListener("click",(()=>{this.dashboard.changeLanguage.classList.toggle("open-list"),this.dashboard.changeLanguage.classList.toggle("closed-list")})),this.dashboard.changeLanguage.choice1.addEventListener("click",(()=>{"pl"===this.language&&(this.language="en",localStorage.setItem("lang","en"),this.dictionary=new e("en"),this.dashboard.translateDashboard(),this.dashboard.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.weather.location.innerHTML&&(this.map.displayCoordinates(this.latitude,this.longitude),this.getLocationBasedWeather(`${this.latitude},${this.longitude}`)))})),this.dashboard.changeLanguage.choice2.addEventListener("click",(()=>{"en"===this.language&&(this.language="pl",localStorage.setItem("lang","pl"),this.dictionary=new e("pl"),this.dashboard.translateDashboard(),this.dashboard.changeLanguage.chosen.innerHTML=this.dictionary.emblem,this.weather.location.innerHTML&&(this.map.displayCoordinates(this.latitude,this.longitude),this.getLocationBasedWeather(`${this.latitude},${this.longitude}`)))}))}backgroundListeners(){this.dashboard.changeBackground.addEventListener("click",(()=>{this.dashboard.changeBackground.button.classList.add("rotation"),this.getBackground(),setTimeout((()=>{this.dashboard.changeBackground.button.classList.remove("rotation")}),1500)}))}};window.omena=c})();