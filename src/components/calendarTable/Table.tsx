import "./Table.css";
import {
  Check,
  X,
  AlertTriangle
} from 'lucide-react';
 
const Table = ({ title, range, data }) => {
    return (
        <div className="season-row">
            <div className="season-label">
                <h2>
                    <span>{title}</span> <span className="season-range">{range}</span>
                </h2>
            </div>
 
            <div className="table-container">
                <div className="table-row table-header">
                    <div className="table-cell">Month</div>
                    <div className="table-cell">Status</div>
                    <div className="table-cell">Date Uploaded</div>
                    <div className="table-cell">Comments</div>
                </div>
 
                {data.map((item, index) => (
                   <div className={`table-row ${item.isDataUploaded === false ? 'upload-false' : item.isDataUploaded == null ? 'upload-null' : ''}`}>
                        <div className="table-cell">{item.monthName} {item.year}</div>
                        <div className="table-cell">
                            {item.isDataUploaded && <Check size={20}/>}
                            {item.isDataUploaded===false && <X size={20}/>}
                            {item.isDataUploaded === null && <AlertTriangle size={20}/>}
                        </div>
                        <div className="table-cell">{item.uploadedDate ? item.uploadedDate : item.uploadedDescription}</div>  
                        <div className="table-cell">{item.status}</div>
                    </div>  
                ))}
            </div>
        </div>
    );
};
 
export default Table;