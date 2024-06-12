# Lovense Wiki

# Hosts
* apps.lovense-api.com
* apps2.lovense-api.com
* apps3.lovense-api.com

# Login

## Request
```
POST https://apps2.lovense-api.com/api/wear/genGtoken

Headers -

body-x-type: 2
body-x-version: 1.0
gtoken: 
ver: 7.19.0
x: 
user-agent: Remote/7.19.0 (SM-G900V;Android10) DeviceID/4eff2744-8104-46f8-849c-d124f0c7ba0f
content-type: application/x-www-form-urlencoded; charset=utf-8
accept-encoding: gzip

Form Data -

password:   6c2ee70ca19b61649be49f3db43e3e88de83e6fe61279537355aa0a4e38286b2b1c6017bb6159bf64c56110fb2cfe9e1dcdd8dcfb7477a27b8100870180ab8929faad4ce435bc374d604fd5890ca808662294ee4331c805029026a84e18a01f16d29bbdb83c655f5ae0f097e1296aa5df04ba8c77f17c6bee13e93f961bf8a91
ver:        7.19.0
signature:  ezjSECvm/hnCZaDiKkQSqdE5GOWUOg9+ZaexvYAdD4Y4tCXs4G1B5VDRw1HWUtgYCAZk5ZdwhKyYnhhvhphWbg==
pf:         remote-android
tag:        login
sessionId:  80865aca-c4f5-4896-b4e3-e8c4cce036d2
deviceId:   4eff2744-8104-46f8-849c-d124f0c7ba0f
deviceName: SM-G900V
email:      hdhdhd
```

# Register

## Request

```
POST https://apps2.lovense-api.com/ajaxSignup

Headers -

body-x-type: 2
body-x-version: 1.0
gtoken: 
ver: 7.19.0
x: 
user-agent: Remote/7.19.0 (SM-G900V;Android10) DeviceID/4eff2744-8104-46f8-849c-d124f0c7ba0f
content-type: application/x-www-form-urlencoded; charset=utf-8
accept-encoding: gzip

Form Data -

password:       49b523bd9275ffb18d786b35ad0c2b0644d5492502a2a2a4db246fa9a147c3f9cfcafde735bb3c86ccca35a8dbe9004d728f16cf423c78991b58cae629e4f14cf6002a37c2c1deae4537f2345dda25c0f19eedc64a33be84f9fbd0cf5b3b5b81cb6a3f8d144aed108b627c393c221f5adfcdd150d4b987b480f73f0a6b96f464
ver:            7.19.0
agreePolicy:    ht
isNewApp:       1
gender:         
nickName:       amazingus3rname
timezone:       
language:       en
passwordRepeat: 49b523bd9275ffb18d786b35ad0c2b0644d5492502a2a2a4db246fa9a147c3f9cfcafde735bb3c86ccca35a8dbe9004d728f16cf423c78991b58cae629e4f14cf6002a37c2c1deae4537f2345dda25c0f19eedc64a33be84f9fbd0cf5b3b5b81cb6a3f8d144aed108b627c393c221f5adfcdd150d4b987b480f73f0a6b96f464
email:          amazingus3rname@gmail.com
```

## Disclaimer
This project is in no way affiliated with, authorized, maintained, sponsored or endorsed by [Lovense](https://www.lovense.com/) or any of its affiliates or subsidiaries. This is an independent project that utilizes [Lovense's](https://www.lovense.com/) private API. Use at your own risk.
