document.addEventListener('DOMContentLoaded', function() {
      
    let begin = new Object();
    let clicking = {
        "1" : new Object(),
        "2" : new Object()
    };
    let moves = 0;
    let clicks = 0;
    function handleCardClick(){
        setTimeout(function(){
            let numOne = $(clicking["1"]);
            // let numOne = document.addEventListener(clicking["1"]);
            let numTwo = $(clicking["2"]);
            // let numTwo = document.addEventListener(clicking["2"]);
            if(numOne.text() != numTwo.text()){
                numOne.toggleClass("hind");
                // numOne.classList.toggle("hind");
                numTwo.toggleClass("hind");
                // numTwo.classList.toggle("hind");
            }
            else{
                numOne.off("click");
                // numOne.removeEventListener('click', handleCardClick);
                numTwo.off("click");
                // numTwo.removeEventListener('click', handleCardClick);
                numOne.attr("name", true);
                // numOne.createAttribute("name", true);
                numTwo.attr("name", true);
                // numTwo.createAttribute("name", true);
                numOne.addClass("disabled");
                // numOne.classList.add("disabled");
                numTwo.addClass("disabled");
                // numTwo.classList.add("disabled");
                           
                let win = false;
                for(let i = 0; i < 12; i++){
                    let name = $("div").eq(i).attr("name");
                    // let name = document.getElementById("div").get(i).createAttribute("name");
                    if(name && name != false){
                        win = true;
                    }
                    else{
                        win = false;
                        break;
                    }
                }
                if(win == true){
                    let restart = confirm("Good job!\n You did " + moves + "moves.\n Press \"OK\" to start a New Game!");
                    if(restart){
                        createShuffle(true);
                        moves = 0;
                    } else{}
                } else{}
            }
            clicking = {
                "1" : new Object(),
                "2" : new Object()
            };
        }, 1000);
    }

    function handleCardClicked(){
        ++moves;
        ++clicks;        
        if(!clicking["2"].text){
            if(clicks >= 2){
                clicking["2"] = $(this);
                // clicking["2"] = this;
                handleCardClick();
                clicks = 0;
            }
            else{
                clicking["1"] = $(this);
                // clicking["1"] = this;
            }
            $(this).toggleClass("hind");
            // this.classList.toggle("hind");
        } else{}
    }
    
    $("div").on("click", handleCardClicked);
    // const onClick = document.getElementById("div");
    // onClick.addEventListener("click", handleCardClicked);
    function createShuffle(matchedCards){
        if(matchedCards){
            $("div").on("click", handleCardClicked);
            // onClick.addEventListener("click", handleCardClicked);
            $("div").toggleClass("hind");
            // document.getElementById("div").classList.toggle("hind")
        }
        let animals = {
           "🦥": false,
           "🦔": false,
           "🐻": false,
           "🐸": false,
           "🐼": false,
           "🐷": false,
           "🦥": false,
           "🦔": false,
           "🐻": false,
           "🐸": false,
           "🐼": false,
           "🐷": false,
        }

         function shuffle() {
            let index = (Math.floor(Math.random() * 12));
            while(animals[index] == true){
                index = (Math.floor(Math.random() * 12));
            }
            animals[index] = true;
            return index;
        }
       
        let form = [
            "🦥",
            "🦔",
            "🐻",
            "🐸",
            "🐼",
            "🐷"];

            for(i in form){
                let obj = form[i];
                let numOne = $("div").eq(shuffle());
                // let numOne = document.getElementById("div").get(shuffle());            
                let numTwo = $("div").eq(shuffle());
                // let numTwo = document.getElementById("div").get(shuffle());
                $(numOne).text(obj);
                // document.getElementById(numOne).innerText = obj;               
    
                // let txt = document.createElement(numOne); 
                // txt.innerHTML = obj;
                $(numTwo).text(obj);
                // document.getElementById(numTwo).innerText = obj; 
            }
            $("div").removeAttr("name");
            // document.getElementById("div").removeAttribute("name");
            $("div").removeClass("disabled");
            // document.getElementById("div").classList.remove("disabled");
    }
    createShuffle();
});
