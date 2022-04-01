export const projects = [{
  name: 'Stocker',
  date: ['2021.12', '2021.07'],
  desc: 'Stock and cryptocurrency portfolio management system with real-time data. Revamped to provide cleaner layout, chart supports, and more.',
  link: [
    'dashboard.stocker.nanistudio.org',
    'stocker.nanistudio.org'
  ],
  source: [
    null,
    null
  ],
  images: [
    'overview',
    'stock',
    'watchlist',
    'watchlist_stock',
    'settings',
    'ticket',
  ],
  preview: 'stocker_v2',
  image_dir: 'stocker',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
      'firebase-plain',
    ],
    [
      'nextjs-plain-wordmark',
      'materialui-plain',
      'firebase-plain'
    ]
  ],
  features: [{
    title: 'Real-time Data',
    desc: "Stocker fetches real-time data for stocks and cryptocurrencies over trusted platforms and cross-references the data to ensure they are correct. It supports multiple currencies with up-to-date conversion rates, allowing users to access and manage their stocks transactions from different bourses and nations within one portfolio."
  }, {
    title: 'Multiple Metrics',
    desc: "Stocker uses a vigorous calculation algorithm, aided with multiple indexes and news feed, to provide useful metrics and graphs to our users. Not only can they access to their portfolios and their corresponding performance, they can also monitor and compare favourable stocks in their watchlist. Additional features are provided for our VIP members to further evaluate their trading performace."
  }, {
    title: 'Cross-platform Support',
    desc: 'Stocker is avaliable on webpage, iOS App Store, and Google Play Store. With a single account, users can access their portfolio and subscription plans across all platforms. All data can be uploaded to database for storage and downloads; or, if users prefer instantaneous update between devices, synchronization are also supported for easy usage.'
  }, {
    title: 'Community and Technical Support',
    desc: 'We value the feedback made by our users. Aside from constantly updating Stocker and lauching new features for our users, we utilize the in-app forum and external discussion threads to ensure their problems and suggestions are heard and dealed with within a short timeframe. Users can also report and track both their privately or publicly visible issues over our custom-made ticket system.'
  }]
}, {
  name: 'WNRS Online',
  date: ['2022.02', '2021.05'],
  desc: "Online adaptation of the conversation card game We're Not Really Strangers. Revamped to include seeded randomizer, theme customization, and more.",
  link: [
    'wnrs.jonathanl.dev',
    null,
  ],
  source: [
    'github.com/jonathan-lph/wnrs/tree/v2',
    'github.com/jonathan-lph/wnrs/tree/main'
  ],
  images: [
    'layout',
    'theme',
    'dialog',
  ],
  image_dir: 'wnrs',
  preview: 'wnrs_v2',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
      'firebase-plain',
      'pwa'
    ],
    [
      'react-original',
      'materialui-plain',
      'pwa'
    ],
  ],
  features: [{
    title: 'Portable and Downloadable',
    desc: "WNRS Online contains most of the avaliable decks and expansions published by the official We're Not Really Strangers. With one person or more people in the party, you can download this PWA in your phone and start connecting to people anywhere and anytime."
  }, {
    title: 'Seeded Randomizer',
    desc: 'Revamped from version 1, version 2 now includes seeded randomizer. A link or a seed may be shared to your companions to ensure each cards are randomly shuffled yet consistent over different sessions and devices. This opens the possibility to remote playing over the phone without the need of sharing screens.'
  }, {
    title: 'Customization',
    desc: 'Revamped from version 1, version 2 now allows users to input their name. You will never get lost in the deep conversation now that all turns and cards are labeled. Themes are also now customizable and does not correlate to the playing decks.'
  }]
}, {
  name: 'Luk Hap',
  date: ['2022.01'],
  desc: 'Word game for promoting and practising JyutPing, the Cantonese romanisation system. Adapted from the popular word game Wordle to Next.JS.',
  link: ['lukhap.jonathanl.dev'],
  source: ['github.com/jonathan-lph/LukHap'],
  images: ['layout', 'info', 'guide'],
  image_dir: 'lukhap',
  preview: 'lukhap',
  tech: [
    [
      'nextjs-plain-wordmark',
      'sass-original',
    ]
  ],
  features: [{
    title: 'Standardized JyutPing',
    desc: 'To allow users learn the most popular and standardized Cantonese romanisation system, Luk Hap uses JyutPing for the game. The gameplay is greatly modified from the original game Wordle to provide a challenging yet informational experience.'
  }, {
    title: 'Follow-up learning',
    desc:  'No matter the level or knowledge of your skill in JyutPing, Luk Hap offers multiple sources and guides for you to learn and practise this system. It is also open source and welcome feedbacks to continualy improving the game.'
  }]
}]

export const courseworks = [{
  cid: 'CSCI3230',
  name: 'Fundamentals of Artificial Intelligence',
  lecturer: 'Prof. Leung Kwong-Sak',
  semester: '2020-21 T1',
  projects: [{
    name: 'Term Paper',
    date: '2021.01',
    type: 'Project',
    preview: 'Term paper on Genetic Algorithm, searching algorithm, and application of AI.',
    desc: 'The first part of the paper discusses the importance and correlation of convergence and divergence in Genetic Algorithm. Different problems are used as examples, such as the artificial ant problem, regression problems, parity problem, and 16x16 Iterated Prisoner Dilemma, to illustrate the correlation - but not causation - between genetic diversity and performance of GA. The second part analyzes the advantages and disadvantages of different searching algorithms and demonstrates the working of the decision tree algorithm. The third and the last part applies the taught algorithms on a self-driving car, including path planning, perception and localization, behavior arbitration, and motion controllers as its components.',
    question: null,
    answer: 'TermPaper.pdf',
    additional: null,
  }, {
    name: 'Pentago AI Player Program',
    date: '2020.12',
    type: 'Project',
    preview: 'Logic-based AI for solving the game Pentago. Built with Prolog (SWI-Prolog).',
    desc: 'In Pentago, player A and player B take turns to place a move and rotate a quadrant. Their winning goal is to get 5 in a row. The project is splited into two parts: threatening and pentago_ai. Threatening determines the number of threats, 5 in a row with one empty marble, that the current player faces in the given board. This is also a metric for the AI to determine the chance of winning - the more threats the opponent face, the better the move. Pentago_ai determines the best move of the current player, given the current board.The AI will first try to win in the current round, then the next, or else will try to determine the best move by alpha-beta pruning on the next round (preventing unneccessary runs).',
    question: 'Prolog.pdf',
    answer: 'Prolog.pl',
    additional: null
  }, {
    name: 'Toxicity Prediction Deep Neural Network',
    date: '2020.11',
    type: 'Project',
    preview: 'Deep neural network for predicting drug molecular toxicity. Built with Python and TensorFlow, and trained with Google Colabortory.',
    desc: 'The drugs are first converted to their SMILE expression and then to 2D one hot. A portion of the drugs (training batch) are then put through the training model with five convolution layers, each layer contains 2^(n+2) output filters, for 120 epochs. After each convolution, the batch is normalized, activated with a ReLU activation function, and downsampled. It is then flattened, densed into a 256-D tensor, and finally half is dropouted and densed into a 1D output. The fitness of the network are determined by running with another subset (test_onehots) and evaluating their loss, AUC (area under the curve), and a score calculated with TPR (true-positive rate) and TNR (true-negative rate).',
    question: 'DNN.pdf',
    answer: 'DNN.zip',
    additional: 'DNN_data.zip'
  }, {
    name: 'Logical Agents',
    date: '2020.12',
    type: 'Assignment',
    preview: 'Students are expected to grasp the syntax and concepts on logical agents.',
    desc: 'Keywords: Binary classification, Generalization, Specialization, Decision tree, First-order logic.',
    question: 'Assignment3_Q.pdf',
    answer: 'Assignment3_A.pdf',
    additional: null,
  }, {
    name: 'Searching Algorithm',
    date: '2020.11',
    type: 'Assignment',
    preview: 'Students are expected to understand different deterministic and stochastic searching algorithms and their application.',
    desc: 'Keywords: Genetic algorithm (GA), Alpha-beta pruning (Minmax algorithm), BFS, DFS, RBFS, A* algorithm, Uniform-cost search.',
    question: 'Assignment2_Q.pdf',
    answer: 'Assignment2_A.pdf',
    additional: null,
  }, {
    name: 'Neural Network',
    date: '2020.10',
    type: 'Assignment',
    preview: 'Students are expected to understand single and multiple layer perceptrons and their mathematical proofs.',
    desc: 'Keywords: Activation function, smooting function, learning rate, backward propagation algorithm, overfitting.',
    question: 'Assignment1_Q.pdf',
    answer: 'Assignment1_A.pdf',
    additional: null,
  }]
}]