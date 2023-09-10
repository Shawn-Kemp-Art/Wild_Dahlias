//Set random class
class Random{
random_dec(){return $fx.rand()};
random_num(a,b){return a+(b-a)*this.random_dec()}
random_int(a,b){return Math.floor(this.random_num(a,b+1))}
random_bool(p){return this.random_dec()<p}
random_choice(list){return list[this.random_int(0,list.length-1)]}}
let R=new Random()


//R.random_dec()      // Random decimal [0-1)
//R.random_num(0, 10) // Random decimal [0-10)
//R.random_int(0, 10) // Random integer [0-10]
//R.random_bool(0.5)  // Random boolean with probability 0.5
//R.random_choice([1, 2, 3])  // Random choice from a given integer or string.

//set query params
function setquery(p,v){
	var searchParams = new URLSearchParams(window.location.search);
    searchParams.set(p, v);
    if (v==null){searchParams.delete(p)};
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
};

 function upspirestudio(features) {
        if (features == null){features={};}
      
        var genurl = window.location.href;
        console.log(genurl);
        //var canvas = document.getElementById("myCanvas"); 
        //var pngimg = canvas.toDataURL('image/png').replace(/^.+,/, '');
        //canvas.toBlob(function(blob) {
            //saveAs(blob, tokenData.hash+'.png');
        //var base64file = canvas.toDataURL("image/jpeg").split(';base64,')[1];
        //var base64file = pngimg;
        //var base64file = blob;
        //console.log(base64file)
        //var ext = "png";
        var attr = JSON.stringify(features).replace(/\"/g,"'")
        //var filename=tokenData.hash+"."+ext;
        var url = 'https://upspire.studio/version-test/api/1.1/wf/genimg';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {if (xhr.readyState === 4) {console.log(xhr.status);console.log(xhr.responseText);}};
        //var data64 = '{"attributes":"'+attr+'","url":"'+genurl+'","hash":"'+fxhash+'","img":{"filename":"'+ filename+'", "contents":"'+base64file+'"}}';
        //var data64 = '{"attributes":"'+attr+'","url":"'+genurl+'","hash":"'+fxhash+'"}}';
        var data64 = '{"url":"'+genurl+'","hash":"'+fxhash+'"}}';
        xhr.send(data64); 
        //});    
    };
