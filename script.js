const Display = document.getElementById("Display");

function btn(input){
    Display.value += input;   

}
function allClear(){
    Display.value="";
}
function del(){
    Display.value = Display.value.slice(0, -1);
}
function equal()
{
    try{
        Display.value = eval(Display.value);
    }
    catch(error){
        Display.value="Error";
    }
    
}