import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'Flashcards:decks';

export const setDummyData = (results) => {
  let dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is Props?',
          answer: 'Props are short hand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components through out the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.'
        },
        {
          question: 'What is a state in React and how is it used?',
          answer: 'States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().'
        },
        {
          question: 'What are synthetic events in React?',
          answer: 'Synthetic events are the objects which act as a cross-browser wrapper around the browser’s native event. They combine the behavior of different browsers into one API. This is done to make sure that the events show consistent properties across different browsers.'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is === operator?',
          answer: '=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.'
        },
        {
          question: 'Does JavaScript support automatic type conversion?',
          answer: 'Yes JavaScript does support automatic type conversion, it is the common way of type conversion used by JavaScript developers',
        },
        {
          question: 'Explain how to detect the operating system on the client machine?',
          answer: 'In order to detect the operating system on the client machine, the navigator.appVersion string (property) should be used.'
        }
      ]
    }
  };

  if (results == null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  } else {
    return JSON.parse(results);
  }
}
