/*jshint esversion: 9*/
const teamGen = (array, num) => {
    let index = array.length;
    let temporary, random;
    let newArr = [];
    
    while(index){
      random = Math.floor(Math.random() * index);
      index -= 1;
  
      temporary = array[index];
      array[index] = array[random];
      array[random] = temporary;
    }
    for(let i = 0; i < array.length; i += num){
      newArr.push([array[i], array[i+1]])
      if(array[-1].includes(undefined)){
        for (i in array[-1]){
          if (arr[-1][i]==undefined){
            arr[-1][i].pop()
          }
        }
      }
    }
    console.log(newArr)
  }
  let classNames = ['victor','alex','john','jeff','chaba','juan','maria','josefina','astoneta','alexandra','faith']
  teamGen(classNames, 2)