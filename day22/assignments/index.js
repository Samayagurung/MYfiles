// The goal is to find the minimum number of jumps required to reach the end of the cloud array.

const clouds = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnCloud(c){
  let countJump = 0;
  for(let i = 0; i < c.length - 1;){
    if(i+2<c.length && c[i+2]===0){
      i+=2;
    }else{
      i++;
    }
    countJump++;
  }
return countJump
}
console.log(jumpingOnCloud(clouds));
