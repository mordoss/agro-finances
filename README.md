# Moja Njiva

## Installation

In `\node_modules\metro-config\src\defaults\blacklist.js`

```javascript
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/,
];
```

change to:

```javascript
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/, //this line
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/,
];
```

[link](https://github.com/expo/expo-cli/issues/1074)

### Eject

```
$ yarn run eject # choose "bare React Native project"

```

Go to `android` folder and create `loacl.properties` file with

```
sdk.dir=C\:\\Users\\userame\\AppData\\Local\\Android\\Sdk
```

```
$ cd android && gradlew clean
```

If `$ adb` not defined add `C:\Users\username\AppData\Local\Android\Sdk\platform-tools` to `Path`.

### Run on Nox

```
$ netstat -aon | findstr PID (NoxVMHandle.exe)
$ adb connect 127.0.0.1:62001
$ adb connect localhost:21503 #memu
$ adb shell input keyevent 82 # debug dialog
```

[link](https://stackoverflow.com/questions/51214825/adb-cant-connect-to-nox)
