// let input=;

let btn=document.querySelector(".search button");
btn.addEventListener("click",()=>{
    fun(document.querySelector(".input").value);
})

let weatherIcon=document.querySelector(".weather-icon")
function fun(select) {
let key="a58b58b32d9a35688b7cec666b9c5191";
let prom=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select}&appid=${key}&units=metric`);
prom.then((data)=>{
    return data.json();
    
})

.then((data)=>{
   let temp= Math.round(Number(data.main.temp)) ;
   document.querySelector(".temp").textContent=`${temp}°C`;
   document.querySelector(".city").textContent=data.name;
   document.querySelector(".humidity").textContent=data.main.humidity +" %";
   document.querySelector(".wind").textContent=data.wind.speed +" km/h";
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="../images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="../images/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatherIcon.src="../images/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="../images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="../images/mist.png";
}
})
.catch(()=>{
    console.log("please enter proper name");
    
});

}

