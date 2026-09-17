import { useEffect, useRef, useState } from "react";
import { galleryImages, type GalleryImage } from "../Data/GalleryImages";
import { Link } from "react-router-dom";

const chapters = [
  {
    number: "01",
    title: "The fire",
    description: "Oak, flame and the patient work that gives every plate its character.",
    imageIds: ["chef-at-the-fire", "open-fire-hearth"],
  },
  {
    number: "02",
    title: "The table",
    description: "From first pour to last spoonful, food made for passing around.",
    imageIds: [
      "oak-smoked-salmon",
      "chilli-butter-prawns",
      "basque-cheesecake",
      "charred-broccolini",
      "smoked-pineapple-highball",
      "chocolate-lava-cake",
      "table-setting",
    ],
  },
  {
    number: "03",
    title: "The room",
    description: "Low light, warm timber and a view of the hearth from every corner.",
    imageIds: [
      "ember-lit-dining-room",
      "smoked-oak-bar",
      "restaurant-exterior",
      "private-dining-alcove",
    ],
  },
] as const;

const imageById = new Map<string, GalleryImage>(
  galleryImages.map((image) => [image.id, image]),
);
const getImageById = (imageId: string) => {
  const image = imageById.get(imageId);
  if (!image) throw new Error(`Unknown gallery image: ${imageId}`);
  return image;
};
const storyImageIds = [
  "flame-grilled-ribeye",
  ...chapters.flatMap((chapter) => chapter.imageIds),
  "friends-at-dinner",
] as const;
const storyImages = storyImageIds.map(getImageById);
const heroImage = getImageById("flame-grilled-ribeye");
const gatheringImage = getImageById("friends-at-dinner");

const frameLayouts: Record<string, string> = {
  "chef-at-the-fire": "gallery-frame--portrait gallery-frame--five",
  "open-fire-hearth": "gallery-frame--wide gallery-frame--seven",
  "oak-smoked-salmon": "gallery-frame--panorama gallery-frame--eight",
  "chilli-butter-prawns": "gallery-frame--square gallery-frame--four",
  "basque-cheesecake": "gallery-frame--landscape gallery-frame--eight",
  "charred-broccolini": "gallery-frame--portrait gallery-frame--four",
  "smoked-pineapple-highball": "gallery-frame--portrait gallery-frame--four",
  "chocolate-lava-cake": "gallery-frame--portrait gallery-frame--four",
  "table-setting": "gallery-frame--portrait gallery-frame--four",
  "ember-lit-dining-room": "gallery-frame--landscape gallery-frame--eight",
  "smoked-oak-bar": "gallery-frame--portrait gallery-frame--four",
  "restaurant-exterior": "gallery-frame--panorama gallery-frame--eight",
  "private-dining-alcove": "gallery-frame--square gallery-frame--four",
};

interface GalleryFrameProps {
  image: GalleryImage;
  onOpen: (index: number) => void;
}

const GalleryFrame = ({ image, onOpen }: GalleryFrameProps) => {
  const index = storyImages.findIndex((candidate) => candidate.id === image.id);

  return (
    <figure className={`gallery-frame ${frameLayouts[image.id] ?? ""}`}>
      <button
        className="gallery-frame-button"
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`Open ${image.title} in full screen`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
        />
        <span className="gallery-frame-shade" aria-hidden="true" />
        <figcaption className="gallery-caption">
          <span className="gallery-caption-number">
            {String(index + 1).padStart(2, "0")} / {storyImages.length}
          </span>
          <span className="gallery-caption-title">{image.title}</span>
        </figcaption>
      </button>
    </figure>
  );
};

interface GalleryLightboxProps {
  activeIndex: number | null;
  onClose: () => void;
  onMove: (direction: -1 | 1) => void;
}

const GalleryLightbox = ({ activeIndex, onClose, onMove }: GalleryLightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onMove(-1);
      if (event.key === "ArrowRight") onMove(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onMove]);

  const activeImage = activeIndex === null ? null : storyImages[activeIndex] ?? null;
  const activePosition = activeIndex === null ? 0 : activeIndex + 1;

  return (
    <dialog
      ref={dialogRef}
      className="gallery-lightbox"
      aria-label="Gallery image viewer"
      onClose={onClose}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      {activeImage && (
        <div className="gallery-lightbox-inner">
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close image viewer"
          >
            <span aria-hidden="true">Close</span>
            <span className="gallery-lightbox-close-mark" aria-hidden="true" />
          </button>

          <div className="gallery-lightbox-stage">
            <button
              className="gallery-lightbox-arrow gallery-lightbox-arrow--previous"
              type="button"
              onClick={() => onMove(-1)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>

            <img
              key={activeImage.id}
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
            />

            <button
              className="gallery-lightbox-arrow gallery-lightbox-arrow--next"
              type="button"
              onClick={() => onMove(1)}
              aria-label="Next image"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </div>

          <div className="gallery-lightbox-meta" aria-live="polite">
            <span>{activeImage.title}</span>
            <span>
              {String(activePosition).padStart(2, "0")} / {storyImages.length}
            </span>
          </div>
        </div>
      )}
    </dialog>
  );
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const moveLightbox = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + direction + storyImages.length) % storyImages.length;
    });
  };

  return (
    <main className="gallery-page paper-surface min-h-dvh w-full font-body">
      <section className="gallery-hero" aria-labelledby="gallery-title">
        <div className="gallery-hero-copy">
          <div className="gallery-kicker">
            <span>Gallery</span>
            <span className="gallery-kicker-line" aria-hidden="true" />
            <span>Accra</span>
          </div>
          <h1 id="gallery-title">From the fire to the table</h1>
          <p>
            A glimpse inside Ember &amp; Oak: the food we serve, the rooms we
            gather in, and the moments shared around every table.
          </p>
        </div>

        <figure className="gallery-hero-image">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label={`Open ${heroImage.title} in full screen`}
          >
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              fetchPriority="high"
              decoding="async"
            />
            <span className="gallery-hero-image-shade" aria-hidden="true" />
            <figcaption>
              <span>01 / {storyImages.length}</span>
              <span>{heroImage.title}</span>
            </figcaption>
          </button>
        </figure>
      </section>

      <div className="gallery-story">
        {chapters.map((chapter) => (
          <section className="gallery-chapter" key={chapter.number}>
            <header className="gallery-chapter-header">
              <span className="gallery-chapter-number">{chapter.number}</span>
              <span className="gallery-chapter-rule" aria-hidden="true" />
              <div>
                <h2>{chapter.title}</h2>
                <p>{chapter.description}</p>
              </div>
            </header>

            <div className={`gallery-grid gallery-grid--chapter-${chapter.number}`}>
              {chapter.imageIds.map((imageId) => {
                const image = imageById.get(imageId);
                return image ? (
                  <GalleryFrame
                    image={image}
                    key={image.id}
                    onOpen={setActiveIndex}
                  />
                ) : null;
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="gallery-gathering" aria-labelledby="gathering-title">
        <div className="gallery-gathering-image">
          <GalleryFrame image={gatheringImage} onOpen={setActiveIndex} />
        </div>
        <div className="gallery-gathering-copy">
          <div className="gallery-kicker gallery-kicker--dark">
            <span>04</span>
            <span className="gallery-kicker-line" aria-hidden="true" />
            <span>Together</span>
          </div>
          <h2 id="gathering-title">The best seat is the one you share.</h2>
          <p>
            Settle in, pass a plate, and let the evening take its time around
            the fire.
          </p>
          <Link to="/reservations" viewTransition>Reserve a table</Link>
        </div>
      </section>

      <GalleryLightbox
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onMove={moveLightbox}
      />
    </main>
  );
};

export default Gallery;
