let n = 'joel'.toUpperCase;
console.log(n);

function displayPosition(companyName, jobTitle, Description) {
   return (console.log(companyName),
   console.log(jobTitle),
    console.log(Description))
}
console.log(displayPosition('joes crabshack', 'crab daddy', 'dont ask what i do with the crabs'))

function displaySkill(skillName, cool){
    if (cool === true) {
       return (skillName, '* BAM: ');
    } else {
        return (skillName, cool);
    }
}

console.log(displayPosition('timtams tinnery', 'tin man', 'talk to the tin'));

console.log(displaySkill('friemaking', false)) ;
console.log(displaySkill('fishing', true)) ;
console.log(displaySkill('woodcutting', false)) ;