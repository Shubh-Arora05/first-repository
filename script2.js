var arr = [
    {name: "Ibiscus Flower Detail",image:"https://envato-shoebox-0.imgix.net/8088/8e58-da53-11e0-a155-842b2b692e1a/_ZA11503.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=0d62ae1c16d51d54282a58f11e4ed672"},
    {name: "Orange, white and yellow colorful flower",image:"https://envato-shoebox-0.imgix.net/9898/65f7-23fb-4ca1-9f77-0aa75d5f01c9/MHAY5872.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=4167a40a9664ad5ded67ca318f69a26c"},
    {name: "Fresh lily flower with colorful petals",image:"https://envato-shoebox-0.imgix.net/f22b/d468-74b1-4a54-9a99-658008bbc0aa/_1058454-1.jpeg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=65f25dbbf81e26c12e51d21065a11b47"},
    {name: "Beautiful daisy flower close-up",image:"https://envato-shoebox-0.imgix.net/53ba/98f8-4dfa-4556-b6a8-0230eeddc9bc/DSC00457.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=69217a32b17f06e1a350c03841954316"},
    {name: "Closeup of white and red daisy flower",image:"https://envato-shoebox-0.imgix.net/9b97/1ca7-7cc3-4bea-b07e-9a1fd21e7ba4/8054-2014_04_18-19_56_40-ISO200.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=44cbc0723fa2ad19d0037d8d295af130"},
    {name: "Ibiscus Flower Detail",image:"https://envato-shoebox-0.imgix.net/8088/8e58-da53-11e0-a155-842b2b692e1a/_ZA11503.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=0d62ae1c16d51d54282a58f11e4ed672"},
    {name: "Orange, white and yellow colorful flower",image:"https://envato-shoebox-0.imgix.net/9898/65f7-23fb-4ca1-9f77-0aa75d5f01c9/MHAY5872.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=4167a40a9664ad5ded67ca318f69a26c"},
    {name: "Fresh lily flower with colorful petals",image:"https://envato-shoebox-0.imgix.net/f22b/d468-74b1-4a54-9a99-658008bbc0aa/_1058454-1.jpeg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=65f25dbbf81e26c12e51d21065a11b47"},
    {name: "Beautiful daisy flower close-up",image:"https://envato-shoebox-0.imgix.net/53ba/98f8-4dfa-4556-b6a8-0230eeddc9bc/DSC00457.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=69217a32b17f06e1a350c03841954316"},
    {name: "Closeup of white and red daisy flower",image:"https://envato-shoebox-0.imgix.net/9b97/1ca7-7cc3-4bea-b07e-9a1fd21e7ba4/8054-2014_04_18-19_56_40-ISO200.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1400&fit=max&markalign=center%2Cmiddle&markalpha=18&s=44cbc0723fa2ad19d0037d8d295af130"}
]


function showCard(){
    let clutter = ""
    arr.forEach(function(obj){
    clutter = clutter + `<div class="box">
            <img class="cursor-pointer h-36 w-36" src="${obj.image}"
                            alt="image">
                        <div class="caption">${obj.name} </div> 
            </div>` ;
        })
    
        document.querySelector(".container").innerHTML = clutter;
    }
function handle_search(){

   var ele = document.querySelector("#searchinput").addEventListener('focus',function(){
    document.querySelector(".overlay").style.display = "block" ;
   });

   var ele = document.querySelector("#searchinput").addEventListener('blur',function(){
    document.querySelector(".overlay").style.display = "none" ;
    document.querySelector(".searchdata").style.display = "none" ;
   });
}

var input = document.querySelector("#searchinput")




input.addEventListener("input", function(){
    var str = input.value.toLowerCase() ;
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().includes(str)) ;
    var c = "" ;
      filteredArray.forEach(function(obj){
      c  += `<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.name}</h3>
  </div>`
      }) 
      document.querySelector(".searchdata").innerHTML = c ;
      document.querySelector(".searchdata").style.display = "block" ;
 
      

      if(input.value == "")  
      document.querySelector(".searchdata").style.display = "none" ;
    })  
   
  

showCard();
handle_search()
 