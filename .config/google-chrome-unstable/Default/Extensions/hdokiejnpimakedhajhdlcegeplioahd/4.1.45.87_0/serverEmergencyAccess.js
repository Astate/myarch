LPServer.emergencyAccess=function(){var e="legacy_helper.php",r=function(r){var a=new LPServer.ext.RSAKey;LPServer.ext.parsePublicKey(a,r.params.recipient.publickey);var s=a.encrypt(LPServer.ext.bin2hex(LPServer.ext.getLocalKey()));LPServer.jsonRequest({url:e,data:{action:"update_sharee",semail:r.params.recipient.username,enc_key:s,prio:1,hours:r.params.recipient.hours_to_override},userSupplied:r})},a=function(){var a=function(e,a){e.errors instanceof Array&&e.errors.length>0?a.callbacks&&a.callbacks.nosharingkeys?a.callbacks.nosharingkeys(e,a):a.error("nosharingkeys"):e.noemail instanceof Array&&e.noemail.length>0?(a.callbacks&&a.callbacks.invite&&a.callbacks.invite({emails:e.noemail}),a.error("")):e[a.params.recipient.username]?(a.params.recipient.publickey=e[a.params.recipient.username],r(a)):a.error()};return function(r){LPServer.jsonRequest({url:e,data:{action:"get_pubkey",emails:r.params.recipient.username},success:a,userSupplied:r})}}(),s=function(r){LPServer.jsonRequest({url:e,data:{action:"get_sharees",lemail:r.params.email},userSupplied:r})},n=function(r){LPServer.jsonRequest({url:e,data:{action:"get_sharers"},userSupplied:r})},c=function(r){LPServer.jsonRequest({url:e,data:{action:"accept_offer",email:r.params.sharer.username},userSupplied:r})},i=function(r){LPServer.jsonRequest({url:e,data:{action:"decline_offer",email:r.params.email},userSupplied:r})},t=function(r){LPServer.jsonRequest({url:e,data:{action:"revoke_offer",email:r.params.email},userSupplied:r})},u=function(){var r=function(e,r){r.callbacks&&r.callbacks.successGranted&&r.callbacks.successGranted(e,r)},a=function(e,r){r.callbacks&&r.callbacks.successLinked&&r.callbacks.successLinked(e,r)},s=function(r,s){var n=new LPServer.ext.RSAKey;LPServer.ext.parsePrivateKey(n);var c=n.decrypt(r.enc_key);LPServer.xmlRequest({url:e,data:{action:"link",name:s.params.sharer.username,legacy:1,sharekey:r.enc_key,sharename:LPServer.ext.encrypt(s.params.sharer.username,LPServer.ext.hex2bin(c))},callbacks:{ok:a},userSupplied:s})};return function(a){LPServer.jsonRequest({url:e,data:{action:"confirm",lemail:a.params.sharer.username},callbacks:{success:r,allowed:s},userSupplied:a})}}(),l=function(r){LPServer.jsonRequest({url:e,data:{action:"unlink",lemail:r.params.email},userSupplied:r})};return{updateRecipient:r,addRecipient:a,removeRecipient:t,getRecipientInfo:s,getSharerInfo:n,acceptOffer:c,declineOffer:i,requestAccess:u,denyAccess:function(r){LPServer.jsonRequest({url:e,data:{action:"deny_access",email:r.params.email},userSupplied:r})},unlinkAccount:l}}();