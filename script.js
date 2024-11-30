var size=0.6;
let d=document.getElementById('download');
d.addEventListener('click',download_image);
function download_image(){
    html2canvas(document.getElementById('txt')).then(canvas=>{
        const link=document.createElement('a');
        link.href=canvas.toDataURL('image/png');
        link.download='image.png';
        link.click();
    });
}
function select(val,check){
    var tag=document.getElementById("txt");
    
    if(check=='col'){
        tag.style.color=val;
    }else if(check=='bg'){
        tag.style.backgroundColor=val;
    }else if(check=='font'){
        tag.style.fontFamily=val;
    }else if(check=='st'){
        tag.style.textDecoration=val;
    }else if(check=='bd'){
        tag.style.fontWeight=val;
    }else if(check=='i'){
        tag.style.fontStyle=val;
    }else if(check=='+'){
        tag.style.fontSizeAdjust=size;
        size=size+0.07;
    }else if(check=='-'){
        tag.style.fontSizeAdjust=size-0.2;
        size=size-0.1;
    }else if(check=='cap'){
        tag.style.textTransform=val;
    }else if(check=='ali'){
        tag.style.textAlign=val;
    }else if(check=='q'){
        tag.innerHTML="'"+tag+"'";
    }
}
function them(val){
    if(val=='#111111'||val=='#333333'){
    document.getElementById("bdy").style.backgroundColor=val;
    var h=document.getElementById("txt")
    h.style.border="2px solid white";
    h.style.color="white";
    document.getElementById("container").style.border="2px solid white";
    document.getElementById("enhan").style.border="2px solid white";
    document.getElementById("bg-col").style.border="2px solid white";
    document.getElementById("col").style.border="2px solid white";
    document.getElementById("font-col").style.border="2px solid white";
    document.getElementById("a").style.color="white";
    document.getElementById("b").style.color="white";
    document.getElementById("c").style.color="white";
    }else if(val=='#111144'){
        document.getElementById("bdy").style.backgroundColor=val;
        var h=document.getElementById("txt")
        h.style.border="1px solid cyan";
        h.style.color="black";
        document.getElementById("container").style.border="2px solid cyan";
        document.getElementById("enhan").style.border="2px solid cyan";
        document.getElementById("bg-col").style.border="2px solid cyan";
        document.getElementById("col").style.border="2px solid cyan";
        document.getElementById("font-col").style.border="2px solid cyan";
        document.getElementById("a").style.color="cyan";
        document.getElementById("b").style.color="cyan";
        document.getElementById("c").style.color="cyan";
    }else if(val=='#ffffff'){
        document.getElementById("bdy").style.backgroundColor=val;
        var h=document.getElementById("txt")
        h.style.border="1px solid black";
        h.style.color="black";
        document.getElementById("container").style.border="2px solid black";
        document.getElementById("enhan").style.border="2px solid black";
        document.getElementById("bg-col").style.border="2px solid black";
        document.getElementById("col").style.border="2px solid black";
        document.getElementById("font-col").style.border="2px solid black";
        document.getElementById("a").style.color="black";
        document.getElementById("b").style.color="black";
        document.getElementById("c").style.color="black";
    }
}

