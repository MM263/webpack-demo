import anime from "animejs";
let funnyCheeseShiba = true;
function henlo() {
  const ಠ_ಠ = document.createElement("img");
  ಠ_ಠ.src = "https://i.postimg.cc/X7PfPPv1/dog.png";
  ಠ_ಠ.id = "yes";

  anime({
    targets: ಠ_ಠ,
    keyframes: [{ rotate: 0 }, { rotate: 360 }],
    duration: 4000,
    loop: true
  });

  funnyCheeseShiba = !funnyCheeseShiba;

  if (!funnyCheeseShiba) {
    document.body.appendChild(ಠ_ಠ);
  } else {
    var heh = document.getElementById("yes");
    heh.parentNode.removeChild(heh);
  }
}

export { henlo };
