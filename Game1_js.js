let my_score=0;
let c_score=0;
const my_score1=document.getElementById("u_score");
const c_score1=document.getElementById("c_score");
const score_board=document.querySelector(".score-board");
const result=document.querySelector(".result");
const rock=document.getElementById("c1");
const paper=document.getElementById("c2");
const scissors=document.getElementById("c3");

function f1()
{
    document.getElementById("c1").style.border = "4px solid red";
    setTimeout(function(){document.getElementById("c1").style.border = "0px";},120);  
}
function f2()
{
    document.getElementById("c2").style.border = "4px solid red";
    setTimeout(function(){document.getElementById("c2").style.border = "0px";},120);  
}
function f3()
{
    document.getElementById("c3").style.border = "4px solid red";
    setTimeout(function(){document.getElementById("c3").style.border = "0px";},120);  
}

function c_choice()
{
    const choices=['r','p','s'];
    r_num=Math.floor(Math.random()*3);
    return choices[r_num];
}

function convert(letter)
{
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";
}

function win(a,b)
{
    my_score++;
    my_score1.innerHTML=my_score;
    c_score1.innerHTML=c_score;
    const user_s="me".fontsize(3).sub();
    const comp_s="comp".fontsize(3).sub();
    result.innerHTML=`${convert(a)}${user_s} beats ${convert(b)}${comp_s}. 🔥Winner🔥`;
}

function lose(a,b)
{
    c_score++;
    my_score1.innerHTML=my_score;
    c_score1.innerHTML=c_score;
    const user_s="me".fontsize(3).sub();
    const comp_s="comp".fontsize(3).sub();
    result.innerHTML=`${convert(a)}${user_s} beats ${convert(b)}${comp_s}. Lost :(`;
}

function draw(a,b)
{
    const user_s="me".fontsize(3).sub();
    const comp_s="comp".fontsize(3).sub();
    result.innerHTML=`${convert(a)}${user_s} is same as ${convert(b)}${comp_s}. Try Again!`;
}

function game(ch)
{
    const c_choice1=c_choice();
    switch (ch+c_choice1)
    {
        case "rs":
        case "pr":
        case "sp":
            win(ch,c_choice1);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();
            break;
    }
}

function main()
{
    rock.addEventListener('click',function()
    {
        game("r");
    })
    paper.addEventListener('click',function()
    {
        game("p");
    })
    scissors.addEventListener('click',function()
    {
        game("s");
    })
}
main();
