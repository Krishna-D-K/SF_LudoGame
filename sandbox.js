let player={
    position: 0,

    move: function(number, color, name){
        if(color==='red'){    
            if(this.position===0 && number===6){
                this.position=1;
                let cell= 'box'+ this.position;
                let block= document.getElementById(`${cell}`);
                block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                // console.log(`The position of ${name} is ${this.position}`);

            }
            else if(this.position===0 && number!==6){
                // console.log("it works");
            }
            else if(this.position+number===28){
                let cell= 'box'+ this.position;
                let block= document.getElementById(`${cell}`);
                block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                this.position=-1;
                cell= document.getElementById(`win`);
                cell.innerHTML += `<i class="fa-solid fa-location-dot fa-2x " style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
            }
            else if(this.position===28);
            else if(this.position+ number >28);
            else{
                let cell='box'+ this.position;
                let block= document.getElementById(`${cell}`);
                // block.innerHTML=` `;
                block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                this.position+= number;
                cell= 'box'+ this.position;
                block= document.getElementById(`${cell}`);
                block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                // console.log(`The position of ${name} is ${this.position}`);
            }
        }
        else{
            if(this.position===0 && number===6){
                this.position=15;
                let cell= 'box'+ this.position;
                let block= document.getElementById(`${cell}`);
                block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                // console.log(`The position of ${name} is ${this.position}`);

            }
            else if(this.position===0 && number!==6);
            else if(this.position -14+number===28){
                let cell='box'+ ((this.position)%28);
                let block= document.getElementById(`${cell}`);
                block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                this.position=-1;
                cell= document.getElementById(`win`);
                cell.innerHTML += `<i class="fa-solid fa-location-dot fa-2x " style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
            }
            else if(this.position -14===28);
            else if(this.position-14+ number >28);
            else{
                if((this.position)<29 && this.position +number !==28){
                    let cell='box'+ ((this.position)%29);
                    let block= document.getElementById(`${cell}`);
                    // block.innerHTML=` `;
                    block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                    this.position= (this.position+ number);
                    cell= 'box'+ ((this.position)%28);
                    block= document.getElementById(`${cell}`);
                    block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                    // console.log(`The position of ${name} is ${this.position}`);
                }
                else if(this.position + number ===28){
                    let cell='box'+ ((this.position)%29);
                    let block= document.getElementById(`${cell}`);
                    // block.innerHTML=` `;
                    block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                    this.position= (this.position+ number);
                    cell= 'box'+ (this.position);
                    block= document.getElementById(`${cell}`);
                    block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                    // console.log(`28The position of ${name} is ${this.position}`);
                }
                else{
                    let cell='box'+ ((this.position)%28);
                    let block= document.getElementById(`${cell}`);
                    // block.innerHTML=` `;
                    block.innerHTML= block.innerHTML.replace(`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`, ' ');
                    this.position= (this.position+ number);
                    cell= 'box'+ ((this.position)%28 );
                    // console.log("cell");
                    block= document.getElementById(`${cell}`);
                    block.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: ${color}" onclick="${name}move()" id="${name}"></i>`;
                    // console.log(`The position of ${name} is ${this.position}`);
                }
        }
        }
        
    },

    out: function(){
        if(this.position){
        let cell= 'box'+ (this.position %28);
        let block= document.getElementById(`${cell}`);
        block.innerHTML=``;
        this.position=0;
        // console.log(`The position of is ${this.position}`);
        }
    },

    refill: function(color, name){
        if(this.position){
        if(color==='red'){
            let cell= 'box'+ this.position;
            let block= document.getElementById(`${cell}`);
            block.innerHTML=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: red" onclick="${name}move()" id="${name}"></i>`;
        }
        else{
            let cell= 'box'+ (this.position % 28);
            let block= document.getElementById(`${cell}`);
            block.innerHTML=`<i class="fa-solid fa-location-dot fa-2x fa-beat" style="color: green" onclick="${name}move()" id="${name}"></i>`;
        }
    }
    }

}

function getradiovalue(){
    let a= document.getElementById("homescreen");
    a.style.display='none';
    a= document.getElementById('screen');
    a.style.display='flex';
    a= document.getElementsByName('input');
    if(a[0].checked){
        let b= document.getElementById('manual1');
        b.style.display='none';
        b= document.getElementById('manual2');
        b.style.display='none';
        type=1;
    }
    else{
        let b= document.getElementById('dice1');
        b.style.display='none';
        b= document.getElementById('dice2');
        b.style.display='none';
        type=2;
    }
}

function homedisplay(){
    let a= document.getElementById("homescreen");
    a.style.display='flex';
    a= document.getElementById('screen');
    a.style.display='none';
    let b= document.getElementById('manual1');
        b.style.display='block';
        b=document.getElementById('manual2');
        b.style.display='block';
        b= document.getElementById('dice1');
        b.style.display='block';
        b= document.getElementById('dice2');
        b.style.display='block';
    reset();
}

const dice = function(){
    k= Math.floor(Math.random()*7)%6 +1;
    // console.log(`Dice Roled has value${k}`);
    return k;
}

let A1= Object.create(player), A2= Object.create(player), B1= Object.create(player), B2= Object.create(player);
let number=0;
let A1_id= document.getElementById('A1'), A2_id=document.getElementById('A2');
let B1_id= document.getElementById('B1'), B2_id=document.getElementById('B2');
let dice1display= document.getElementById('dice1display');
let dice2display= document.getElementById('dice2display');
let dice1= document.getElementById(`dice1`);
let dice2= document.getElementById(`dice2`);
let box0= document.getElementById('box0');
let lockerA= document.getElementById('lockerA');
let lockerB= document.getElementById('lockerB');
let type= 1;
let numberOfSix=0;
let manual1= document.getElementById('manual1');
let manual2= document.getElementById('manual2');
let active=0;


function player1(){
    number= dice();
    dice1display.innerHTML=`<h3>${number}!!</h3>`;
    if(number!==6){
        active=1;
        dice1.style.visibility='hidden';
        dice2.style.visibility='visible';
        numberOfSix=0;
    }
    else if(number===6 && ++numberOfSix<=2){
        active=1;
    }
    else if(number===6 && ++numberOfSix>=3){
        active=0;
        dice1display.innerHTML=`<h5>OOPS !! 3 consecutive 6's .. </h5>`;
        numberOfSix=0;
        number=0;
        dice1.style.visibility='hidden';
        dice2.style.visibility='visible';
    }

}
let player2= function(){
    number= dice();
    dice2display.innerHTML=`<h3>${number}!!</h3>`;
    if(number!==6){
        active=2;
        numberOfSix=0;
        dice2.style.visibility='hidden';
        dice1.style.visibility='visible';
    }
    else if(number===6 && ++numberOfSix<=2){
        active=2;
    }
    else if(number===6 && ++numberOfSix>=3){
        active=0;
        dice2display.innerHTML=`<h5>OOPS !! 3 consecutive 6's .. </h5>`;
        numberOfSix=0;
        number=0;
        dice1.style.visibility='visible';
        dice2.style.visibility='hidden';
    }

}
function manualD1(){
    let a= document.getElementById(`dice1value`);
    number= Number( a.value);
    dice1display.innerHTML=`<h3>${number}!!</h3>`;
    if(number!==6){
        active=1;
        numberOfSix=0;
    }
    else if(number===6 && ++numberOfSix<=2){
        active=1;
        // console.log(`No. of 6's: ${numberOfSix}`)
    }
    else if(number===6 && ++numberOfSix>=3){
        // console.log("3 6's");
        dice1display.innerHTML=`<h5>OOPS !! 3 consecutive 6's .. </h5>`;
        numberOfSix=0;
        number=0;
        active=0;
        manual1.style.visibility='hidden';
        manual2.style.visibility='visible';
    }
}
function manualD2(){
    let a= document.getElementById(`dice2value`);
    number= Number( a.value);
    dice2display.innerHTML=`<h3>${number}!!</h3>`;
    if(number!==6){
        active=2;
        numberOfSix=0;
    }
    else if(number===6 && ++numberOfSix<=2){
        active=2;
        // console.log(`No. of 6's: ${numberOfSix}`);
    }
    else if(number===6 && ++numberOfSix>=3){
        // console.log("3 6's");
        dice2display.innerHTML=`<h5>OOPS !! 3 consecutive 6's .. </h5>`;
        numberOfSix=0;
        number=0;
        active=0;
        manual2.style.visibility='hidden';
        manual1.style.visibility='visible';
    }
}
function fillBox0(){
    lockerA.innerHTML=` `;
    lockerB.innerHTML=` `;
    if(A1.position===0)lockerA.innerHTML=`<i class="fa-solid fa-location-dot fa-2x " style="color: red" id="A1" onclick="A1move()"></i> `;
    if(B1.position===0)lockerB.innerHTML=`<i class="fa-solid fa-location-dot fa-2x " style="color: green" id="B1" onclick="B1move()"></i>`;
    if(A2.position===0)lockerA.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x " style="color: red" id="A2" onclick="A2move()"></i>`;
    if(B2.position===0)lockerB.innerHTML+=`<i class="fa-solid fa-location-dot fa-2x " style="color: green" id="B2" onclick="B2move()"></i>`;
    // console.log("Box0 called");

}

let conditionCheck= function(letter){
    if(letter==='A1'){
        if(A1.position===(B1.position%28) && A1.position!==1 && A1.position!==8 && A1.position!==15 && A1.position!==28 && B1.position!==28 && A1.position!==22){
            B1.out();
            A1.refill('red', 'A1');
            // dice2display.innerHTML=`<h3>Ouch</h3>`;
            // dice1display.innerHTML='YESS !!';
        }
        else if(A1.position===(B2.position %28) && A1.position!==1 && A1.position!==8 && A1.position!==15 && A1.position!==28 && B2.position!==28 && A1.position!==22){
            B2.out();
            A1.refill('red', 'A1');
            // dice2display.innerHTML=`<h3>Ouch</h3>`;
            // dice1display.innerHTML='YESS !!';
        }
    }
    else if(letter==='A2'){
        if(A2.position===(B2.position %28) && A2.position!==1 && A2.position!==8 && A2.position!==15 && A2.position!==28 && B2.position!==28 && A2.position!==22){
            B2.out();
            A2.refill('red', 'A2');
            // dice2display.innerHTML=`<h3>Ouch</h3>`;
            // dice1display.innerHTML='YESS !!';
        }
        else if(A2.position===(B1.position %28) && A2.position!==1 && A2.position!==8 && A2.position!==15 && A2.position!==28 && B1.position!==28 && A2.position!==22){
            B1.out();
            A2.refill('red', 'A2');
            // dice2display.innerHTML=`<h3>Ouch</h3>`;
            // dice1display.innerHTML='YESS !!';
        }
    }
    else if(letter==='B1'){
        if((B1.position%28)===A1.position && A1.position!==1 && A1.position!==8 && A1.position!==15 && A1.position!==28 && B1.position!==28 && A1.position!==22){
            A1.out();
            B1.refill('green', 'B1');
            // dice1display.innerHTML=`<h3>Ouch</h3>`;
            // dice2display.innerHTML='YESS !!';
        }
        else if((B1.position %28)===A2.position && A2.position!==1 && A2.position!==8 && A2.position!==15 && A2.position!==28 && B1.position!==28 && A2.position!==22){
            A2.out();
            B1.refill('green', 'B1');
            // dice1display.innerHTML=`<h3>Ouch</h3>`;
            // dice2display.innerHTML='YESS !!';
        }
    }
    else if(letter==='B2'){
        if((B2.position%28)===A2.position && A2.position!==1 && A2.position!==8 && A2.position!==15 && A2.position!==28 && B2.position!==28 && A2.position!==22){
            A2.out();
            B2.refill('green', 'B2');
            // dice1display.innerHTML=`<h3>Ouch</h3>`;
            // dice2display.innerHTML='YESS !!';
        }
        else if((B2.position%28)===A1.position && A1.position!==1 && A1.position!==8 && A1.position!==15 && A1.position!==28 && B2.position!==28 && A1.position!==22){
            A1.out();
            B2.refill('green', 'B2');
            // dice1display.innerHTML=`<h3>Ouch</h3>`;
            // dice2display.innerHTML='YESS !!';
            // setTimeout(()=>{dice1display.innerHTML='';dice2display.innerHTML=' '}, 2000);
        }
    }
}
// EDIT THIS PART
function A1move(){
    if(active===1){
    // console.log(number);
    A1.move(number, 'red', 'A1');
    if(A1.position>=0){conditionCheck('A1');}
    if((type===1 && number!==6)){
        dice1.style.visibility='hidden';
        dice2.style.visibility='visible';
        fillBox0();
        dice1display.innerHTML=` `;
        dice2display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===1 && number===6 ){
        dice1display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        // console.log(numberOfSix);
        winner();
    }
    else if((type===2 && number!==6)){
        manual1.style.visibility='hidden';
        manual2.style.visibility='visible';
        fillBox0();
        dice1display.innerHTML=` `;
        dice2display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===2 && number===6 ){
        dice1display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        // console.log(numberOfSix);
        winner();
    }
    number=0;
    active=0;
    winner();
}
}
function B1move(){
    if(active===2){
    B1.move(number, 'green', 'B1');
    if(B1.position>=0){conditionCheck('B1');}
    if((type===1 && number!==6)){
        dice2.style.visibility='hidden';
        dice1.style.visibility='visible';
        fillBox0();
        dice2display.innerHTML=` `;
        dice1display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===1 && number===6){
        dice2display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    else if((type===2 && number!==6)){
        manual2.style.visibility='hidden';
        manual1.style.visibility='visible';
        fillBox0();
        dice2display.innerHTML=` `;
        dice1display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===2 && number===6 ){
        dice2display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    active=0;
    number=0;
    winner();
}
}
// EDIT THIS PART
function A2move(){
    if(active===1){
    // console.log(number);
    A2.move(number, 'red', 'A2');
    if(A2.position>=0){conditionCheck('A2');}
    if((type===1 && number!==6) ){
        dice1.style.visibility='hidden';
        dice2.style.visibility='visible';
        fillBox0();
        dice1display.innerHTML=` `;
        dice2display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===1 && number===6){
        dice1display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    else if((type===2 && number!==6)){
        manual1.style.visibility='hidden';
        manual2.style.visibility='visible';
        fillBox0();
        dice1display.innerHTML=` `;
        dice2display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===2 && number===6 ){
        dice1display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    active=0;
    number=0;
    winner();
}
}
function B2move(){
    if(active===2){
    B2.move(number, 'green', 'B2');
    if(B2.position>=0){conditionCheck('B2');}
    if((type===1 && number!==6) ){
        dice2.style.visibility='hidden';
        dice1.style.visibility='visible';
        fillBox0();
        dice2display.innerHTML=` `;
        dice1display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===1 && number===6 ){
        dice2display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    else if((type===2 && number!==6) ){
        manual2.style.visibility='hidden';
        manual1.style.visibility='visible';
        fillBox0();
        dice2display.innerHTML=` `;
        dice1display.innerHTML='<h3>Play!!</h3>';
    }
    else if(type===2 && number===6 ){
        dice2display.innerHTML=`<h4>Play Again!!</h4>`;
        fillBox0();
        winner();
    }
    active=0;
    number=0;
    winner();
}
}

function reset(){
    for(let i=1; i<=28; i++){
        let c= document.getElementById(`box${i}`);
        c.innerHTML=' ';
    }
    A1.position=0;
    B1.position=0;
    A2.position=0;
    B2.position=0;
    let c= document.getElementById('win');
    c.innerHTML=' ';
    number=0;
    active=0;
    numberOfSix=0;
    dice2.style.visibility='visible';
    dice1.style.visibility='visible';
    manual2.style.visibility='visible';
    manual1.style.visibility='visible';
    fillBox0();
    dice1display.innerHTML=' ';
    dice2display.innerHTML=' ';
}

function winner(){
    if(A1.position===-1 && A2.position===-1){
        dice1display.innerHTML=`<h3>You Win !!</h3>`;
        dice2display.innerHTML=`<h3>Player 1 Wins !!</h3>`;
        active=0;
        number=0;
        dice2.style.visibility='hidden';
        dice1.style.visibility='hidden';
        manual2.style.visibility='hidden';
        manual1.style.visibility='hidden';
    }
    else if(B1.position===-1 && B2.position===-1){
        dice2display.innerHTML=`<h3>You Win !!</h3>`;
        dice1display.innerHTML=`<h3>Player 2 Wins !!</h3>`;
        active=0;
        number=0;
        dice2.style.visibility='hidden';
        dice1.style.visibility='hidden';
        manual2.style.visibility='hidden';
        manual1.style.visibility='hidden';
    }
    // console.log("Winner called");
}