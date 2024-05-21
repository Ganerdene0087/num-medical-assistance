import React, { useState } from "react";
import { Calendar, List, Button, message } from "antd";
import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/en";

const AppointmentScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    const momentDate = date ? moment(date.toDate()) : null;
    setSelectedDate(momentDate);
  };

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
    const selectedTimeMoment = selectedDate
      ? selectedDate.clone().set({
          hour: parseInt(time.split(":")[0]),
          minute: parseInt(time.split(":")[1]),
        })
      : null;
    if (selectedTimeMoment) {
      setSelectedTime(selectedTimeMoment.format("HH:mm"));
    }
  };

  const handleOk = () => {
    if (selectedDate && selectedTime) {
      message.success(
        `Appointment set for ${selectedDate.format(
          "YYYY-MM-DD"
        )} at ${selectedTime}`
      );
    } else {
      message.error("Please select a date and time.");
    }
  };

  return (
    <>
      <div className="flex flex-row overflow-scroll justify-center">
        <div className="mr-[20px] flex flex-1">
          <Calendar
            onSelect={handleDateChange}
            className="w-[100%] h-[800px]"
          />
        </div>
        {selectedDate && (
          <div className="flex flex-col w-[40%] text-[24px]">
            <h1>{selectedDate.format("YYYY MM DD")}-ны өдөр цаг захиалах:</h1>
            <List
              bordered
              grid={{ gutter: 16, column: 2 }}
              dataSource={generateTimeSlots()}
              renderItem={(item) => {
                const itemTime = selectedDate.clone().set({
                  hour: parseInt(item.split(":")[0]),
                  minute: parseInt(item.split(":")[1]),
                });
                const isPast = itemTime.isBefore(moment());

                return (
                  <List.Item>
                    <Button
                      type="link"
                      onClick={() => handleSelectTime(item)}
                      className={`w-full ${
                        selectedTime === item
                          ? "bg-blue-500 text-white"
                          : isPast
                          ? "text-black"
                          : "bg-white text-blue-500"
                      }`}
                      disabled={isPast}
                    >
                      {item}
                    </Button>
                  </List.Item>
                );
              }}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-y-16">
        <div>
          Таны сонгосон цаг: {selectedDate && selectedDate.format("YYYY-MM-DD")}{" "}
          {selectedTime && ` ${selectedTime}`}
        </div>
        <Button type="primary" onClick={handleOk}>
          Захиалах
        </Button>
      </div>
    </>
  );
};

export default AppointmentScheduler;
