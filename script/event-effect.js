const imageContainer = document.querySelector(".img-container");
const socialContainer = document.querySelector(".social-container");
const hoverArea = document.querySelector(".img-info-container");

const transitionDuration = "0.5s";
const easingFunction = "cubic-bezier(0, 1.19, 1, .98)";
const hoverPaddingLeft = "200px";
const socialHoverBgColor = "rgb(64, 68, 105)";
const defaultBgColor = "var(--bg-color)";

// Apply the initial transition styles
imageContainer.style.transition = `${transitionDuration} all ${easingFunction}`;
socialContainer.style.transition = `${transitionDuration} all ${easingFunction}`;
imageContainer.style.padding = "-100px";
imageContainer.style.background = defaultBgColor;
socialContainer.style.background = defaultBgColor;

let isHovering = false;

function applyHoverEffect() {
    imageContainer.style.padding = "0px 0px 0px 25px";
    socialContainer.style.paddingLeft = hoverPaddingLeft;
    socialContainer.style.paddingRight = "30px";
    socialContainer.style.background = socialHoverBgColor;
    imageContainer.style.background = socialHoverBgColor;
}

function removeHoverEffect() {
    imageContainer.style.padding = "0";
    socialContainer.style.paddingLeft = "0";
    socialContainer.style.background = defaultBgColor;
    imageContainer.style.background = defaultBgColor;
}

window.addEventListener("load", () => {
    setTimeout(() => {
        hoverArea.addEventListener("mouseover", () => {
            applyHoverEffect();
            isHovering = true;
        });

        hoverArea.addEventListener("mouseout", () => {
            isHovering = false;
            setTimeout(() => {
                if (!isHovering) {
                    setTimeout(removeHoverEffect, 500);
                }
            }, 100);
        });
    }, 1000);
});
