let boxes=document.querySelectorAll(".box");
    let msg=document.querySelector(".hide");
    let newbtn=document.querySelector(".btn-new");
    let reset=document.querySelector(".btn-reset");

    let pattern=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ];

    let turn=true;
    count=0;
    
    boxes.forEach((box)=> {
        box.addEventListener("click", ()=> {
            if(turn)
        {
            turn=false;
            box.innerText="X";
        }
        else{
            turn=true;
            box.innerText="O";
        }
        box.disabled=true;
        count++;
        let status=Winner();
        if(count===9 && status!=true)
        {
            msg.innerText=`Game is Draw`;
            msg.classList.remove("hide");
            newbtn.classList.remove("hide");
            reset.classList.add("hide");
            disableboxes();
        }
        })
    });

    let Winner=()=>{
        for(let pat of pattern)
    {
        let val1=boxes[pat[0]].innerText;
        let val2=boxes[pat[1]].innerText;
        let val3=boxes[pat[2]].innerText;
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                Showwinner(val1);
                return true;
            }
        }
    }
    };

    let Showwinner=(winner)=>
    {
        msg.innerText=`Winner is ${winner}`;
        msg.classList.remove("hide");
        newbtn.classList.remove("hide");
        reset.classList.add("hide");
        disableboxes();
    }

    let disableboxes=()=>{
        for(let box of boxes)
        {
            box.disabled=true;
        }
    };

    newbtn.addEventListener("click",()=>{
        for(let box of boxes)
        {
            box.innerText="";
            box.disabled=false;
        }
        msg.classList.add("hide");
        newbtn.classList.add("hide");
        reset.classList.remove("hide");
        turn=true;
        count=0;
    });

    reset.addEventListener("click",()=>{
        for(let box of boxes)
        {
            box.innerText="";
            box.disabled=false;
        }
        count=0;
    });