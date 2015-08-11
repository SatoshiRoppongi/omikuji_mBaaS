// This is a JavaScript file

// information of this app
var appkey = "YOUR_APPKEY";
var clientkey = "YOUR_CLIENTKEY";
var appID = "APPLICATION_ID";
var commonURL = "https://mb.api.cloud.nifty.com/2013-09-01/applications/"+ appID +"/publicFiles/";

function omikuji (){

    // Initialize and set the app to use NCMB in Monaca
    NCMB.initialize(appkey, clientkey);
    var RandomFortune = NCMB.Object.extend("randomFortune");
    var query = new NCMB.Query(RandomFortune);


    query.find({
      success: function(results) {
          // Get a random image name of the picture from the class "randomFortune" in NCMB
          var image_name = results[Math.floor(Math.random()*results.length)].get("image");

          // Change the css styles and srcs according to the omiukji states
          document.getElementById("saisyo").style["display"] = "none";
          document.getElementById("kekka").src = commonURL +image_name;
          document.getElementById("kekka").style["display"] = "inline";
          document.getElementById("button").src = "./images/omikuji-btn-yari naosu.png";
      },
      error: function(error) {
          alert(error.toString() + "error occured")
      }
    });
}
