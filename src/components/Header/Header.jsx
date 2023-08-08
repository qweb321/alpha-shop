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
            <div class={styles.headerContainer}>
                {/* navbar-toggle */}
                <input id="navbar-toggle" class={styles.navbarToggle} type="checkbox" />
                <label for="navbar-toggle" class={styles.burgerContainer}>
                    <IconToggle class={`${styles.iconToggle} ${styles.cursorPoint}`}/>
                </label>

                {/* <!-- navbar-menu --> */}
                <nav class={styles.navbarMenu}>
                    <ul class={`${styles.navList} ${styles.siteMenuList}`}>
                        <li class="nav-item">
                            <a class="nav-link" href="#">男款</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">女款</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">最新消息</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">客製商品</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">聯絡我們</a>
                        </li>
                    </ul>
                    <ul class={`${styles.navList} ${styles.siteActionList}`}>
                        {/* <!-- search --> */}
                        <li class="nav-item">
                            <IconSearch class="nav-icon cursor-point"/>                              
                        </li>
                        {/* <!-- cart --> */}
                        <li class="nav-item">
                            <IconCart class="nav-icon cursor-point"/>
                        </li>
                        <li id="theme-toggle" class="nav-item"> 
                        {/* <!-- moon --> */}
                            <IconMoon class="nav-icon cursor-point" />         
                        {/* <!-- sun --> */}
                            <IconSun class="nav-icon cursor-point" />         
                        </li>
                    </ul>
                </nav>
                {/* <!-- logo --> */}
                <a class={styles.headerLogo} href="#">
                    <IconLogo class="icon-logo cursor-point"/>
                </a>

            </div>
        </header>
    )
}

export default Header;