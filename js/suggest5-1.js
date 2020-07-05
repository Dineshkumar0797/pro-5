function suggest5(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
  {   
    alert("verified:)");
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }
