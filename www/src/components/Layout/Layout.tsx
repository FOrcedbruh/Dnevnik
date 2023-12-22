import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'



const Layout: React.FC = () => {



    return (
        <>
            <header className={styles.header}>
                <h1>
                    your goals
                </h1>
            </header>
            <section className={styles.container}>
                <Outlet />
            </section>
        </>
    )
}

export default Layout;