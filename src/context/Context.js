import React, {useReducer, createContext} from 'react';

const MESSAGES = [
  {
    key: 1,
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    username: 'cheneviv',

    time: '2m',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
  },
  {
    key: 2,

    time: '1h',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    username: 'leerobin',
    message: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
  },
  {
    key: 3,

    time: '4h',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    username: 'simpsons',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
  },
  {
    key: 4,

    time: '5h',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    username: 'simpsons',
    message: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
  },
  {
    key: 5,
    time: '5m',

    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    username: 'simpsons',
    message: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
  },
  {
    key: 6,
    time: '5h',

    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    username: 'simpsons',
    message: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
  },
];

const NOTIFICATIONS = [
  {
    key: 1,
    liked: true,
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    username: 'cheneviv',
    tweet:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
  },
  {
    key: 2,
    liked: false,
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    username: 'leerobin',
    tweet: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
  },
  {
    key: 3,
    liked: true,
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    username: 'simpsons',
    tweet:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
  },
  {
    key: 4,
    liked: true,
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    username: 'simpsons',
    tweet: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
  },
  {
    key: 5,
    liked: false,
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    username: 'simpsons',
    tweet: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
  },
  {
    key: 6,
    liked: false,
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    username: 'simpsons',
    tweet: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
  },
];

const DATA = [
  {
    key: 0,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 15,
    comments: 3,
    retweets: 12,
    time: '5 hours ago',
  },
  {
    key: 1,
    username: 'cheneviv',
    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/155165680_3722464927832341_221958490450779732_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=5uzQ5Lu67V8AX-d74px&ccb=7-4&oh=7633dd16f582a3c633fd182199b3bae2&oe=607D2298&_nc_sid=4f375e',
    likes: 15,
    comments: 3,

    retweets: 2,
    time: '5 hours ago',
  },
  {
    key: 2,

    username: 'oliverrandorff',

    subject:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 304,

    retweets: 0,
    comments: 0,
    time: '6 hours ago',
  },
  {
    key: 3,

    username: 'lilisue',
    subject: 'Trabajo en equipo👴🏻👩🏻🤓✍️📚',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/161445565_817186048866313_6647173082265387029_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=vphvriOJuk0AX8c2TL6&ccb=7-4&oh=cd7b94aa89cabe8dec2b68894552cbbb&oe=60800522&_nc_sid=7b02f1',
    likes: 3020,

    retweets: 123,
    comments: 300,
    time: '10 hours ago',
  },
  {
    key: 4,
    username: 'mariano_pascual',

    subject: 'Cover artwork for Objects @hermes - Spring Summer 2020 .',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/161297094_449238179734797_1902409581379694549_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=sIWMwwDRVcIAX-PcbGh&ccb=7-4&oh=f39e0d8f956075102ed1d24cda97dd3e&oe=607F9707&_nc_sid=7b02f1',
    likes: 56,
    comments: 78,

    retweets: 0,
    time: '15 hours ago',
  },
  {
    key: 5,
    username: 'cheneviv',

    subject:
      'Oh btw I have a class on class101 about creating semi-realistic characters on Procreate, that I’m spending all my time working on these days :)) if you want to find out more, you can do so through the link in my bio <33',
    uri:
      'https://instagram.fuab1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/98153999_936589680132419_7190294682843426006_n.jpg?tp=1&_nc_ht=instagram.fuab1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-57zTPyDLYQAX8TumC8&ccb=7-4&oh=4e63fb5516a2671a5066066701f3fa40&oe=607FDC42&_nc_sid=4f375e',
    likes: 1231,

    retweets: 0,
    comments: 2,
    time: '1 day ago',
  },
  {
    key: 6,
    username: 'illustration_daily',

    subject: 'Work by @heikala',
    uri:
      'https://instagram.fuab1-2.fna.fbcdn.net/v/t51.2885-15/e35/161473568_497665111611146_4663530087172069780_n.jpg?tp=1&_nc_ht=instagram.fuab1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5keOQGctnH0AX-gJHbJ&ccb=7-4&oh=4b6d012fe44ad61e08b05f2b6f171140&oe=607F403B&_nc_sid=86f79a',
    likes: 234,

    retweets: 8,
    comments: 23,
    time: '2 days ago',
  },
];

const SEARCHDATA = [
  {
    key: 1,
    tag: 'BREAKING NEWS',
    tweets: '35.1 K Tweet ',
  },
  {
    key: 2,
    tag: '#twitterdown',
    tweets: '',
  },
  {
    key: 3,
    tag: 'corona news',
    tweets: '21.1 K Tweet ',
  },
  {
    key: 4,
    tag: 'artificial intelligence',
    tweets: '',
  },
  {
    key: 5,
    tag: '#WorldCup',
    tweets: '',
  },
  {
    key: 6,
    tag: 'gicklatt',
    tweets: '2.1 K Tweet ',
  },
];

const STORIESDATA = [
  {
    key: 8,
    title: 'New',
    url: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png',
  },
  {
    key: 7,
    title: 'gandalf',
    url: 'https://images3.alphacoders.com/161/thumb-1920-161179.jpg',
  },
  {
    key: 1,
    title: 'legolas',
    url:
      'https://i.pinimg.com/originals/fb/6d/b8/fb6db8509d0d42a43f1139eb21109b2e.jpg',
  },
  {
    key: 2,
    title: 'aragorn',
    url: 'https://wallpaperaccess.com/full/886797.jpg',
  },
  {
    key: 3,
    title: 'gimli',
    url:
      'https://static.wikia.nocookie.net/heroes-and-villain/images/4/43/Gimli.jpg/revision/latest?cb=20180906194254',
  },
  {key: 4, title: 'saruman', url: 'https://wallpapercave.com/wp/wp2347875.jpg'},
  {key: 5, title: 'elrond', url: 'https://wallpapercave.com/wp/wp6905952.png'},
  {
    key: 6,
    title: 'eowyn',
    url:
      'https://i.pinimg.com/originals/da/1a/17/da1a1761a73bc17f91dc9b1e8141e75a.jpg',
  },
];

const initialState = {
  count: 0,
  data: DATA,
  storiesdata: STORIESDATA,
  searchdata: SEARCHDATA,
  notificationdata: NOTIFICATIONS,
  messages: MESSAGES,
};

const Context = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + 1};
    }
    case 'DECREMENT': {
      return {count: state.count - 1};
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function ContextProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <Context.Provider value={value} {...props} />;
}

function useCtx() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});
  return {
    state,
    dispatch,
    increment,
    decrement,
  };
}

export {ContextProvider, useCtx};
