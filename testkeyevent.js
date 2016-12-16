
onKeyDown = onKeyUp = function(event){
    event.preventDefault();
    keys[event.KeyCode] = event.type == 'keydown';
    
    if(key[32]){
     console.log('space bar pressed');
    }
}


window.addEventListener('keydown',onKeyDown,true);
window.addEventListener('keyup',onKeyUp,true);

