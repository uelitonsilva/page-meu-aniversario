AOS.init();const e=new Date("April 15, 2025 19:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime();document.getElementById("contador").innerHTML=`<h4>Faltam : </h4> ${Math.floor(n/864e5)}d ${Math.floor(n%864e5/36e5)}h ${Math.floor(n%36e5/6e4)}m ${Math.floor(n%6e4/1e3)}s`,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="Esse Evento expirou")},1e3);
//# sourceMappingURL=index.33c5da2d.js.map
