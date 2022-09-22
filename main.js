import data from './info.json' assert {type: 'json'}
console.log(data);

let imgsearch=document.querySelector('.imgsearch');
let inputsearch=document.querySelector('.input-search');
let index=0;
imgsearch.addEventListener('click',function(){
    if(index==0){
        inputsearch.classList.add('input-search1');
        index++;
     
   }else{
       inputsearch.classList.remove('input-search1');
        index--;
   }
})
let section1=document.querySelector('.section1');
let index1=1;
setInterval(function(){
   if(index1==1){
    section1.classList.add('section1-1');
    index1--;
   }else{
    section1.classList.remove('section1-1');
    index1++;
   }
},2000)

let firstName=document.querySelector('.firstName');
let lastName=document.querySelector('.lastName');
let btnNext=document.querySelector('.btnNext');
let inputbox=document.querySelector('.input-box');
let newMember=document.querySelector('.newMember');

let scroled;
let timer;
document.getElementById('arrowbtn').onclick=function(){
    scroled=window.pageYOffset;
    console.log(scroled);
    test();
}
function test(){
 
    if(scroled<=1960){
        window.scrollTo(0, scroled);
        scroled=scroled+30;
        timer=setTimeout(test,40);
        
    }
    else{
        clearTimeout(timer);
        window.scrollTo(0, 1960);
    }

}

firstName.addEventListener('input', function(){
    function stringContainsNumber(_string) {
        return /\d/.test(_string);
      }
    let a=(firstName.value).trim();
    if(a.length>6 && !stringContainsNumber(a)  ){
        document.getElementById('btnNext').disabled=false;
      btnNext.style.backgroundColor='gray';
        
    }else{
        document.getElementById('btnNext').disabled=true;
        btnNext.style.backgroundColor='#f2f2f2';
    }
});
lastName.addEventListener('input',function(){
    function stringContainsNumber(_string) {
        return /\d/.test(_string);
      }
    let b=(lastName.value).trim();
    if(b.length>6 && !stringContainsNumber(b) ){
        document.getElementById('btnNext').disabled=false;
      btnNext.style.backgroundColor='gray';
        
    }else{
        document.getElementById('btnNext').disabled=true;
        btnNext.style.backgroundColor='#f2f2f2';
    }
})
btnNext.addEventListener('click',function(){
    if(lastName.value!='' && firstName.value!=''){
        inputbox.remove();
        newMember.remove();
        let sgnp=document.createElement('p')
        sgnp.textContent="თქვენ შეხვედით სადღაც";
        sgnp.classList.add('sgnp');
        section1.appendChild(sgnp);
    }
})

//section2
let section2bigphoto=document.querySelector('.section2-bigphoto');
let teaminfo=document.querySelector('.team-info');
let section2name=document.querySelector('.section2name')
let team1img=document.querySelector('.team1-img');
let team2img=document.querySelector('.team2-img');
let team3img=document.querySelector('.team3-img');
let team4img=document.querySelector('.team4-img');


team1img.addEventListener('click',function(){
    section2bigphoto.style.backgroundImage=`url('./img/socicon/4.png')`;
    section2name.textContent='Sebastian Bennett';
    teaminfo.textContent='Dicta omnes ius ut, ei atomorum voluptatum definitionem per. Zril petentium sit at, vel at quis corrumpit. At facilisi per. Sed wisi persius ut, veri novum eu eos, nam ne facer elaboraret.'
})
team2img.addEventListener('click',function(){
    section2bigphoto.style.backgroundImage=`url('./img/socicon/1.png')`;
    section2name.textContent='Graham Griffiths';
    teaminfo.textContent='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam cumque voluptas suscipit omnis repudiandae sapiente debitis vitae fuga qui! Modi commodi voluptatibus sunt deleniti dolore deserunt error quasi? Sequi, hic?'
})
team3img.addEventListener('click',function(){
    section2bigphoto.style.backgroundImage=`url('./img/socicon/2.png')`;
    section2name.textContent='Monica Böttger';
    teaminfo.textContent='dolor sit amet consectetur adipisicing elit. Quibusdam cumque voluptas suscipit omnis repudiandae sapiente debitis vitae fuga qui! Modi commodi voluptatibus sunt deleniti dolore deserunt error quasi? Sequi, hic?'
})
team4img.addEventListener('click',function(){
    section2bigphoto.style.backgroundImage=`url('./img/socicon/3.png')`;
    section2name.textContent='Leon Hunt';
    teaminfo.textContent=' adipisicing elit. Quibusdam cumque voluptas suscipit omnis repudiandae sapiente debitis vitae fuga qui! Modi commodi voluptatibus sunt deleniti dolore deserunt error quasi? Sequi, hic?'
})

//section3
let section3=document.querySelector('.section3');
let section3move=document.querySelector('.section3-move');

let resultData=data.map((info)=>{
   let card=document.createElement('div');
    card.setAttribute('class','section3-card');
    document.querySelector('.section3-move').appendChild(card);

    let box1=document.createElement('div');
    box1.classList.add('card-box1');
    let box2=document.createElement('div');
    box2.classList.add('card-box2');
    
    //descripation
    let descripation=document.createElement('p');
    descripation.innerText=info.description;
    descripation.style.color='#999999';
    card.appendChild(descripation);
     // Image
     let img= document.createElement('img');
     img.src= info.image;
     box1.appendChild(img);
    // Name
    card.append(box1);
    box1.append(box2);
    let name= document.createElement('p');
    name.innerText= info.name;
    box2.append(name);

    // company
    let company= document.createElement('p');
    company.innerText=info.company;
    company.style.fontSize='12px'
    box2.append(company);

  return card;
   
})
console.log(resultData);

let lastKnownScrollPosition=0;
function doSomething() {
    //   Do something with the scroll position
    index=1;
    let a=0;
    setInterval(function(){
        a=1650-(400*index);
        if(index<8){
            for (const i of resultData) {
               i.style.backgroundColor='white';
            }
            // if(index==1){
            //     resultData[0].style.backgroundColor='blue';
            // }else{
            //     resultData[0].style.backgroundColor='white';
            // }
            
            resultData[index-1].style.backgroundColor='blue';
            section3move.style.transform=`translateX(${a}px)`;
            index++;
        }
        else {
            section3move.style.transform=`translateX(1650px)`;
            index=0;
        }
    },2000)
    }
    document.addEventListener('scroll', (e) => {
      lastKnownScrollPosition = window.scrollY;
    
      console.log(lastKnownScrollPosition);
    
        if(lastKnownScrollPosition>=1900 && lastKnownScrollPosition<=2000 ){
            doSomething();
           
        }else{
            
        }
    });



//section4
 let section4card=document.querySelector('.section4-card');
 let section4card1=document.querySelector('.section4-card1');
 let section4card2=document.querySelector('.section4-card2');
 let section4card3=document.querySelector('.section4-card3');
 let section4card4=document.querySelector('.section4-card4');
 let all=document.querySelector('.all');
 let blockchain=document.querySelector('.blockchain');
 let finTech=document.querySelector('.finTech');
 let neoBank=document.querySelector('.neoBank');
 let ai=document.querySelector('.ai');

 all.addEventListener('click',function(){
    ai.style.backgroundColor='black';
    all.style.backgroundColor='blue';
    neoBank.style.backgroundColor='black';
    blockchain.style.backgroundColor='black';
    finTech.style.backgroundColor='black';
    section4card4.classList.add('card-center')
    section4card1.classList.add('card-center')
    section4card2.classList.add('card-center')
    section4card3.classList.add('card-center')
 })

 blockchain.addEventListener('click',function(){
    ai.style.backgroundColor='black';
    all.style.backgroundColor='black';
    neoBank.style.backgroundColor='black';
    blockchain.style.backgroundColor='blue';
    finTech.style.backgroundColor='black';
    section4card1.classList.add('card-none');
    section4card1.classList.remove('card-center');
    section4card2.classList.add('card-none');
    section4card2.classList.remove('card-center');
    section4card3.classList.add('card-none');
    section4card3.classList.remove('card-center');-+
    section4card4.classList.add('card-center')
 })
 finTech.addEventListener('click',function(){
    ai.style.backgroundColor='black';
    all.style.backgroundColor='black';
    neoBank.style.backgroundColor='black';
    blockchain.style.backgroundColor='black';
    finTech.style.backgroundColor='blue';
    section4card1.classList.add('card-none');
    section4card1.classList.remove('card-center');
    section4card2.classList.add('card-none');
    section4card2.classList.remove('card-center');
    section4card4.classList.add('card-none');
    section4card4.classList.remove('card-center');
    section4card3.classList.add('card-center')
 })

 neoBank.addEventListener('click',function(){
    ai.style.backgroundColor='black';
    all.style.backgroundColor='black';
    neoBank.style.backgroundColor='blue';
    blockchain.style.backgroundColor='black';
    finTech.style.backgroundColor='black';
    section4card3.classList.add('card-none');
    section4card3.classList.remove('card-center');
    section4card2.classList.add('card-none');
    section4card2.classList.remove('card-center');
    section4card4.classList.add('card-none');
    section4card4.classList.remove('card-center');
    section4card1.classList.add('card-center')
 })
 ai.addEventListener('click',function(){
    ai.style.backgroundColor='blue';
    all.style.backgroundColor='black';
    neoBank.style.backgroundColor='black';
    blockchain.style.backgroundColor='black';
    finTech.style.backgroundColor='black';
    section4card1.classList.add('card-none');
    section4card1.classList.remove('card-center');
    section4card3.classList.add('card-none');
    section4card3.classList.remove('card-center');
    section4card4.classList.add('card-none');
    section4card4.classList.remove('card-center');
    section4card2.classList.add('card-center')
 })

 section4card4.addEventListener('click',function(){
    section4card4.classList.toggle('grow-width')
 })
 section4card3.addEventListener('click',function(){
    section4card3.classList.toggle('grow-width')
 })
 section4card2.addEventListener('click',function(){
    section4card2.classList.toggle('grow-width')
 })
 section4card1.addEventListener('click',function(){
    section4card1.classList.toggle('grow-width')
 })


 //section5
 let section5card1=document.querySelector('.section5-card1');
 let section5card3=document.querySelector('.section5-card3');
 let section5card2=document.querySelector('.section5-card2');

 section5card1.addEventListener('click',function(){
    section5card1.classList.toggle('section5-card1-grow');
 })
 section5card3.addEventListener('click',function(){
    section5card3.classList.toggle('section5-card1-grow');
 })
 section5card2.addEventListener('click',function(){
    section5card2.classList.toggle('section5-card1-grow');
 })

//  backtobtn
let scroled1;
let timer1;
document.getElementById('backtobtn').onclick=function(){
    scroled1=window.pageYOffset;
    console.log(scroled1);
    test1();
}
function test1(){
 
    if(scroled1>0){
        window.scrollTo(0, scroled1);
        scroled1=scroled1-100;
        timer1=setTimeout(test1,20);
        
    }
    else{
        clearTimeout(timer1);
        window.scrollTo(0,0);
    }

}