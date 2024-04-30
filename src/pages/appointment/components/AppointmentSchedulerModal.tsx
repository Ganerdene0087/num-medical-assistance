import React, { useState } from "react";
import { Calendar, List, Button } from "antd";
import moment, { Moment } from "moment";
import dayjs from "dayjs";
import "dayjs/locale/en";

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    const momentDate = date ? moment(date.toDate()) : null;
    setSelectedDate(momentDate);
  };

  const onSelectTime = (selectedTime: Moment) => {};

  const generateTimeSlots = (): string[] => {
    const timeSlots: string[] = [];
    const startTime = moment().set({ hour: 9, minute: 0 });
    const lunchStartTime = moment().set({ hour: 13, minute: 0 });
    const lunchEndTime = moment().set({ hour: 14, minute: 0 });
    const endTime = moment().set({ hour: 17, minute: 0 });
    while (startTime.isBefore(endTime)) {
      if (
        !(
          startTime.isSameOrAfter(lunchStartTime) &&
          startTime.isBefore(lunchEndTime)
        )
      ) {
        timeSlots.push(startTime.format("HH:mm"));
      }
      startTime.add(20, "minutes");
    }
    return timeSlots;
  };

  const handleSelectTime = (time: string) => {
    const selectedTime = selectedDate
      ? selectedDate.clone().set({
          hour: parseInt(time.split(":")[0]),
          minute: parseInt(time.split(":")[1]),
        })
      : null;
    if (selectedTime) {
      onSelectTime(selectedTime);
      console.log("selected time", selectedTime);
    }
  };

  const handleOk = () => {};

  return (
    <>
      <div className="flex flex-row overflow-scroll justify-center">
        <div className="mr-[20px] flex flex-1">
          <Calendar
            onSelect={handleDateChange}
            className="w-[100%] h-[600px]"
          />
        </div>
        {selectedDate && (
          <div className="flex flex-col w-[40%] text-[24px]">
            <h1> {selectedDate.format("YYYY MM DD")}-ны өдөр цаг захиалах: </h1>
            <List
              bordered
              grid={{ gutter: 16, column: 2 }}
              dataSource={generateTimeSlots()}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" onClick={() => handleSelectTime(item)}>
                    {item}
                  </Button>
                </List.Item>
              )}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-y-16">
        <div>
          Таны сонгосон цаг: {selectedDate && selectedDate.format("YYYY-MM-DD")}
        </div>
        <Button type="primary">Захиалах</Button>
      </div>
    </>
  );
};

export default AppointmentScheduler;
