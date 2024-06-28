import LoadingContent from '../animation/LoadingContent';
import '../TitleReport.css';

export default function ClientInfo () {
    return (
        <div className='client-info'>
            <div className='row'> 
                <div className='col-key'>Order No:  </div>
                <div className='col-val'> <LoadingContent/>  </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Title No:  </div>
                <div className='col-val'><LoadingContent/>  </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Buyer/Borrower Name:  </div>
                <div className='col-val'><LoadingContent/>  </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Seller Name:  </div>
                <div className='col-val'><LoadingContent/>  </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Property Address:  </div>
                <div className='col-val'><LoadingContent/> </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Title Date:  </div>
                <div className='col-val'><LoadingContent/> </div>                
            </div>
        </div>
    )
}
