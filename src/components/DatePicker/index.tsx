import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { Input } from '../Input';

interface DatePickerItemProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DatePickerItem = React.memo(({ date, setDate }: DatePickerItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Input type="outlined" placeholder="Due Date" icon onPressIn={() => setOpen(true)} value={date.toDateString()} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
});
