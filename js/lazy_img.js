const d = document;
export default function lazyLoad() {
  if ("loading" in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  } else {
    // Use our own lazyLoading with Intersection Observers and all that jazz
  }
}
