# RemoteYoutubePlay

Angular 7

## Why

Needed to change Youtube track from different device and from different wifi network without having to do any pairing. Not perfect as it can't set the complete full size TV screen. Tested only on LG WebOs model.

## You need

1. Firebase app (free)
2. Youtube Data API key (free)

## How to use

1. Create `keys.ts` file in `src` directory add your creds:
```
export const keys = {
    youtubeAPIKey: 'YOUR_YOUTUBE_DATA_API_KEY',
    firebaseAPIKey: 'YOUR_FIREBASE_APP_API_KEY', 
    authDomain: 'YOUR_FIREBASE_DOMAIN',
    databaseURL: 'YOUR_FIREBASE_DB_URL',
    projectId: 'FIREBASE_PROJECT_ID',    
}
```
2. Build and deploy app to Firebase hosting;
3. Enter domain in both - TV and your mobile.

