const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const moment = require("moment");

function tsFormat() {
  return moment().format("YYYY-MM-DD HH:mm:ss.SSS ZZ");
}

/**
 *
 * Logger는 로그를 출력하는 객체인데 transports라는 속성값을 설정하여 정보를 전달시킬 수 있다.
 *
 * - winston-daily-rotate-file을 통해 매일 새로운 파일에 로그를 기록하도록 설정
 * - 파일의 크기가 10MB가 넘거가면 자동으로 새로운 파일을 만들고 최대 5개까지 가능
 *
 *
 *
 * Logging Levels
 * 로깅 레벨은 어떤 정보까지 출력할 것인지 결정하면 다음과 같이 Level단계에서
 * 구분해주면 된다.
 *
 * emerg: 0,
 * alert: 1,
 * crit: 2,
 * error: 3,
 * warning: 4,
 * notice: 5,
 * info: 6,
 * debug: 7
 */
const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: "debug"
    }),
    new winstonDaily({
      level: "info",
      filename: `${__dirname}/Log/logs`,
      timestamp: tsFormat,
      datePattern: "_yyyy-MM-dd.log",
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5
    })
  ],
  exceptionHandlers: [
    new winstonDaily({
      level: "info",
      filename: "Log/exception",
      timestamp: tsFormat,
      datePattern: "_yyyy-MM-dd.log",
      showlevel: true,
      maxsize: 1000000,
      maxFiles: 5
    }),
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      showlevel: true,
      level: "debug"
    })
  ]
});

logger.info("인포 로깅");
logger.error("에러 로깅");
