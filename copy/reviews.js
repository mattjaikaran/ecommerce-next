export const productReviews = [
  {
    id: 1,
    title: 'This product is awesome. I love it.',
    date: 'Jan 24, 2020',
    fit: 'true to size',
    width: 'slightly small',
    rating: 4,
    reviewText:
      'The shoes are very nice looking but they started squeaking after a couple of hours of wearing them. I would recommend buying a different boot.',
  },
  {
    id: 2,
    title: 'This product is terrible. I hate it.',
    date: 'Nov 1, 2021',
    fit: 'runs large',
    width: 'slightly large',
    rating: 5,
    reviewText: 'This item broke 2 days after buying',
  },
  {
    id: 3,
    title: 'This product is just ok',
    date: 'Oct 30, 2021',
    fit: 'runs large',
    width: 'slightly large',
    rating: 4,
    reviewText: 'This item is large',
  },
  {
    id: 4,
    title: 'I like it',
    date: 'July 20, 2021',
    fit: 'true to size',
    width: 'slightly small',
    rating: 5,
    reviewText: 'These are pretty cool. will buy again',
  },
  {
    id: 5,
    title: 'I hate it',
    date: 'July 23, 2021',
    fit: 'true to size',
    width: 'slightly small',
    rating: 1,
    reviewText: 'Never buying again.',
  },
]



export const renderReviewAverage = (arr) => {
  const total = arr.reduce(
    (prevVal, currentVal) => prevVal + currentVal.rating,
    0
  )
  return total / productReviews.length
}