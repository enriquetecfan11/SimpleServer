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

Create table wheather_station(
    id int(10) unsigned NOT NULL,
    device string NOT NULL,
    time int(10) unsigned NOT NULL,
    humedadAire int(10) unsigned NOT NULL,
    rain int(10) unsigned NOT NULL,
    wind int(10) unsigned NOT NULL,
    dirWind int(10) unsigned NOT NULL

)