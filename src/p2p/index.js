export default class P2P {
  constructor() {
    this.peerConnection;
    this.dataChannel;
    this.localStream;
    this.remoteStream;
    this.onaddstream;
    this.configuration = {
      iceServers: [
        {
          urls: ['stun:stun4.l.google.com:19302']
        }
      ],
      iceCandidatePoolSize: 100
    };
  };

  addTracks = () => {
    
  };

  createPeerConnection = async () => {
    this.peerConnection = new RTCPeerConnection(this.configuration);
    this.remoteStream = new MediaStream();
    this.openDataChannel();

    this.peerConnection.addEventListener('connectionstatechange', () => {
      console.log('connection-state:', this.peerConnection.connectionState);
      if (this.peerConnection.connectionState === 'connected') {
        const peersConnected = new Event('peers-connected');
        document.dispatchEvent(peersConnected);
      };
    });

    try {
      this.localStream = await navigator.mediaDevices.getUserMedia(
        { 
          audio: true,
          video: true
        }
      );
      this.peerConnection.addStream(this.localStream);
      const localStreamAvailable = new Event('local-stream-available');
      document.dispatchEvent(localStreamAvailable);

      this.peerConnection.ontrack = (e) => {
        e.streams[0].getTracks().forEach((track) => {
          this.remoteStream.addTrack(track, this.remoteStream);
        });
        const remoteStreamAvailable = new Event('remote-stream-available');
        document.dispatchEvent(remoteStreamAvailable);
      };

      return true;

    } catch(err) {
      console.log(err);
      return false;
    };
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
        const state = this.peerConnection.iceGatheringState;
        console.log('ice-gathering-state:', state);
        if (state === "complete") {
          resolve();    
        };
      };

      this.peerConnection.oniceconnectionstatechange = () => {
        console.log('ice-connection-state:', this.peerConnection.iceConnectionState);
      };
    });
  };

  setup = async () => {
    const success = await this.createPeerConnection();
    if (!success) {
      throw new Error("Camera/Microphone permission denied.");
    }
  };

  createOffer = async () => {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    await this.getIceCandidates();
    return JSON.stringify(this.peerConnection.localDescription);
  };

  acceptOffer = async (offer) => {
    if (!this.peerConnection.currentRemoteDescription) {
      try {
        await this.peerConnection.setRemoteDescription(offer);
      } catch(err) {
        console.log(err);
        throw new Error(err);
      };
    };
  };

  createAnswer = async () => {
    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);
    await this.getIceCandidates();
    return JSON.stringify(this.peerConnection.localDescription);
  };

  acceptAnswer = async (answer) => {
    if (!this.peerConnection.currentRemoteDescription) {
      try {
        await this.peerConnection.setRemoteDescription(answer);
      } catch(err) {
        console.log(err);
        throw new Error(err);
      };
    };
  };
};