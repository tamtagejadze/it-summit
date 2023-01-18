import { Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next/i18n';
import geo from '../../images/geo.png';
import eng from '../../images/eng.png'

function Header() {
const {t}=useTranslation() 
  return (
    <nav >
        <div>
          <Link to={'/'} ><img src ={logo}/></Link>
        </div>
        <div>
            <li>
                <Link to={'/speakers'}>{t('SPEAKERS')} </Link>
            </li>
            <li>
                <Link to={'/summit'}>{t('SUMMIT')} </Link>
            </li>
            <li>              
              <div className='flag'>
                <img className='geo' src={geo} onClick={() => i18n.changeLanguage("geo")} />
                <img className='eng' src={eng} onClick={() => i18n.changeLanguage("eng")} />              
              </div>
            </li>
        </div>
    </nav>
  )
}

export default Header