import style from '@/style/Connection.module.css'
import Footer from './Footer';
import Link from 'next/link';




 function Connection() {
    return (
        <>
            <div className={style.identification}>
                <div className={style.logo}>
                    {/* <img src="" alt=""> */}
                </div>
                <div className={style.identifiant}>
                    <h2>s'identifier</h2>
                    <label>E-mail:</label>
                    <input type="email" required/>
                    <label for="">mot de passe:</label>
                    <input type="password" required/>
                    <button>S'identifier</button>
                    <Link href="/restart">mot de passe oublier?</Link>
                    <Link href="/login">pas encore inscrit? s'inscrire</Link>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}

export default Connection