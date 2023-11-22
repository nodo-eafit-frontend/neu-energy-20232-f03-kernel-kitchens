import DatePicker from 'react-datepicker';


const Date = () => {
    const renderMonthContent = (month, shortMonth, longMonth) => {
      const tooltipText = `Tooltip for month: ${longMonth}`;
      return <span title={tooltipText}>{shortMonth}</span>;
    };
    return (
      <DatePicker
        selected={new Date()}
        renderMonthContent={renderMonthContent}
        showMonthYearPicker
        dateFormat="MM/yyyy"
      />
    );
  };

  export default Date;