//برگشت دادن عدد مربوط به کلاس

// function test(){
//     let x = 2
//     let y = test2(x)
// }

// function test2(num1){
// num1 = 8
// return num1
// }

//فرمول زوج یابی

// (x % 2 == 0)


function myFunction() {
    console.log('Function');

    setTimeout(() => {
        document.getElementById('anime').style.width = '10%'

    }, 1000);

    setTimeout(() => {
        document.getElementById('anime').style.width = '30%'

    }, 2000);

    setTimeout(() => {
        document.getElementById('anime').style.width = '60%'

    }, 3500);

    setTimeout(() => {
        document.getElementById('anime').style.width = '80%'

    }, 5500);
    setTimeout(() => {
        document.getElementById('anime').style.width = '100%'
        document.getElementById('anime').style.borderRadius = '1rem'




    }, 7000);
}


myFunction();


var timeout = setTimeout(function () {
    console.log('Function 10s.');
    document.getElementById('log').style.display = 'none'
    document.getElementById('s1').style.display = 'block'

}, 8000);










// ذخیره عدد
// let myNumber = localStorage.getItem('myNumber');
// document.getElementById('like').innerHTML = myNumber
// document.getElementById('likes2').innerHTML = myNumber

// let sann = localStorage.getItem('sann');
// document.getElementById('sandis').innerHTML = sann
document.getElementById('sandis').innerHTML = 1000
document.getElementById('like').innerHTML = 0
document.getElementById('likes2').innerHTML = 0


// let updateClicker = localStorage.getItem('updateClicker');
// document.getElementById('uplike').innerHTML = updateClicker
// let uplikee = 500



//ارتقا کلیک
function updateclick() {
    let uplike = document.getElementById('uplike').innerHTML
    let uplike1 = document.getElementById('uplike1').innerHTML
    let likes2 = document.getElementById('likes2').innerHTML


    if (parseInt(document.getElementById('uplike').innerHTML) == 500) {
        if (parseInt(likes2) >= parseInt(uplike)) {
            document.getElementById('likes2').innerHTML = parseInt(likes2) - 500
            document.getElementById('uplike1').innerHTML = 'سطح 2'
            document.getElementById('uplike').innerHTML = 1500

            let like = document.getElementById('like').innerHTML
            y = parseInt(like)
            document.getElementById('like').innerHTML = y - 500

            document.getElementById('cr1').style.cursor = 'default'
            document.getElementById('tic').style.display = 'none'
            document.getElementById('ticc').style.display = 'block'



            // uplikee = document.getElementById('uplike').innerHTML
            // localStorage.setItem('updateClicker', uplikee) ;

        } else {
            alert('شما قلب کافی برای ارتقا این کارت ندارید!')
        }
    }
}

//ارتقا حجم

function updatefull() {
    let upfull = document.getElementById('upfull').innerHTML
    let upfull1 = document.getElementById('upfull1').innerHTML
    let full = document.getElementById('full').innerHTML
    let like = document.getElementById('like').innerHTML
    if (parseInt(document.getElementById('upfull').innerHTML) == 500) {

        if (parseInt(like) >= parseInt(upfull)) {


            document.getElementById('likes2').innerHTML = parseInt(like) - 500
            document.getElementById('like').innerHTML = parseInt(like) - 500
            document.getElementById('upfull1').innerHTML = 'سطح 2'
            document.getElementById('upfull').innerHTML = 1500

            document.getElementById('cr2').style.cursor = 'default'
            document.getElementById('tic2').style.display = 'none'
            document.getElementById('ticc2').style.display = 'block'
            document.getElementById('full').innerHTML = 5000



            // uplikee = document.getElementById('uplike').innerHTML
            // localStorage.setItem('updateClicker', uplikee) ;

        } else {
            alert('شما قلب کافی برای ارتقا این کارت ندارید!')
        }
    }
}


//ارتقا سرعت

function updatespeed() {
    let upspeed = document.getElementById('upspeed').innerHTML
    let upspeed1 = document.getElementById('upspeed1').innerHTML
    let like = document.getElementById('like').innerHTML
    if (parseInt(document.getElementById('upspeed').innerHTML) == 500) {

        if (parseInt(like) >= parseInt(upspeed)) {


            document.getElementById('likes2').innerHTML = parseInt(like) - 500
            document.getElementById('like').innerHTML = parseInt(like) - 500
            document.getElementById('upspeed1').innerHTML = 'سطح 2'
            document.getElementById('upspeed').innerHTML = 1500

            document.getElementById('cr3').style.cursor = 'default'
            document.getElementById('tic3').style.display = 'none'
            document.getElementById('ticc3').style.display = 'block'

            // uplikee = document.getElementById('uplike').innerHTML
            // localStorage.setItem('updateClicker', uplikee) ;

        } else {
            alert('شما قلب کافی برای ارتقا این کارت ندارید!')
        }
    }
}













function clic(event) {
    // let rond = Math.floor(Math.random() * 6) + 1;
    // console.log(rond)



    if (parseInt(document.getElementById('uplike').innerHTML) == 500) {
        let sandis = document.getElementById('sandis').innerHTML

        if (sandis != 0) {
            ss = parseInt(sandis);
            document.getElementById('sandis').innerHTML = ss - 1
            // console.log(sandis)

            let like = document.getElementById('like').innerHTML
            // console.log(like)

            y = parseInt(like)
            document.getElementById('like').innerHTML = y + 1
            document.getElementById('likes2').innerHTML = y + 1

            let x = event.clientX - 20 + 'px'
            // console.log(x)
            let yy = event.clientY - 20 + 'px'
            // console.log(yy)

            let aghaa = document.getElementById('aghaa')
            let img = document.createElement('img')
            img.src = 'https://img.icons8.com/papercut/60/like.png';
            img.width = 50;
            img.height = 50;
            img.alt = 'like';
            img.classList.add('hov')
            img.style.left = x
            img.style.top = yy

            document.getElementById('conn').appendChild(img)




            setTimeout(() => {
                img.style.top = event.clientY - 200 + 'px'
            }, 100);



            setTimeout(() => {
                document.getElementById('conn').removeChild(img);
            }, 2000);



            localStorage.setItem('myNumber', y + 1);


        } else if (sandis == 0) {
            alert('شما تسبیح کافی برای قلب دادن ندارید!')
        }
    } else if (parseInt(document.getElementById('uplike').innerHTML) == 1500) {
        let sandis = document.getElementById('sandis').innerHTML

        if (sandis != 0) {
            ss = parseInt(sandis);
            document.getElementById('sandis').innerHTML = ss - 2
            // console.log(sandis)

            let like = document.getElementById('like').innerHTML
            // console.log(like)

            y = parseInt(like)
            document.getElementById('like').innerHTML = y + 2
            document.getElementById('likes2').innerHTML = y + 2

            let x = event.clientX - 20 + 'px'
            // console.log(x)
            let yy = event.clientY - 20 + 'px'
            // console.log(yy)

            let aghaa = document.getElementById('aghaa')
            let img = document.createElement('img')
            img.src = 'https://img.icons8.com/papercut/60/like.png';
            img.width = 50;
            img.height = 50;
            img.alt = 'like';
            img.classList.add('hov')
            img.style.left = x
            img.style.top = yy


            let xspan = event.clientX - 50 + 'px'

            let yyspan = event.clientY - 50 + 'px'

            let spann = document.createElement('span')
            let text2 = document.createTextNode('2x')
            spann.style.left = xspan
            spann.style.top = yyspan
            spann.classList.add('spann')
            spann.appendChild(text2)

            document.getElementById('conn').appendChild(spann)

            document.getElementById('conn').appendChild(img)


            setTimeout(() => {
                img.style.top = event.clientY - 200 + 'px'
                spann.style.top = event.clientY - 200 + 'px'

            }, 100);



            setTimeout(() => {
                document.getElementById('conn').removeChild(img);
                document.getElementById('conn').removeChild(spann);

            }, 2000);



            localStorage.setItem('myNumber', y + 2);


        } else if (sandis == 0) {
            alert('شما تسبیح کافی برای قلب دادن ندارید!')
        }

    }






}





setInterval(() => {
    let ada = parseInt(document.getElementById('sandis').innerHTML)

    localStorage.setItem('sann', ada);

}, 200);







setInterval(() => {

    if (parseInt(document.getElementById('upspeed').innerHTML) == 500) {
        if (parseInt(document.getElementById('upfull').innerHTML) == 500) {
            if (document.getElementById('sandis').innerHTML <= 999) {
                let adad = parseInt(document.getElementById('sandis').innerHTML)
                document.getElementById('sandis').innerHTML = adad + 1
            } else {
                document.getElementById('sandis').innerHTML = 1000
            }


        } else if (parseInt(document.getElementById('upfull').innerHTML) == 1500) {

            if (document.getElementById('sandis').innerHTML <= 4999) {
                let adad = parseInt(document.getElementById('sandis').innerHTML)
                document.getElementById('sandis').innerHTML = adad + 1
            } else {
                document.getElementById('sandis').innerHTML = 5000
            }
        }
    } else if (parseInt(document.getElementById('uplike').innerHTML) == 1500) {
        if (parseInt(document.getElementById('upfull').innerHTML) == 500) {
            if (document.getElementById('sandis').innerHTML <= 999) {
                let adad = parseInt(document.getElementById('sandis').innerHTML)
                document.getElementById('sandis').innerHTML = adad + 5
            } else {
                document.getElementById('sandis').innerHTML = 1000
            }


        } else if (parseInt(document.getElementById('upfull').innerHTML) == 1500) {

            if (document.getElementById('sandis').innerHTML <= 4999) {
                let adad = parseInt(document.getElementById('sandis').innerHTML)
                document.getElementById('sandis').innerHTML = adad + 5
            } else {
                document.getElementById('sandis').innerHTML = 5000
            }
        }
    }








}, 2000);


let adafg = '********'


//جایزه روزانه

function dailyup() {
    if (parseInt(document.getElementById('upfull').innerHTML) == 500) {
        if (document.getElementById('dayup').innerHTML > 0) {
            if (document.getElementById('sandis').innerHTML != 1000) {
                let dayup = document.getElementById('dayup').innerHTML
                document.getElementById('dayup').innerHTML = dayup - 1
                document.getElementById('sandis').innerHTML = 1000
                document.getElementById('up').style.display = "block"

                setInterval(() => {
                    document.getElementById('up').style.display = "none"
                }, 2000);
            } else {
                alert('تسبیح های شما در حال حاضر تکمیل است!')
            }
        } else {
            alert('شما از شانس های امروز خود استفاده کرده اید!')
        }
    } else if (parseInt(document.getElementById('upfull').innerHTML) == 1500) {
        if (document.getElementById('dayup').innerHTML > 0) {
            if (document.getElementById('sandis').innerHTML != 5000) {
                let dayup = document.getElementById('dayup').innerHTML
                document.getElementById('dayup').innerHTML = dayup - 1
                document.getElementById('sandis').innerHTML = 5000
                document.getElementById('up').style.display = "block"

                setInterval(() => {
                    document.getElementById('up').style.display = "none"
                }, 2000);
            } else {
                alert('تسبیح های شما در حال حاضر تکمیل است!')
            }
        } else {
            alert('شما از شانس های امروز خود استفاده کرده اید!')
        }
    }


}
//fafgsgg
function accept() {
    let code = adafg
    let pass = document.getElementById('pass').value
    if (pass == code) {
        document.getElementById('textcode').style.display = 'block'
        document.getElementById('pass').value = ''
        document.getElementById('code').style.display = 'none'
        setInterval(() => {
            document.getElementById('textcode').style.display = "none"
        }, 2000);



        let like = document.getElementById('like').innerHTML

        y = parseInt(like)
        document.getElementById('like').innerHTML = y + 10000
        document.getElementById('likes2').innerHTML = y + 10000




        localStorage.setItem('myNumber', y + 10000);
    } else {
        alert('کد مخفی اشتباه است!')
    }
}



function code() {
    document.getElementById('code').style.display = 'block'
}
function zarb() {
    document.getElementById('pass').value = ''
    document.getElementById('code').style.display = 'none'

}
function back() {
    document.getElementById('code').style.display = 'none'
    document.getElementById('pass').value = ''

}



















function main() {
    document.getElementById('s3').style.display = 'none'
    document.getElementById('s2').style.display = 'none'
    document.getElementById('s1').style.display = 'block'


}

function update() {
    document.getElementById('s3').style.display = 'none'
    document.getElementById('s1').style.display = 'none'
    document.getElementById('s2').style.display = 'block'

}
function refral() {
    document.getElementById('s2').style.display = 'none'
    document.getElementById('s1').style.display = 'none'
    document.getElementById('s3').style.display = 'block'

}





document.getElementById('aa').value = 'https//lfheflif'
function copyText(aa) {
    var element = document.getElementById('aa')
    var text = element.value;

    navigator.clipboard.writeText(text)
        .then(function () {
            console.log(text);

            document.getElementById('refral').style.display = 'block'

            setTimeout(() => {
                document.getElementById('refral').style.display = 'none'

            }, 2000);















        })

}