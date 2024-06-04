let inp=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
btn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=inp.value; 

    let dltbtn=document.createElement('button');
    dltbtn.innerText='Delete';
    dltbtn.classList.add('delete');

    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value='';

});

// let delbtn=document.querySelectorAll('.delete');
// for(del of delbtn){
//     del.addEventListener("click",function(){
//         let parent=this.parentElement;
//         parent.remove();
//     });
// }   //it delete only existence list not dynamically added list

ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){  //event.target indicate where the mouse is clicked
        let listItem=event.target.parentElement;
        listItem.remove();
    }
});