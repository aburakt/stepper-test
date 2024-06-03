// SecondStepComponent.tsx
import { Calendar } from 'primereact/calendar';
import React from 'react';
import { useRecoilState } from 'recoil';
import { formRowsState } from '../states/atoms';

const SecondStepComponent: React.FC = () => {
  const [rows, setRows] = useRecoilState(formRowsState);

  const handleDateChange = (index: number, key: 'startDate' | 'endDate', value: Date) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [key]: value } : row
    );
    setRows(updatedRows);
  };

  return (
    <div>
      {rows.map((row, index) => (
        <div key={row.id} className="p-grid p-align-center p-mb-2">
          <Calendar
            value={row.startDate}
            onChange={(e) => handleDateChange(index, 'startDate', e.value as any)}
            placeholder="Start Date"
            className="p-col"
          />
          <Calendar
            value={row.endDate}
            onChange={(e) => handleDateChange(index, 'endDate', e.value as any)}
            placeholder="End Date"
            className="p-col"
          />
        </div>
      ))}
    </div>
  );
};

export default SecondStepComponent;
