A react website, that demonstrates the capabilities of peer to peer communication through WebRTC. It is a serverless implementation, so manual exchange of Offer/Answer is involved. (Work in progress).

## How to use
1. Open the site in two seperate tabs.
3. Provide access to camera and microphone (This is required because, the created Answer will timeout in 10 seconds otherwise).
2. Click on Create Offer in one, and Accept Offer in the other.
3. Exchange Offer/Answer as prompted.
4. Click on Connect to Peer button, that will appear in one of the tabs.
5. Both the tabs are now connected.

Note, you connect two seperate devices as well. But make sure, both of them are on the same network, otherwise the created answer will time out in about 10 seconds. If both the devices are on the same network, you still have to make the Offer/Answer exchange quick.

## Features
1. Video/Audio exchange (Can be disabled).
2. Chatting.
3. File sharing (When a file transfer is going on, the Send Button will be disabled, until the transfer gets completed).

## Site Link
## https://anshuthopsee.github.io/p2p-webrtc/