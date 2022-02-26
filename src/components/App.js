import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Weeknight from "./Weeknight";
import GroceryList from "./GroceryList";
import RecipeBox from "./RecipeBox";
import Recipe from "./Recipe";
import "../styles/App.css";
import { LogInPopup } from "./LogInPopup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [displayLogInPopup, setDisplayLogInPopup] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyA9kwwvwh3hcuotK1nBd36bOGOZM-RcSh4",
    authDomain: "nyt-cooking-clone.firebaseapp.com",
    projectId: "nyt-cooking-clone",
    storageBucket: "nyt-cooking-clone.appspot.com",
    messagingSenderId: "7910689021",
    appId: "1:7910689021:web:eb4b978cf826ade44bd694",
    measurementId: "G-MVK92FWB4Y",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const recipes = [
    // SOURCE: https://www.ranker.com/list/cartoon-food-you-can-make-in-real-life/crystal-brackett
    {
      title: "Homer Simpson's Donut",
      author: "The Simpsons",
      yield: "12 servings",
      time: "2 hours",
      subtitle:
        "Any fan of The Simpsons knows that Homer goes absolutely nuts for donuts with a pretty pink glaze.",
      description:
        "Any fan of The Simpsons knows that Homer goes absolutely nuts for donuts with a pretty pink glaze. Make some mouthwatering confections that Homer himself would be drooling over with this recipe from Let's Eat Fiction!",
      tags: ["Snack", "Egg"],
      ratings: "",
      ingredients: [
        "6 1/2 cups all-purpose flour",
        "1 1/2 teaspoons salt",
        "1/2 teaspoon ground cinnamon",
        "1/3 cup all-vegetable shortening",
        "1 1/2 cups whole milk, warmed",
        "1 teaspoon vanilla extract",
        "1/3 cup warm water",
        "2 (1/4 oz) packets instant yeast (4 1/2 teaspoons)",
        "1 teaspoon sugar",
        "2 whole eggs",
        "1/4 cup sugar",
        "Flour for dusting",
        "Vegetable oil for frying",
        "Parchment paper",
        "1 (15-16 oz) tub of ready-made frosting in hot pink",
        "Rainbow sprinkles",
      ],
      instructions: [
        "Whisk the flour, salt, and cinnamon together in a large bowl.",
        "Put the shortening in a second bowl. Heat the milk in a microwave or on the stovetop, then pour over the shortening and whisk until the shortening is melted.",
        "Pour warm water (110 F) into a third bowl, and sprinkle both packets of yeast on top. Add the sugar, and let it sit for 5 minutes. Then, pour in the milk and shortening mixture. Add the eggs and the rest of the sugar, and mix on low with an electric mixer. Mix in half of the flour mixture, then add in the rest of the flour mixture and mix on low for 1 minute. Move the speed up to medium and mix for 3-4 more minutes. Cover the finished dough with a plate and let it rise for an hour.",
        "Cut some parchment paper into 4-inch squares.",
        "After the dough has doubled in size, dump it out onto a flour-covered surface. Knead it for two minutes until it is no longer sticky. Cut it in half, and roll out the dough to 1/2 inch thickness. Cut out circles using a 3-inch cookie or biscuit cutter, and add center holes with a 1-inch cutter. Put the cut doughnuts onto the parchment paper squares.",
        "Add about 2 inches of oil in a large pot, and heat to 365 F. Heat the donuts in the oil until golden brown, making sure to flip them. Once they're fried, let them drain on a paper towel-covered plate, and cool them on a rack for 10-15 minutes.",
        "Remove the lid and seal from the tub of icing, and heat in the microwave until it's liquid. Spoon the frosting over the donuts and top with rainbow sprinkles. Let them set for about 15 minutes, and enjoy.",
      ],
      category: "Snack",
      notes: [
        {
          user: "Test",
          date: "1 minute ago",
          text: "This is a test note!",
          likes: "3",
          userProfileImage: "",
        },
      ],
      img: require("../assets/simpsons-donut.jpeg"),
    },
    {
      title: "Cookie Cat Ice Cream Sandwiches",
      author: "Steven Universe",
      yield: "12 servings",
      time: "2 hours",
      subtitle:
        "Steven's favorite ice-cream cat sandwich is marketed as being 'super-duper yummy,' but what does it really taste like?",
      description:
        "Steven's favorite ice-cream cat sandwich is marketed as being 'super-duper yummy,' but what does it really taste like? Food-Fiction Cafe has an idea, and it's delicious. It doesn't require any special tools other than a cat-shaped cookie cutter.",
      tags: [],
      ratings: "",
      ingredients: [
        "Vanilla ice cream",
        "Strawberry ice cream",
        "1/2 of a 15.25 oz. box of chocolate cake mix (about 1 1/2 cups cake mix)",
        "1 egg",
        "1/4 cup shortening or room-temperature butter",
        "1/4 cup all-purpose flour",
        "1 1/2 teaspoon water",
      ],
      instructions: [
        "Let the ice cream sit out to soften (but not melt), and cover a tray with sides with parchment paper.",
        "On the tray, spread a 1/2 inch thick strip of vanilla ice cream (it should be half as wide as your cookie cutter). Spread an identical strip of vanilla ice cream right next to it. Repeat until the tray is full. Cover the tray in plastic and freeze it overnight.",
        "Blend the rest of the ingredients in a bowl until just combined. Wrap the finished dough in plastic and chill in the freezer for 15 minutes. While you're waiting, preheat the oven to 375 F and dust a piece of parchment paper with flour.",
        "After the dough is chilled, roll it to 1/8 inch thickness on the floured paper using a floured rolling pin. Use the cookie cutter to stamp out an even number of shapes. Cut out eyes in half of the shapes. Place the shapes and the parchment paper onto a tray and bake for 5-6 minutes. Let the cookies cool completely on a wire rack. When the cookies are cool, flip the cookies without eyes.",
        "Pull out your tray of ice cream. Then, starting at the bottom of the tray, press the cookie cutter into the ice cream. Use a knife to transfer the cut-out ice cream to one of the upside-down cat cookies. Gently press it down on the cat cookie, then top with one of the cookies with the eyes cut out.",

        "After you've finished, wrap each cat cookie in plastic wrap and let them harden in the freezer overnight.'",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/steven-cookie-cat.jpeg"),
    },
    {
      title: "Krabby Patty",
      author: "Spongebob Squarepants",
      yield: "4 servings",
      time: "45 minutes",
      subtitle:
        "The Krabby Patty is the food of choice in SpongeBob SquarePants",
      description:
        "The Krabby Patty is the food of choice in SpongeBob SquarePants. While its secret ingredient remains an elusive mystery in the show, this recipe from Instructables ensures you can make your own Krabby Patty at home.",
      tags: [],
      ratings: "",
      ingredients: [
        "1 1/2 pounds of peeled, deveined shrimp",
        "1 egg",
        "10-12 regular-sized or smaller hamburger buns",
        "Lemon zest to taste",
        "Old Bay seasoning",
        "1 tablespoon of your favorite hot sauce",
        "1 teaspoon celery seed",
        "1 teaspoon garlic powder",
        "1 teaspoon paprika",
        "1 teaspoon salt",
        "1 teaspoon black pepper",
        "1 teaspoon cayenne pepper",
        "Vegetable oil and/or butter for frying",
        "Butter lettuce",
        "Thinly sliced tomato",
        "Pickled onions",
        "Tartar sauce",
        "Cocktail sauce",
      ],
      instructions: [
        "Place 3-4 hamburger buns in a food processor. Add the dried spices and blend into a breadcrumb mixture. Pour it out into a large bowl.",
        "Pulse the shrimp in the food processor until they're broken into small pieces. Add the shrimp to the bowl with the breadcrumbs, pour in the lemon zest and hot sauce, crack in an egg, and mix it all together.",
        "Form golf ball-sized amounts of the mixture into patties, and lay them out on parchment paper or wax paper on a sheet pan. This should make 8 patties. Once they're all formed, put them in the refrigerator for 30 minutes or the freezer for 15 minutes.",
        "Heat some vegetable oil in a non-stick pan. Cook the chilled patties in the oil, flipping after about 3-4 minutes. Dress the finished patties with the toppings of your choice.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/krabby-patty.jpeg"),
    },
    {
      title: "Sandwich of Death",
      author: "The Regular Show",
      yield: "4 servings",
      time: "35 minutes",
      subtitle:
        "The Sandwich of Death, as featured on Regular Show, is no ordinary meatball sub.",
      description:
        "The Sandwich of Death, as featured on Regular Show, is no ordinary meatball sub. But you won't kick the bucket when you bite in, even though the taste is to die for. This recipe comes courtesy of Fiction-Food Cafe.",
      tags: [],
      ratings: "",
      ingredients: [
        "1 cup spaghetti or pizza sauce",
        "1/2 cup BBQ sauce",
        "Split-top sub rolls, cut lengthwise",
        "Package of sliced sandwich pepperoni",
        "Package of small sliced Canadian bacon",
      ],
      instructions: [
        "Preheat your oven to 350 F, and spray a large baking dish with non-stick spray (you can butter it, too).",
        "Combine all of the meatball ingredients in a large bowl. Form them into ping pong-sized balls, and put them in the prepared dish in a single layer. Cover with foil and bake in the oven for 25-30 minutes. After they've finished cooking, remove the meatballs.",
        "Combine the spaghetti or pizza sauce with the BBQ sauce, and spread on an opened sub roll. Cover with alternating layers of pepperoni and Canadian bacon. Top with a row of meatballs, then sprinkle on parmesan and fresh parsley.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/sandwich-of-death.jpeg"),
    },
    {
      title: "Bacon Pancakes",
      author: "Adventure Time",
      yield: "4 servings",
      time: "30 minutes",
      subtitle:
        "It's just as easy (and delicious!) as Jake the Dog says: you make some bacon and you put it in a pancake!",
      description:
        "It's just as easy (and delicious!) as Jake the Dog says: you make some bacon and you put it in a pancake! This is simple and mouth-watering breakfast from The Geeky Chef is perfect for any venturing hero.",
      tags: [],
      ratings: "",
      ingredients: [
        "10 strips of bacon, fried until crispy",
        "1 cup flour",
        "2 tablespoons sugar",
        "1 teaspoon baking powder",
        "Pinch of baking soda",
        "2 tablespoons of melted butter, plus extra for frying",
        "¾ cup buttermilk",
        "1 egg",
        "Pinch of salt",
        "Maple syrup for serving",
      ],
      instructions: [
        "Stir together the flour, sugar, baking powder, and baking soda in a mixing bowl. In a separate bowl, whisk the melted butter and buttermilk together, then add the egg. Combine the flour mixture with the buttermilk mixture and whisk until they're combined and free of lumps.",
        "Melt some additional butter on a large skillet, and add bacon strips with space between each. Pour the batter down each bacon strip until it is covered. Make sure to leave space between each cake!",
        "Cook until the batter bubbles, then flip. Serve the pancakes drizzled with maple syrup.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/bacon-pancakes.jpeg"),
    },
    {
      title: "ChimiCherryChanga",
      author: "My Little Pony: Friendship is Magic",
      yield: "5 servings",
      time: "15 minutes",
      subtitle:
        "In My Little Pony: Friendship is Magic, Pinkie Pie won't stop obsessing over the idea of making a chimichanga packed with cherries",
      description:
        "In My Little Pony: Friendship is Magic, Pinkie Pie won't stop obsessing over the idea of making a chimichanga packed with cherries. Luckily, the genius at The Geeky Chef whipped one up for her.",
      tags: [],
      ratings: "",
      ingredients: [
        "5 extra-large soft flour tortillas",
        "8 oz. cream cheese",
        "1/2 cup ricotta cheese",
        "1/2 cup sour cream",
        "2 teaspoons lemon zest",
        "1 teaspoon vanilla extract",
        "1/2 cup sugar",
        "21 oz. canned cherry filling",
        "Canola or vegetable oil for frying",
        "Cinnamon sugar for coating",
      ],
      instructions: [
        "In the bowl of a stand mixer, combine the cream cheese, ricotta, sour cream, vanilla extract, and lemon zest.",
        "Fill a deep fryer or pot with oil and heat it to 340 F.",
        "Spoon the cheese mixture into the center of the tortillas. Then, layer some cherry filling on top of the cheese, and fold the tortillas up.",
        "Carefully fry each tortilla in the oil for about two minutes, or until golden brown. Sprinkle with cinnamon sugar and enjoy.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/chimicherrychanga.jpeg"),
    },
    {
      title: "Reptar Bar",
      author: "Rugrats",
      yield: "8 servings",
      time: "1 hour 20 minutes",
      subtitle:
        "Reptar Bars are the perfect chocolate snack, fit to satisfy the sweet tooth of even the most ravenous of reptiles.",
      description:
        "Reptar Bars are the perfect chocolate snack, fit to satisfy the sweet tooth of even the most ravenous of reptiles. Try this recipe from Genius Kitchen – once you take a bite, you'll realize why Tommy and his friends were always trying to snag some.",
      tags: [],
      ratings: "",
      ingredients: [
        "24 oz. semi-sweet chocolate chips",
        "1⁄2 cup marshmallow cream",
        "1⁄2 cup caramel candy",
        "2-3 tablespoons heavy cream",
        "4 drops green food coloring",
        "1⁄4 cup graham cracker crumbs",
        "Chocolate bar mold",
      ],
      instructions: [
        "Melt the chocolate until smooth, either in a double boiler or in a heatproof bowl on top of a pot of simmering water. Add the chocolate to the mold, but reserve half for the last layer of the bar. Set the mold in the freezer.",
        "Heat the heavy cream and caramel candies in a microwave in one-minute intervals until the caramels are melted. Then, heat the marshmallow fluff for 15 seconds, and add green food coloring until the fluff is as green as you wish.",
        "Take the mold out of the freezer and top the chocolate with the green fluff. Layer on graham cracker crumbs and caramel, and place the mold back in the freezer. After the layers set, add the final coating of chocolate. Freeze the finished bars for 15-30 minutes, or until they're firm.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/reptar-bar.jpeg"),
    },
    {
      title: "Katsudon Pirozhki",
      author: "Yuri On Ice",
      yield: "8 servings",
      time: "1 hour 30 minutes",
      subtitle:
        "A hybrid of Japanese and Russian meals, katsudon pirozhki is not only a symbol of two skaters' friendship, it's a tasty comfort food.",
      description:
        "A hybrid of Japanese and Russian meals, katsudon pirozhki is not only a symbol of two skaters' friendship, it's a tasty comfort food. Fiction-Food Cafe has a great recipe to replicate it yourself.",
      tags: [],
      ratings: "",
      ingredients: [
        "1/2 tablespoon active dry yeast",
        "1/2 cup water",
        "1/4 cup plus two tablespoons milk",
        "1 tablespoon oil",
        "2 teaspoons sugar plus a pinch extra to sprinkle in yeast",
        "2 teaspoons salt",
        "2 1/4 cups flour",
        "Oil for frying",
        "1 pound pork cutlets (about four) with fat trimmed",
        "Salt and pepper to taste",
        "1/3 cup flour",
        "1 egg, beaten",
        "1/2 cup panko bread crumbs",
        "Oil for frying",
        "1 cup water",
        "1 teaspoon dashi powder",
        "4 tablespoons aji mirin",
        "2 tablespoons soy sauce",
        "2 tablespoons sugar",
        "1 large onion, julienned",
        "8 eggs",
        "2 cups cooked white rice",
        "Frozen peas",
      ],
      instructions: [
        "Put the yeast in a large bowl. Mix the water and milk and heat for a few seconds in the microwave, then pour this warm mixture over the yeast. Stir in some sugar, and let the mix sit for about 15 minutes until foamy. Add the oil, 2 tablespoons of sugar, salt, and flour, and mix on low in a stand mixer fitted with a dough hook until the dough comes together.",
        "Flour your hands and pull the dough into a rough ball in the center of the bowl. Cover with plastic wrap and let it rise for about an hour. Scrape the dough down again, and mix it again with the mixer on low for another minute. Cover it again and let it rise for a second hour (this is the perfect time to make the filling!).",
        "Bring about an inch of canola oil to 350 F in a heavy pan. Rinse the pork and pat it dry, then score each piece with a knife and season with salt and pepper. Cut each cutlet in half lengthwise. Place the flour, egg, and panko crumbs in small bowls, and dredge each piece of pork in flour, egg, and panko to coat.",
        "Fry the coated pork in the oil until the pieces are golden brown and crispy on both sides (this should take about 4 to 5 minutes). After the pork is cooked, let it sit on a wire rack covered with paper towels.",
        "Combine 1/4 cup of dashi stock, 1 tablespoon of mirin, 1/2 tablespoon of soy sauce, and 1/2 tablespoon of sugar with a quarter of the cut onions in a small pan. Bring the mixture to a boil and stir the onions until they are tender.",
        "Cut each piece of pork into horizontal strips (make sure each piece is still connected). Put the pork into the pan and break an egg over each piece, then cover with a lid until the eggs are cooked. Remove the pork to a large place. Repeat as necessary until every piece of pork has been cooked with egg and onion.",
        "Heat an inch-and-a-half of canola oil to 350 F in a heavy pan, and flour your hands and a flat surface. Grab a palm-sized portion of your proved dough, flatten it on the surface, and roll it out to approximately 4 1/2 inches by 6 inches.",
        "Sprinkle a tablespoon's worth of cooked rice down the center of the dough, top with frozen peas, and then add an egg-and-onion covered piece of pork. Top with another tablespoon of rice and more peas. Enclose this with the dough, and shape it into an oblong form (kind of like a potato). Repeat until all of the pork is encased in dough.",
        "Put each piroshki into the hot oil and cook until it is a deep golden brown color (make sure the oil stays at 350 F). Let them cool a bit on a wire rack lined with paper towels before eating.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/katsudon-pirozhski.jpeg"),
    },
    {
      title: "Chocolate Salty Balls",
      author: "South Park",
      yield: "24 servings",
      time: "1 hour",
      subtitle:
        "Chef's Chocolate Salty Balls might sound suspect, but thanks to The Geeky Chef, in real life they're an awesome treat.",
      description:
        "Chef's Chocolate Salty Balls might sound suspect, but thanks to The Geeky Chef, in real life they're an awesome treat.",
      tags: [],
      ratings: "",
      ingredients: [
        "2/3 cup salted butter",
        "1 1/2 cups sugar",
        "1/4 cup brandy",
        "4 cups semisweet chocolate chips",
        "2 teaspoons vanilla extract",
        "4 eggs",
        "2 tablespoons cinnamon",
        "1 1/2 cups all-purpose flour",
        "1/2 teaspoon baking soda",
        "1/2 teaspoon table salt",
        "Coarse sea salt, to taste",
      ],
      instructions: [
        "Preheat the oven to 325 degrees. Stir the butter, sugar, and brandy in a saucepan until they come to a boil. Remove the saucepan from the heat, and stir in two cups of chocolate chips until melted. Let the mixture cool a bit, then add the vanilla.",
        "Beat the eggs in a separate large bowl, then add the chocolate and mix it all together.",
        "Mix the flour, baking soda, cinnamon, and salt together, and mix it into the chocolate mixture. Add the remaining chocolate chips, and spread the mix into a greased baking pan. Bake the mixture for 35-45 minutes.",
        "Let the baked mixture cool, and sprinkle a cutting board with sea salt. Then, scrape up the mixture and shape it into one-inch balls. Roll the balls lightly in the salt, and enjoy!",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/chocolate-salty-balls.jpeg"),
    },
    {
      title: "Poutine on the Ritz",
      author: "Bob's Burgers",
      yield: "4 servings",
      time: "1 hour",
      subtitle:
        "Bob's Burgers is filled with appetizing treats, but if you've got a craving for something sopped with gravy, this one's for you.",
      description:
        "Bob's Burgers is filled with appetizing treats, but if you've got a craving for something sopped with gravy, this one's for you. Bon Appetit's recipe for Bob's Poutine on the Ritz burger is downright indulgent.",
      tags: [],
      ratings: "",
      ingredients: [
        "1 ounce dried porcini mushrooms",
        "3 tablespoons unsalted butter",
        "3 tablespoons all-purpose flour",
        "1 tablespoon olive oil",
        "½ medium onion, sliced",
        "½ medium shallot, sliced",
        "½ medium leek, white and pale-green parts only, sliced",
        "1 garlic clove, smashed",
        "2 teaspoons tomato paste",
        "2 cups veal demi-glace or homemade veal stock",
        "2 teaspoons black peppercorns",
        "1 teaspoon apple cider vinegar",
        "1 teaspoon green peppercorns",
        "1 teaspoon Worchestershire sauce",
        "2 sprigs parsley",
        "2 sprigs thyme",
        "1 bay leaf",
        "1 pound frozen, wide-cut steak fries, fried as directed",
        "Unsalted butter, room temperature (for buns)",
        "4 sesame seed buns, split",
        "Vegetable oil for pan",
        "1½ pounds ground beef chuck (20% fat)",
        "Kosher salt, freshly ground pepper",
        "Mayonnaise, dill pickle slices, cheddar cheese curds or halloumi, and chopped chives for serving",
      ],
      instructions: [
        "Cover the mushrooms with boiling water in a small bowl, and let them sit until they're tender. Strain the mushrooms and save the soaking liquid.",
        "Melt the butter over medium-high heat. Add the flour and cook until the mixture is deep golden brown and smells nutty (about 2-4 minutes). Set this mixture aside.",
        "Heat the oil in a medium saucepan over medium-high heat. Add the onions, shallots, leeks, and garlic and stir until they're caramelized (about 10-12 minutes). Add the tomato paste and cook for another minute or two. Add the mushrooms and their soaking liquid, demi-glace, black and green peppercorns, vinegar, Worchestershire, parsley, thyme, and bay leaf. Bring the mixture to a boil, then reduce the heat and simmer for about 30 minutes. Strain this stock into a large bowl and toss the solids.",
        "Put the stock back in a suacepan and bring to a boil. Whisk in the flour mixture (roux) from earlier and stir until the gravy is thick and smooth (about 2-3 minutes). Butter and toast the buns in a large griddle or cast-iron skillet.",
        "Heat the griddle or skillet until very hot and lightly brush it with oil. Divide the beef into 4 equal portions (not patties), and transfer each to the griddle. Smash them to form imperfect patties. Season with salt and pepper and cook until they're browned around the edges (about 2 minutes). Turn and repeat on the other side.",
        "Transfer each patty to a bun, and garnish as desired with toppings and the gravy. Just don't forget the fries!",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/poutine-on-the-ritz.jpeg"),
    },
    {
      title: "Ron's Naco",
      author: "Kim Possible",
      yield: "4 servings",
      time: "30 minutes",
      subtitle:
        "Ron Stoppable's Tex-Mex fast-food concoction becomes a craze in Kim Possible, and it's no wonder why – it looks like something you'd find in your Taco Bell dreams.",
      description:
        "Ron Stoppable's Tex-Mex fast-food concoction becomes a craze in Kim Possible, and it's no wonder why – it looks like something you'd find in your Taco Bell dreams. Recreate it yourself thanks to Fiction-Food Cafe.",
      tags: [],
      ratings: "",
      ingredients: [
        "Burrito-sized flour tortillas",
        "1/4 cup melted butter",
        "1 pound ground beef",
        "1 packet taco seasoning and required water",
        "1 can nacho cheese",
        "1 can refried beans",
        "Corn tortilla chips",
        "1 tomato, diced",
        "A few leaves of green leaf lettuce",
        "Sour cream",
      ],
      instructions: [
        "Preheat the oven to 350 F. Brown the meat in a large pan, and prepare it with the taco seasonings as indicated on the package. Make sure to break the meat up really well.",
        "Meanwhile, warm the refried beans and nacho cheese in separate pots. Break some tortilla chips into smaller pieces.",
        "Place a tortilla on a baking tray and brush it with melted butter. Put a ramekin (or other small dish) in the center of the tortilla and gather the tortilla around it. Tie the folds in place with baking string and brush the whole tortilla with butter (make sure to get underneath, too). Bake the tortilla until the edges are golden brown and it's stiff (about 5-10 minutes). Remove the string and carefully pull out the ramekin. Fill the tortilla with nacho ingredients and dig in.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/rons-naco.jpeg"),
    },
    {
      title: "The Grey Stuff",
      author: "Beauty and the Beast",
      yield: "4 servings",
      time: "1 hour 5 minutes",
      subtitle: "'Try the grey stuff, it’s delicious!'",
      description:
        "'Try the grey stuff, it’s delicious!' Anyone would want to be your guest when you're cooking up some of the yummy dessert featured in Disney's classic Beauty and the Beast. This recipe comes straight from the kitchens of CookFiction.",
      tags: [],
      ratings: "",
      ingredients: [
        "1 small package of instant vanilla pudding mix (3.4 oz.)",
        "1 1/2 cups milk",
        "15 Oreos (normal or Double Stuf)",
        "1 small container of Cool Whip (8 oz.)",
        "3 tablespoons instant chocolate pudding mix",
        "Graham crackers (at least 2 boxes)",
        "Sprinkles (optional)",
      ],
      instructions: [
        "Combine the vanilla pudding mix with the milk, and let set. Meanwhile, crush the Oreos into fine crumbs with a food processor or in a large plastic bag.",
        "Add the crushed Oreos, Cool Whip, and chocolate pudding mix to the vanilla pudding mix and blend well. Chill at least an hour in the fridge, and serve piped onto graham crackers.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/grey-stuff.jpeg"),
    },
    {
      title: "Herring and Pumpkin Pot Pie",
      author: "Kiki's Delivery Service",
      yield: "2 servings",
      time: "30 minutes",
      subtitle:
        "In Kiki's Delivery Service, Kiki spends a lot of time assisting an elderly woman preparing a beautiful herring pie.",
      description:
        "In Kiki's Delivery Service, Kiki spends a lot of time assisting an elderly woman preparing a beautiful herring pie. Try creating it yourself with this recipe from Anna The Red.",
      tags: [],
      ratings: "",
      ingredients: [
        "Mashed pumpkin with sauteed onions",
        "White sauce (like Bechamel)",
        "Herring, sardines, cod – any white fish will work",
        "Pie dough",
        "Black olives",
        "Egg yolk for the surface of the pie",
      ],
      instructions: [
        "Heat oven to 400 F. While it's heating, roll out the dough to the size of the baking dish and put it in the bottom of the dish. Spread the dough with a 1-inch layer of mashed pumpkin, and layer on mackerel. Finish with the white sauce.",
        "Roll and stretch the remaining pie dough, put it over the baking dish, and trim the pie dough so it's slightly bigger than the dish. Use the scraps of dough to decorate the top of the pie with lines and a fish, and decorate with sliced black olives. Finish the pie by brushing on beaten egg yolk. Bake for 20 minutes, and dig in.",
      ],
      category: "",
      notes: [{ user: "", date: "", text: "", likes: "" }],
      img: require("../assets/herring-pumpkin-pot-pie.jpeg"),
    },
  ];

  const recipeCollections = [
    {
      title: "Recipes to Cook Over a Long Weekend",
      img: require("../assets/simpsons-donut.jpeg"),
      recipes: [],
    },
    {
      title: "Best Recipes for Leftover Rice",
      img: require("../assets/krabby-patty.jpeg"),
      recipes: [],
    },
  ];

  const cookingGuides = [
    {
      title: "Homer Simpson's Donuts",
      author: "Homer Simpson",
      img: require("../assets/simpsons-donut.jpeg"),
    },
    {
      title: "Homer Simpson's Donuts1",
      author: "Homer Simpson",
      img: require("../assets/simpsons-donut.jpeg"),
    },
    {
      title: "Homer Simpson's Donuts2",
      author: "Homer Simpson",
      img: require("../assets/simpsons-donut.jpeg"),
    },
    {
      title: "Homer Simpson's Donuts3",
      author: "Homer Simpson",
      img: require("../assets/simpsons-donut.jpeg"),
    },
    {
      title: "Homer Simpson's Donuts4",
      author: "Homer Simpson",
      img: require("../assets/simpsons-donut.jpeg"),
    },
  ];

  useEffect(() => {
    // FirebaseConfig();
    const addRecipe = async (recipe) => {
      try {
        await addDoc(collection(db, "recipes"), recipe);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    // recipes.forEach((recipe) => addRecipe(recipe));
  }, []);

  const signIn = async () => {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    setLoggedIn(true);
  };

  const signOutUser = () => {
    signOut(getAuth());
    setLoggedIn(false);
    setDisplayLogInPopup(false);
  };

  return (
    <div className="App">
      {!loggedIn && displayLogInPopup ? (
        <LogInPopup
          className="log-in-popup"
          displayLogInPopup={displayLogInPopup}
          setDisplayLogInPopup={setDisplayLogInPopup}
          signIn={signIn}
        />
      ) : (
        ""
      )}
      <BrowserRouter>
        <Header
          loggedIn={loggedIn}
          displayLogInPopup={displayLogInPopup}
          setDisplayLogInPopup={setDisplayLogInPopup}
          signOutUser={signOutUser}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loggedIn={loggedIn}
                recipes={recipes}
                recipeCollections={recipeCollections}
                cookingGuides={cookingGuides}
              />
            }
          />
          <Route
            path="/weeknight"
            element={<Weeknight loggedIn={loggedIn} recipes={recipes} />}
          />
          <Route
            path="/grocery-list"
            element={<GroceryList loggedIn={loggedIn} recipes={recipes} />}
          />
          <Route
            path="/recipe-box"
            element={<RecipeBox loggedIn={loggedIn} recipes={recipes} />}
          />
          <Route
            path="/recipe/:recipe"
            element={<Recipe loggedIn={loggedIn} signIn={signIn} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
