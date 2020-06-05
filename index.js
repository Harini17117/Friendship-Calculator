function calculate()
{
  var name1=document.getElementById('name1').value;
  var name2=document.getElementById('name2').value;
  if(name1=="")
  {
    alert("Please Enter the First Name");
  }
  else if(name2=="")
  {
    alert("Please Enter the Second Name");
  }
  else{
    var perc=Math.random()*100;
    perc=Math.floor(perc);
    document.getElementById('fvalue').value=perc + "%";
  }
}
