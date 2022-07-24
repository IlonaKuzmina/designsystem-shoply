import { FC } from 'react';
import MediaQuery from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';

import ProductCard from '../ProductCard/ProductCard';
import HomeTitle from '../HomeTitle/HomeTitle';

import './HomeProduct.scss';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';

const HomeProduct: FC = () => {
  const navigate = useNavigate();
  const products = useSelector(({ product }: RootState) => product);

  return (
    <div className="home__product--container">
      <HomeTitle title="product" />
      <div className="product__card--container">
        <MediaQuery maxWidth={359}>
          {products && products.items.slice(0, 4).map(({ image, id, name }) => (
            <ProductCard
              image={image}
              name={name}
              key={id}
              backgroundImage={image}
              id={id}
            />
          ))}
        </MediaQuery>

        <MediaQuery minWidth={360} maxWidth={950}>
          {products && products.items.slice(0, 6).map(({ image, id, name }) => (
            <ProductCard
              image={image}
              name={name}
              key={id}
              backgroundImage={image}
              id={id}
            />
          ))}
        </MediaQuery>

        <MediaQuery minWidth={951}>
          {products && products.items.slice(0, 9).map(({ image, id, name }) => (
            <ProductCard
              image={image}
              name={name}
              key={id}
              backgroundImage={image}
              id={id}
            />
          ))}
        </MediaQuery>
      </div>
      <ButtonWithIcon
        padding="16px 52px"
        icon="./assets/icons/arrow.svg"
        label="All product"
        onClick={() => navigate('/products')}
        type="gray"
      />
    </div>
  );
};

export default HomeProduct;
