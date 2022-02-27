
const WinValue=Math.round(Math.random()*10);
const nbtentatives=parseInt(prompt("Donnez le nombre de Tentatives"));
for(var i=0;i<nbtentatives;i++)
{ let guessedValue=parseInt(prompt("Devinez la valeur"));
    if(guessedValue===WinValue)
    { alert("Vous avez gagné!")
     break;}

}
if(i===nbtentatives) alert("Game Over!")

