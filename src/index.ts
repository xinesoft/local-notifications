import { registerPlugin } from '@capacitor/core';

import type { LocalNotificationsPlugin } from './definitions';

const LocalNotifications = registerPlugin<LocalNotificationsPlugin>(
  'LocalNotifications',
  {
    web: () => import('./web').then(m => new m.LocalNotificationsWeb()),
  },
);

export * from './definitions';
export { LocalNotifications };

export const DEFAULT_NOTIFICATION_CHANNEL_ID = 'notification';
export const DEFAULT_RINGTONE_CHANNEL_ID = 'ringtone';
