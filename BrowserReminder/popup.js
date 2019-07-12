var alarm = chrome.alarms.create("myAlarm", { delayInMinutes: 0.05, periodInMinutes: 20 });

chrome.alarms.onAlarm.addListener( function (alarm) {
  
  // Clear any notification with the same name
  chrome.notifications.clear('take-a-break-notification')
  
  var notification = chrome.notifications.create(
    'take-a-break-notification', {
      type: 'basic',
      iconUrl: './images/icon1.png',

      // Customize message
      title: 'Take a break!',
      message: 'Look away from your computer screen and focus on a spot 20 feet away for 20 seconds.'
    },

    function () {}

  );
});