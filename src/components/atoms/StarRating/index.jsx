import { Star } from 'lucide-react';

export default function StarRating(props) {
  const { rating = 0, size = 18 } = props;

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      {stars.map((star) => {
        const src =
          rating >= star
            ? '/icons/star_fill.png'
            : rating >= star - 0.5
            ? '/icons/star_half.png'
            : '/icons/star_unfill.png';

        return (
          <img
            src={src}
            alt="star"
            width={size}
          />
        );
      })}
    </div>
  );
}
