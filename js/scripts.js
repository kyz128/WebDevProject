// validate zipcode in contact form
function validate()
{
  var zip= $("#zipInput").val();
   if ((isNaN(zip)) | (zip.length != 5))
   {
      alert("Zip code is not valid or not in a valid format.");
      return false;
    }
}

function validatePhone()
{
  var txtPhone= $("#phoneInput").val();
  if ((isNaN(txtPhone)) | (txtPhone.length != 10))
   {
      alert("Phone number is not valid or not in a valid format.");
      return false;
    }
}
