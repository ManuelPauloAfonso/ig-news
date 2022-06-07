import { SignInbutton } from '../SignInbutton/index'
import  styles  from './style.module.scss'

export function Header(){

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/image/logo.svg" alt="" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Post</a>
                   
                </nav>
                <SignInbutton  />
            </div>
        </header>
    )
}