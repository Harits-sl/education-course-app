import StarRating from '../../atoms/StarRating';
import Price from '../../atoms/Price';
import { Link } from 'react-router-dom';

export default function CardLearning(props) {
  const { imgUrl, title, desc, authorUrl, authorName, authorJob, authorCompany, rating, totalReview, price } = props;

  return (
    <Link to="/#">
      <div className="bg-primary-background border border-border rounded-[10px] p-4 md:p-5 hover:shadow-sm">
        <div className="flex md:flex-col">
          <img
            src={imgUrl}
            alt="learning"
            className="w-[82px] h-[82px] md:w-full md:h-[193px] rounded-[10px] mr-3"
          />
          <div className="">
            <h6 className="font-poppins font-semibold text-base md:text-lg leading-[120%] text-dark-primary mb-2 md:mt-4">
              {title}
            </h6>
            <p className="text-dark-secondary hidden md:line-clamp-2 md:mb-4">{desc}</p>
            <div className="flex">
              <img
                src={authorUrl}
                alt="author"
                className="w-9 h-9 mr-2 rounded-[10px]"
              />
              <div className="leading-[140%] tracking-[0.2px]">
                <p className="text-dark-primary font-medium">{authorName}</p>
                <p className="text-dark-secondary text-xs md:text-sm">
                  {authorJob}
                  <span className="hidden md:inline">
                    {' '}
                    di <span className="text-dark-secondary font-bold">{authorCompany}</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between content-center mt-2">
          <div className="flex gap-2 items-center">
            <StarRating
              rating={rating}
              size={18}
            />
            <p className="text-dark-secondary text-xs md:text-sm underline">
              {rating} ({totalReview})
            </p>
          </div>
          <Price value={price} />
        </div>
      </div>
    </Link>
  );
}
