

var button = document.getElementById("gameStartButton")
button.addEventListener("click", start)

function gamestart() {
    hide()
    Swal.fire({
   
         imageUrl: 'img/icon.png',
        customClass:{
            popup:'changebg'
        },
        title: "EDDIE'S SMALL ENG QUIZ",
        text: 'This is a small eng quiz game aimed to test you some common knowledge in English. There are only five questions in the game, so get ready to start and see how many scores you can get.',
        confirmButtonText: 'START',
        allowOutsideClick: false
    }).then(function () {

        (async () => {

            const { value: character } = await Swal.fire({
                imageUrl: 'img/CHA.png',
                background:'lightyellow',
                allowOutsideClick: false,
                title: 'Select your characters',
                input: 'select',
                inputOptions: {
                    'Arial': 'Arial',
                    'Benny': 'Benny',
                    'Unknown': 'Unknown'
                },
                inputPlaceholder: 'Characters',
                inputValidator: (value) => {
                    return new Promise((resolve) => {
                        if (value != '') {
                            resolve()
                        } else {
                            resolve('You need to select your character.')
                        }
                    })
                }
            })

            if (character === 'Arial') {
                Swal.fire({ text: `Hi, I am ${character}, and I am glad you choose me because I am a smart and beautiful woman. I can definitely help you win the game.` }).then(start())
            } else if (character === 'Benny') {
                Swal.fire({ text: `Hi, I am ${character}. Bascially, I am a nerd, so I don't really believe I will lose the game.` }).then(start())
            } else if (character === 'Unknown') {
                Swal.fire({ text: `Hello there, I can't tell you my name because I work as a special agent. I have to many secrets, it's better to keep a low profile. Anyway, I am a geninus, you know, so it's kinda impossible for me to lose the game.` }).then(start())
            }

        })()
    })







}

// after setting your name  -> start function 
// get start from  question 1 
function start() {
    Swal.fire({
        title: `Hi,`,
        text: `press "ok" to start the game`,
    }).then(function () {
        Swal.fire({
            title: "Question 1",
            imageUrl: 'img/phone.gif',
            text: 'If you need to translate "我和朋友有約" from Chinese into English, which word will be the best answer to reffer to "約" in Chinese? ',
            confirmButtonText: 'appointment',
            background: 'lightpink',
            showCancelButton: true,
            cancelButtonText: 'date',
            cancelButtonColor: "#3085d6",

            showDenyButton: true,
            denyButtonText: 'meet',
            denyButtonColor: "#3085d6",

            allowOutsideClick: false
        }).then((result) => { //q1 result 
            if (result.isDenied) { // if you pass the q1 go to q2
                Swal.fire({
                    allowOutsideClick: false,
                    imageUrl: 'img/friends.gif',
                    title: 'pass',
                    text: 'appointment 通常指的是和某專業人士預約，或是在正式的商業場合。比如和醫生、律師、獸醫等這些具有專業知識的人預約時間，或是和老闆跟客戶有約。date則有男女關係的含意，所以如果你說有date的話，當對方不是男女朋友，就代表案情不單純囉XD。meet則是非常口語的用法，表示和朋友有約，常聽到的表示方法就是:I am meeting my friend today.(我今天和朋友有約)',
                }).then(function () {
                    Swal.fire({
                        title: 'Question2',
                        text: 'How do you say "冰棒( bīng bàng )" in English ?',
                        imageUrl: 'img/popsicle.gif',
                        confirmButtonText: 'ice bar',
                        showCancelButton: true,
                        cancelButtonText: 'popsicle',
                        cancelButtonColor: "#3085d6",
                        background: '#61f8ff',
                        showDenyButton: true,
                        denyButtonText: 'ice stick',
                        denyButtonColor: "#3085d6",

                        allowOutsideClick: false
                    }).then((result => {
                        if (result.dismiss === 'cancel') { // if you pass the q2 go to q3
                            Swal.fire({
                                allowOutsideClick: false,
                                title: 'pass',
                                imageUrl: 'img/ice.gif',
                                text: '冰棒這個字呢其實叫做popsicle，別再亂說什麼ice stick和ice bar了，其實popsicle是一個商標的名稱，美國人很喜歡用一些大品牌的商標名稱來代指該產品，像是white-out(立可白)，scotch tape(透明膠帶)，這些原本都只是該商品名稱，但因為太有名所以直接被拿來指這類的東西。 '
                            }).then(function () {
                                Swal.fire({
                                    title: 'Question 3',
                                    text: 'How do you say "過海關" in English ?',
                                    imageUrl: 'img/customs.gif',
                                    confirmButtonText: 'go through immigration',
                                    showCancelButton: true,
                                    cancelButtonText: 'go through the immigration',
                                    cancelButtonColor: "#3085d6",
                                    background: 'rgb(255, 153, 102)',
                                    showDenyButton: true,
                                    denyButtonText: 'go through the customs',
                                    denyButtonColor: "#3085d6",

                                    allowOutsideClick: false
                                }).then((result) => {
                                    if (result.isConfirmed) {  //if you pass the q3 go to q4
                                        Swal.fire({
                                            allowOutsideClick: false,
                                            title: 'pass',
                                            imageUrl: 'img/immi.gif',
                                            text: '過海關的英文就是go through / walk through immigration 或者是 go through / walk through customs。如果你希望自己講英文更進一步的話，記得要改掉這個習慣，千萬不要在前面加 "the" 定冠詞，雖然不影響文意，但是會暴露出你不是母語人士唷。 '
                                        }).then(function () {
                                            Swal.fire({
                                                title: 'Question 4',
                                                text: 'when do you most likey hear the following sentence ? "Neat or on the rocks?" ',
                                                imageUrl: 'img/rock.gif',
                                                confirmButtonText: 'going on a pacnic',
                                                showCancelButton: true,
                                                cancelButtonText: 'heading for mountain climbing',
                                                cancelButtonColor: "#3085d6",
                                                background: 'rgb(204, 255, 204)',
                                                showDenyButton: true,
                                                denyButtonText: 'unwinding in a bar',
                                                denyButtonColor: "#3085d6",

                                                allowOutsideClick: false
                                            }).then((result) => {
                                                if (result.isDenied) { // if you pass the q4 go to q5
                                                    Swal.fire({
                                                        allowOutsideClick: false,
                                                        title: 'pass',
                                                        imageUrl: 'img/cocktail.gif',
                                                        text: '"Neat or on the rocks" 其實是在酒吧會常聽到的術語，當酒保問你這句話的時候，意思是你要什麼都不加，一般就好(neat)，或者是你要加冰塊(on the rocks)? 你可以想 "on the rocks" 就是看起來就像是雞尾酒的杯子裡裝滿碎冰疊起來像小石堆的樣子，會比較好理解唷。'
                                                    }).then(function () {
                                                        Swal.fire({
                                                            title: 'Question 5',
                                                            imageUrl: 'img/apple.gif',
                                                            text: 'Which of the following options is the best to describe "糖葫蘆" when you try to introduce it to your foreign friends?',
                                                            background: 'rgb(255, 255, 102)',
                                                            confirmButtonText: 'rock candy',
                                                            showCancelButton: true,
                                                            cancelButtonText: 'candy apple',
                                                            cancelButtonColor: "#3085d6",

                                                            showDenyButton: true,
                                                            denyButtonText: 'fruit candy',
                                                            denyButtonColor: "#3085d6",

                                                            allowOutsideClick: false
                                                        }).then((result) => {
                                                            if (result.dismiss !== 'cancel') { //you failed q5
                                                                Swal.fire({
                                                                    allowOutsideClick: false,
                                                                    imageUrl: 'img/cutapple.gif',
                                                                    title: 'Oops, you are out.',
                                                                    text:"That was suck. You were almost there. "
                                                                    
                                                                }).then(show)
                                                            }
                                                            else {
                                                                Swal.fire({ // Mission completed 
                                                                    allowOutsideClick: false,
                                                                    title: 'pass',
                                                                    imageUrl: 'img/applecandy.gif',
                                                                    text: '"candy apple" 你可以想像是西方人的糖葫蘆，它是指蘋果外面裹一層太妃糖，插著一根棒子吃的食物。所以當你像外國人解釋糖葫蘆的時候，不妨可以用這個單字唷。"rock candy" 則是指彩色棒硬糖，也是一種零食，但總之看起來就是在吃水晶寶寶。 最後"fruit candy" 就單純指那些水果口味的糖果。'
                                                                }).then(function(){
                                                                    Swal.fire({ // Mission completed
                                                                        allowOutsideClick: false,
                                                                        title: 'Mission Completed',
                                                                        imageUrl: 'img/congra.gif',
                                                                        text: 'congratulation, you past the small quiz, you are really good at English.'
                                                                    }).then(show)
                                                                })


                                                            
                                                    
                                                }
                                            })
                                        })
                                    } else {
                                        
                                        Swal.fire({
                                            allowOutsideClick: false,
                                            imageUrl: 'img/haharock.gif',
                                            title: 'Oops, you are out.',
                                            text:"Honey~ I am sorry. I know this is kinda hard but you can still restart it : ) "
                                            }).then(show) //you failed q4
                                    }
                                })
                            })
                        } else {
                            Swal.fire({
                                allowOutsideClick: false,
                                imageUrl: 'img/im.gif',
                                title: 'Oops, you are out.',
                                text:'Oh ! Be careful with your grammar next time!' }).then(show) //you failed q3

                        }
                    })
                            })
            }
            else {
                Swal.fire({ 
                    allowOutsideClick: false,
                    imageUrl: 'img/popsicle01.gif',
                    title: 'Oops, you are out.',
                    text:"Seriously? You don't know the right word? Come on ~"
                }).then(show) // you failed q2
            }
        }))
})
            }
            else {
    Swal.fire({
        allowOutsideClick: false,
        imageUrl: 'img/01.gif',
        title: 'Oops, you are out.', 
        text:'You got the wrong answer. I am really sorry for that.'}).then(show) // you failed q1
}
        })
    })



}

//function hide(){} 把restart藏起來
function hide(){
    // $("#container").hide()
    var box = document.getElementById("container")
    box.style.display="none"
}
//function show(){} 當遊戲結束後顯示restart按鈕
function show(){
    // $("#container").show()
    var box = document.getElementById("container")
    box.style.display="block"
}
gamestart()

