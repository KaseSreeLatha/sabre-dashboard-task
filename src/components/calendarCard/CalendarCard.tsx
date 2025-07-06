import React from 'react';
import { Check, X, AlertTriangle, HelpCircle } from 'lucide-react';
import './CalendarCard.css';

type CalendarCardProps = {
  month: string;
  year: number;
  date?: string;
  subText?: string;
  message: string;
  isDataUploaded: boolean | null | undefined;
};

const CalendarCard: React.FC<CalendarCardProps> = ({
  month,
  year,
  date,
  isDataUploaded,
  message,
  subText,
}) => {
  let Icon = HelpCircle;
  let iconColor = '#aaa';
  let messageColor = '#aaa';
  let statusClass = 'unknown';

  if (isDataUploaded === true) {
    Icon = Check;
    iconColor = '#1a1a1a';
    messageColor = '#000';
    statusClass = 'success';
  } else if (isDataUploaded === false) {
    Icon = X;
    iconColor = 'red';
    messageColor = 'red';
    statusClass = 'error';
  } else {
    Icon = AlertTriangle;
    iconColor = '#999';
    messageColor = '#999';
    statusClass = 'warning';
  }

  return (
    <div className={`calendar-card ${statusClass}`}>
      <div className="calendar-card-header">
        <div>
          <div className="month-text">{month} {year}</div>
          {subText && <div className={`sub-text ${statusClass}`}>- {subText}</div>}
          {date && <div className="date-text">{date}</div>}
        </div>
        <Icon size={20} color={iconColor} />
      </div>
      <div className="calendar-card-message" style={{ color: messageColor }}>
        {message}
      </div>
    </div>
  );
};

export default CalendarCard;