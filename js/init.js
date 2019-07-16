(function($){
  $(document).ready(function(){
   
    $('.modal').modal();
  
  })
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


var aa = 2019
  var mm = 07
  var dd = 21
  var hh = 09
  var mi = 00
  function setcountdown(theyear,themonth,theday,hour,minutes) {
    yr=theyear;mo=themonth;da=theday
  } setcountdown(aa,mm,dd)
  
  
// var print =  
var occasion="Casamento"
var message_on_occasion="É hoje"
 
 
var countdownwidth='510px'
var countdownheight='200px'
var countdownbgcolor='#ccffe1'
var opentags='<font face="Verdana" size="2" color="#000000">'
var closetags='</font>'
 
 
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var crosscount = document.getElementById('countdownie'); 
 
function start_countdown(){
if (document.layers)
document.countdownnsmain.visibility="show"
else if (document.all||document.getElementById)
crosscount=document.getElementById&&!document.all?document.getElementById("countdownie") : countdownie
countdown()
}
 
if (document.all||document.getElementById)
document.write('<span id="countdownie" style="width:'+countdownwidth+'; background-color:'+countdownbgcolor+'"></span>')
 
window.onload=start_countdown
 
 
function countdown(){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todayh=today.getHours()
var todaymin=today.getMinutes()
var todaysec=today.getSeconds()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec
futurestring=montharray[mo-1]+" "+da+", "+yr
dd=Date.parse(futurestring)-Date.parse(todaystring)
dday=Math.floor(dd/(60*60*1000*24)*1)
dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1)
dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1)
dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1)
//if on day of occasion
if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=1&&todayd==da){
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write (opentags+message_on_occasion+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+message_on_occasion+closetags
return
}
//if passed day of occasion
else if (dday<=-1){
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write(opentags+"Occasion already passed! "+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+"Já passou"+closetags
return
}
//else, if not yet
else{
if (document.layers){
document.countdownnsmain.document.countdownnssub.document.write(opentags+dday+ " days, "+dhour+" hours, "+dmin+" minutes, and "+dsec+" "+occasion+closetags)
document.countdownnsmain.document.countdownnssub.document.close()
}
else if(window.innerWidth <= 425){
crosscount.innerHTML=opentags+ dday+ " Dias | "+dhour+":"+dmin+" "+dsec+"s |<b>"+closetags
}
else if (document.all||document.getElementById)
crosscount.innerHTML=opentags+"Faltam "+dday+ " Dias | "+dhour+":"+dmin+" "+dsec+"s |<b>"+closetags
}
setTimeout("countdown()",1000)
}

$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 800) {
          $('a[href="#top"]').fadeIn();
      } else {
          $('a[href="#top"]').fadeOut();
      }
  });

  $('a[href="#top"]').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});
 
(function(){
  var PP = document.querySelectorAll('p');
  console.log(PP)
  var i = 0
  while ( i <= PP.length){
    PP[i].textContent = 'CABRINI ALVES DOS REIS';
    i++
  }
  
})
var qtdMenos = document.querySelectorAll('.minus');
var qtdMais = document.querySelectorAll('.plus');
var prods = document.querySelectorAll('.qua_wrap');
var addprod = document.querySelectorAll('.addprod');
var raz  = document.querySelectorAll('.pdr');
var V=[]

prods.forEach(prod => {
  prod.querySelector('.plus').addEventListener('click', function(){
    var input = prod.querySelector('.quantity')
    input.value = parseInt(input.value)+1;
    
  })
});

prods.forEach(prod => {

  prod.querySelector('.minus').addEventListener('click', function(){
    var input = prod.querySelector('.quantity')
    if(input.value>0){
    input.value = parseInt(input.value)-1;
  }
  })
});

// insert +
raz.forEach(ras => {
  ras.querySelector('.plus').addEventListener('click', function(){
    var input = ras.querySelector('.quantity')
    var preco = ras.querySelector('.preco')
    var totalItem = ras.querySelector('.totalItem');
    var soma = document.querySelector('.fulltotal')

     total = parseFloat(totalItem.innerHTML)
    totalItem.innerHTML =  (preco.innerHTML * input.value).toFixed(2)
     soma.innerHTML = parseFloat(totalItem.innerHTML)
    //  console.log(parseFloat(totalItem.innerHTML++))
    //  console.log(parseFloat(soma.innerHTML++) + parseFloat(totalItem.innerHTML))
    somatotal()
    })
}); 


raz.forEach(ras => { 
  ras.querySelector('.minus').addEventListener('click', function(){
    var preco = ras.querySelector('.preco');
    var precoUni = +preco.innerHTML;
    var totalItem = ras.querySelector('.totalItem');
    var total = totalItem.innerHTML
    if(parseInt(totalItem.innerText) >= parseInt(preco.innerText)){
      totalItem.innerHTML = ( parseFloat(total) - parseFloat(precoUni) ).toFixed(2)
      minustotal()
    }    
  })
});

function somatotal () {
  var nova = 0
  var soma = document.querySelector('.fulltotal') 
  total = document.querySelectorAll('.totalItem')

  for(i=0 ; i< total.length; i++){
    var T = parseFloat(total[i].innerHTML);
    nova+= T
    console.log(nova,'k')
  }
  soma.innerHTML = nova.toFixed(2)
}
function minustotal () {
  var nova = 0
  var soma = document.querySelector('.fulltotal') 
  total = document.querySelectorAll('.totalItem')

  for(i=0 ; i< total.length; i++){
    var T = parseFloat(total[i].innerHTML);
    nova -= -T
    console.log(nova,'k')
  }
  soma.innerHTML = nova
}

