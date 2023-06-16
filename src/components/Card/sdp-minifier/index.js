import {Buffer} from 'buffer'

export function reduce(offer) {
    var offerBytes = Buffer.from(offer, 'base64');

    // Remove the SDP header and footer.
    var offerStart = offerBytes.indexOf(new Buffer('v='));
    var offerEnd = offerBytes.lastIndexOf(new Buffer('\r\n'));
    var offerBytesReduced = offerBytes.slice(offerStart + 1, offerEnd);
  
    // Base64 encode the reduced offer.
    return offerBytesReduced.toString('base64');
};
  
export function expand(offer) {
    // Base64 decode the offer.
  var offerBytes = Buffer.from(offer, 'base64');

  // Add the SDP header and footer.
  var offerBytesReduced = Buffer.from('v=0\r\n' + offerBytes + '\r\n');

  // Base64 encode the reduced offer.
  return offerBytesReduced.toString('base64');
};