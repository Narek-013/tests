import React, { useEffect } from "react";

function NotificationPermission() {
  useEffect(() => {
    // Ստուգում ենք, թե արդյոք բրաուզերը աջակցում է ծանուցումների API-ին
    if ("Notification" in window) {
      // Ստանում ենք թույլտվությունը
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification("Այսպիսով Ձեր սարքի վրա `alert`-ը ցուցադրվում է", {
            body: "Դուք հիմա կարող եք ստանալ ծանուցումներ նույնիսկ երբ դուրս եք գալիս բրաուզերից։",
            icon: "https://your-icon-path-here.com/icon.png",
          });
        } else {
          alert("Դուք մերժել եք ծանուցումները։");
        }
      });
    } else {
      alert("Այս բրաուզերը չի աջակցում ծանուցումները։");
    }
  }, []); // `useEffect` միայն մեկ անգամ կաշխատի, երբ բաղադրիչը լիցքավորվի

  return (
    <div>
      <h1>Ծանուցումների թույլտվություն</h1>
      <p>Ստացե՛ք ծանուցումներ, երբ դուրս գաք բրաուզերից:</p>
    </div>
  );
}

export default NotificationPermission;
