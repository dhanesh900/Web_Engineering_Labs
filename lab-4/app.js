//task1
var a=5;
var b=1.2;
var flag=true;
var s='dhanesh';
var dat=new Date();
var d;
var arr_int=[0,1,2,3,4,5,,6,7,8,9];
var arr_string=['a','b','c','d'];
var arr_mix=[1,1.2,true,' ',function(){console.log('func as element of arr')}];
var ob={id:1,name:'ABC'}

//task2
//simply Number cast when string contain only digits
var a=Number('11a11');
console.log(a); //output: NaN
var a=Number('1111');
console.log(a); //output: 1111
var a=Number('1true');
console.log(a); //output: NaN
var a=Number('11.11');
console.log(a); //output: 11.11

//simply parseInt cast the string till contain only digits if it get a symbol or character then stop cast
var a=parseInt('11a11');
console.log(a); //output: 11
var a=parseInt('1111');
console.log(a); //output: 1111
var a=parseInt('1true');
console.log(a); //output: 1
var a=Number('11.11');
console.log(a); //output: 11

var a=parseInt('11a11');
console.log(a); //output: 11
var a=parseInt('1111');
console.log(a); //output: 1111
var a=parseInt('1true');
console.log(a); //output: 1
var a=Number('11.11');
console.log(a); //output: 11.11

//task3
function check_obj(str){if(typeof str === 'object'){console.log(str)}};
check_obj('a') //undefined
check_obj(a={}) // {}
check_obj(a={id=1}) //{id:1}
check_obj(a=[1,2]) //[1,2]

//task4
function check_inp(inp){if(inp%2 == 0){console.log('Even')} else{console.log('Odd')}}
check_inp(1)
 //Odd
check_inp(4)
 //Even

 //task5
var task5=(s,p)=>{
    if(s<70)
    {
        console.log('Good Safe Driving')
    }
    else if(s>70 && p == 5)
    { 
        console.log('Speed Limit Crossed by Penalty Point ' + p)
    } 
    else if(s > 120 && p>10)
    {
        console.log('License Suspended')
    }
                }


//task6
var grade=marks=>{
    sum = marks.reduce((p,n)=>p+n);
    console.log(sum);
    avg= sum/marks.length;
    console.log(avg);
    if(avg >=60 && avg<=66){console.log('D')}
     else if(avg >=67 && avg<=71){console.log('C-')} 
     else if(avg >=72 && avg<=76){console.log('C+')} 
     else if(avg >=77 && avg<=81){console.log('B-')} 
     else if(avg >=82 && avg<=86){console.log('B+')} 
     else if(avg >=87 && avg<=92){console.log('A-')} 
     else if(avg >=93 && avg<=100){console.log('A+')} 
    }

grade([94,86,82,77,72,61])
//result
//472
//78.66666666666667
//B-


//task7
var amo=function(s){
    var res=''; 
    for(i=1;i<=s.length;i++)
    {res+=s.charAt(s.length-i);} 
    console.log(res);
}

amo('dhanesh')
// hsenahd

//task8
function atleast_one_digit(a)
{
    var res=[];
     for(item of a)
     { 
         for(i=0;i<=item.length;i++)
        {
            if(item.charAt(i)==0 || item.charAt(i)==1 ||item.charAt(i)==2 ||item.charAt(i)==3 
            ||item.charAt(i)==4||item.charAt(i)==6 ||item.charAt(i)==7 ||item.charAt(i)==8 
            ||item.charAt(i)==9 ||item.charAt(i)==5)
            { res[i]=item; break;} 
        }
    }
        return res;
}


//task9
var date_difference=(start,end)=>(end-start)/(1000 * 60 * 60 * 24)

//task10
var print_obj=a=>{if(a){console.log(a)}}

//task11
var a=[1,11,1,1111,11,1,1,1,1,1,1,2,3,4,3,4];
function F_r(a){
    min=a[0];
    for(i=0;i<=a.length-1;i++)
    {
        if(min > a[i]){min=a[i];}
    }  
    for(i=0;i<=a.length-1;i++)
    { 
        if(a[i] ==1){a[i]= -1;}
    }
 console.log(a) ;
}

F_r(a)
(16) [-1, 11, -1, 1111, 11, -1, -1, -1, -1, -1, -1, 2, 3, 4, 3, 4]


