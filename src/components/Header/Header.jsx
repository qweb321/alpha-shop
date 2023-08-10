import styles from './Header.module.css'
import { ReactComponent as IconLogo } from '../../public/icon/logo.svg'
import { ReactComponent as IconSearch } from '../../public/icon/search.svg'
import { ReactComponent as IconCart } from '../../public/icon/cart.svg'
import { ReactComponent as IconSun } from '../../public/icon/sun.svg'
import { ReactComponent as IconMoon } from '../../public/icon/moon.svg'
import { ReactComponent as IconToggle } from '../../public/icon/toggle.svg'
function Header() {
    return (
        <header>
            <div className={styles.headerContainer}>
                {/* navbar-toggle */}
                <input id="navbar-toggle" className={styles.navbarToggle} type="checkbox" />
                <label htmlFor="navbar-toggle" className={styles.burgerContainer}>
                    <IconToggle className={`${styles.iconToggle} ${styles.cursorPoint}`}/>
                </label>

                {/* <!-- navbar-menu --> */}
                <nav className={styles.navbarMenu}>
                    <ul className={`${styles.navList} ${styles.siteMenuList}`}>
                        <li className="nav-item">
                            <a className="nav-link" href="#">男款</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">女款</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">最新消息</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">客製商品</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">聯絡我們</a>
                        </li>
                    </ul>
                    <ul className={`${styles.navList} ${styles.siteActionList}`}>
                        {/* <!-- search --> */}
                        <li className="nav-item">
                            <IconSearch className="nav-icon cursor-point"/>                              
                        </li>
                        {/* <!-- cart --> */}
                        <li className="nav-item">
                            <IconCart className="nav-icon cursor-point"/>
                        </li>
                        <li id="theme-toggle" className="nav-item"> 
                        {/* <!-- moon --> */}
                            <IconMoon className="nav-icon cursor-point" />         
                        {/* <!-- sun --> */}
                            <IconSun className="nav-icon cursor-point" />         
                        </li>
                    </ul>
                </nav>
                {/* <!-- logo --> */}
                <a className={styles.headerLogo} href="#">
                    <IconLogo class="icon-logo cursor-point"/>
                </a>

            </div>
        </header>
    )
}

export default Header;