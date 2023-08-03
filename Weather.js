let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please Enter Location")
        image.src="error1[1103].png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please Enter Write Location")
        image.src="error2[1102].png";
        city.innerHTML=search;
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="Clouds[1104].png"
    }else if(type.innerHTML == "Clear"){
        image.src="clears[1105].png"
    }else if(type.innerHTML == "Rain"){
        image.src="rain[1099].png"
    }else if(type.innerHTML == "Snow"){
        image.src="snow[1097].png"
    }else if(type.innerHTML == "Haze"){
        image.src="haze[1100].png"
    }else if(type.innerHTML == "Strom"){
        image.src="strom[1096].png"
    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }