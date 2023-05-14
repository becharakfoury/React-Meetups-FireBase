import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);


    return (    
    <header className={classes.header}>
        <div className={classes.logo}>Rect Meet-Ups</div>
         <ul>
                <li>
                    <NavLink to="/">All MeetUps</NavLink>
                </li>
                <li>
                    <NavLink to="/new-meetup">Add New Meetup</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">
                        Favorites
                        <span className={classes.badge}>
                            {favoritesCtx.totalFavorites}
                        </span>

                    </NavLink>
                </li>

         </ul>
    </header>
    );
}
export default MainNavigation;