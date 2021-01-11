import React from "react";
import {StyledTheme} from "../../StyledComponents";
import {LangContext} from "../../../context";

const CountDown = ({years,days,hours,minutes,seconds, millisec,className,label=true,Controller,CountdownTime,callback,props}) => {
  const LangContextx = React.useContext(LangContext);
  const [timer, setTimer] = React.useState(0); // timer en seconde que l'on converti en milliseconds pour le setInterval
  const id = React.useRef(null); // ref du setinterval pour pouvoir le reset
  const clear = () => {
    // fonction de reset setInterval
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
  if(Controller!=null){
    if(timer === 0){
      setTimer(CountdownTime*1000);
    }
      id.current = window.setInterval(() => {
      // setinterval est en millisecondes c'est pour cela que l'on converti le state timer en milliseconds
      setTimer((time) => time - 1); // actualise le state pour rerender le countdown
    }, 1);
  }
    return () => clear();
      }, [Controller,CountdownTime]);
      
  React.useEffect(() => {
    // si le timer est fini enleve le setinterval
    if (timer === 0 && id.current != null) {
      clear();
      if(callback) {
        callback();
      }
    }
  }, [timer,callback,id]);

  const CountdownFilter = (millis) => {
    var secondCountdown = Math.floor(millis / 1000); // on converti les millis seconde du setinterval en seconde pour les ajouter a une date
    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: ((millis % 60000) / 1000).toString().slice(2,4).replace(".", ""),
    };
    var endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + secondCountdown);
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    // si il y a une différence possible entre la date d'aujourd'hui et la date envoyer uppda

    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60  année jours heures minutes
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60 jours heures minutes
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60 heures minutes
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      // minutes
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;
    if (timeLeft.millisec === "") {
      timeLeft.millisec = 0;
    }
    return (
      <ul className={className}>
        {years ? <StyledTheme as="li" ><span>{timeLeft.years }</span>{label ? <p>{LangContextx.Year}</p>: ""}</StyledTheme> : ""}
        {days ? <StyledTheme as="li" ><span>{timeLeft.days  }</span>{label ? <p>{LangContextx.Days}</p>: ""}</StyledTheme> : ""}
        {hours ? <StyledTheme as="li" ><span>{ timeLeft.hours }</span>{label ? <p>{LangContextx.Hours}</p>: ""}</StyledTheme> : ""}
        {minutes ? <StyledTheme as="li" ><span>{ timeLeft.min  }</span>{label ? <p>{LangContextx.Minutes}</p>: ""}</StyledTheme> : ""}
        {seconds ? <StyledTheme as="li" ><span>{timeLeft.sec }</span>{label ? <p>{LangContextx.Seconds}</p>: ""}</StyledTheme> : ""}
        {millisec ? <StyledTheme as="li" ><span>{timeLeft.millisec  }</span>{label ? <p>{LangContextx.Milli}</p>: ""}</StyledTheme> : ""}
      </ul>
    );
  };

  return <>{CountdownFilter(timer)}</>;
};








//
// const millisToMinutesAndSeconds = (millis) => {
//     var minutes = Math.floor(millis / 60000);
//     var seconds = Math.floor((millis % 60000) / 1000);
//     var mix = ((millis % 60000) / 1000).toString().slice(2).replace('.', '');
//     return `${minutes}:${seconds}:${mix}`;
//   };
export default CountDown;
