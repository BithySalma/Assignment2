//Assignment no:1

function changeImage() {
  document.getElementById("image").innerHTML =
    '<img src="https://static.vecteezy.com/system/resources/previews/003/330/826/non_2x/bangladesh-map-silhouette-with-flag-on-black-background-free-vector.jpg" width="500" height="500" alt="New Image">';
}

//Assignment no:2


let count = 0;

function handleClick() {
    let displayCount = document.getElementById("displayCount");
    count++;
    displayCount.innerHTML = count;
}



//Assignment no:3

let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', () => {
    img.src = 'https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
})
btn2.addEventListener('click', () => {
    img.src = 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
})


//Assignment no:4

let URL=" https://jsonplaceholder.typicode.com/posts"

RequestUsingAsync();
async function RequestUsingAsync(){
    let res= await fetch(URL);
    let jsonData= await res.json();
    console.log(JSON.stringify(jsonData));
}