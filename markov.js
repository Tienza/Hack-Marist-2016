var titles = ["'This Changes Everything': Donald Trump Exults as Hillary Clinton's Team Scrambles",
"Shift in the Electorate's Makeup Tightens the Presidential Contest (POLL)",
"Donald Trump changes tune on FBI with new look at Hillary Clinton email case",
"2016 Presidential Swing State Polls Poll - October 27, 2016 - Clinton Catches Trump For Ties | Quinnipiac University ...",
"Someone Was Actually Arrested For In-Person Voter Fraud. Shes A Trump Supporter.",
"Iowa GOP voter arrested for alleged voter fraud: report",
"Donald Trump supporter in Iowa arrested for voter fraud",
"Voter fraud suspect arrested in Des Moines",
"Iowa woman faces criminal charges in voter fraud case",
"Iowa Woman Arrested For Committing Voter Fraud",
"Eric Garner's daughter blasts Clinton campaign after WikiLeaks emails",
"Daughter of Eric Garner slams Clinton campaign over emails about father's death",
"Eric Garner's daughter criticizes Hillary Clinton after WikiLeaks emails",
"Eric Garner's Daughter Slams Clinton Campaign Over Emails Confusing Police Brutality And Gun Violence",
"Re: HRC Op-Ed on Gun Violence - WikiLeaks - The Podesta Emails",
"Bernie Sanders issues not-so-subtle warning to next president",
"Luntz: Last Time Clinton's Email Woes Were This Bad, She Lost 22 States to Bernie Sanders",
"Hey Lefties: Hillary is Not Your Friend",
"Bernie Sanders Says What The Media Won't: Trump Is A Gutless Political Coward",
"These angry Texans planned protest votes against Clinton, Trump, but close polls have changed some minds",
"Gunmen kill four at Shi'ite Muslim gathering in Karachi",
"Air strike kills 17 in Yemen, exiled president rejects peace plan",
"Fact Checking Everything Trump and Clinton Said About the FBI's Email Review",
"The Weather Channel",
"Weather Underground",
"AccuWeather",
"New Providence High School Senior Builds Cello Racks for Paterson Music Project; Earns Eagle Scout Rank",
"Women's Health Awareness Event in New Providence November 6",
"Ridge High School Marching Band Will Host It's 7th Annual Band Competition Saturday Oct. 29th",
"Marist football sets to clash with league rival San Diego",
"Company based at Dutchess County Airport to expand, partner with ...",
"Halloween parade in Poughkeepsie Sunday",
"James Comey Broke with Loretta Lynch and Justice Department Tradition",
"Back the Way You Went",
"First-Time Voters"];

var startwords =[];
var terminals ={};
var wordstats = {};

for(var i = 0; i < titles.length; i++){
    var words = titles[i].split(' ');
    terminals[words[words.length-1]] = true;
    startwords.push(words[0]);
    for(var j = 0; j < words.length - 1; j++){
      if(wordstats.hasOwnProperty(words[j])){
        wordstats[words[j]].push(words[j+1]);
      }else{
        wordstats[words[j]] = [words[j+1]];
      }
    }
}
var choice = function(a){
  var i = Math.floor(Math.random() * a.length);
  return a[i];
}

function makeTitle(){
  word = choice(startwords);
  var title = [word];
  console.log(word);
  console.log(title);
  while(wordstats.hasOwnProperty(word)){
    console.log(title);
    var next = wordstats[word];
    word = choice(next);
    title.push(word);
  }
  document.getElementById("output").innerHTML = title.join(' ');
}
