

var btnP = document.querySelectorAll('.BTP') 

var btnM = document.querySelectorAll('.BTM')

var btnT = document.querySelectorAll ('.fa-trash')

var btnH = document.querySelectorAll ('.fa-heart') 



console.log(btnP)

for(let i = 0; i < btnP.length;i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].nextElementSibling.innerHTML++
        SommeTotal() 
        SommeElement() 
    })
}


for(let j = 0;j<btnM.length;j++){
    btnM[j].addEventListener('click',function(){
        if (btnM[j].previousElementSibling.innerHTML>0) {
            btnM[j].previousElementSibling.innerHTML--
        }
        SommeTotal() 
        SommeElement()  
    })
}  


for (let i= 0; i < btnT.length; i++) {
btnT[i].addEventListener('click',function() {
    btnT[i].parentElement.remove() 
    SommeTotal()  
    SommeElement()  
})
   
}



for (let i = 0; i < btnH.length; i++) {
   btnH[i].addEventListener ('click', function() {
    btnH[i].classList.toggle('redC')
   })
    
}


function SommeTotal() {
var price = document.querySelectorAll('.price')
var qte = document.querySelectorAll ('.qte') 
var total = document.querySelector('#total') 
var sum = 0 

for (let i = 0; i < price.length; i++) {
    sum= sum+price[i].innerText * qte[i].innerText 
}

total.innerText= sum.toFixed(2)
}



function SommeElement() {
    var newP = document.querySelectorAll ('.newP') 
    console.log(newP)
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll ('.qte')  
    var total = document.querySelector ('#total')
    var sum = 0  
    for (let i = 0; i < price.length; i++) {
        sum = sum+price[i].innerText * qte[i].innerText 
        newP[i].innerText = (price[i].innerText * qte[i].innerText ).toFixed(1)  
    } 
    
    total.innerText= sum.toFixed(1)  
    }  
