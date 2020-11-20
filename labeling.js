out: for(let i = 0; i < 3; i++){

    for(let j = 0; j < 3; j++);{
        if(i >= 2) break out;

        console.log('this is out of the loop');
    }
}
console.log('Done, loopOut!')
// using the labelName "out" in this case to break the outside loop........