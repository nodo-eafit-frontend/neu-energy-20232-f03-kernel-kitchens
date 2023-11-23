import DatePicker from 'react-datepicker';

export const MonthPicker = () => {
  const renderMonthContent = (month, shortMonth, longMonth) => {
    const tooltipText = `Tooltip for month: ${longMonth}`;
    return <span title={tooltipText}>{shortMonth}</span>;
  };
  return (
    <DatePicker
      selected={new Date()}
      renderMonthContent={renderMonthContent}
      showMonthYearPicker
      dateFormat='MM/yyyy'
    />
  );
};