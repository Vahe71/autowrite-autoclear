const input = document.querySelector('.content input');
let text = input.placeholder;
let backWrite = 0;
let string = '';
let current = 0;
let i = 0;
function write(text) {
    let x = text.length;
    if (backWrite == 0) { // write
        input.placeholder = '';
        setTimeout(() => {
            let setTime = setInterval(() => {
                if (current >= text.length) {
                    backWrite = 1;
                    write(text);
                    clearInterval(setTime)
                } else if (current <= text.length) {
                    string += text[current];
                    current++;
                }
                input.placeholder = string;
            }, 200);
        }, 500);
    } else if (backWrite == 1) { // blink last letter
        let lastLett = setInterval(() => {
            if (i % 2 == 0) {
                i++;
                string = text.slice(0, text.length - 1)
            } else {
                i++;
                string = text.slice(0, text.length);
            }
            if (i >= 6) {
                backWrite = 2;
                clearInterval(lastLett);
                write(text);
            }
            input.placeholder = string;
        }, 200);
    } else if (backWrite == 2) { // clear
        let clear = setInterval(() => {
            if (x > 0) {
                x--;
                string = text.slice(0, x);
                input.placeholder = string;
            } else if (x <= 0) {
                backWrite = 0;
                string = '';
                current = 0;
                i = 0;
                console.log(backWrite)
                write(text);
                clearInterval(clear);
            }
        }, 100);
    }
}
write(text);


