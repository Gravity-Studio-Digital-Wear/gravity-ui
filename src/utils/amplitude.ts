import amplitude from 'amplitude-js';
import { getEnv } from './env'

export const initAmplitude = () => {
  const API_KEY = getEnv('REACT_AMPLITUDE_API_KEY', '4a58a25058aed5b2af7b14c092ff5de5')
  amplitude.getInstance().init(API_KEY, null, {
     saveEvents: true,
     includeUtm: true,
     includeReferrer: true
  });
  if (amplitude.getInstance().isNewSession()) {
    sendAmplitudeData('E_NEW_SESSION')
  }
};

export const setAmplitudeUserDevice = installationToken => {
  amplitude.getInstance().setDeviceId(installationToken);
};

export const setAmplitudeUserId = userId => {
  amplitude.getInstance().setUserId(userId);
};

export const setAmplitudeUserProperties = properties => {
  amplitude.getInstance().setUserProperties(properties);
};


export const sendAmplitudeData = (eventType: string, eventProperties?: any) => {
  amplitude.getInstance().logEvent(eventType, eventProperties);
};