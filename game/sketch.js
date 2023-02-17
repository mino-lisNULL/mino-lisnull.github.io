//項目の内容
const dice = [1,2,3,4,5,6];
//選ばれた項目
let diceResult1;
let diceResult2;
let diceResult3;
//ボタン一覧
let button100;
let button1000;
let button10000;
let buttonRetry;

//開始時の所持金
let score = 10000;
//最高得点
let highScore = 0;
// 判定していいか
let judge = false;
// 所持金が足りなかったか
let syojikinTarinaiFlag = false;
//借金
let loan = 0;
//借金中か
let loaning = false;
//ざわざわの時間
let zawaTime1 = 0;
let zawaTime2 = 375;
//ざわざわの座標
let zawaYoko1;
let zawaTate1;
let zawaYoko2;
let zawaTate2;
//ざわざわのアルファ値
let zawaAlpha1 = 255;
let zawaAlpha2 = 255;
//どのベットボタンが押されたか
let WhichPressedButton;
// 丁か半か判定して表示
function tyohan(a,b,c) {
    let t;
    if ((a+b+c)%2==0) {
        t = "丁";
    }else{
        t = "半";
    }
    //塗りつぶしは黒色に
    fill("#000000");
    text(t,340,315);
    //塗りつぶしは白色に
    fill("#FFFFFF");
}



//---初回更新-----------------------------------------
function setup(){
    //表示するキャンバスを全画面に
    createCanvas(windowWidth,windowHeight);
    //HSBモードでの色指定に変更
    //colorMode(HSB, 360, 100, 100, 100);

    //文字の基準点を上下左右の中央に
    textAlign(CENTER, CENTER);
    //文字の大きさの設定
    textSize(200);

    //項目の結果をランダムにセット
    //diceResult1 = random(dice);
    //diceResult2 = random(dice);
    //diceResult3 = random(dice);

    //ベットボタンの作成
    button100 = createButton('100 bet');
    button100.position(660, 100);
    button100.size(100, 50);
    button100.mouseReleased(bet1);

    button1000 = createButton('1000 bet');
    button1000.position(660, 250);
    button1000.size(100, 50);
        button1000.mouseReleased(bet2);    

    button10000 = createButton('10000 bet');
    button10000.position(660, 400);
    button10000.size(100, 50);
        button10000.mouseReleased(bet3);
        
    //ゲームオーバー時ボタン事前作成
    buttonRetry = createButton('お金を借りる');
    buttonRetry.position(0, -100);
    buttonRetry.size(200, 100);
    buttonRetry.mouseReleased(syakkinnSuru);
    //フレームレート
    frameRate(60);
}

function bet1() {
    syojikinTarinaiFlag = false;    
    score = score - 100;
    WhichPressedButton = 100;
    click();
}
function bet2() {
    if(score >= 1000){
    syojikinTarinaiFlag = false;  
    score = score - 1000;
    WhichPressedButton = 1000;
    click();
    }else{
        syojikinTarinaiFlag = true;
    }
}
function bet3() {
    if(score >= 10000){
    syojikinTarinaiFlag = false;  
    score = score - 10000;
    WhichPressedButton = 10000;
    click();
    }else{
        syojikinTarinaiFlag = true;
    }
}
//所持金が足りなかった時
function syojikinTarinai() {
    //塗りつぶしは黒色に
    fill("#0000FF");
    textSize(50);
    text("所持金が足りないっ…！",350,400);
    //塗りつぶしは白色に
    fill("#FFFFFF");
}
//クリックした時の処理
function click(){
    //項目の結果をランダムに
    diceResult1 = random(dice);
    diceResult2 = random(dice);
    diceResult3 = random(dice);
    judge = true;
    if(loan > 0){
        loan += Math.round(loan / 200);
    }
    if(loan < score){
        score -= loan;
        loan = 0;
    }
}
function pinzoro(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("ピンゾロ",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 5 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 5 + 1000;
        }else
        score += WhichPressedButton * 5 + 10000;
        judge = false;
    }
    
}
function zorome(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("ゾロ目",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 3 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 3 + 1000;
        }else
        score += WhichPressedButton * 3 + 10000;
        judge = false;
    }
    
}
function shigoro(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("シゴロ",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");    
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 2 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 2 + 1000;
        }else
        score += WhichPressedButton * 2 + 10000;
        judge = false;
    }
    
}
function ichinome(){                                 
//塗りつぶしは金色に
fill("#FFD700");
text("1の目",340,460);
//塗りつぶしは白色に
fill("#FFFFFF");    
if(judge == true){
    if(WhichPressedButton == 100){
        score += WhichPressedButton * 1 + 100;
   }else
   if(WhichPressedButton == 1000){
       score += WhichPressedButton * 1 + 1000;
   }else
   score += WhichPressedButton * 1 + 10000;
   judge = false;
}

}
function ninome(){    
//塗りつぶしは金色に
fill("#FFD700");
text("2の目",340,460);
//塗りつぶしは白色に
fill("#FFFFFF");    
if(judge == true){
    if(WhichPressedButton == 100){
        score += WhichPressedButton * 1 + 100;
    }else
    if(WhichPressedButton == 1000){
        score += WhichPressedButton * 1 + 1000;
    }else
    score += WhichPressedButton * 1 + 10000;
    judge = false;
}

}
function sannnome(){
//塗りつぶしは金色に
fill("#FFD700");
text("3の目",340,460);
//塗りつぶしは白色に
fill("#FFFFFF");      
if(judge == true){
    if(WhichPressedButton == 100){
        score += WhichPressedButton * 1 + 100;
    }else
    if(WhichPressedButton == 1000){
        score += WhichPressedButton * 1 + 1000;
    }else
    score += WhichPressedButton * 1 + 10000;
    judge = false;
}

}
function yonnnome(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("4の目",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");         
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 1 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 1 + 1000;
        }else
        score += WhichPressedButton * 1 + 10000;
        judge = false;
    }   
    
}
function gonome(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("5の目",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");            
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 1 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 1 + 1000;
        }else
        score += WhichPressedButton * 1 + 10000;
        judge = false;
    }
    
}
function rokunome(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("6の目",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");           
    if(judge == true){
        if(WhichPressedButton == 100){
            score += WhichPressedButton * 1 + 100;
        }else
        if(WhichPressedButton == 1000){
            score += WhichPressedButton * 1 + 1000;
        }else
        score += WhichPressedButton * 1 + 10000;
        judge = false;
    }
    
}
function hihumi(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("ヒフミ",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");           
    if(judge == true){
        if(WhichPressedButton == 100){
            score -= WhichPressedButton * 1;
        }else
        if(WhichPressedButton == 1000){
            score -= WhichPressedButton * 1;
        }else
        score -= WhichPressedButton * 1;
        judge = false;
    
    } 
}
function menashi(){
    //塗りつぶしは金色に
    fill("#FFD700");
    text("目無し",340,460);
    //塗りつぶしは白色に
    fill("#FFFFFF");
}
function gameOver(){
    background(0);
        fill("#FF2020");
        textSize(80);
        text("1050年、",340,200);
        text("地下行きっ……！",340,400);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        //最高得点
        //塗りつぶしは黒色に
        fill("#FFD700");
        textSize(32);
        text("最高金額:"+ (highScore - loan),120,15);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        textSize(150);
        //ベットボタンをワープ
        button100.position(660, -100);
        button1000.position(660, -100);
        button10000.position(660, -100);

        //借金ボタンを召喚
        buttonRetry.position(300, 250);
}
function syakkinnSuru(){
    // window.location.reload()
    background(255);
    score = 10000;
    //借金    
    loan += 10000;
    button100.position(660, 100);
    button1000.position(660, 250);
    button10000.position(660, 400);
    buttonRetry.position(300, -100);
}

//---1秒間に60回更新-------------------------------------
function draw(){
    //背景を白色に
    background("#FFFFFF");

    square(30,30,200);
    square(240,30,200);
    square(450,30,200);

    //点数
    //塗りつぶしは黒色に
    fill("#000000");
    textSize(32);
    text("所持金:" + score,660,15);
    //塗りつぶしは白色に
    fill("#FFFFFF");
    textSize(150);

    //最高得点
    //塗りつぶしは黒色に
    fill("#000000");
    textSize(32);
    text("最高金額:" + (highScore - loan),120,15);
    //塗りつぶしは白色に
    fill("#FFFFFF");
    textSize(150);

    //借金表示
    if(loan > 0){
    //塗りつぶしは青色に
    fill("#0000FF");
    textSize(32);
    text("借金:" + loan,400,15);
    //塗りつぶしは白色に
    fill("#FFFFFF");
    textSize(150);
    }
    //境界線は黒色に
    //stroke("#000000");

    if(syojikinTarinaiFlag == false){
//選ばれた項目の表示
if(diceResult1 == 1){
    //塗りつぶしは赤色に
    fill("#FF2020");
    ellipse(130, 130, 60, 60);
}else

if(diceResult1 == 2){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(80, 80, 40, 40);
    ellipse(180, 180, 40, 40);
}else
    if(diceResult1 == 3){
        //塗りつぶしは黒色に
        fill("#000000");
    ellipse(80, 80, 40, 40);
    ellipse(130, 130, 40, 40);
    ellipse(180, 180, 40, 40);
}else
    if(diceResult1 == 4){
        //塗りつぶしは黒色に
        fill("#000000");
        ellipse(80, 80, 40, 40);
        ellipse(80, 180, 40, 40);
        ellipse(180, 80, 40, 40);
        ellipse(180, 180, 40, 40);
}else
if(diceResult1 == 5){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(80, 80, 40, 40);
    ellipse(80, 180, 40, 40);
    ellipse(130, 130, 40, 40);
    ellipse(180, 80, 40, 40);
    ellipse(180, 180, 40, 40);
}else
if(diceResult1 == 6){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(80, 80, 40, 40);
    ellipse(80, 180, 40, 40);
    ellipse(80, 130, 40, 40);
    ellipse(180, 130, 40, 40);
    ellipse(180, 80, 40, 40);
    ellipse(180, 180, 40, 40);
}


if(diceResult2 == 1){
    //塗りつぶしは赤色に
    fill("#FF2020");
    ellipse(340, 130, 60, 60);
}else

if(diceResult2 == 2){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(290, 80, 40, 40);
    ellipse(390, 180, 40, 40);
}else
    if(diceResult2 == 3){
        //塗りつぶしは黒色に
        fill("#000000");
    ellipse(290, 80, 40, 40);
    ellipse(340, 130, 40, 40);
    ellipse(390, 180, 40, 40);
}else
    if(diceResult2 == 4){
        //塗りつぶしは黒色に
        fill("#000000");
        ellipse(290, 80, 40, 40);
        ellipse(290, 180, 40, 40);
        ellipse(390, 80, 40, 40);
        ellipse(390, 180, 40, 40);
}else
if(diceResult2 == 5){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(290, 80, 40, 40);
    ellipse(290, 180, 40, 40);
    ellipse(340, 130, 40, 40);
    ellipse(390, 80, 40, 40);
    ellipse(390, 180, 40, 40);
}else
if(diceResult2 == 6){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(290, 80, 40, 40);
    ellipse(290, 180, 40, 40);
    ellipse(290, 130, 40, 40);
    ellipse(390, 130, 40, 40);
    ellipse(390, 80, 40, 40);
    ellipse(390, 180, 40, 40);
}


if(diceResult3 == 1){
//塗りつぶしは赤色に
fill("#FF2020");
ellipse(550, 130, 60, 60);
fill("#FFFFFF");
}else

if(diceResult3 == 2){
//塗りつぶしは黒色に
fill("#000000");
ellipse(505, 80, 40, 40);
ellipse(595, 180, 40, 40);
}else
if(diceResult3 == 3){
    //塗りつぶしは黒色に
    fill("#000000");
ellipse(505, 80, 40, 40);
ellipse(550, 130, 40, 40);
ellipse(595, 180, 40, 40);
}else
if(diceResult3 == 4){
    //塗りつぶしは黒色に
    fill("#000000");
    ellipse(505, 80, 40, 40);
    ellipse(505, 180, 40, 40);
    ellipse(595, 80, 40, 40);
    ellipse(595, 180, 40, 40);
}else
if(diceResult3 == 5){
//塗りつぶしは黒色に
fill("#000000");
ellipse(505, 80, 40, 40);
ellipse(505, 180, 40, 40);
ellipse(550, 130, 40, 40);
ellipse(595, 80, 40, 40);
ellipse(595, 180, 40, 40);
}else
if(diceResult3 == 6){
//塗りつぶしは黒色に
fill("#000000");
ellipse(505, 80, 40, 40);
ellipse(505, 180, 40, 40);
ellipse(505, 130, 40, 40);
ellipse(595, 130, 40, 40);
ellipse(595, 80, 40, 40);
ellipse(595, 180, 40, 40);
}


tyohan(diceResult1,diceResult2,diceResult3);

if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 1){
    pinzoro();
}else{
    if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 2){
        zorome();
    }else{
        if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 3){
            zorome();
        }else{
            if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 4){
                zorome();
        }else{
            if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 5){
                zorome();
            }else{
                if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 6){
                    zorome();
                }else{
                    if(diceResult1 == 4 && diceResult2 == 5 && diceResult3 == 6){
                        shigoro();
                }else{
                    if(diceResult1 == 4 && diceResult2 == 6 && diceResult3 == 5){
                        shigoro();
                }else{
                    if(diceResult1 == 5 && diceResult2 == 4 && diceResult3 == 6){
                        shigoro();
                }else{
                    if(diceResult1 == 5 && diceResult2 == 6 && diceResult3 == 4){
                        shigoro();
                }else{
                    if(diceResult1 == 6 && diceResult2 == 4 && diceResult3 == 5){
                        shigoro();
                }else{
                    if(diceResult1 == 6 && diceResult2 == 5 && diceResult3 == 4){
                        shigoro();
                    }else{
                        if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 1){                                
                            ichinome();
                        }else{
                            if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 1){                           
                                ichinome();
                            }else{
                                if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 1){                           
                                    ichinome();
                                }else{
                                    if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 1){                           
                                        ichinome();
                                    }else{
                                        if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 1){                           
                                            ichinome();
                                        }else{
                                            if(diceResult1 == 2 && diceResult2 == 1 && diceResult3 == 2){                           
                                                ichinome();
                                            }else{
                                                if(diceResult1 == 3 && diceResult2 == 1 && diceResult3 == 3){                           
                                                    ichinome();
                                                }else{
                                                    if(diceResult1 == 4 && diceResult2 == 1 && diceResult3 == 4){                           
                                                        ichinome();
                                                    }else{
                                                        if(diceResult1 == 5 && diceResult2 == 1 && diceResult3 == 5){                           
                                                            ichinome();
                                                        }else{
                                                            if(diceResult1 == 6 && diceResult2 == 1 && diceResult3 == 6){                           
                                                                ichinome();
                                                            }else{
                                                                if(diceResult1 == 1 && diceResult2 == 2 && diceResult3 == 2){                           
                                                                    ichinome();
                                                                }else{
                                                                    if(diceResult1 == 1 && diceResult2 == 3 && diceResult3 == 3){                           
                                                                        ichinome();
                                                                    }else{
                                                                        if(diceResult1 == 1 && diceResult2 == 4 && diceResult3 == 4){                           
                                                                            ichinome();
                                                                        }else{
                                                                            if(diceResult1 == 1 && diceResult2 == 5 && diceResult3 == 5){                           
                                                                                ichinome();
                                                                            }else{
                                                                                if(diceResult1 == 1 && diceResult2 == 6 && diceResult3 == 6){                           
                                                                                    ichinome();
                                                                                }else{
                                                                                    if(diceResult1 == 2 && diceResult2 == 1 && diceResult3 == 1){
                                                                                        ninome();
                                                                                    }else{
                                                                                        if(diceResult1 == 2 && diceResult2 == 3 && diceResult3 == 3){
                                                                                            ninome();
                                                                                        }else{
                                                                                            if(diceResult1 == 2 && diceResult2 == 4 && diceResult3 == 4){
                                                                                                ninome();
                                                                                            }else{
                                                                                                if(diceResult1 == 2 && diceResult2 == 5 && diceResult3 == 5){
                                                                                                    ninome();
                                                                                                }else{
                                                                                                    if(diceResult1 == 2 && diceResult2 == 6 && diceResult3 == 6){
                                                                                                        ninome();
                                                                                                    }else{
                                                                                                        if(diceResult1 == 1 && diceResult2 == 2 && diceResult3 == 1){
                                                                                                            ninome();
                                                                                                        }else{
                                                                                                            if(diceResult1 == 3 && diceResult2 == 2 && diceResult3 == 3){
                                                                                                                ninome();
                                                                                                            }else{
                                                                                                                if(diceResult1 == 4 && diceResult2 == 2 && diceResult3 == 4){
                                                                                                                    ninome();
                                                                                                                }else{
                                                                                                                    if(diceResult1 == 5 && diceResult2 == 2 && diceResult3 == 5){
                                                                                                                        ninome();
                                                                                                                    }else{
                                                                                                                        if(diceResult1 == 6 && diceResult2 == 2 && diceResult3 == 6){
                                                                                                                            ninome();
                                                                                                                        }else{
                                                                                                                            if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 2){
                                                                                                                                ninome();
                                                                                                                            }else{
                                                                                                                                if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 2){
                                                                                                                                    ninome();
                                                                                                                                }else{
                                                                                                                                    if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 2){
                                                                                                                                        ninome();
                                                                                                                                    }else{
                                                                                                                                        if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 2){
                                                                                                                                            ninome();
                                                                                                                                        }else{
                                                                                                                                            if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 2){
                                                                                                                                                ninome();
                                                                                                                                            }else{
                                                                                                                                                if(diceResult1 == 3 && diceResult2 == 1 && diceResult3 == 1){
                                                                                                                                                    sannnome();
                                                                                                                                                }else{
                                                                                                                                                    if(diceResult1 == 3 && diceResult2 == 2 && diceResult3 == 2){
                                                                                                                                                        sannnome();
                                                                                                                                                    }else{
                                                                                                                                                        if(diceResult1 == 3 && diceResult2 == 4 && diceResult3 == 4){
                                                                                                                                                            sannnome();
                                                                                                                                                        }else{
                                                                                                                                                            if(diceResult1 == 3 && diceResult2 == 5 && diceResult3 == 5){
                                                                                                                                                                sannnome();
                                                                                                                                                            }else{
                                                                                                                                                                if(diceResult1 == 3 && diceResult2 == 6 && diceResult3 == 6){
                                                                                                                                                                    sannnome();
                                                                                                                                                                }else{
                                                                                                                                                                    if(diceResult1 == 1 && diceResult2 == 3 && diceResult3 == 1){
                                                                                                                                                                        sannnome();
                                                                                                                                                                    }else{
                                                                                                                                                                        if(diceResult1 == 2 && diceResult2 == 3 && diceResult3 == 2){
                                                                                                                                                                            sannnome();
                                                                                                                                                                        }else{
                                                                                                                                                                            if(diceResult1 == 4 && diceResult2 == 3 && diceResult3 == 4){
                                                                                                                                                                                sannnome();
                                                                                                                                                                            }else{
                                                                                                                                                                                if(diceResult1 == 5 && diceResult2 == 3 && diceResult3 == 5){
                                                                                                                                                                                    sannnome();
                                                                                                                                                                                }else{
                                                                                                                                                                                    if(diceResult1 == 6 && diceResult2 == 3 && diceResult3 == 6){
                                                                                                                                                                                        sannnome();
                                                                                                                                                                                    }else{
                                                                                                                                                                                        if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 3){
                                                                                                                                                                                            sannnome();
                                                                                                                                                                                        }else{
                                                                                                                                                                                            if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 3){
                                                                                                                                                                                                sannnome();
                                                                                    
                                                                                                                                                                                            }else{
                                                                                                                                                                                                if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 3){
                                                                                                                                                                                                    sannnome();
                                                                                                                                                                                                }else{
                                                                                                                                                                                                    if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 3){
                                                                                                                                                                                                        sannnome();
                                                                                                                                                                                                    }else{
                                                                                                                                                                                                        if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 3){
                                                                                                                                                                                                            sannnome();
                                                                                                                                                                                                        }else{
                                                                                                                                                                                                            if(diceResult1 == 4 && diceResult2 == 1 && diceResult3 == 1){
                                                                                                                                                                                                                yonnnome();
                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                if(diceResult1 == 4 && diceResult2 == 2 && diceResult3 == 2){
                                                                                                                                                                                                                    yonnnome();
                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                    if(diceResult1 == 4 && diceResult2 == 3 && diceResult3 == 3){
                                                                                                                                                                                                                        yonnnome();
                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                        if(diceResult1 == 4 && diceResult2 == 5 && diceResult3 == 5){
                                                                                                                                                                                                                            yonnnome();
                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                            if(diceResult1 == 4 && diceResult2 == 6 && diceResult3 == 6){
                                                                                                                                                                                                                                yonnnome();
                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                if(diceResult1 == 1 && diceResult2 == 4 && diceResult3 == 1){
                                                                                                                                                                                                                                    yonnnome();
                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                    if(diceResult1 == 2 && diceResult2 == 4 && diceResult3 == 2){
                                                                                                                                                                                                                                        yonnnome();
                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                        if(diceResult1 == 3 && diceResult2 == 4 && diceResult3 == 3){
                                                                                                                                                                                                                                            yonnnome();
                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                            if(diceResult1 == 5 && diceResult2 == 4 && diceResult3 == 5){
                                                                                                                                                                                                                                                yonnnome();
                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                if(diceResult1 == 6 && diceResult2 == 4 && diceResult3 == 6){
                                                                                                                                                                                                                                                    yonnnome();
                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                    if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 4){
                                                                                                                                                                                                                                                        yonnnome();
                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                        if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 4){
                                                                                                                                                                                                                                                            yonnnome();
                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                            if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 4){
                                                                                                                                                                                                                                                                yonnnome();
                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 4){
                                                                                                                                                                                                                                                                    yonnnome();
                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                    if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 4){
                                                                                                                                                                                                                                                                        yonnnome();
                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                        if(diceResult1 == 5 && diceResult2 == 1 && diceResult3 == 1){
                                                                                                                                                                                                                                                                            gonome();
                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                            if(diceResult1 == 5 && diceResult2 == 2 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                gonome();
                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                if(diceResult1 == 5 && diceResult2 == 3 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                    gonome();
                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                    if(diceResult1 == 5 && diceResult2 == 4 && diceResult3 == 4){
                                                                                                                                                                                                                                                                                        gonome();
                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                        if(diceResult1 == 5 && diceResult2 == 6 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                            gonome();
                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                            if(diceResult1 == 1 && diceResult2 == 5 && diceResult3 == 1){
                                                                                                                                                                                                                                                                                                gonome();
                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                if(diceResult1 == 2 && diceResult2 == 5 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                                    gonome();
                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                    if(diceResult1 == 3 && diceResult2 == 5 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                                        gonome();
                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                    if(diceResult1 == 4 && diceResult2 == 5 && diceResult3 == 4){
                                                                                                                                                                                                                                                                                                        gonome();
                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                        if(diceResult1 == 6 && diceResult2 == 5 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                            gonome();
                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                            if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                gonome();
                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                    gonome();
                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                        gonome();
                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                            gonome();
                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 6 && diceResult2 == 6 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                                gonome();
                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 6 && diceResult2 == 1 && diceResult3 == 1){
                                                                                                                                                                                                                                                                                                                                    rokunome();
                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 6 && diceResult2 == 2 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                                                                        rokunome();
                                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 6 && diceResult2 == 3 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                                                                            rokunome();
                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 6 && diceResult2 == 4 && diceResult3 == 4){
                                                                                                                                                                                                                                                                                                                                                rokunome();
                                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 6 && diceResult2 == 5 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                                                    rokunome();
                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 1 && diceResult2 == 6 && diceResult3 == 1){
                                                                                                                                                                                                                                                                                                                                                        rokunome();
                                                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 2 && diceResult2 == 6 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                                                                                            rokunome();
                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 3 && diceResult2 == 6 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                                                                                                rokunome();
                                                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 4 && diceResult2 == 6 && diceResult3 == 4){
                                                                                                                                                                                                                                                                                                                                                                    rokunome();
                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 5 && diceResult2 == 6 && diceResult3 == 5){
                                                                                                                                                                                                                                                                                                                                                                        rokunome();
                                                                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 1 && diceResult2 == 1 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                                                                                            rokunome();
                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 2 && diceResult2 == 2 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                                                                                                rokunome();
                                                                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 3 && diceResult2 == 3 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                                                                                                    rokunome();
                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 4 && diceResult2 == 4 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                                                                                                        rokunome();
                                                                                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 5 && diceResult2 == 5 && diceResult3 == 6){
                                                                                                                                                                                                                                                                                                                                                                                            rokunome();
                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 1 && diceResult2 == 2 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                                                                                                                                hihumi();
                                                                                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 1 && diceResult2 == 3 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                                                                                                                                    hihumi();
                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                    if(diceResult1 == 2 && diceResult2 == 1 && diceResult3 == 3){
                                                                                                                                                                                                                                                                                                                                                                                                        hihumi();
                                                                                                                                                                                                                                                                                                                                                                                                    }else{
                                                                                                                                                                                                                                                                                                                                                                                                        if(diceResult1 == 2 && diceResult2 == 3 && diceResult3 == 1){
                                                                                                                                                                                                                                                                                                                                                                                                            hihumi();
                                                                                                                                                                                                                                                                                                                                                                                                        }else{
                                                                                                                                                                                                                                                                                                                                                                                                            if(diceResult1 == 3 && diceResult2 == 1 && diceResult3 == 2){
                                                                                                                                                                                                                                                                                                                                                                                                                hihumi();
                                                                                                                                                                                                                                                                                                                                                                                                            }else{
                                                                                                                                                                                                                                                                                                                                                                                                                if(diceResult1 == 3 && diceResult2 == 2 && diceResult3 == 1){
                                                                                                                                                                                                                                                                                                                                                                                                                    hihumi();
                                                                                                                                                                                                                                                                                                                                                                                                                }else{
                                                                                                                                                                                                                                                                                                                                                                                                                    menashi();
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    }
                }
            }
        }
        }
            
    }
}

}

}

}

}
    }else{
        syojikinTarinai();
    }
    //ざわざわ表示
    //ざわ一個目
    if(millis() > zawaTime1){  
        if((zawaAlpha1 <= 0 )){  
               zawaAlpha1 = 255;      
        }      
        //塗りつぶしは黒色に
        fill(96);
        textSize(32);
        zawaYoko1 = random(50,600);
        zawaTate1 = random(50,500);
        text("ざわ…",zawaYoko1,zawaTate1);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        textSize(150);
        zawaTime1 = millis() + 1500;
    }else{        
        fill(96,96,96,zawaAlpha1);
        textSize(32);
        text("ざわ…",zawaYoko1,zawaTate1);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        textSize(150);
        zawaAlpha1 -= 2.94;           
    }
    //ざわ2個目
    if(millis() > zawaTime2){  
        if((zawaAlpha2 <= 0 )){  
               zawaAlpha2 = 255;      
        }      
        //塗りつぶしは黒色に
        fill(96);
        textSize(32);
        zawaYoko2 = random(50,600);
        zawaTate2 = random(50,500);
        text("ざわ…",zawaYoko2,zawaTate2);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        textSize(150);
        zawaTime2 = millis() + 1500;
    }else{        
        fill(96,96,96,zawaAlpha2);
        textSize(32);
        text("ざわ…",zawaYoko2,zawaTate2);
        //塗りつぶしは白色に
        fill("#FFFFFF");
        textSize(150);
        zawaAlpha2 -= 2.94;           
    }
    
    //最高得点を更新
    if(highScore < score){
        highScore = score;
    }
    //ゲームオーバー処理
    if(score < 100){
        //ゲームオーバー処理にジャンプ
        gameOver();
    }
}

    
    

