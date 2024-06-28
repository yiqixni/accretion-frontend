import LoadingContent from '../animation/LoadingContent';
import '../TitleReport.css';

export default function ScheduleA () {
    return (
        <div className='schedule-a'>
            <div className='row'> 
                <div className='col-key'>Property Type:  </div>
                <div className='col-val'> <LoadingContent/>  </div>                
            </div>

            <div className='row'> 
                <div className='col-key'>Owner Vesting:  </div>
                <div className='col-val'><LoadingContent/>  </div>                
            </div>

        </div>
    )
}
