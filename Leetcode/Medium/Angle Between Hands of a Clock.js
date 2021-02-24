/*
    Runtime: 76 ms, faster than 76.34% of JavaScript online submissions for Angle Between Hands of a Clock.
    Memory Usage: 38.5 MB, less than 76.34% of JavaScript online submissions for Angle Between Hands of a Clock.
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const oneHourAngle = 30;
    const oneMinuteAngle = 6;
    const hourAngle = (hour * oneHourAngle) % 360 + minutes / 2;
    const minutesAngle = minutes * oneMinuteAngle;
    const difference = Math.abs(hourAngle - minutesAngle);
    
    return difference <= 180 ? difference : 360 - difference;
};