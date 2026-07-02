let localStream = null;

let peerConnection = null;

const configuration = {

iceServers:[

{

urls:"stun:stun.l.google.com:19302"

}

]

};

export const startLocalVideo = async(videoElement)=>{

try{

localStream = await navigator.mediaDevices.getUserMedia({

video:true,

audio:true

});

videoElement.srcObject = localStream;

}catch(error){

console.log(error);

}

};

export const createPeerConnection = ()=>{

peerConnection = new RTCPeerConnection(configuration);

localStream.getTracks().forEach(track=>{

peerConnection.addTrack(track,localStream);

});

return peerConnection;

};

export const getLocalStream = ()=>{

return localStream;

};

export const getPeerConnection = ()=>{

return peerConnection;

};