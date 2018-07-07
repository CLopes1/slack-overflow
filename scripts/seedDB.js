const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/slackoverflowdb",
  {
    // useMongoClient: true
  }
);

const resourcesSeed = [
  {
    link:"https://medium.freecodecamp.org/",
    title:"Free Code Camp",
    description:"A useful tool for brushing up on past things we have learned.",
    category:"Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://developers.google.com/web/tools/chrome-devtools/?hl=en",
    title: "Chrome Developer Tools",
    description: "Every developers must have tool when developing in chrome.",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://validator.w3.org/#validate_by_input",
    title: "HTML Validator",
    description: "Use this tool to make sure that you HTML is validated with ease.",
    category: "HTML",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.bootstrapcdn.com/fontawesome/",
    title: "Font Awesome",
    description: "A good resource for fonts.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://forcemipsum.com/",
    title: "Star War Lorem Generator",
    description: "Star Wars word generator for when the standard stuff just gets boring!",
    category: "Random",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://medium.freecodecamp.org/",
    title: "Free Code Camp",
    description: "A useful tool for brushing up on past things we have learned.",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://developers.google.com/web/tools/chrome-devtools/?hl=en",
    title: "Chrome Developer Tools",
    description: "Every developers must have tool when developing in chrome.",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://validator.w3.org/#validate_by_input",
    title: "HTML Validator",
    description: "Use this tool to make sure that you HTML is validated with ease.",
    category: "HTML",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.bootstrapcdn.com/fontawesome/",
    title: "Font Awesome",
    description: "A good resource for fonts.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://forcemipsum.com/",
    title: "Star War Lorem Generator",
    description: "Star Wars word generator for when the standard stuff just gets boring!",
    category: "Random",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://fonts.google.com/",
    title: "Google Fonts",
    description: "A super easy CDN with a bunch of cool fonts from Google.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://medium.freecodecamp.org/",
    title: "Free Code Camp",
    description: "A useful tool for brushing up on past things we have learned.",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://developers.google.com/web/tools/chrome-devtools/?hl=en",
    title: "Chrome Developer Tools",
    description: "Every developers must have tool when developing in chrome.",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://validator.w3.org/#validate_by_input",
    title: "HTML Validator",
    description: "Use this tool to make sure that you HTML is validated with ease.",
    category: "HTML",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.bootstrapcdn.com/fontawesome/",
    title: "Font Awesome",
    description: "A good resource for fonts.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://forcemipsum.com/",
    title: "Star War Lorem Generator",
    description: "Star Wars word generator for when the standard stuff just gets boring!",
    category: "Random",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://fonts.google.com/",
    title: "Google Fonts",
    description: "A super easy CDN with a bunch of cool fonts from Google.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://getbootstrap.com/",
    title: "Bootstrap",
    description: "CDN for bootstrap and some documentation to go with it.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://codepen.io/search/pens?q=bootstrap%20social%20icons&page=1&order=popularity&depth=everything&show_forks=false",
    title: "Code Pen",
    description: "Bootstrap examples.",
    category: "Random",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.iconfinder.com/search/?q=web",
    title: "Icon Finder",
    description: "Free icons for sites",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.w3schools.com/js/js_array_methods.asp",
    title: "Javascript Array Methods",
    description: "I always forget these darn things. Here is a link to a w3 schools page that makes them easy to view.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/",
    title: "Boot Strap Classes",
    description: "List of all bootstrap classes",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://uigradients.com/#Sunset",
    title: "UI Gradients",
    description: "Gradient color tool.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://code.jquery.com/",
    title: "jQuery CDN",
    description: "Jquery CDN and documentation.",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://api.jquery.com/",
    title: "jQuery API Documentation",
    description: "Jquery API documentation.",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://css-tricks.com/snippets/javascript/javascript-keycodes/",
    title: "CSS Tricks for Key Codes",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.w3schools.com/jquery/trysel.asp",
    title: "Try jQuery Selector",
    description: "",
    category: "CSS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.w3schools.com/jquery/jquery_events.asp",
    title: "jQuery Event Methods",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.youtube.com/watch?v=yKE7016Ioxc&feature=youtu.be",
    title: "jQuery YouTube Calculator",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.w3schools.com/jsref/jsref_parseint.asp",
    title: "Javascript parseInt() Fuction",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://standardjs.com/",
    title: "Javascript Standard Style",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.codewars.com/",
    title: "Code Wars",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.hackerrank.com/?utm_medium=cpc&utm_source=google&utm_content=gobrd&utm_campaign=brand",
    title: "HackerRank",
    description: "",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://developer.mozilla.org/en-US/",
    title: "Mozilla MDN",
    description: "",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://thenextweb.com/dd/2018/02/09/ex-googler-warns-coding-bootcamps-are-lacking-in-two-key-areas/?amp=1",
    title: "What Bootcamps Are Lacking",
    description: "",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://market.mashape.com/explore",
    title: "Marketplace",
    description: "API resource",
    category: "Articles",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://firebase.google.com/docs/?authuser=0",
    title: "Firebase Documentation",
    description: "",
    category: "API",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://nodejs.org/en/",
    title: "Node.js",
    description: "",
    category: "Databases",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "\"http://jsbin.com/licegizite/edit?js",
    title: "console\"",
    description: "JS Bin",
    category: "",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.codeschool.com/",
    title: "Code School",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.npmjs.com/package/nodemon",
    title: "Nodemon",
    description: "",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://medium.muz.li/15-must-have-chrome-extensions-for-web-designers-and-front-end-developer-b12c1bd9490c",
    title: "Must Have Chrome Extensions",
    description: "",
    category: "NPM Packages",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://www.anatomyofcode.com/",
    title: "Anatomy of Code",
    description: "",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.npmjs.com/package/body-parser",
    title: "Body-Parser",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://guides.github.com/features/mastering-markdown/",
    title: "Mastering Markdowns",
    description: "",
    category: "NPM Packages",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://github.com/teachcoding/expresstemplate-static",
    title: "Express Template",
    description: "",
    category: "General Tools",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://medium.com/@jdan/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558",
    title: "Funny Node_modules Article",
    description: "",
    category: "Templates",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://osxdaily.com/2016/09/22/fix-wi-fi-problems-macos-sierra/",
    title: "Fix Wi-Fi Problems in macOS Sierra",
    description: "",
    category: "Articles",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4",
    title: "Build a RESTful API Using Node and Express 4",
    description: "",
    category: "Common Issues",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters",
    title: "Use ExpressJS to Get URL and POST Parameters",
    description: "",
    category: "NPM Packages",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.codeschool.com/courses/building-blocks-of-express-js",
    title: "Building Blocks of Express.js",
    description: "",
    category: "NPM Packages",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://webbootcampuci0118.slack.com/files/U8D22J4P5/FA36ZTF0Q/heroku_deployment_guide.md",
    title: "Heroku Deployement Guide",
    description: "",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.upwork.com/?gclid=EAIaIQobChMIof_2_aK62gIVQm5-Ch0TDgbNEAAYASAAEgI7kPD_BwE",
    title: "Upwork Job Resource",
    description: "",
    category: "Teaching Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.tutorialspoint.com/sql/sql_tutorial.pdf",
    title: "SQL Tutorial",
    description: "",
    category: "Job Resource",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://handlebarsjs.com/",
    title: "Handlebars",
    description: "",
    category: "Databases",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://github.com/teachcoding/expresstemplate-hbs",
    title: "Express Template Handlebars",
    description: "",
    category: "Templates",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee",
    title: "\"Getting to know asynchronous JavaScript: Callbacks",
    description: " Promises and Async/Await\"",
    category: "",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.codementor.io/hari577/object-relational-mapping-in-nodejs-with-sequelize-du1088h3l",
    title: "Object-Relational Mapping in Node.js with Sequelize",
    description: "",
    category: "JS",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://www.npmjs.com/package/mysql2",
    title: "MySQL2 NPM Package",
    description: "",
    category: "Articles",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://docs.sequelizejs.com/manual/tutorial/querying.html",
    title: "Sequalize Queries",
    description: "",
    category: "NPM Packages",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://mochajs.org/",
    title: "Mocha Console Testing Tool",
    description: "",
    category: "Databases",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "http://www.chaijs.com/",
    title: "Chai Console Testing Tool",
    description: "",
    category: "Testing",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://httpstatuses.com/",
    title: "HTTP Status Codes",
    description: "",
    category: "Testing",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  },

  {
    link: "https://clipboardjs.com/",
    title: "Clipboard.js NPM Package",
    description: "",
    category: "Testing",
    createAd: new Date(Date.now()),
    author: "Thomas Seaman",
    voteCount: 0
  }
]

const cohortSeed = [
  {
    cohortname: "UCIRV201801FSF2"
  }
]

const usersSeed = [
  {
    username: "Thomas Seaman",
    accountLevel: "Admin",
    password: "1234",
    cohort: "UCIRV201801FSF2"
  },
  {
    username: "Admin",
    accountLevel: "Admin",
    password: "admin",
    cohort: "UCIRV201801FSF2"
  }
]

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " resources inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Cohort
  .remove({})
  .then(() => db.Cohort.collection.insertMany(cohortSeed))
  .then(data => {
    console.log(data.insertedIds.length + " cohort inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
