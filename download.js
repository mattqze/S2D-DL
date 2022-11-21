
if(document.URL.includes("soap2day.to"))
{
    var button = document.createElement("button");
    var div = document.getElementById("divPlayerSelect");
    button.innerHTML="Download Movie"
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.onclick = function () {
    var videoTags = document.getElementsByTagName('video')
    for( var i = 0; i < videoTags.length; i++ ){
        alert("Use JDownloader2 to download.")
        window.open(videoTags.item(i).currentSrc);
   }
  };
div.appendChild(button);
}