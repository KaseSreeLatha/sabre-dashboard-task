import React, { useState } from 'react';
import { LayoutGrid, List, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './PageHeader.css';
import data from '../../data/SeasonData.json';

type PageHeaderProps = {
  viewMode: 'grid' | 'table';
  onViewChange: (mode: 'grid' | 'table') => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  maxIndex: number;
  currentSeason: typeof data[0]; // or create a specific type for this
};

const PageHeader: React.FC<PageHeaderProps> = ({
  viewMode,
  onViewChange,
  currentIndex,
  setCurrentIndex,
  maxIndex,
  currentSeason
}) => {
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="page-header">
      <div className="page-header-left">
        <div className="page-title-row">
          <h2 className="page-title">{currentSeason.title}</h2>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={handlePrevious} disabled={currentIndex === 0}>
              <ChevronLeft size={18} />
            </button>
            <button className="nav-btn" onClick={handleNext} disabled={currentIndex === data.length - 1}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <p className="page-subtitle">{currentSeason.tagline}</p>
      </div>

      <div className="page-header-right">
        <div className="toggle-buttons">
          <button
            className={`toggle-icon ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => onViewChange('grid')}
            title="Grid View"
          >
            <LayoutGrid size={16} />
          </button>
          <button
            className={`toggle-icon ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => onViewChange('table')}
            title="Table View"
          >
            <List size={16} />
          </button>
        </div>
        <button className="upload-button">
          Calibration Data Upload <ArrowRight size={16} className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;