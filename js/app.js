date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML ="Última modificación: " + day + "/" + month + "/" + year + ".";