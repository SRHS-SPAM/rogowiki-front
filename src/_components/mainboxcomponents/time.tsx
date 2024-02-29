import "../../styles/mainboxcomponentscss/time.css";
import { useSize } from "../../tool/SizeContext";

const time1 = [
    "1교시",
    "2교시",
    "3교시",
    "4교시",
    "점심시간",
    "5교시",
    "6교시",
    "7교시",
];
const time2 = [
    "8시 40분 ~ 9시 30분",
    "9시 40분 ~ 10시 30분",
    "10시 40분 ~ 11시 30분",
    "11시 40분 ~ 12시 30분",
    "12시 30분 ~ 13시 20분",
    "13시 20분 ~ 14시 10분",
    "14시 20분 ~ 15시 10분",
    "15시 20분 ~ 16시 10분",
];
const Time = () => {
    const { sizeValue, setGlobalSizeValue } = useSize();
    if (sizeValue) {
        return (
            <div className="timebox">
                <div className="timetop">시간표</div>
                <div className="time">
                    <div>
                        {time1.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item === "7교시" ? "time12" : "time1"
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="sero">
                        {time2.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item === "15시 20분 ~ 16시 10분"
                                        ? "time22"
                                        : "time2"
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="timebox">
                <div className="timetop2">시간표</div>
                <div className="time">
                    <div>
                        {time1.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item === "7교시" ? "Time12" : "Time1"
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="sero">
                        {time2.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item === "15시 20분 ~ 16시 10분"
                                        ? "Time22"
                                        : "Time2"
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};
export default Time;
