import LoadingContent from '../animation/LoadingContent';
import '../TitleReport.css';

export default function LegalDescription () {
    return (
        <div className='legal-description'>
            <div className='row'> (Beginning of Description)  </div>
            <div className='row'> <LoadingContent/>  </div>

            <div className='row'> (End of Description)  </div>                
            <div className='row'> <LoadingContent/>  </div>
            
        </div>
    )
}
