/*
const main = require('./main/main');

main();*/

function calculateGrade() {
    var res11 = document.getElementById("res11").value;
    var res121 = document.getElementById("res121").value;
    var res122 = document.getElementById("res122").value;;
    var res123 = document.getElementById("res123").value;;

    var obj21 = document.getElementsByName("option21");
    var obj22 = document.getElementsByName("option22");
    var res21,res22;

    for(var i=0; i<obj21.length;i++){
        if(obj21[i].checked){
            res21 = obj21[i].value;
        }
    }

    for(var i=0; i<obj22.length;i++){
        if(obj22[i].checked){
            res22 = obj22[i].value;
        }
    }

    var obj31 = document.getElementsByName("option31");
    var obj32 = document.getElementsByName("option32");
    var res31='',res32='';

    for(var i=0; i<obj31.length;i++){
        if(obj31[i].checked){
            res31 += obj31[i].value;
        }
    }

    for(var i=0; i<obj32.length;i++){
        if(obj32[i].checked){
            res32 += obj32[i].value;
        }
    }


    var obj41 = document.getElementsByName("option41");
    var obj42 = document.getElementsByName("option42");
    var res41,res42;

    for(var i=0; i<obj41.length;i++){
        if(obj41[i].checked){
            res41 = obj41[i].value;
        }
    }

    for(var i=0; i<obj42.length;i++){
        if(obj42[i].checked){
            res42 = obj42[i].value;
        }
    }

    var res51 = document.getElementById('res51').value;

    var grade = 0;

    if(res11 == '统一建模语言'){
        grade += 5;
    }
    if(res121 == '封装性' || res121 == '继承性' || res121 == '多态性'){
        grade +=5;
    }
    if( ( res122 == '封装性' || res122 == '继承性' || res122 == '多态性' )&& res122 != res121){
        grade +=5;
    }
    if((res123 == '封装性' || res123 == '继承性' || res123 == '多态性')&& res123 != res121 && res123 !== res122){
        grade +=5;
    }
    if(res21 == 'B'){
        grade += 10;
    }
    if(res22 == 'A'){
        grade += 10;
    }
    if(res31 == 'ABD'){
        grade += 10;
    }
    if(res32 == 'ABC'){
        grade += 10;
    }
    if(res41 == 'wrong'){
        grade += 10;
    }
    if(res42 == 'right'){
        grade += 10;
    }
    if(res51 == '模型是对现实世界的简化和描述，模型是对所研究的系统、过程、事物和概念的一种特殊表达形式，可以是物理实体；也可以是某种图形；或者是某种数学表达式。'){
        grade += 20;
    }
    document.getElementById('grade').innerHTML = grade;
    return grade;
}

/*
module.exports = {
    calculateGrade
}*/
