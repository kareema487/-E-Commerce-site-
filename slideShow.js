
var img_index = document.getElementById("Slider");

function prev(){
    var index = Number(img_index.getAttribute('class'))-1;
        if(index < 1)
        index=3;
        img_index.setAttribute('class',index);
        
        for(var i=1;i<=3;i++){
            if (i==index){
                document.getElementById(String(i)).style.display="block";
            }
            else{
                document.getElementById(i+"").style.display="none";

            }
        }
}

function next(){
    var index = Number(img_index.getAttribute('class'))+1;
    if(index > 3)
    index=1;
    
    img_index.setAttribute('class',index);
    for(var i=1;i<=3;i++){
        if (i==index){
            document.getElementById(i+"").style.display="block";
        }
        else{
            document.getElementById(i+"").style.display="none";

        }
    }
}