import componentsImage from './assests/images/components.png'
import stateImage from './assests/images/state.png'
import eventsImage from './assests/images/events.png'
import Header from './components/Header/Header.js';
import Concept from './components/Concept/Concept.js';

const concepts = [
{
  title: 'Components',
  image: componentsImage,
  description:
    'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
},
{
  title: 'State',
  image: stateImage,
  description:
    'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
},
{
  title: 'Events',
  image: eventsImage,
  description:
    'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
},
];

//normal approach
// function App() {
//   return (
//     <div>
//       <Header />
//       <ul id="concepts">
//         <Concept
//           image={concepts[0].image}
//           title={concepts[0].title}
//           description={concepts[0].description}
//         />
//         <Concept
//           image={concepts[1].image}
//           title={concepts[1].title}
//           description={concepts[1].description}
//         />
//         <Concept
//           image={concepts[2].image}
//           title={concepts[2].title}
//           description={concepts[2].description}
//         />
//       </ul>
//     </div>
//   );
// }

//better apprach using map method, assign key prop to each concept component
function App() {
  return(
    <div>
<Header />
<ul id="concepts">
  {concepts.map((concept) => (
<Concept
  key={concept.title}
  image={concept.image}
  title={concept.title}
  description={concept.description}
  />
  ))}
  </ul>
    </div>
  );
}










export default App;