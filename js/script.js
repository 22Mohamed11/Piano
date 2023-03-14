let keys = document.querySelectorAll(".white, .black");
console.log(keys);

keys.forEach((key) => {

    key.onclick = () => {
        
        key.firstElementChild.currentTime = 0;
        console.log(key.childNodes, key.children);
        key.firstElementChild.play();
    };
});
