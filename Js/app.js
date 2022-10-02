import {getSalat} from "/Js/get_salat_times.js";


/*
simple salat time applicatin by Hussin Tsouli 
*/
$(document).ready(function (){
    //check if you already selected your city in localstorage
    if(localStorage.getItem("City") == null){
        //if not get casablanca by default
        getSalat("Casablanca")
    }else{
        //if yes get city from localstorage
        let saved_city = localStorage.getItem("City")
        //call api with ccity 
        getSalat(saved_city)
        //set option on selected box
        $(".City").val(saved_city)
    }
})
    
    




// on city selected actions
$(".City").change(function (){
    //call api with selected city
    getSalat($(".City").val())
    //set loacl storage city for next website load...
    localStorage.setItem("City",$(".City").val())
})