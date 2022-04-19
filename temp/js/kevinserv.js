function highlight(text) {
  var highText = document.getElementById("highText");
  var innerHTML = highText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
   document.getElementById('highText').scrollIntoView();
   setTimeout(() => { innerHTML = "<p>Copyright © KevinServ.&nbsp; All rights reserved.<br><a class='highlight' target='_blank' style='color:#818181' href='https://mail.google.com/mail/u/0/?hl=it&tf=cm&fs=1&to=kevin@kevinserv.tk'><strong>kevin@kevinserv.tk</strong></a></p>"; }, 200);
   setTimeout(() => { highText.innerHTML = innerHTML; }, 200);
   setTimeout(() => { innerHTML = "<p>Copyright © KevinServ.&nbsp; All rights reserved.<br><a class='not-highlight' target='_blank' style='color:#818181' href='https://mail.google.com/mail/u/0/?hl=it&tf=cm&fs=1&to=kevin@kevinserv.tk'><strong>kevin@kevinserv.tk</strong></a></p>"; }, 1200);
   setTimeout(() => { highText.innerHTML = innerHTML; }, 1200);
  }
}

const targetDivEA = document.getElementById("divEApopup");
const btnEA = document.getElementById("toggleEApopup");
const btnEA2 = document.getElementById("disableEApopup");
targetDivEA.style.display = "none";
btnEA.onclick = function () {
	targetDivEA.style.display = "block";
} 
btnEA2.onclick = function () {
	targetDivEA.style.display = "none";
}	

