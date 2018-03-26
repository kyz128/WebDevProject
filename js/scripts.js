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
