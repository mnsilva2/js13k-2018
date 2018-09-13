var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var multiple = document.getElementById('Multiple')
var white = document.getElementById('White')
var output = document.getElementById('output')
function handleImage(e){
    console.log(e)
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}


function convertImagetoEngine(){
    multipleVal = multiple.checked
    whiteVal = white.checked
    
    size = multipleVal == true ? 20 : 10
    var img = document.getElementById('my-image');
var finalString = ''
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        var pixelData = ctx.getImageData(i, j, 1, 1).data;
        console.log(whiteVal)
        let index;
        if(whiteVal && rgbToHex(pixelData[0],pixelData[1],pixelData[2]) == 'ffffff'){
            index = 0;
        }else{
            index =colorpalleteArray.indexOf(rgbToHex(pixelData[0],pixelData[1],pixelData[2]))
        }
let bin = '01'+((multipleVal == true ? 1 : 0) + pad(index.toString(2), 5))
        console.log(bin);
        console.log(parseInt(bin,2))
        
        finalString += String.fromCharCode(parseInt(bin,2))
    }
}        output.value = finalString

}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "" +componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

colorpalleteArray = [
'transparent',
    'be4a2f',
'd77643',
'ead4aa',
'e4a672',
'733e39',
'3e2731',
'a22633',
'e43b44',
'f77622',
'feae34',
'fee761',
'63c74d',
'3e8948',
'265c42',
'193c3e',
'124e89',
'0099db',
'2ce8f5',
'ffffff',
'c0cbdc',
'8b9bb4',
'5a6988',
'3a4466',
'262b44',
'181425',
'ff0044',
'68386c',
'b55088',
'f6757a',
'e8b796',
'c28569']