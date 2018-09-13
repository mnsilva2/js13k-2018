var canvas = $("c");
var ctx = canvas.getContext("2d");

/*
each sprite info:
1º: Always 0; Used to get a printable char 
2º: Always 1; Used to get a printable char
3º: Small, Big
4º: Color
5º: Color
6º: Color
7º: Color
8º: Color

*/
var boardwidth = 20;
var boardheight = 20;
var subspriteLength = 10;


var multiplier = Math.floor( window.innerWidth < window.innerHeight ? window.innerWidth/(boardwidth*subspriteLength) : window.innerHeight/(boardheight*subspriteLength))
canvas.width = boardwidth*subspriteLength*multiplier
canvas.height = boardheight*subspriteLength*multiplier
var defaultcolor = '#181425'


//list of sprites:

var Alphabet = {
    A: 'O@@OOOOO@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@OOOOOOOO',
    B: 'O@@OOOOO@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@OOOO@@@O@@@@@OOOOO',
    C: 'OOOOOOOO@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O',
    D: 'O@@@@@@O@@O@@OOOOO@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@OOOOOOOO',
    E: 'O@@OOOOO@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@@@@@O',
    F: 'O@@OOOOO@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@@@@@@',
    G: 'OOOOOOOO@@O@@@@@@O@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@O@@@O@@O@@OOOOO',
    H: 'OOOOOOOO@@@@@@@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@OOOOOOOO',
    I: '@@@@@@@@@@O@@@@@@O@@O@@@@@@O@@OOOOOOOO@@O@@@@@@O@@O@@@@@@O@@@@@@@@@@',
    J: '@@@@@@OO@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@OOOOOOOO',
    K: 'OOOOOOOO@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@OO@OOOOO',
    L: 'OOOOOOOO@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O',
    M: 'O@OOOOOO@@O@@@@@@@@@O@@@@@@@@@O@OOOOOO@@O@@@@@@@@@O@@@@@@@@@OOOOOOOO',
    N: 'O@OOOOOO@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@OOOOOOOO',
    O: 'O@OOOOOO@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@OOOOOOOO',
    P: 'O@@OOOOO@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@OOOO@@@@',
    Q: 'O@OOOOOO@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@OOOOOOOO@@@@@@@@@O',
    R: 'O@@OOOOO@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@O@@O@@@@@@OOOO@OOO',
    S: '@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@OOOOOOOO@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@',
    T: 'O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@OOOOOO@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@',
    U: 'OOOOOOOO@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@OOOOOO@O',
    V: 'OOOOOO@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@OOOOOOOO@@O@@@@@@@@@O@@@@@@@',
    W: 'OOOOOOOO@@@@@@@@@O@@@@@@@@@O@@OOOOOO@O@@@@@@@@@O@@@@@@@@@O@@OOOOOO@O',
    X: 'OOOOOOOO@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O@@@@@@OO@OOOOO',
    Y: 'OOOO@@@O@@@@@O@@@O@@@@@O@@@O@@@@@O@@@O@@@@@O@@@O@@@@@@@@@O@@OOOOOOOO',
    Z: 'O@@@@@@@@@O@@@@@@@@@O@@@@@@@@@OOOOOOOO@@@@@@@@@O@@@@@@@@@O@@@@@@@@@O'
}

//Main Character
var maincharacter_Front_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@EEEEE@@@@EEECCCCC@@EECCCCCC@@EECCQQCC@@EECCCCCC'
var maincharacter_Front_topright = '@@EECCCCCC@@EECCQQCC@@EECCCCCC@@EEECCCCC@@@EEEEE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Back_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@EEEEE@@@@EEEEEEEC@@EEEEEEEC@@EEEEEEEC@@EEEEEEEC'
var maincharacter_Back_topright = '@@EEEEEEEC@@EEEEEEEC@@EEEEEEEC@@EEEEEEEC@@@EEEEE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Right_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@EEEEEE@@@EEEEEEEC@@EEEEEECC@@EEEECCCC@@EEECCCCC'
var maincharacter_Right_topright = '@@EEECCCCC@@EEECQQCC@@@EECCCCC@@@EECCCCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Left_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@EECCCCC@@@EECCCCC@@EEECQQCC@@EEECCCCC'
var maincharacter_Left_topright = '@@EEECCCCC@@EEEECCCC@@EEEEEECC@@EEEEEEEC@@@EEEEEE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Vertical_standleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FCC@@@@@@FFFFFF@@@@FFFFFFFFGCFFFFFFFFGCFFFFFF@@@'
var maincharacter_Vertical_standright = 'CFFFFFF@@@CFFFFFFFFG@FFFFFFFFG@FFFFFF@@@@@FCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Horizontal_standleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FFFFF@@@@CFFFFF@@@@CFCCCFFFG@'
var maincharacter_Horizontal_standright = 'CFCCCFFFG@CFFFFF@@@@@FFFFF@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Vertical_moveleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FCC@@@@@@FFFFFF@@@@FFFFFFFG@CFFFFFFFG@CFFFFFF@@@'
var maincharacter_Vertical_moveright = 'CFFFFFF@@@CFFFFFFFG@@FFFFFFFG@@FFFFFF@@@@@FCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var maincharacter_Horizontal_moveleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FFFFF@FG@CFFFFFFFG@CFCCCFF@@@'
var maincharacter_Horizontal_moveright = 'CFCCCFF@@@CFFFFFFFG@@FFFFF@FG@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var police_Front_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PPCCCC@@@PPCCCCC@@@PPCGGCC@@@PPCCCCC'
var police_Front_topright = '@@@PPCCCCC@@@PPCGGCC@@@PPCCCCC@@@@PPCCCC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
var police_Front_botleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PC@@@@@@@PPPPPP@@@@PPPPPPPY@CPYYYYPPY@CPYPYPP@@@'
var police_Front_botright = 'CPYPYPP@@@CPYYYPPPY@@PPPPPPPY@@PPPPPP@@@@@PPC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'

var police_Side_topleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PPPCCC@@@PPPPCCC@@@PPPCCCC@@@PPPCCCC'
var police_Side_topright = '@@@PPPCCCC@@@PPCGGCC@@@PPCCCCC@@@PPCCCCC@@@@P@@@@@@@@@P@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'
var police_Side_botleft = '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PPPPPP@@@CPPPPPP@@@CPPPPPPPY@'
var police_Side_botright = 'CPPPPPPPY@CPPPPPP@@@@PPCCPP@@@@@@CC@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'


var light = 'LIGHT'


//Floor
var redFloor = 'GGGGHGGGGGGGGGGHGGGGGGGGHGHGGGGGGHGGGHGGGGHGGGGGHGGHGGGGGHGHHGGGGGHGGGGHGGGHGGGGGGHGHGGGGGGGGHGGGGGG'
var grayWall = 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
var doorRight = 'OYYYYYYYYYOYYYYYYYYYOYYYYYYYYYOOYYYYYYYYOOYYYYYYYYOOOYYYYYYYOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO'
var doorLeft = 'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOYYYYYYYOOYYYYYYYYOOYYYYYYYYOYYYYYYYYYOYYYYYYYYYOYYYYYYYYY'





var drawQueue;
var animationQueue;
var postDrawQueue;
var loop;
var stopDraw;
/**
 * Clears the Draw Queue / Animation Queue / Etc.
*/
function clearEngine(){
    drawQueue = [];
    animationQueue = [];
    postDrawQueue = []; 
    stopDraw = false;
}
/**
 * Adds an object to the draw queue.
 * @param {string} sprite - The Object to draw.
 * @param {int} ID - The Object ID, same IDs can be asigned to the different Objects.
 * @param {int} x - Which tile to draw in the X-axis.
 * @param {int} y - Which tile to draw in the Y-axis.
 * @param {int} layer - Which layer to draw, the smaller values will be on top.
 */
function addToDrawQueue(sprite, ID, x, y, layer) {


    for (let index = 0; index < drawQueue.length; index++) {
        if(drawQueue[index].layer < layer){
            drawQueue.splice(index, 0, { sprite: sprite, ID: ID, x: x, y: y, layer: layer });
            return;
        }
    }

    drawQueue.push({ sprite: sprite, ID: ID, x: x, y: y, layer: layer })

}


/**
 * Removes an object from the draw queue.
 * @param {int} ID - The Object ID, if multiple objects have the same ID it will remove all.
 */
function removefromDrawQueue(ID) {
    for (let index = drawQueue.length - 1; index >= 0; index--) {
        if (drawQueue[index].ID === ID) {
            drawQueue.splice(index, 1);
        }
    }
}

/**
 * Removes an object from the Animation queue.
 * @param {int} index - The Animation index.
 */
function removefromAnimationQueue(index) {

    //animationQueue = animationQueue.slice(0, index).concat(animationQueue.slice(index+1, animationQueue.length));
    //discusting 
    animationQueue[index] = null   
}

/**
 * Returns the First object from the draw queue.
 * @param {int} ID - The Object ID.
 */
function getFromDrawQueue(ID) {
    for (let index = 0; index < drawQueue.length; index++) {
        if (drawQueue[index].ID == ID) {
            return drawQueue[index]
        }
    }
    return null
}

/**
 * Moves an Object in draw queue (it removes/and adds it again).
 * @param {int} ID - The Object ID.
 * @param {boolean} verticalOrHorizontal - Is the movement vertical or horizontal true - for vertical; false for horizontal;
 * @param {boolean} positive - positive movement? true for down and right; false for up and left;
 * @param {int} timeToMove - how much time is needed to move the object.
 * @param {int} steps - how many steps should the object take to finish the movement.
 * @param {int} animationcycle - how time to change the sprite.
 * @param {Array} sprites - the list of sprites to create the animation.
 * @param {Array} endSprite - the sprite to finish;
 * @param {Array} callback - callback function
 */
function moveSpriteinDrawQueue(ID, verticalOrHorizontal, positive, timeToMove,steps, animationcycle, sprites, endSprite, callback) {
    animationQueue.push(
        {
            ID: ID,
            verticalOrHorizontal: verticalOrHorizontal,
            positive: positive,
            timeToMove: timeToMove,
            steps: steps,
            currentStep: 0,
            animationcycle: animationcycle,
            sprites: sprites,
            currentSprite: 0,
            timeAnim: 0,
            timeMov: 0,
            endSprite: endSprite,
            callback: callback
        })
}
/**
 * Writes to the screen a text message, the Text will not overflow to a new line
 * @param {text} text - The text.
 * @param {int} ID - The Object ID.
 * @param {int} StartX - The X postion of where the text will start.
 * @param {int} StartY - The Y postion of where the text will start.
 * @param {int} layer - Which layer to draw, the smaller values will be on top.
 */
function WriteToScreen(text, ID, StartX, StartY, layer){
    let textArray = text.split("");
    textArray.forEach(function(item, index){
        if(Alphabet[item.toUpperCase()] === undefined){
            return;
        }
        addToDrawQueue('@@@@@@@@@@@'+Alphabet[item.toUpperCase()] + '@@@@@@@@@@@@@@@@@@@@@', ID, StartX+index, StartY, layer);
    });
}





function startDrawing() {
    stopDraw = false;
    main();

}
function stopDrawing() {
    cancelAnimationFrame(loop);
    stopDraw = true;
}




/*Color stuff*/



colorpallete = 'ffffffbe4a2fd77643ead4aae4a672733e393e2731a22633e43b44f77622feae34fee76163c74d3e8948265c42193c3e124e890099db2ce8f5ffffffc0cbdc8b9bb45a69883a4466262b44181425ff004468386cb55088f6757ae8b796c28569';
/*
palette: https://lospec.com/palette-list/endesga-32
1: transparent
2: be4a2f
3: d77643
4: ead4aa
5: e4a672
--5: b86f50
6: 733e39
7: 3e2731
8: a22633
9: e43b44
10: f77622
11: feae34
12: fee761
13: 63c74d
14: 3e8948
15: 265c42
16: 193c3e
17: 124e89
18: 0099db
19: 2ce8f5
20: ffffff
21: c0cbdc
22: 8b9bb4
23: 5a6988
24: 3a4466
25: 262b44
26: 181425
27: ff0044
28: 68386c
29: b55088
30: f6757a
31: e8b796
32: c28569
*/

function updateAnimation(index) {
    let animation = animationQueue[index]
    let sprite = getFromDrawQueue(animation.ID);
    removefromDrawQueue(animation.ID);
    addToDrawQueue(animation.sprites[animation.currentSprite], animation.ID, sprite.x, sprite.y, sprite.layer)
    animation.currentSprite++;
    if (animation.currentSprite >= animation.sprites.length) {
        animation.currentSprite = 0;
    }
}

function updateMovement(index) {
    let animation = animationQueue[index]
    let sprite = getFromDrawQueue(animation.ID);
    removefromDrawQueue(animation.ID);

    let positive = animation.positive ? 1 : -1 
    let newX = Math.round((!animation.verticalOrHorizontal ?  1/animation.steps*positive : 0) * 10)/10
    let newY = Math.round((animation.verticalOrHorizontal ?  1/animation.steps*positive : 0) * 10)/10
    
    animation.currentStep++;
     if (animation.currentStep === animation.steps) {

        removefromAnimationQueue(index);
        addToDrawQueue(animation.endSprite, animation.ID, sprite.x + newX, sprite.y +newY, sprite.layer)
        if(animation.callback != null){
            animation.callback(sprite);
        }

     }else{
         addToDrawQueue(animation.sprites[animation.currentSprite], animation.ID, sprite.x + newX, sprite.y +newY, sprite.layer)

     }
}


var maximalUpdateDelay = 500; // ms
var updateTimeout, now;

function animate() {
    var delta = -now + (now = Date.now());
    if (isNaN(delta)) { return }
    for (let index = 0; index < animationQueue.length; index++) {
        let animation = animationQueue[index];
        if(animation === null){continue}
        //animate sprites
        if (animation.animationcycle*1000 < delta + (animation.timeAnim)) {
            animation.timeAnim = 0;
            updateAnimation(index);
        } else {
            animation.timeAnim = animation.timeAnim + delta;
        }
        //actual movement
        if ((animation.timeToMove*1000)/animation.steps < delta + animation.timeMov) {
            animation.timeMov = 0;
            updateMovement(index);
        } else {
            animation.timeMov = animation.timeMov + delta;
        }
    }


}
function main() {

    animate(); // update the scene
    draw(); // render the scene
    if(stopDraw){
        return;
    }
    loop = requestAnimationFrame(main);
}

function draw() {
    ctx.fillStyle = defaultcolor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    let character
    let x
    let y
    for (let index = 0; index < drawQueue.length; index++) {
        character = drawQueue[index].sprite;
        x = drawQueue[index].x
        y = drawQueue[index].y

        if(x == -1 && y == -1){
            ctx.fillStyle = character;
            ctx.fillRect( 0, 0, canvas.width, canvas.height);
            continue;
        }
        if(character === 'LIGHT'){
            ctx.fillStyle = '#ffffff77';
            ctx.fillRect(
                (x* subspriteLength)* multiplier, 
                (y* subspriteLength)* multiplier, 
                subspriteLength* multiplier, 
                subspriteLength* multiplier);
            continue;
        }
        for (let i = 0; i < subspriteLength; i++) {
            for (let j = 0; j < subspriteLength; j++) {
                let bin = pad(character.substring(i * subspriteLength + j, (i * subspriteLength + j) + 1).charCodeAt(0).toString(2), 8)
                let multi = bin.substring(2, 3);
                let colorix = bin.substring(3, 8);
                colorix = parseInt(colorix, 2)
                if (colorix == 0) {
                    continue;
                }
                
                ctx.fillStyle = "#" + colorpallete.substring(colorix * 6, colorix * 6 + 6) + "FF";
            
                ctx.fillRect( Math.round((x * subspriteLength) + i) * multiplier, Math.round((y * subspriteLength) + j) * multiplier, 1 * multiplier, 1 * multiplier);
            }
        }
    }
    postDraw();

}


function postDraw(){
    for (let index = 0; index < postDrawQueue.length; index++) {
        postDrawQueue[index]();
    }
}
    

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let running = false;






function $(id) {
    return document.getElementById(id);
}