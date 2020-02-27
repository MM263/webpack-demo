import "./yes";
import anime from "animejs";

function henlo() {
  var ಠ_ಠ = document.createElement("img");
  ಠ_ಠ.src = "https://i.postimg.cc/X7PfPPv1/dog.png";
  ಠ_ಠ.id = "yes";

  document.body.appendChild(ಠ_ಠ);

  anime({
    targets: ಠ_ಠ,
    keyframes: [{ rotate: 0 }, { rotate: 360 }],
    duration: 4000,
    easing: "easeOutElastic(1, .8)",
    loop: true
  });
}

export { henlo };

//   funnyCheeseShiba = !funnyCheeseShiba;

//   if (funnyCheeseShiba) {
//     document.body.appendChild(ಠ_ಠ);
//   } else {
//     var heh = document.getElementById("yes");
//     heh.parentNode.removeChild(heh);
//   }
