// The goal is to find the minimum number of jumps required to reach the end of the cloud array.

const clouds = [0, 0, 1, 0, 0, 1, 0];
let countJumps=0;
function countingOnJump(c){
for ( i = 0; i < c.length - 1;){
  if(i+2<c.length && c[i+2] === 0){
     i+=2;
  }else{
     i++;
  }
  countJumps++;
}
return countJumps;
}
console.log(countingOnJump(clouds))