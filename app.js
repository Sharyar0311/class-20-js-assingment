// -------1 Even Number--------


for
   (var i = 2; i<= 50; i+=2){
     console.log(i)
   }

// -------2 odd number-----

for
(var i = 1; i<= 50; i+=2){
    console.log(i)
}


// --------Q no 3------

for(var i = 1; i< 50; i++){
    console.log(i, i % 2 === 0 ? " (Even) " : " (Odd) ");
    console.log("\n")
}

// --------Q no 4----

var num = 10; 

for (var i = 1; i <= num; i++) {
  var row = " ";
  for (var j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row)
}

// -------5 Object-------

var Objec =[
    {
        Name : "Shaharyar",
        age : 18,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
        
    },
    {
        Name : "Zubair",
        age : 19,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Kawish",
        age : 20,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Rohan",
        age : 21,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Noman",
        age : 20,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Yosuf",
        age : 19,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Abdul Rahman",
        age : 20,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Hamzy",
        age : 20,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Hammad",
        age : 22,
        class : "batch 4",
        qualification :"Web developer",
        cochachingname : "SK Digi Tech"
    },
    {
        Name : "Hussain",
        age : 15,
        class : "matric 10",
        qualification :"scholar",
        cochachingname : "SK Digi Tech"
    },
    

   
]
for(var i = 0; i< Objec.length; i++){
    console.log("Name:", Objec[i].Name)
    console.log("Age:", Objec[i].age)
    console.log("Class:", Objec[i].class)
    console.log("Qualification:", Objec[i].qualification)
    console.log("Cochacing Name:", Objec[i]. cochachingname)
    console.log("\n")
}











