
const input_box = document.getElementById('inputBox')
const playersList = document.getElementById('players')
document.querySelectorAll('.SubmitBtn').forEach(button=>{
    button.addEventListener('click' , ()=>{
     
        
       if(!input_box.value){
        alert('Please Enter Player Name ☺')
       }else if(input_box.value === 'hakimi'){
        const div = document.createElement('div')
        div.innerHTML = playerHTML
        playersList.appendChild(div)
        input_box.value =''

       } else if(input_box.value === 'messi'){
        const div = document.createElement('div')
        div.innerHTML = secondplayerHtml
        playersList.appendChild(div)
        input_box.value = ''

       }else if(input_box.value === 'maradona'){
        const div = document.createElement('div')
        div.innerHTML = thirdplayerHtml
        playersList.appendChild(div)
        input_box.value = ''
       }else if(input_box.value === 'ronaldo'){
        const div = document.createElement('div')
        div.innerHTML = fourthHtml
        playersList.appendChild(div)
        input_box.value = ''
       }
     

    })
})


   
      playerHTML =`
      
        <img src="achraf hakimi.png" alt="achraf hakimi">
                <div >
                     <p>Full Name : hakimi achraf</p>
                     <p>Age:26</p>
                     <p>Team's: Psg/Morocco</p>
                     <p>T-Shirt:2</p>
                     </div>
                     
      `
    



let secondplayerHtml = `
    
    <img src="lionel messi.png">
            <div >
                 <p>Full Name : Lionel Messi</p>
                 <p>Age:39</p>
                 <p>Team's: Inter Miami/Argentina</p>
                 <p>T-Shirt:10</p>
                 </div>
    
    `

let thirdplayerHtml = `
      <img src="diego-maradona-1994-fifa-world-cup-argentina-national-football-team-1986-fifa-world-cup-s-s-c-napoli-diego-maradona-removebg-preview.png">
            <div >
                 <p>Full Name : Diego Maradona</p>
                 <p>Age:65</p>
                 <p>Team's: Barceloona/Argentina</p>
                 <p>T-Shirt:10</p>
                 </div>
    
    `
let fourthHtml = `
   <img src="ronaldo.png">
            <div >
                 <p>Full Name : Cristiano Ronaldo</p>
                 <p>Age:41</p>
                 <p>Team's: Anser/Portugal</p>
                 <p>T-Shirt:7</p>
                 </div>
`

