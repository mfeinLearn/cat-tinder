// we will get info from the internet to mock up a
// collection of data we will get
// from the backend
let counter = 1

const cats = [
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Fluffy"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Peaches"},
  {id: counter++ ,status: "liked" ,image_url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Spike"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Herman"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/38867/pexels-photo-38867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", name: "Moose"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Garfield"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Freddy"},
  {id: counter++ ,status: "liked" ,image_url: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Cheryl"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "BoBob"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Stripes"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Mickey"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Minnie"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/315582/pexels-photo-315582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Fred Astair"},
  {id: counter++ ,status: "liked" ,image_url: "https://images.pexels.com/photos/1831831/pexels-photo-1831831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Ginger Rogers"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/977935/pexels-photo-977935.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Grover"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1476254/pexels-photo-1476254.png?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Snowball"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1870302/pexels-photo-1870302.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Grinch"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Arnold"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/982299/pexels-photo-982299.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Fritz"},
  {id: counter++ ,status: "disliked" ,image_url: "https://images.pexels.com/photos/1663410/pexels-photo-1663410.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Spooky"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1022158/pexels-photo-1022158.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "name"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/39255/cat-favorite-relaxation-rest-39255.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Lil' Joe"},
  {id: counter++ ,status: "disliked" ,image_url: "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Simba"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/68594/pexels-photo-68594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Nala"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Raja"},
  {id: counter++ ,status: "disliked" ,image_url: "https://images.pexels.com/photos/141496/pexels-photo-141496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Judy"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Frankie"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/160486/cat-eyes-portrait-cat-eyes-160486.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Michael"},
  {id: counter++ ,status: "undecided" ,image_url: "https://images.pexels.com/photos/1616471/pexels-photo-1616471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", name: "Crazy Eyes"},
]

export default cats
