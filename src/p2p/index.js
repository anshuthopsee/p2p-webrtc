// let peerConnection;
// let dataChannel;
// let recieveChannel;
// let file;
// let userId;

// const servers = {
//   iceServers: [
//     {
//       urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
//     }
//   ]
// };

// const createAnswer = async (targetUserId, offer) => {
//   createPeerConnection(targetUserId);
//   await peerConnection.setRemoteDescription(offer);

//   let answer = await peerConnection.createAnswer();
//   console.log("created-answer");
//   await peerConnection.setLocalDescription(answer);
//   ws.send(JSON.stringify({
//     name: userId, 
//     target: targetUserId,
//     type: "answer",
//     sdp: answer
//   }));
// };

// const addAnswer = async (answer) => {
//   if (!peerConnection.currentRemoteDescription) {
//     await peerConnection.setRemoteDescription(answer);
//     console.log("accepted-answer");
//   };
// };

// const addIceCandidates = (candidate) => {
//   peerConnection.addIceCandidate(candidate);
//   console.log("counterpart's-ice-candidates-added");
// };

// const openDataChannel = () => { 
//   let options = { 
//     reliable: true 
//   }; 
    
//   dataChannel = peerConnection.createDataChannel(JSON.stringify({name: file.name, size: file.size}), options);
//   dataChannel.binaryType = "arraybuffer";

//   dataChannel.addEventListener("open", () => {
//     const status = document.querySelector(".status");
//     file.arrayBuffer().then(buffer => {
//       const chunkSize = 16 * 1024;
  
//       let sentSize = 0;

//       const send = () => {
//         if (!buffer.byteLength) {
//             dataChannel.send('done');
//             return;
//         };
          
//         console.log("chunks-transfered");
//         const chunk = buffer.slice(0, chunkSize);
//         buffer = buffer.slice(chunkSize, buffer.byteLength);
//         dataChannel.send(chunk);
//         sentSize+=chunk.byteLength;
//         status.textContent = `File transfer progress: ${Math.ceil(sentSize/(file.size/100))}%`;

//         if (dataChannel.bufferedAmount > dataChannel.bufferedAmountLowThreshold) {
//           dataChannel.onbufferedamountlow = () => {
//             dataChannel.onbufferedamountlow = null;
//             send();
//           };
//         };
//       };
//       send();
//     });
//   });
// };

const downloadFile = (blob, fileName) => {
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};

export default class P2P {
  constructor() {
    this.peerConnection;
    this.dataChannel;
    this.configuration = {
      iceServers: [
        {
          urls: ['stun:stun4.l.google.com:19302']
        }
      ],
      iceCandidatePoolSize: 100
    };
  };

  createPeerConnection = async () => {
    this.peerConnection = new RTCPeerConnection(this.configuration);
    this.openDataChannel();

    this.peerConnection.addEventListener('connectionstatechange', (e) => {
      console.log(this.peerConnection.connectionState)
      // if (this.peerConnection.connectionState === 'connected') {
      //     console.log('connected')
      // };
    });
    
    // this.peerConnection.addEventListener("datachannel", (e) => {
    //   let recieveChannel = e.channel;

    //   recieveChannel.addEventListener("error", (err) => { 
    //       console.log("Error:", err); 
    //   });
        
    //   recieveChannel.addEventListener('open', () => {
    //     this.dataChannel.send('hey there, this message is from the counterparty')
    //   });
    // });
  };

  openDataChannel = () => {
    let options = { 
      reliable: true 
   }; 
    
    this.dataChannel = this.peerConnection.createDataChannel('test', options);
    this.dataChannel.binaryType = "arraybuffer";
  };

  getIceCandidates = () => {
    return new Promise((resolve) => {
      this.peerConnection.onicegatheringstatechange  = () => {
        if (this.peerConnection.iceGatheringState === "complete") {
          console.log('yep donw')
          resolve();    
        };
      };
    });
  };

  createOffer = async () => {
    this.createPeerConnection();
    const offer = await this.peerConnection.createOffer();
    console.log("created-offer");
    await this.peerConnection.setLocalDescription(offer);
    await this.getIceCandidates();
    return JSON.stringify(this.peerConnection.localDescription);
  };

  acceptOffer = async (offer) => {
    this.createPeerConnection();
    offer = new RTCSessionDescription(offer)
    await this.peerConnection.setRemoteDescription(offer);
  };

  createAnswer = async () => {
    let answer = await this.peerConnection.createAnswer();
    console.log("created-answer");
    answer = new RTCSessionDescription(answer)
    await this.peerConnection.setLocalDescription(answer)
    await this.getIceCandidates();
    return JSON.stringify(this.peerConnection.localDescription);
  };

  acceptAnswer = async(answer) => {
    if (!this.peerConnection.currentRemoteDescription) {
      this.peerConnection.setRemoteDescription(answer);
      console.log('accepted')
    };
  };
};