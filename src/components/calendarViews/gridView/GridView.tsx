import React from 'react';
import './GridView.scss';
import SeasonGrid from './SeasonGrid';

type Season = {
  name: string;
  duration: any[];
};

type GridViewProps = {
  seasonData: {
    seasons: Season[];
  };
};

const GridView: React.FC<GridViewProps> = ({ seasonData }) => {
  const winterData = seasonData.seasons.find(season => season.name === 'Winter')!;
  const summerData = seasonData.seasons.find(season => season.name === 'Summer')!;

  return (
    <div className="grid-wrapper">
      <SeasonGrid data={winterData} />
      <div className="separator-wrapper">
        <svg height="610px" width="2" style={{ display: 'block' }}>
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100%"
            stroke="gray"
            strokeWidth="1"
            strokeDasharray="8, 5"
          />
        </svg>
      </div>
      <SeasonGrid data={summerData} />
    </div>
  );
};

export default GridView;