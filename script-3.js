window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button'),
          inputOfText = document.querySelector('.input__text'),
          headerOne = document.querySelector('h1'),
          headerFour = document.querySelector('h4');

          $('#example2').typeIt({
            speed: 60,
            breakLines: true,
            autoStart: true
        });

    btn.addEventListener('click', () => {

        let newContentOfInput = inputOfText.value;




        inputOfText.remove();
        btn.remove();
        headerOne.remove();
        headerFour.remove();

        let newString = '';

        for (let i of newContentOfInput) {
            if (i === '.'){
                newString += '.\n ';
        } else {
            newString += i;
        }}


        const userText = document.createElement('h3');
        userText.innerText = newString;

        document.body.append(userText);




        $('h3').typeIt({
            speed: 60,
            breakLines: true,
            autoStart: true
        });


    });





$('h4').typeIt({
    speed: 90,
    autoStart: false
})
.tiPause(4000)
.tiType('Please, enter words in english.')
.tiPause(500)
.tiType('<p></p>')
.tiType('because there is only one language in this font.')
.tiPause(1000)
.tiType('<p></p>')
.tiType('...I see that you can not concentrate in a typing, yeah?..')
.tiBreak() .tiPause(750)
.tiType('<p></p>')
.tiType('Need to say BR for visiting my site')
.tiSettings({speed: 400})
.tiType('<p></p>')
.tiType('I MEAN WEB-APP')
.tiPause(200)
.tiSettings({speed: 50})
.tiType('<p></p>')
.tiDelete()
.tiType('T  H    A        N      K       Y  O        U  V   E              R Y         M U         C               H');


});