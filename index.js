const val=document.querySelector('input').value;{
console.log/(val)
}
let btn = document.getElementById('btn')
let txt = document.getElementById('txt')
let ol = document.getElementById('ol');
btn.addEventListener('click',function(){
    let list= document.createElement('li')
    list.innerHTML =txt.value;
    ol.appendChild(list);

        if (!val===(0)){return alert('item cannot be empty');}
        
})
txt.addEventListener('onclick', function(e){
    this.fRemove();
    this.fEdit(e);
    item.reset(e)

})
ol.addEventListener('click', function(e){
    this.removeChild(e.target);
})
function clearInput(){
    var getValue = document.getElementById('txt')
    if (getValue.value !=""){
        getValue.value="";
    }
}

localstorage.x=10;
window.onstorage = function() {
    console.log();
}