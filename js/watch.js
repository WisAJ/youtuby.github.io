function read(){var n=document.getElementById("dots"),e=document.getElementById("more"),t=document.getElementById("myBtn");"none"===n.style.display?(n.style.display="inline",t.innerHTML="عرض المزيد",e.style.display="none"):(n.style.display="none",t.innerHTML="عرض عناصر أقل",e.style.display="inline")}$(document).ready(function(){$("#myBtn").on("click",function(){read()}),$(".reply").click(function(){$(this).parents("div.row").next("div.card").toggle()})});