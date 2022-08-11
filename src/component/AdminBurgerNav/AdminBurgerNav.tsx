/* eslint-disable jsx-a11y/label-has-associated-control */
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './AdminBurgerNav.scss';

const AdminBurgerNav = ({ logOut }: any) => {
  const navigate = useNavigate();
  const data = false;

  return (
    <section className="top-nav hiddenb" aria-hidden="true">
      <div className="logo__wrapper" onClick={() => { navigate('/home'); }}>
        <img src="./public/assets/logo/Shoply..png" alt="" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>

      <ul className="menu">
        <li><NavLink to="/admin/home" className="navigation__link">Home</NavLink></li>
        <li><NavLink to="/admin/products" className="navigation__link">Products</NavLink></li>
        <li>
          <Button
            label="logout"
            padding="5px 10px"
            onClick={() => { logOut(data); navigate('/home'); }}
            primary
          />

        </li>
      </ul>
    </section>
  );
};

export default AdminBurgerNav;
