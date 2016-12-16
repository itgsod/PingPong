var keyEnum = { W_Key:0, A_Key:1, S_Key:2, D_Key:3 };
var keyArray = new Array(4);

function onKeyDown()
{
    // Detect which key was pressed
    if( key == 'w' )
        keyArray[keyEnum.W_Key] = true;
    // Repeat for each key you care about...
}

function onKeyUp()
{
    // Detect which key was released
    if( key == 'w' )
        keyArray[keyEnum.W_Key] = false;
    // Repeat for each key you care about...
}

function isKeyDown(key)
{
    return keyArray[key];
}



