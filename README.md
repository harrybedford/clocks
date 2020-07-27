I chose to create a clock application that changes depending on the selected time zone. I like the MomentJS library and there's some cool extensions such as timezone and timer that I thought would be nice to use. React is my library choice at the moment – it's decalartive, it allows you to use composition and let's face it everyone is using React at the minute...
- I started by running create-react-app to generate the boiler plate code
- The app I created only required four components: the app itself, a header, a clock and a time zone selector
- The all the child components of App needed access to the time zone so I set the state of that in App
- The header took one prop - the time zone - to display on its right hand side
- Time zone selector takes two props - the getter and setter of the timezone
- It also imports a list of timezone in structure of an array – this doesn't include all time zones just a selection of the main ones
- the clock component only takes in time zone as a prop as most of the operations are handled within the component itself
- I used moment to generate the current time and format it - it does this consistently a cross JS engines unlike 'Date'
- Moment-time zone allows you to pass in a time zone to Moment and it gives you the current time in a certain time zone
- Moment-timer is another extension of Moment and builds upon setInterval, making it more usable, predictable and reliable
- I wanted to make use of React hooks that are fairly new to the library
- useState replaces the state property in a class component
- useEffect can be used as a substitute for componentDidMount - it basically gets called after each render
- with these new hooks, there is no longer any need to use the class syntax
- meaning that all components can be pure functions... reliable, predictable and easy to test
- I also used Styled-Components, because they are just awesome!
npm install
npm start
Bob's your uncle!
