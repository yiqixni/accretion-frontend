import ClientInfo from './client-info/ClientInfo.js';
import ScheduleA from './schedule-a/ScheduleA.js';
import LegalDescription from './legal-description/LegalDescription.js';
import ScheduleB from './schedule-b/ScheduleB.js';

import './TitleReport.css';

export default function TitleReport () {

    return (
        <div className="title-report">
            <div className="row">
                <div id="title">Title Report (Beta)</div>                
            </div>
            <div className="row">
                <div id="small-title">Property Information</div>
                <ClientInfo />
            </div>
            <div className="row">
                <div id="small-title">Schedule A</div>
                <ScheduleA />
            </div>
            <div className="row">
                <div id="small-title">Legal Description</div>
                <LegalDescription />
            </div>
            <div className="row">
                <div id="small-title">Schedule B</div>
                <ScheduleB />
            </div>
            <div className="row">
                <div id="small-title">Notes and Requirements</div>
            </div>
            <div className="row">
                <div id="small-title">Title Policies</div>
            </div>
            <div className="row">
                <div id="small-title">Accessor's Map</div>
            </div>
            <div className="row">
                <div id="small-title">Privacy Notice</div>
            </div>
            
        </div>
    )
}