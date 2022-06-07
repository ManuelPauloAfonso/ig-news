
import {FaGithub} from "../../../node_modules/react-icons/fa/index.esm"
import { FiX } from "../../../node_modules/react-icons/fi/index.esm"


import styles from  './style.module.scss'

export function SignInbutton(){

    const Signinbutton = true;


    return Signinbutton ? (
        <button className={styles.signinbutton} type="button">
            <FaGithub color="#04d361" />

            Diegos Fernandos
            
            <FiX color="#737380" className='styles.closeIcon' />
        </button>

    ) :(
        <button className={styles.signinbutton} type="button">
            <FaGithub color="#eba417" />
            Sign in width Github
        </button>
    )
}