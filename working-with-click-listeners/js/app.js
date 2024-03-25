window.onload = () => {
    let body = document.querySelectorAll(`body`)[0];
    let thirdDiv = document.getElementsByClassName(`third-div`)[0];
    thirdDiv.textContent = "aojsdiofjsodifj";


    // body.innerHTML = `<b>Hello world!</b>`;

    // let b = document.createElement(`b`);
    // let text = document.createTextNode(`Hello, world`);
    // b.appendChild(text);
    // body.appendChild(b);

    let toggle = true;

    body.addEventListener(`click`, () => {
        if(toggle) {
            body.style.backgroundColor = `yellow`;
            toggle = false;
        } else {
            body.style.backgroundColor = `transparent`;
            toggle = true;
        }
    });
};
