//your code here
let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let newArr=[];
let obj={};
arr.forEach(word=>{
	let regexp=/\b(the|an|a)\b/gi;
	let newWord=word.replace(regexp,"");
	obj[newWord]=word;
	newArr.push(newWord);
});
newArr.reverse();
let ans=[];
for(let i of newArr){
	ans.push(obj[i]);
}
console.log(ans);

