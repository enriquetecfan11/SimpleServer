-- Create a new table for estacion de temperatura with this fields:
-- {	
--   "dispositivo" : "{device}",
--   "hora" : {time},
-- 	"temperatura": "{customData#temperature}",
-- 	"humedadAire": "{customData#humidity}",  
-- 	"rain": "{customData#Rain}",
-- 	"wind": "{customData#Wind}",
-- 	"dirWind": "{customData#DirWind}",
-- 	"bateria": "{customData#BatteryLevel}"
-- }

CREATE TABLE IF NOT EXISTS `wheather_station` (
  `id` int(10) unsigned NOT NULL,
  `device` varchar(45) NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `humedadAire` int(10) unsigned NOT NULL,
  `rain` int(10) unsigned NOT NULL,
  `wind` int(10) unsigned NOT NULL,
  `dirWind` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
)

-- list tables
\dt

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});