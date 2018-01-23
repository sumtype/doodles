#!/bin/bash
gulp build:production
rm -rf phonegap/www
mkdir phonegap/www
cd phonegap/www
echo "*" > .gitignore
cd ../..
cp -a build/. phonegap/www
if [ $# -eq 1 ]
  then
    rm -rf phonegap/platforms/android/build/outputs
    cd phonegap
    phonegap build android --release
    cd platforms/android/build/outputs/apk
    NUMBER_OF_FILES=$(echo $(ls -1 | wc -l))
    if [ $NUMBER_OF_FILES == "1" ]
      then
        apksigner sign --ks ../../../../../../keys/"$1" android-release-unsigned.apk
        mv android-release-unsigned.apk app_production.apk
        cp app_production.apk ../../../../../../deployments
      else
        if [ $NUMBER_OF_FILES == "2" ]
          then
            zipalign -v -p 4 android-debug-unaligned.apk android-release-unsigned.apk && apksigner sign --ks ../../../../../../keys/"$1" android-release-unsigned.apk
            mv android-release-unsigned.apk app_production.apk
            cp app_production.apk ../../../../../../deployments
        fi
    fi
  else
    rm -rf phonegap/platforms/android/build/outputs
    cd phonegap
    phonegap build android
    cd platforms/android/build/outputs/apk
    mv android-debug.apk app_debug.apk
    cp app_debug.apk ../../../../../../deployments
fi
cd ../../../../../../
