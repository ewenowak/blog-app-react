const initialState = {
    posts: [
      {
        id: '1',
        title: 'Animal spirit',
        shortDescription: 'Wake up your animal spirit...',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        publishedDate: new Date('02-02-2022'), 
        category: 'Sport',
        author: 'John Doe'
      },
      {
        id: '2',
        title: 'New moon in libra',
        shortDescription: 'What brings you this new moon...',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        publishedDate: new Date('02-03-2022'),
        category: 'News',
        author: 'Alicia Key'
      },
      {
        id: '3',
        title: 'Full moon in pisces',
        shortDescription: 'What brings you this full moon...',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        publishedDate: new Date('02-24-2022'),
        category: 'Sport',
        author: 'John Doe'
      },
      {
        id: '4',
        title: 'Inner child',
        shortDescription: 'How to recognize your inner child needs...',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        publishedDate: new Date('03-01-2022'),
        category: 'Sport',
        author: 'Vito Drawn'
      }
    ],
    categories: ['Sport', 'News', 'Movies']
};
export default initialState;