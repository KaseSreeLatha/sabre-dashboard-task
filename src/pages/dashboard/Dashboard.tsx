import React, { useState } from 'react';
import PageHeader from '../../components/pageHeader/PageHeader';
import GridView from '../../components/calendarViews/gridView/GridView';
import ListView from '../../components/calendarViews/listView/ListView';
import data from '../../data/SeasonData.json';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSeason = data[currentIndex];

  return (
    <div>
      <PageHeader
        viewMode={viewMode}
        onViewChange={setViewMode}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        maxIndex={data.length - 1}
        currentSeason={currentSeason}
      />
      <div className="view-container">
        {viewMode === 'grid' ? (
          <GridView seasonData={currentSeason} />
        ) : (
          <ListView seasonData={currentSeason} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;