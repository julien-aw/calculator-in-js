var keys = document.querySelectorAll(".key");
let result = document.getElementById('result');
let arr = Array.from(keys);

arr.forEach((el) =>{
    el.addEventListener('click', () =>{
        result.innerHTML=el.id;
    });
});