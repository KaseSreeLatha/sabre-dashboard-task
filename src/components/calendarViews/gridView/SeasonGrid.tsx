import React from 'react';
import CalendarCard from '../../calendarCard/CalendarCard';
import './SeasonGrid.scss';

type Season = {
  name: string;
  duration: {
    id: string;
    monthNumber: number;
    monthName: string;
    year: number;
    isDataUploaded: boolean | null;
    status: string;
    uploadedDate: string | null;
    uploadedDescription: string;
  }[];
};

type SeasonGridProps = {
  data: Season;
};

const SeasonGrid: React.FC<SeasonGridProps> = ({ data }) => {
  return (
    <div className="season-column">
      <h3 className="season-title">{data.name} Season</h3>
      <div className="season-card-group">
        {data.duration.map((item, index) => (
          <CalendarCard
            key={item.id || index}
            month={item.monthName}
            year={item.year}
            isDataUploaded={item.isDataUploaded}
            date={item.uploadedDate ?? undefined}
            subText={item.uploadedDescription ?? undefined}
            message={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonGrid;