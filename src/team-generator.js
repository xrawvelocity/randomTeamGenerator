var names = ['jim','jake','jimes','rob','paps','richie', 'max', 'eric', 'soul', 'ack', ' in'];
names.sort(function(){
    return Math.round(Math.random()) - 0.5;
});
let round = 0
let noPerTeam = 3
if (names){
if (names.length % noPerTeam === 0){
  round = (names.length / noPerTeam)
} else {
  round = (names.length / noPerTeam) }
}
let noOfTeams = Math.floor(round)
var totalTeams = Math.ceil(names.length/noOfTeams);  

var i,j,temparray,piece = totalTeams;
for (i = 0, j= names.length; i<j; i+=piece) {
    temparray = names.slice(i,i+piece);
    console.log(temparray);
}
console.log(noOfTeams)
console.log(round)
